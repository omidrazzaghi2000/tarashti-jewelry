import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import Parse from 'parse/dist/parse.min.js';



function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUp } = UserAuth()
    const navigate = useNavigate()

    //back4app
    const [usernameb, setUsernameb] = useState('');
    const [passwordb, setPasswordb] = useState('');

    const doUserRegistration = async function () {
        // Note that these values come from state variables that we've declared before
        const usernameValue = usernameb;
        const passwordValue = passwordb;
        try {
            // Since the signUp method returns a Promise, we need to call it using await
            const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
            
            //AuthContext
            await signUp(createdUser)

            alert(
                `Success! User ${createdUser.getUsername()} was successfully created!`
            );
            return true;
        } catch (error) {
            // signUp can fail if any parameter is blank or failed an uniqueness check on the server
            alert(`Error! ${error}`);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setError("")
        // try {
        //     await signUp(email, password)
        //     navigate("/account")
        // } catch {
        //     setError(e.message)
        //     console.log(e.message)
        // }
        if(doUserRegistration()){
            navigate("/tarashti-jewelry")
        }
    }

    return (
        <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
            <h1 className='text-color font-semibold text-3xl flex justify-center'>Register account</h1>
            {error ? <p className='text-red-500 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="email">Email</label>
                    <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                        <input value={usernameb} onChange={(e) => setUsernameb(e.target.value)} className='w-full p-2 border rounded-2xl' required id='email' type="email" placeholder='Enter Email' />
                        <AiOutlineMail className='absolute right-4 top-3 text-gray-400' />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="password">Password</label>
                    <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                        <input value={passwordb} onChange={(e) => setPasswordb(e.target.value)} className='w-full p-2 border rounded-2xl' required id='password' type="password" placeholder='Enter Password' />
                        <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400' />
                    </div>
                </div>
                <button className='sign-btn' type="submit">Sign up</button>
            </form>
            <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
                Already have an account? <Link className='text-slate-800 font-semibold dark:text-blue-200' to="/signin">Login now!</Link>
            </p>
        </div>
    )
}

export default SignUp