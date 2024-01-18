"use client";
import Link from "next/link";
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div className="container p-12 flex justify-between">
    <Link href={"/"}>
         <span className="px-2 text-2xl md:text-5xl font-semibold italic hover:italic text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-cyan-500">
           G
         </span>
       </Link>
      <p className="text-slate-600">All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer