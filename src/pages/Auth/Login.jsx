import React, { useState } from 'react';
import Logo from '../../components/Logo';
import banner from '../../assets/login_pg.png';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggle, setToggle] = useState(true);

    const handleLogin = (data) => {
        console.log(data)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <div className='flex flex-col items-center mt-10 md:block md:mt-0'>
                        <Logo className='text-5xl'></Logo>
                        <h2>Welcome back!</h2>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span className='text-lg mt-5'>Find the job made for you</span>
                        <div className='max-w-sm w-full card shrink-0 shadow-2xl bg-transparent my-6 rounded-sm'>
                            <form className='card-body' onSubmit={handleSubmit(handleLogin)}>
                                <fieldset className='fieldset'>
                                    <label>Email</label>
                                    <input type="email" {...register("email", { required: true })} className='input border border-gray-400 bg-transparent' placeholder='Enter email' />
                                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                                    <label>Password</label>
                                    <div className='relative'>
                                        <input {...register("password", { required: true })} className='input border border-gray-400 bg-transparent' placeholder='Enter password' type={toggle ? "password" : "text"} />
                                        {
                                            toggle ?
                                                <FaEye onClick={handleToggle} className="absolute right-7 top-3 cursor-pointer" />
                                                :
                                                <FaEyeSlash onClick={handleToggle} className="absolute right-7 top-3 cursor-pointer" />
                                        }
                                        {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                        <div className='mt-1'><a className="link link-hover text-primary">Forgot password?</a></div>
                                    </div>

                                    <button className="btn hover:bg-[#0f4c75] text-white mt-4">Login</button>
                                </fieldset>
                                <p>New here? <Link className='text-primary underline' state={location.state} to={'/register'}>Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-100'>
                        <img className='w-full' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;