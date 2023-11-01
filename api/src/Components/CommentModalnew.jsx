import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalNewState } from "../../atom/modalatom";
import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";

export default function CommentModalnew() {
  const [opennew, setOpennew] = useRecoilState(modalNewState);
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const submitPage = (e) => {
    e.preventDefault();
    console.log(data);
    setOpennew(false)
  };

  return (
    <div>
      {/* <h1 onClick={() => setOpen(!open)}>Model </h1> */}

      {opennew && (
        <Modal
          isOpen={opennew}
          onRequestClose={() => setOpennew(false)}
          className="w-[45%] shadow-lg absolute top-24 bg-white rounded-lg left-[360px]"
        >
          <div className="container">
            <div className="flex mt-2 ml-4 space-x-6 items-center">
              <VscChromeClose
                onClick={() => setOpennew(false)}
                className="hover: cursor-pointer hover:bg-slate-200 hover:ring-8 hover:ring-slate-200  rounded-full"
              />
              <h1 className="font-bold text-lg"> SignIn</h1>
            </div>

            <h1 className="font-bold ml-12 mt-6 tracking-normal text-2xl">
              Login to your account
            </h1>
            <form onSubmit={submitPage}>
              <div>
                {/* <input className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Name"  type="text"/> */}
                <input
                  onChange={handleChange}
                  id="email"
                  className="ml-12 mt-6 rounded-sm w-[420px]"
                  placeholder="Email"
                  type="text"
                />
                <input
                  onChange={handleChange}
                  id="password"
                  className="ml-12 mt-6 rounded-sm w-[420px]"
                  placeholder="password"
                  type="text"
                />
              </div>

              <div className=" mt-4  ml-12">
                <button   className="rounded-full w-[420px] bg-black h-10 mb-8 text-white ">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
