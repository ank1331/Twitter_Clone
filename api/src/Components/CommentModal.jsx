import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atom/modalatom'

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState)


  return (
    <div>
      <h1 onClick={()=>setOpen(!open)}>Model </h1>

      {open && <h1>Model Open</h1>}
    </div>
  )
}
