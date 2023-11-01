import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import CommentModal from "./CommentModal";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalatom";
import CommentModalnew from "./CommentModalnew";
import { modalNewState } from "../../atom/modalatom";

export default function SignIn() {
  const [open, setOpen] = useRecoilState(modalState)
  const [opennew, setOpennew] = useRecoilState(modalNewState)

  return (
    <div>
      
<CommentModalnew/>
      <div className=" flex justify-between ">
        <img
          className="mt-40 ml-40 w-[25%] h-[60%] "
          src="https://freelogopng.com/images/all_img/1692007265x-twitter-logo-png.png"
        />
        <div className="w-1/2 pl-20  mt-20 ">
          <h1 className=" text-6xl pr-12  font-bold"> Happening now</h1>
          <h3 className=" text-2xl pr-12 mt-12 font-bold"> Join today.</h3>
          <div className="flex flex-col  mx-auto">
            <div className="  relative items-center ">
              <button className=" absoulute top-2 px-4 h-[40px] mt-4 w-[300px] text-center rounded-full border-none ring-2 ring-slate-200 hover:bg-slate-100">
                {" "}
                Signup with Google
              </button>
              <FcGoogle className=" absolute top-7 left-8 " />
            </div>

            <div className="  relative items-center ">
              <button className=" absoulute top-2 border-2 px-4 h-[40px] mt-4 w-[300px] text-center rounded-full border-none ring-2 ring-slate-200 hover:bg-slate-200 font-bold">
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
          <button onClick={()=>setOpen(!open)} className="border-2 px-4 h-[40px] mt-4 w-[300px] text-center rounded-full border-none bg-sky-500 font-bold text-sm text-white ring-slate-200 hover:brightness-95 transition duration-10 ease-in-out "> Create Account </button>
          <p className="mt-4 text-xs w-[300px]">
            By signing up, you agree to the <span className="text-sky-500 hover:underline"> Terms of Service</span> and <span className="text-sky-500 hover:underline">Privacy Policy</span>,
            including <span className="text-sky-500 hover:underline">Cookie Use.</span>
          </p>

          <h4 className=" font-bold text-lg mt-16">Already have an account?</h4>
          <button onClick={()=>setOpennew(!opennew)} className="border-2 mb-10 px-4 h-[40px] mt-4 w-[300px] text-center rounded-full text-sky-500 font-bold text-sm ring-1 ring-slate-200 hover:bg-sky-200">Sign In</button>
        </div>
      </div>
      <CommentModal/>
    </div>
  );
}
