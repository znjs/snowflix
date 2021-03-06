import React from "react";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const navigate = useNavigate();
  return (
    <div className='w-full fx-col fx-jc-center fx-ai-center clr-gray-50'>
      <div className='bg-clr-gray-900 pd-1 brd-sm w-24'>
        <h2 className='ff-nunito pd-b-05 ta-center'>Welcome back to Snowflix</h2>
        <div className='pd-b-05 fx'>
          <label htmlFor='email' className='w-5'>
            Email
          </label>
          <input
            className='fx-grow pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 brd-sm'
            type='email'
            id='email'
            name='email'
            placeholder='john.doe@xyz.com'
          />
        </div>

        <button className='pd-b-05 w-full brd-sm bg-clr-gray-800 clr-gray-50 fw-600  mg-b-05'>
          Reset Password
        </button>
        <div className='fx fx-jc-center'>
          <span
            className='cr-pt'
            onClick={() => {
              navigate("/login");
            }}>
            <i className='fa-solid fa-angle-left f-075'></i>&nbsp; Back to Login
          </span>
        </div>
      </div>
    </div>
  );
}

export { Forgot };
