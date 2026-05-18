import React from 'react'
import { useForm } from 'react-hook-form'
import './Signup.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();

      const onsubmit = async (data) =>{
      try{
       const res =  await axios.post(
          "https://shopx-4rit.onrender.com/api/user/signup",
          {
            email: data.email,
            password: data.password
          }
        )
        alert(res.data.msg);
        navigate("/login")
        
      }catch(err){
        alert(err.response?.data?.msg)
        console.log(err)
      }
      }
  return (
    <>
    <div className="Signup-conatiner">
      <h2>SignUp</h2>
     <form onSubmit={handleSubmit(onsubmit)}>
         <input type='email' {...register("email" , {required: "Email is required"})} placeholder='Enter Email'/>
      {errors.email && <span>{errors.email.message}</span>}

      <input type='password' {...register("password" , {required: "Password is Required" , 
        minLength: { value:3 , message: "Minimum 3 Characters required" }})} placeholder='Password'/>
        {errors.password && <span>{errors.password.message}</span>}

     <input type='password' {...register("cpassword" , {required: "Password is Required"} )} placeholder='Confirm Password'/>
     {errors.cpassword && <span>{errors.cpassword.message}</span>}
     <button type='submit'>Signup</button>
     <p>You Have already Account Please <Link to='/login'>Login</Link></p>

     </form>
     </div>
    </>
  )
}

export default Signup
