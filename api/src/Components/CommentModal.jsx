import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalatom";
import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {/* <h1 onClick={() => setOpen(!open)}>Model </h1> */}

      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="w-[45%] shadow-lg absolute top-24 bg-white rounded-lg left-[360px]"
        >
          <div className="container">
            <div className="flex mt-2 ml-4 space-x-6 items-center">
              <VscChromeClose
                onClick={() => setOpen(false)}
                className="hover: cursor-pointer hover:bg-slate-200 hover:ring-8 hover:ring-slate-200  rounded-full"
              />
              <h1 className="font-bold text-lg"> SignUp</h1>
            </div>

            <h1 className="font-bold ml-12 mt-6 tracking-normal text-2xl">
              Create your account
            </h1>
            <div>
                <input className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Name"  type="text"/>
                <input className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Username"  type="text"/>
                <input className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="password"  type="text"/>
            </div>
            <div className="mt-2">
                <span className=" hover:underline text-sm text-sky-500 ml-[360px]"> Use email instead</span>
            </div>
            <div className=" mt-4  ml-12">

            <button className="rounded-full w-[420px] bg-black h-10 mb-8 text-white ">SUBMIT</button>
            </div>

          </div>
        </Modal>
      )}
    </div>
  );
}
