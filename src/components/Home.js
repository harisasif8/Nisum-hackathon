import React, { useContext, useState, useEffect } from 'react';
import { JobContext } from '../contexts/JobContext';
import { getItemFromLS } from '../helper/getLSitems';
import { axiosInstance } from '../utils/interceptor';
import { USER } from './Form';

const Home = () => {
    const userFromLs = getItemFromLS(USER) || '[]';
    const parsedUserFromLS = JSON.parse(userFromLs);
    const [{ ids }] = useContext(JobContext)
    const [jobData, setJobData] = useState({
        data: []
    });
    const [startCount, setStartCount] = useState(0)
    const [endCount, setEndCount] = useState(9)

    const loadMore = () => {
        setStartCount(prevCount => prevCount = endCount)
        setEndCount(prevCount => prevCount + 6)
    }

    useEffect(() => {
        const initialIds = ids.slice(startCount, endCount)
        const jobInfo = initialIds.map((id) => {
            const promise = new Promise((resolve, reject) => {
                axiosInstance({
                    url: `/item/${id}.json`,
                    method: 'GET',
                })
                    .then((res) => {
                        resolve(res?.data);
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
            return promise;
        })

        Promise.allSettled(jobInfo)
            .then((result) => {
                const fulFilledResponses = result.filter(({ status }) => status === 'fulfilled')
                setJobData({ data: [...jobData.data, ...fulFilledResponses] })
            })
            .catch((err) => {
                console.log('err', err);
            });
    }, [ids, endCount]);

    return (
        <div className="container ">
            <h1 className='text-center'>Home Page</h1>
            <div className="row ">
                {jobData.data.map((data) => {
                    const { id: jobId, title: jobTitle, time: advTime } = data.value;
                    const onlyTitle = jobTitle.split(')');
                    const postDate = new Date(advTime);
                    const newDate = {
                        day: postDate.getUTCDate(),
                        month: postDate.getMonth() + 1,
                        year: postDate.getFullYear()
                    }
                    const { day: postDay, month: postMonth, year: postYear } = newDate;
                    const [companyTitle, ...hiringDescription] = onlyTitle;
                    const { jobRole: role } = parsedUserFromLS;
                    const jobType = role.toLowerCase();
                    const isImportant = hiringDescription.find((desc) => desc.toLowerCase().includes(jobType));
                    return (
                        <div className="col-lg-4 my-2" key={jobId}>
                            <div className="card text-center height" >
                                <div className='star'>
                                    {isImportant ? <span className="glyphicon glyphicon-star"></span> : null}
                                </div>
                                <div className="card-body ">
                                    <h4 className="card-title">{`${companyTitle})`}</h4>
                                    <p className="card-text my-5">{hiringDescription}.</p>
                                    <p className="card-text">{`${postMonth}/${postDay}/${postYear}`}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
                <button type="button" className="btn btn-primary mx-auto my-5 " onClick={loadMore}>Load more</button>
            </div>
        </div>
    );
}

export default Home;
