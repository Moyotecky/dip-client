import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Footer from '../components/Footer';

function Forms() {
  const [currentUsers, setCurrentUsers] = useState('login');

  const handleClick = (userId, event) => {
    event.preventDefault();
    setCurrentUsers(userId);
  };

  return (
    <>
      <section className="flex justify-center items-center px-4">
        <form className="m-auto justify-center mb-12 mt-10 h-full pb-5 rounded-lg shadow-md items-center border border-gray-400 w-full max-w-lg">
          <div className="flex justify-center items-center rounded-lg mt-4 bg-gray-200 w-[350px] md:w-[460px] h-16 mx-auto">
            <button
              onClick={(e) => handleClick('login', e)}
              className={`w-1/2 rounded-lg h-11 text-gray-800 font-medium ${
                currentUsers === 'login' ? 'bg-white text-black shadow-md' : ''
              }`}
            >
              Login
            </button>
            <button
              onClick={(e) => handleClick('sign', e)}
              className={`w-1/2 rounded-lg font-medium text-gray-800 h-11 ${
                currentUsers === 'sign' ? 'bg-white text-black shadow-md' : ''
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="p-4">
            {currentUsers === 'sign' && <SignUp />}
            {currentUsers === 'login' && <Login />}
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Forms;
