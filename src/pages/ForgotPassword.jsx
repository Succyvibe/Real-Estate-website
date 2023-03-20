import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Reset Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.istockphoto.com/id/1351204753/photo/open-the-door-and-door-handle-with-a-key-and-a-keychain-shaped-house-property-investment-and.jpg?b=1&s=170667a&w=0&k=20&c=Wo5Njl3Sh1tp9LtpYtueyAl5mCRv3DuI4VG8u6miWug="
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">Have an account already?</p>
              <Link
                to="/sign-in"
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-[4px]"
              >
                Sign in
              </Link>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-4"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send Reset password
            </button>
            <div className="my-4 flex items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300">
              <p className="uppercase text-center font-semibold mx-4">or</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
