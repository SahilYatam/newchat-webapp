const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> CryptChat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have account
          </a>

          <div>
            <button className="btn btn-sm btn-block mt-2 bg-blue-500 border-none text-white hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
// backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> CryptChat</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             {"Don't"} have account
//           </a>

//           <div>
//             <button className="btn btn-sm btn-block mt-2 bg-blue-500 border-none
//              text-white hover:bg-blue-600">Login</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
