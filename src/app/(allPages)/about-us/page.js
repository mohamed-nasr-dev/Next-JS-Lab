"use client"

import React from 'react'

import { signIn, signOut, useSession } from "next-auth/react";

// export const metadata = {
//   title:"About US  page ",
//   description: "Generated by create next app",
// };
export default function AboutUS() {

 const  login = async()=>{
  await signIn("google",{
    redirectTo:"/user"
  })
 }
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4 text-primary">About Us</h1>
          <p className="lead text-secondary">
            We are a company dedicated to providing the best services to our customers. Our team is composed of highly skilled professionals who are passionate about their work.
          </p>
          <hr className="my-4" />
          <p className="text-muted">
            Our mission is to deliver high-quality products that meet the needs of our clients. We believe in innovation, integrity, and excellence.
          </p>
         <form action={login}> 
          <button >Sign in with Google</button>
         </form>

        </div>
      </div>
    </div>
    </>
  )
}
