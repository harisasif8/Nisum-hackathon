import { Alert } from 'bootstrap';
import { useState } from 'react';
import FormResult from './FormResult';
import { useNavigate } from 'react-router-dom';
import Name from './Name';
import Email from './Email';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        jobRole: '',
        dob: ''
    })
    const navigate = useNavigate()
    console.log('formdata', formData);
    const [page, setPage] = useState(0);

    const prevPage = () => {
        setPage(prevCount => prevCount - 1);
    }

    const nextPage = () => {
        setPage(prevCount => prevCount + 1);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitData = () => {
        navigate('/result')
    }

    switch (page) {
        case 0:
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Name nextPage={nextPage} handleInputData={handleChange} values={formData} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Email prevPage={prevPage} nextPage={nextPage} handleInputData={handleChange} values={formData} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input placeholder='jobRole' type="text" name="jobRole" value={formData.jobRole} id="" onChange={(event) => handleChange(event)} />
                                <button onClick={nextPage}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input placeholder='Date of Birth' type="text" name="dob" value={formData.dob} id="" onChange={(event) => handleChange(event)} />
                                <button onClick={nextPage}>Next</button>
                            </div>
                        </div>
                    </div>
                </div >
            );
        case 4:
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input placeholder='Password' type="text" name="dob" value={formData.dob} id="" onChange={(event) => handleChange(event)} />
                                <button onClick={prevPage}>Previous</button>
                                <button onClick={submitData} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        default:
            break;
    }

    return (
        <div>
            {/* <input type="text" name="name" value={formData.name} id="" onChange={(event) => handleChange(event)} /> */}
            {/* <input type="text" name="email" value={formData.email} id="" onChange={(event) => handleChange(event)} /> */}
        </div>
    );
}

export default Form;
