import React, { useState } from 'react';
import Logo from '../../components/Logo';
import banner from '../../assets/login_pg.png';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggle, setToggle] = useState(true);
    const location = useLocation();

    const handleLogin = (data) => {
        console.log(data)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="flex min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                    <div className="flex flex-col justify-center items-center md:items-start  p-5 ">
                        <Logo className="text-5xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
                        <p className="opacity-90 my-8 text-center">Find the job made for you</p>

                        <div className="w-full max-w-md bg-white/10 p-5 rounded-xl shadow-lg">
                            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col space-y-4">
                                <div>
                                    <label className="mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        className="w-full px-4 py-2 rounded-lg opacity-50 border text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter email"
                                    />
                                    {errors.email && <p className="text-red-500 mt-1">Email is required</p>}
                                </div>

                                <div>
                                    <label className="mb-1 block">Password</label>
                                    <div className="relative">
                                        <input
                                            {...register("password", { required: true })}
                                            type={toggle ? "password" : "text"}
                                            className="w-full px-4 py-2 rounded-lg opacity-50 border text-white focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter password"
                                        />
                                        {toggle ? (
                                            <FaEye
                                                onClick={handleToggle}
                                                className="absolute right-4 top-2.5 cursor-pointer"
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                onClick={handleToggle}
                                                className="absolute right-4 top-2.5 cursor-pointer"
                                            />
                                        )}
                                    </div>
                                    {errors.password && <p className="text-red-500 mt-1">Password is required</p>}
                                    <a className="text-blue-500 hover:underline text-sm mt-1 block">Forgot password?</a>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
                                    Login
                                </button>

                            </form>
                            <p className="text-gray-300 text-sm text-center mt-2">
                                New here?{" "}
                                <Link className="text-blue-500 hover:underline" state={location.state} to="/register">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block h-screen overflow-hidden">
                        <img
                            src={banner}
                            alt="Banner"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;