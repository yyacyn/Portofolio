"use client";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, Premier } from 'react-icons/ai';
import { BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoSpringBoot, BiLogoPostgresql, BiLogoAdobe } from 'react-icons/bi';
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
// import image1 from '/public/bg.jpg';
// import image2 from '/public/stellar/income.png';
// import image3 from '/public/stellar/product.png';
// import Projects from './projects';
// import Page from './page';
// const images = [
//     {
//         original: image1,
//         thumbnail: image1,
//     },
//     {
//         original: "https://picsum.photos/id/1015/1000/600/",
//         thumbnail: "https://picsum.photos/id/1015/250/150/",
//     },
//     {
//         original: "https://picsum.photos/id/1019/1000/600/",
//         thumbnail: "https://picsum.photos/id/1019/250/150/",
//     },
// ];

export default function Project() {

    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Ballzer"></meta>
                <link rel="icon" href="/icon.jpg"></link>
            </Head>
            <main className="px-5 bg-gray-50 dark:bg-gray-900 dark:text-white font-poppins">
                <nav className="pb-4 pt-2 lg:py-4 lg:px-3 rounded-md mb-5 lg:mx-2 flex flex-col lg:flex-row justify-between sticky top-2 items-center bg-gray-50 dark:bg-gray-800 shadow-lg z-10">
                    <h1 className="text-base lg:text-xl mx-auto lg:mx-0 py-2 dark:text-white">#developedbyyyacyn</h1>
                    <ul className="flex items-center gap-2 lg:gap-5 text-xs lg:text-xl justify-around px-2">
                        <li className="text-blue-800 hover:bg-blue-800 hover:text-white dark:text-white p-0 lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="/#about">About Me</a></li>
                        <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="/#skills">Skills</a></li>
                        <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="/#projects">Projects</a></li>
                        <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="/contact">Contact</a></li>
                        <li className="lg:ml-10"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer lg:text-2xl transition-all hover:scale-105 active:scale-95 dark:text-white" /></li>
                        <li><a className="hover:bg-blue-700 bg-blue-800  text-white p-2 px-2 rounded-md lg:text-xl" href="#">Resume</a>
                        </li>
                    </ul>
                </nav>
                <section className="mt-10 lg:w-[700px] mx-auto min-h-screen mb-5 bg-white dark:bg-gray-800 p-5 rounded-md shadow-lg">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <h2 className="text-blue-700 dark:text-blue-400 font-bold text-lg lg:text-3xl">Safety Dojo Virtual Edition</h2>
                            <span className='max-w-[400px] h-1 mt-1 bg-blue-700 dark:bg-blue-400 rounded-md'></span>
                            <p className='py-5 text-sm lg:text-base'>Safety Dojo Virtual Edition is the main project that I worked on during my highschool intern. Safety Dojo Virtual Edition is quiz program made in PowerPoint using Visual Basic macros with the purpose of training SOP (Standart of Procedures) to company's employees.</p>
                            <div className='flex flex-col lg:flex-row gap-5 mx-auto my-2'>
                                <Image src="/safetydojo/Picture1.png" width={300} height={300} className='shadow-lg'/>
                                <Image src="/safetydojo/Picture2.png" width={300} height={300} className='shadow-lg'/>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-5 mx-auto'>
                                <Image src="/safetydojo/Picture3.png" width={300} height={300} className='shadow-lg'/>
                                <Image src="/safetydojo/Picture4.png" width={300} height={300} className='shadow-lg'/>
                            </div>
                            <p className='py-5 text-sm lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni necessitatibus voluptate eaque quos minima impedit ipsam hic nulla accusantium quas, fugit maxime quia omnis provident autem dicta quasi nam sunt.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}