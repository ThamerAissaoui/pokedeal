import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerProfessional } from "../api/auth"; // if you already created the API

const SignUpLayer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneType: 1,
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phoneType" ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Payload to be submitted:", formData);
      const res = await registerProfessional(formData);
      alert("✅ Account created!");
    } catch (err) {
      console.error("❌ Error response:", err.response);
  
      const message =
        err.response?.data?.message ||
        err.response?.data?.title ||
        JSON.stringify(err.response?.data) ||
        err.message;
  
      alert(`Something went wrong:\n${message}`);
    }
  };
  return (
    <section className='auth bg-base d-flex flex-wrap'>
      <div className='auth-left d-lg-block d-none'>
        <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/images/auth/auth-img.png' alt='' />
        </div>
      </div>
      <div className='auth-right py-32 px-24 d-flex flex-column justify-content-center'>
        <div className='max-w-464-px mx-auto w-100'>
          <div>
            <Link to='/' className='mb-40 max-w-290-px'>
              <img src='assets/images/logo.png' alt='' />
            </Link>
            <h4 className='mb-12'>Sign Up to your Account</h4>
            <p className='mb-32 text-secondary-light text-lg'>
              Welcome! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='f7:person' />
              </span>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='First Name'
                required
              />
            </div>

            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='f7:person' />
              </span>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Last Name'
                required
              />
            </div>

            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='mage:email' />
              </span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Email'
                required
              />
            </div>

            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='ph:phone' />
              </span>
              <input
                type='tel'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Phone Number'
                required
              />
            </div>

            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='material-symbols:call' />
              </span>
              <select
                name='phoneType'
                value={formData.phoneType}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
              >
                <option value={1}>Mobile</option>
                <option value={2}>Home</option>
                <option value={3}>Work</option>
              </select>
            </div>

            <div className='icon-field mb-20'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='solar:lock-password-outline' />
              </span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Password'
                required
              />
            </div>

            <div className='form-check style-check d-flex align-items-start mb-20'>
              <input
                className='form-check-input border border-neutral-300 mt-4'
                type='checkbox'
                required
              />
              <label className='form-check-label text-sm'>
                By creating an account, you agree to the{" "}
                <Link to='#' className='text-primary-600 fw-semibold'>
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to='#' className='text-primary-600 fw-semibold'>
                  Privacy Policy
                </Link>.
              </label>
            </div>

            <button
              type='submit'
              className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
            >
              Sign Up
            </button>
          </form>

          <div className='mt-32 text-center text-sm'>
            <p className='mb-0'>
              Already have an account?{" "}
              <Link to='/sign-in' className='text-primary-600 fw-semibold'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpLayer;
