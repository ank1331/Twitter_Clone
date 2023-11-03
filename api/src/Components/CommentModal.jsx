import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalNewState, modalState } from "../../atom/modalatom";
import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function CommentModal() {
  const notify = () => {toast("Account Created successfully!")};
  const [open, setOpen] = useRecoilState(modalState);
  const [ data, setData] = useState({
    name:"",
    username:"",
    email:"",
    password:""

  })

  const navigate = useNavigate()

const handleChange = (e)=>{
    setData({...data, [e.target.id]:e.target.value})
}
 
const submitPage =async (e)=>{
    e.preventDefault()
    
      const res = await fetch(`/api/signup`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        
      })
      const data_new = await res.json();
    console.log(data_new)
    if(data_new.message == "user Created successfully"){
      // toast("Account Created successfully!")
      setOpen(false)
      navigate("/")
    }
    

}


// console.log(data)

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
            <form onSubmit={submitPage}>


            
            <div>
                <input onChange = {handleChange} id ="name"  className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Name"  type="text"/>
                <input onChange = {handleChange} id = "username" className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Username"  type="text"/>
                <input onChange = {handleChange} id = "email" className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="Email"  type="text"/>
                <input onChange = {handleChange} id = "password" className= "ml-12 mt-6 rounded-sm w-[420px]" placeholder="password"  type="text"/>
            </div>
            <div className="mt-2">
                <span className=" hover:underline text-sm text-sky-500 ml-[360px]"> Use email instead</span>
            </div>
            <div className=" mt-4  ml-12">

            <button   className="rounded-full w-[420px] bg-black h-10 mb-8 text-white ">SUBMIT</button>
            </div>
            </form>

          </div>
          
        </Modal>
      )}
    </div>
  );
}
