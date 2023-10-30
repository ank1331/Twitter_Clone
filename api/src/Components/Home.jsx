import React from 'react'
import Feed from "./Feed";
import Sidebar from "./Sidebar";

import Widget from "./Widget";


export default function Home() {
  return (
    <div className="flex min-h-screen  mx-auto">
      <main className="flex">
        <Sidebar />

        <Feed />

        <Widget />
      </main>
    </div>
  )
}
