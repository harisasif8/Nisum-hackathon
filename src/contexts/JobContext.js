import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/interceptor";

export const JobContext = createContext();

export const JobProvider = props => {

    const [postId, setPostId] = useState({
        ids: [],
    })

    useEffect(() => {
        const getId = async () => {
            try {
                const response = await axiosInstance({
                    url: `jobstories.json`,
                    method: 'GET',
                });
                setPostId({ ids: response?.data || [] })
            } catch (err) {
                console.log(err);
                setPostId({ ...postId })
            }
        };
        getId();
    }, []);


    return (
        <JobContext.Provider value={[postId, setPostId]}>
            {props.children}
        </JobContext.Provider>
    )
}