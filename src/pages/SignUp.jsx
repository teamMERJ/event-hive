import { signupImg } from "../assets/images"

const SignUp = () => {
  return (
    <div>
      <div className="flex">

        <div className="flex flex-col items-center justify-center w-1/2 h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${signupImg})` }}>
          <div className=" text-white" >
            <h3 className="text-[40px] font-semibold">Welcome Back</h3>
            <p className="text-[16px] font-semibold">To keep connected with us provide us with your information </p>
            <button className="border bg-gray-400 px-4 py-">Signin</button>
          </div>
        </div>

        <div className="w-2/3 bg-gray-200">
          <div className="flex flex-col px-3 mb-2 items-center justify-center py-2 mt-8 text-[24px] text-black">
            <h4 className="font-semibold">Event <span className="text-[#7848FA]">Hive</span> </h4>
            <h3 className="text-center text-4xl">Sign Up to Event Hive</h3>
          </div>

          <div className="px-40">
            <form action="">

              <div className="mb-4">
                <label className="block text-base text-black" htmlFor="name">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base text-black" htmlFor="name">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base text-black" htmlFor="name">PASSWORD</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base text-black" htmlFor="name">CONFIRM PASSWORD</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
              <button className="border py-[15px] px-[40px] bg-gray-400 ">Sign up</button>
              </div>
              
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SignUp