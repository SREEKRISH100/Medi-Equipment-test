import React from "react";
export default function Msg()
{
    const userid=sessionStorage.getItem("userid")
    const username=sessionStorage.getItem("username")
     return(
     <>
        <h3>welcome,{userid}</h3>
        <h3>hello,{username}</h3>
     </>
)}