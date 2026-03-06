import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormAuth = ({ register, handleSubmit, errors, onSubmit, fields, loading, loadingText, buttonText = "Submit" }) => {

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
                            {field.type === 'select' ? (
                                <select
                                    {...register(field.name, field.validation)}
                                        defaultValue={field.defaultValue || ""}
                                        className="w-full px-4 py-2 rounded-lg border bg-base-100 opacity-80 "
                                >
                                    {field.options.map(option=>(
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            disabled={option.disabled}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )
                            :
                            (
                                <input type={
                                field.type === "password" ?
                                (showPassword[field.name] ? "text" : "password")
                                :
                                field.type
                                    }
                                    placeholder={field.placeholder}
                                    {...register(field.name, field.validation)}
                                    className="w-full px-4 py-2 rounded-lg border opacity-80 text-white"
                                />
                            )
                        }

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

                <button>
                    {
                        loading ? 
                        (
                            <span className="flex items-center justify-center gap-2">
                                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                {loadingText}
                            </span>
                        )
                        :
                        (
                            buttonText
                        )
                    }
                </button>

            </form>
        </div>
    );
};

export default FormAuth;