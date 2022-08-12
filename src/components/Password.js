import React, { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpReducer, { INITIAL_STATE, SET_PASSWORD } from '../reducers/SignUpReducer';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [{ password, name, email }, dispatchSignUpUser] = useReducer(SignUpReducer, INITIAL_STATE);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log('name', name);
        // console.log('email', email);

        return () => {

        };
    }, [password]);

    const handleInput = (e) => {
        dispatchSignUpUser({
            type: SET_PASSWORD,
            payload: { [e.target.name]: e.target.value }
        })
    }

    // console.log('signingUpUser', signingUpUser);


    const nextBtn = (e) => {
        e.preventDefault()
        navigate('/dob')
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 mx-auto ">
                    <h1 className="text-center mb-5">Sign Up</h1>
                    <form onSubmit={(event) => nextBtn(event)} method="POST" >
                        <div className="form-group">
                            <input type="password" className="form-control form-rounded my-email" name='password' value={password.password} onChange={(event) => handleInput(event)}
                                placeholder="Name" required />
                            <small id="checkLoginUsername" className="text-danger"></small>
                        </div>
                        <div className="my-3 d-flex justify-content-center">
                            {/* <Link to={'/email'}> */}
                            <button type="submit" id="loginSubmitBtn" className="btn btn-danger btn-center ">Next</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Password;
