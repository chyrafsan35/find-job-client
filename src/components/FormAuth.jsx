import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormAuth = ({ register, handleSubmit, errors, onSubmit, fields, buttonText = "Submit" }) => {

    const [showPassword, setShowPassword] = useState({});

    const togglePassword = (name) => {
        setShowPassword(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
        console.log(showPassword)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                {fields.map(field=>(
                    <div key={field.name}>
                        <label className="mb-1 block">{field.label}</label>
                        <div className='relative'>
                            <input type={
                                field.type === "password" ?
                                (showPassword[field.name] ? "text" : "password")
                                :
                                field.type
                            }
                            placeholder={field.placeholder}
                            {...register(field.name, field.validation)}
                            className="w-full px-4 py-2 rounded-lg border opacity-50 text-white"
                            />

                            {field.type === "password" && (
                                showPassword[field.name] ? (
                                    <FaEyeSlash
                                    onClick={() => togglePassword(field.name)}
                                    className="absolute right-4 top-3 cursor-pointer"
                                    />
                                ) : (
                                    <FaEye
                                    onClick={() => togglePassword(field.name)}
                                    className="absolute right-4 top-3 cursor-pointer"
                                    />
                                )
                            )}
                        </div>

                        {errors[field.name] && (
                            <p className="text-red-500 mt-1">
                            {errors[field.name].message}
                            </p>
                        )}
                    </div>
                ))}

                <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
                    {buttonText}
                </button>

            </form>

            {/* <div>
                <label >Email</label>
                <input
                    type={`${type}`}
                    {...register("email", { required: true })}
                    className="w-full px-4 py-2 rounded-lg  focus:ring-2 focus:ring-blue-500"
                    placeholder={`${placeholder}`}
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
            </div> */}
        </div>
    );
};

export default FormAuth;