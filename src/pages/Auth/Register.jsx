import React from 'react';
import { useForm } from 'react-hook-form';
import FormAuth from '../../components/FormAuth';
import { Link } from 'react-router';
import Logo from '../../components/Logo';
import banner from '../../assets/login_pg.png';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password");

    const handleRegister = (data) => {
        console.log(data);
    };

    const registerFields = [
        {
            name: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your name",
            validation: { required: "Name is required" }
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            validation: { required: "Email is required" }
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter password",
            validation: { required: "Password is required" }
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm password",
            validation: {
                required: "Confirm password is required",
                validate: value =>
                    value === password || "Passwords do not match"
            }
        }
    ];

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="flex min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                    <div className="flex flex-col justify-center items-center md:items-start  p-5 ">
                        <Logo className="text-5xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
                        <p className="opacity-90 my-8 text-center">Find the job made for you</p>

                        <div className='w-full max-w-md bg-white/10 p-5 rounded-xl shadow-lg'>
                            <FormAuth
                                register={register}
                                handleSubmit={handleSubmit}
                                errors={errors}
                                onSubmit={handleRegister}
                                fields={registerFields}
                                buttonText='Create Account'
                            ></FormAuth>
                            <p className="text-gray-300 text-sm text-center mt-2">
                                Already have an account?{" "}
                                <Link className="text-blue-500 hover:underline" state={location.state} to="/login">
                                    Login
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

export default Register;