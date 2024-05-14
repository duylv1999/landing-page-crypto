import React from "react";

const Login = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link button */}
      <a href="#/" className="hover:text-blue transition dark:text-blue-600 dark:hover:text-blue-700">
        Login
      </a>
      {/* Seperator */}
      <span className="mx-6 text-slate-300 font-thin">|</span>
      {/* Register button */}
      <button className="py-2 bg-blue-600 hover:bg-blue-700 px-8 text-white rounded-full text-base ">
        Register
      </button>
    </div>
  );
};

export default Login;
