import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpReducer, { INITIAL_STATE, SET_EMAIL } from '../reducers/SignUpReducer';
import { useNavigate } from 'react-router-dom';


const Email = () => {
    const [{ email, name }, dispatchSignUpUser] = useReducer(SignUpReducer, INITIAL_STATE);
    const navigate = useNavigate();


    useEffect(() => {
        console.log('email', email);
        console.log('name', name);


        return () => {

        };
    }, [email]);

    const handleInput = (e) => {
        dispatchSignUpUser({
            type: SET_EMAIL,
            payload: { [e.target.name]: e.target.value }
        })
    }

    const nextBtn = (e) => {
        e.preventDefault()
        navigate('/jobrole')

    }


    return (
        <div>
            <div className="row">
                <div className="col-lg-4 mx-auto ">
                    <h1 className="text-center mb-5">Sign Up</h1>
                    <form onSubmit={(event) => nextBtn(event)} method="POST" >
                        <div className="form-group">
                            <input type="email" className="form-control form-rounded my-email" name='email' value={email.email} onChange={(event) => handleInput(event)} id="loginUsername"
                                placeholder="Email" required />
                            <small id="checkLoginUsername" className="text-danger"></small>
                        </div>
                        <div className="my-3 d-flex justify-content-center">
                                <button type="submit" id="loginSubmitBtn" className="btn btn-danger btn-center ">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Email;
