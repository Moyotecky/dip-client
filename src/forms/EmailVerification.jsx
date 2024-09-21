import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = "https://dip-api-v1.onrender.com";

function EmailVerification({ email }) {
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      code: ['', '', '', ''] // Ensure default values for the code inputs
    }
  });
  const inputRefs = useRef([]); // Use useRef to store references to the inputs
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = handleSubmit(async (data) => {
    try {
      const codeArray = data.code || [];
      const code = codeArray.join('').trim(); // Join and trim the code array

      if (code.length !== 4) {
        setError('Please complete the 4-digit verification code.');
        return;
      }

      const response = await axios.post(`${API_BASE_URL}/api/v1/auth/verify-email`, {
        email,
        code
      });

      if (response.status === 200) {
        toast.success("Verification successful! Redirecting to signup...");
        setTimeout(() => {
          navigate('/signup'); // Redirect to /signup
        }, 2000);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Verification failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  });

  const handleResend = async () => {
    setIsResending(true);
    toast.info("Resending verification code...");
    try {
      await axios.post(`${API_BASE_URL}/api/v1/auth/resend-verification-code`, { email });
      toast.success("Verification code resent!");
    } catch (error) {
      toast.error("Failed to resend verification code.");
    } finally {
      setIsResending(false);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;

    // Only allow numeric input
    if (/^\d$/.test(value)) {
      setValue(`code[${index}]`, value);
      setError(''); // Clear error on valid input

      // Automatically move to the next input if not the last one
      if (index < 3 && value) {
        inputRefs.current[index + 1]?.focus(); // Move to the next input
      }
    } else if (value === "") {
      // If the value is empty, clear it
      setValue(`code[${index}]`, '');
    }
    // Handle deletion with backspace
    else if (e.nativeEvent.inputType === "deleteContentBackward") {
      setValue(`code[${index}]`, ''); // Clear the current input

      // Move to the previous input if not the first one
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center mb-4">
        <p className="text-lg font-medium">
          We sent a verification code to <span className="font-semibold">{email}</span>. Please enter it below to verify your email address.
        </p>
      </div>

      <form className="flex flex-col items-center gap-4 w-full max-w-lg">
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Controller
              key={index}
              name={`code[${index}]`}
              control={control}
              render={({ field }) => (
                <input
                  ref={el => inputRefs.current[index] = el} // Store each input reference
                  type="text"
                  maxLength={1}
                  className={`w-12 h-12 text-center border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none`}
                  {...field}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !field.value && index > 0) {
                      inputRefs.current[index - 1]?.focus(); // Go back to the previous input on backspace
                    }
                  }}
                />
              )}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={onSubmit} // Attach the onSubmit handler directly here
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Verify
          </button>
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
          >
            {isResending ? 'Resending...' : 'Resend Code'}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default EmailVerification;
