import React from 'react'
import { useForm } from 'react-hook-form'
import './Signup.css'
import { data, Link , useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
     const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
        
          const navigate = useNavigate();

      const onsubmit = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:2000/api/user/login",
      {
        email: data.email,
        password: data.password,
      }
    );

    // ✅ IMPORTANT FIX
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("email", res.data.email);

    alert("Login Success");

    navigate("/");
    window.location.reload(); // optional

  } catch (error) {
    alert(error.response?.data?.msg);
    console.log("error");
  }
};
  return (
    <>
    <div className="Login-conatiner">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
        <input type='email' {...register("email" , {required: "Email is required"})} placeholder='Enter Email'/>
        {errors.email && <span>{errors.email.message}</span>}
        <input type='password' {...register("password" , {required: "Password is required" , minLength: {
            value: 3,
            message: "Enter Minimum 3 Charachter"
        } })}  placeholder='Enter Password' />
        {errors.password && <span>{errors.password.message}</span>}
        <button type='submit'>Login</button>
        <p>You don't Have A Account to Please <Link to='/signup' >Signup</Link></p>
        </form>
    </div>
      
    </>
  )
}

export default Login
