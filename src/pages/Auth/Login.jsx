import React, { useState } from 'react';
import Logo from '../../components/Logo';
import banner from '../../assets/login_pg.png';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import FormAuth from '../../components/FormAuth';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);
    const [ authError, setAuthError ] = useState("");
    const { signInUser } = useAuth();

    const handleLogin = async (data) => {
        setLoading(true);
        setAuthError("");
        await signInUser(data.email, data.password)
            .then(result => {
                console.log('User logged in', result)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
                if(error.code === 'auth/invalid-credential'){
                    setAuthError("Invalid email or password")
                }else{
                    setAuthError("Something went wrong. Try again.");
                }
            })
            .finally(()=>{
                setLoading(false)
            })
    }

    const loginFields = [
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter email",
            validation: {
                required: "Email is required"
            }
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter password",
            validation: {
                required: "Password is required"
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

                        <div className="w-full max-w-md bg-white/10 p-5 rounded-xl shadow-lg">
                            <FormAuth
                                register={register}
                                handleSubmit={handleSubmit}
                                errors={errors}
                                onSubmit={handleLogin}
                                fields={loginFields}
                                loading={loading}
                                loadingText={'Logging in...'}
                                buttonText='Login'
                            ></FormAuth>
                            {authError && (
                                <p className="text-red-500 text-sm mt-3 text-center">
                                    {authError}
                                </p>
                            )}
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