import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const USER = 'user';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        jobRole: '',
        dob: ''
    })

    const [page, setPage] = useState(0);
    const navigate = useNavigate();

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
        setPage(prevCount => prevCount + 1);
        const userJson = JSON.stringify(formData)
        localStorage.setItem(USER, userJson)
    }

    const goToWebsite = () => {
        navigate('/home')
    }



    switch (page) {
        case 0:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto ">
                                <h2 className='text-center'>Sign Up</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Full name</label>
                                        <input type="text" className="form-control" onChange={(event) => handleChange(event)} name='name' value={formData.name} placeholder="Enter Your Name" required />
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" data-testid='nextPage' onClick={nextPage} className="btn btn-danger mx-3 ">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto my-auto ">
                                <h2 className='text-center'>Sign Up</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" onChange={(event) => handleChange(event)} name='email' value={formData.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" onClick={prevPage} className="btn btn-danger mx-3">Previous</button>
                                        <button type="button" onClick={nextPage} className="btn btn-danger mx-3">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto my-auto ">
                                <h2 className='text-center'>Sign Up</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Job Role</label>
                                        <div className="form-group ">
                                            <select className="form-control form-control-lg" onChange={(event) => handleChange(event)} name='jobRole' value={formData.jobRole} id="exampleFormControlSelect1">
                                                <option>Front End</option>
                                                <option>Back End</option>
                                                <option>Software Engineer</option>
                                                <option>Testing Engineers</option>
                                                <option>Full-Stack Engineer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" onClick={prevPage} className="btn btn-danger mx-3">Previous</button>
                                        <button type="button" onClick={nextPage} className="btn btn-danger mx-3">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto my-auto ">
                                <h2 className='text-center'>Sign Up</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" onChange={(event) => handleChange(event)} name='dob' value={formData.dob} placeholder="Date of Birth" required />
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" onClick={prevPage} className="btn btn-danger mx-3">Previous</button>
                                        <button type="button" onClick={nextPage} className="btn btn-danger mx-3">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 4:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto my-auto ">
                                <h2 className='text-center'>Sign Up</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" onChange={(event) => handleChange(event)} name='password' value={formData.password} placeholder="Enter your password" required />
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" onClick={prevPage} className="btn btn-danger mx-3">Previous</button>
                                        <button type="button" onClick={submitData} className="btn btn-danger mx-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 5:
            return (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5 border p-5 mx-auto my-auto ">
                                <h6>{`Name : ${formData.name}`}</h6>
                                <h6>{`Email : ${formData.email}`}</h6>
                                <h6>{`Job Role : ${formData.jobRole}`}</h6>
                                <h6>{`Date of Birth : ${formData.dob}`}</h6>
                                <h6>{`Password : ${formData.password}`}</h6>
                                <button type="button" onClick={goToWebsite} className="btn btn-danger ml-5 mt-5">Continue To Website</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            break;
    }
}

export default Form;
