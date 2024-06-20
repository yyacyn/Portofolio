"use client";
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, Premier } from 'react-icons/ai';
import { BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoSpringBoot, BiLogoPostgresql, BiLogoAdobe } from 'react-icons/bi';
import Image from "next/image";
import { useState } from "react";



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ballzer"></meta>
        <link rel="icon" href="/icon.jpg"></link>
      </Head>
      <main className="px-5 bg-gray-50 dark:bg-gray-900 dark:text-white font-poppins">
        <nav className="pb-4 pt-2 lg:py-4 lg:px-3 rounded-md mb-5 lg:mx-2 flex flex-col lg:flex-row justify-between sticky top-2 items-center bg-gray-50 dark:bg-gray-800 shadow-lg z-10">
          <h1 className="text-base lg:text-xl mx-auto lg:mx-0 py-2 dark:text-white">#developedbyyyacyn</h1>
          <ul className="flex items-center gap-2 lg:gap-5 text-xs lg:text-xl justify-around px-2">
            <li className="text-blue-800 hover:bg-blue-800 hover:text-white dark:text-white p-0 lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="#about">About Me</a></li>
            <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="#skills">Skills</a></li>
            <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="#projects">Projects</a></li>
            <li className="text-blue-800 hover:bg-blue-800 hover:text-white p-0 dark:text-white lg:px-2 lg:py-1 rounded-md transition-all active:bg-blue-600"><a href="#contact">Contact</a></li>
            <li className="lg:ml-10"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer lg:text-2xl transition-all hover:scale-105 active:scale-95 dark:text-white" /></li>
            <li><a className="hover:bg-blue-700 bg-blue-800  text-white p-2 px-2 rounded-md lg:text-xl" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <section className="mt-10">
          <div>
            <div className="text-center px-10 mt-10 mb-5" id='about'>
              <h2 className="text-2xl lg:text-5xl py-2 text-blue-800 dark:text-blue-400">Yashin Al Fauzy Sabara</h2>
              <h3 className="text-xl lg:text-2xl py-2">Developer and Designer</h3>
              <p className="text-md lg:text-base py-2 lg:mx-[300px] leading-8 text-gray-800 dark:text-gray-100">As a student at IPB majoring in Software Engineering Technology with an interest in multimedia, web development and game development, I have high dedication to continue learning and developing skills in the latest technology. I believe that creativity, perseverance and teamwork are the keys to achieving success in this industry. </p>
              <div className="flex justify-center text-4xl lg:text-5xl gap-16 py-3 text-gray-700 dark:text-gray-100">
              <AiFillInstagram onClick={() => window.open("https://www.instagram.com/yashinalfauzy/")} className="hover:cursor-pointer hover:scale-105 active:scale-95 transition-all"/>
                <AiFillGithub onClick={() => window.open("https://github.com/yyacyn")}  className="hover:cursor-pointer hover:scale-105 active:scale-95 transition-all" />
                <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/yashin-al-fauzy-sabara-29a42b293/")}  className="hover:cursor-pointer hover:scale-105 active:scale-95 transition-all"/>
              </div>
            </div>
            <div className="relative h-[200px] w-[200px] mx-auto mb-5 lg:mb-[150px]">
              <Image src="/icon.jpg" alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
            </div>
          </div>
        </section>
        <section className="my-2 mx-2 lg:w-[900px] lg:mx-auto">
          <div className="flex flex-col justify-center">
            <div className="">
              <h3 className="text-xl py-1 text-blue-400 font-bold lg:text-2xl" id='skills'>Skills I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-100">Since I pique my insterest in software technology department, I have learned some skills, whether i learned from school or from the internet, here are some of them.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex lg:flex-row flex-col lg:gap-5 justify-center">
                <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px] ">
                  <div className="my-2 mx-2 p-2">
                    <h3 className="my-1 font-bold">Front-end Development</h3>
                    <div className="flex text-5xl justify-center">
                      <BiLogoHtml5 />
                      <BiLogoReact />
                      <BiLogoTailwindCss />
                    </div>
                    <p className="mb-2 leading-8">I have experience in developing web applications using HTML, CSS, and JavaScript. I also have experience in using React.js and Tailwind CSS.</p>
                  </div>
                </div>
                <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                  <div className="my-2 mx-2 p-2">
                    <h3 className="my-1 font-bold">Back-end Development</h3>
                    <div className="flex text-5xl justify-center">
                      <BiLogoSpringBoot />
                      <BiLogoPostgresql />
                    </div>
                    <p className="mb-2 leading-8">I have experience in developing web applications using Spring Boot, MySQL and PostgreSQL.</p>
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5 justify-center">
                <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                  <div className="my-2 mx-2 p-2">
                    <h3 className="my-1 font-bold">Multimedia</h3>
                    <div className="flex text-5xl justify-center">
                      <BiLogoAdobe />
                    </div>
                    <p className="mb-2 leading-8">I have experience in using some of the multimedia programs by Adobe such as Photoshop, Illustrator, Premiere Pro, and After Effects.</p>
                  </div>
                </div>
                <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                  <div className="my-2 mx-2 p-2">
                    <h3 className="my-1 font-bold">Game Development</h3>
                    <div className="flex text-5xl justify-center gap-2">
                      {!darkMode && (
                        <>
                          <Image src="/renpy.png" alt="renpy" width={50} height={50} className="" />
                          <Image src="/godot.png" alt="godot" width={50} height={50} className="" />
                          <Image src="/scratch.png" alt="scratch" width={50} height={50} className="" />
                        </>
                      )}
                    </div>
                    {darkMode && (
                      <div className="flex text-5xl justify-center gap-2">
                        <Image src="/renpyinv.png" alt="renpy" width={50} height={50} className="" />
                        <Image src="/godotinv.png" alt="godot" width={50} height={50} className="" />
                        <Image src="/scratchinv.png" alt="scratch" width={50} height={50} className="" />
                      </div>
                    )}
                    <p className="mb-2 leading-8">I have experience in developing games using Ren'Py, Godot, and Scratch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-2 my-2 lg:w-[900px] lg:mx-auto">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl py-1 text-blue-400 font-bold lg:text-2xl" id='projects'>Projects I've done</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-50">Here are some of the projects that I have done, whether it's a group project or individual project.</p>
          </div>
          <div className="flex flex-col">
            <div className="flex lg:flex-row flex-col lg:gap-5 justify-center">
              <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                <div className="my-2 mx-2 p-2">
                  <Image src="/brcr.png" alt="Description of Image" width={300} height={150} className="mx-auto" />
                  <h3 className="my-1 font-bold">Breaking Corrupt</h3>
                  <p className="mb-2 leading-8">A visual novel game made using Ren'Py game engine. This game follows a story about a detective trying to uncover a druglord that has been dealing and corrupting a small town in Alberqueue, New Mexico.</p>
                  <a href="#" className="bg-green-800 p-1 rounded-md text-white px-2">See more</a>
                </div>
              </div>
              <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                <div className="my-2 mx-2 p-2">
                  <Image src="/mulmed.png" alt="Description of Image" width={300} height={150} className="mx-auto" />
                  <h3 className="my-1 font-bold">Wibuotack</h3>
                  <p className="mb-2 leading-8">Wibuotack is the name of the group where I done my projects. The projects consist of two products, those are PowerPoint and Motion Graphics. The projects were done within 7 weeks and presented in a formal way to our 'client'.</p>
                  <a href="#" className="bg-blue-600 p-1 rounded-md text-white px-2">See more</a>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-5 justify-center">
              <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                <div className="my-2 mx-2 p-2">
                  <Image src="/safetydojo.png" alt="Description of Image" width={300} height={150} className="mx-auto" />
                  <h3 className="my-1 font-bold">Safety Dojo Virtual Edtion</h3>
                  <p className="mb-2 leading-8">Safety Dojo Virtual Edition is the main project that I worked on during my highschool intern. Safety Dojo Virtual Edition is quiz program made in PowerPoint using Visual Basic macros with the purpose of training SOP (Standart of Procedures) to company's employees.</p>
                  <a href="#" className="bg-blue-500 p-1 rounded-md text-white px-2">See more</a>
                </div>
              </div>
              <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                <div className="my-2 mx-2 p-2">
                  <Image src="/epicj.png" alt="Description of Image" width={300} height={150} className="mx-auto" />
                  <h3 className="my-1 font-bold">Epic Jump</h3>
                  <p className="mb-2 leading-8">Epic Jump is a 'non-official' game project that I made using Godot game engine. This game purpose for me as a someone who is starting to get into game development is to help me build and expand my knowledge about game development.</p>
                  <a href="#" className="bg-green-400 p-1 rounded-md text-white px-2">See more</a>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-5 justify-center">
              <div className="shadow-lg rounded-md text-gray-900 dark:bg-gray-800 dark:text-white text-center flex flex-col justify-center mb-5 lg:w-[450px]">
                <div className="my-2 mx-2 p-2">
                  <Image src="/stellar.png" alt="Description of Image" width={300} height={150} className="mx-auto" />
                  <h3 className="my-1 font-bold">Point of Sale Toko Teratai 7</h3>
                  <p className="mb-2 leading-8">Point of Sale is a web application project that I made along with other 3 members in my team in our second semester Project-Based Learning. This web application was made using Spring Boot as the Java framework and MySQL as the DBMS.</p>
                  <a href="#" className="bg-yellow-400 p-1 rounded-md text-white px-2">See more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}