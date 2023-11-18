"use client";

import Image from 'next/image';
import React from 'react';
import profilePic from "/public/2832.jpg";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        <Image
                            src= {profilePic}
                            alt="Colin Portrait"
                            width="190"
                            height="190"
                            quality="95"
                            priority={true}
                            className="h-25 w-25 rounded-full object-cover border-[0.5rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span className="absolute bottom-0 right-0 text-6xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.4, duration: 0.7 }}
                    >👋
                    </motion.span>
                </div>
            </div>

            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring" }}
            >
                <span className="font-bold">Hello, I'm Colin Quade.</span> I'm a {" "}
                <span className="font-bold">Computer Science major</span> at{" "}
                <span className="font-bold">Clemson University</span> with experience in{" "}
                <span className="font-bold">software development</span> and now I am looking into getting involved with{" "}
                <span className="font-bold">web development.</span>
            </motion.p>   
        </section>
    )
}