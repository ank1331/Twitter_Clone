import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function SignIn() {
  return (
    <div>
      this is sign in page
      <div className=" flex justify-center ">
        <img
          className="mt-40 w-[30%] "
          src="https://freelogopng.com/images/all_img/1692007265x-twitter-logo-png.png"
        />
        <div className="w-1/2 pl-20 mt-20 ">
          <h1 className=" text-6xl pr-12  font-bold"> Happening now</h1>
          <h3 className=" text-2xl pr-12 mt-12 font-bold"> Join today.</h3>
          <div className="flex flex-col  mx-auto">
            <div className="  relative items-center ">
              <button className=" absoulute top-2 border-2 px-4 h-[40px] mt-4 w-[250px] text-center rounded-full border-none ring-2 ring-slate-200">
                {" "}
                Signup with Google
              </button>
              <FcGoogle className=" absolute top-7 left-8 " />
            </div>

            <div className="  relative items-center ">
              <button className=" absoulute top-2 border-2 px-4 h-[40px] mt-4 w-[250px] text-center rounded-full border-none ring-2 ring-slate-200">
                {" "}
                Signup with Apple
              </button>
              <AiFillApple className=" absolute top-7 left-8 " />
            </div>
          </div>

          <div class="flex w-60 mt-4 items-center">
            <div class="border-t border-gray-300 flex-1"></div>
            <div class="px-4">or</div>
            <div class="border-t border-gray-300 flex-1"></div>
          </div>
          <button> Create Account </button>
          <p>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>

          <h4>Already have an account?</h4>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
