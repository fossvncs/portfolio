"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function HeaderSection (){

    const words = [
        {
          text: "hi,",
        },
        {
          text: "i'm",
        },
        {
          text: "Vinicius",
        },
        {
          text: "Foss, ",
        },
        {
          text: "a",
        },
        {
            text: "fullstack",
        },
        {
            text: "developer",
        },
        {
            text: "based",
        },
        {
            text: "in",
        },
        {
          text: "Curitiba.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];


    return (
        <div className="flex justify-center mt-4">
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className="p-4 max-w-4xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                <TypewriterEffect words={words}></TypewriterEffect>
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                i'm passionate about technology, with experience in creating efficient and scalable web applications.
                </p>
            </div>
            <div>   
            </div>
            </div>
        </div>

    )
}
