// import React from "react";
// import { useEffect } from "react";

// import "../App.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Harsh from "../assets/Harsh.jpeg";
// import { useLocation } from "react-router-dom";

// const Resume = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div className="md:container md:mx-auto flex flex-col min-h-screen">
//       <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center">
//         <div className="xl:max-w-[1280px] w-full">
//           <Navbar />
//         </div>
//       </header>
//       <div className="body mt-6 max-w-screen-lg md:flex mx-auto">
//         <div className="md:w-1/3 p-2">
//           <div className=" md:fixed">
//             <div className="md:block ">
//               <img className="h-20 w-20 mx-auto rounded-lg " src={Harsh} />
//               <div className="mb-12 text-center mt-4 justify-center items-left mx-4 text-Inconsolata">
//                 <h1 className="text-xl text-gray-700 font-bold text-Inconsolata">
//                   Harsh Salve
//                 </h1>
//                 <div className="md:text-sm text-gray-600">
//                   Software Engineer
//                 </div>
//                 <div className="text-gray-600 md:hidden mt-1">
//                   (harshsalve2782003@gmail.com)
//                 </div>
//               </div>
//             </div>
//             <div className="mx-4 my-4 hidden md:block">
//               <div className="my-5 text-sm text-gray-600 flex">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
//                     <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
//                   </svg>
//                 </div>
//                 harshsalve2782003@gmail.com
//               </div>
//               <div className="my-5 text-sm text-gray-600 flex">
//                 <div className="mr-2">
//                   <svg
//                     className="text-gray-600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
//                     <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
//                   </svg>
//                 </div>
//                  Mumbai, Maharashtra
//               </div>
//               <a
//                 href="https://www.linkedin.com/in/harsh-salve-b22991256/"
//                 className="my-5  text-sm text-gray-600 flex"
//               >
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
//                   </svg>
//                 </div>
//                 LinkedIn
//               </a>
//               <a
//                 href="https://drive.google.com/file/d/1Xp9yelSbPgDDgxZ5W0qEe-6kD70svtbe/view?usp=sharing"
//                 className="my-5  text-sm text-gray-600 flex"
//               >
//                 <div className="mr-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/3934/3934118.png"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                   >
//                   </img>
//                 </div>
//                 Resume Link
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-2/3 p-2 w-full sm:border-l-2">
//           <div className="mx-4 mb-6">
//             <h1 className="mb-4 text-2xl text-gray-700 font-bold">Summary</h1>
//             <p className="text-md">
//               I enjoy turning abstract ideas into tangible solutions through
//               coding. Forever on the hunt for the most streamlined solutions to
//               problems, while keeping the elegance of code a top priority.
//             </p>
//           </div>
//           <div className="mx-4">
//             <h1 className="mb-4 text-2xl text-gray-700 font-bold">Education</h1>
//             <ul>
//               <li className="mb-4">
//                 <h2 className="text-xl font-medium text-gray-700">
//                   Vidyalankar  Institute of Technology ( GPA: 8.63 )
//                 </h2>
//                 <div className="mt-1">
//                   <div>
//                     <i className="bx bx-buildings" style={{ color: "#666" }} />
//                     <small className="text-base text-gray-700">
//                       Bachelor of Technology (B.Tech) 
//                     </small>
//                   </div>
//                   <div>
//                     <i
//                       className="bx bx-calendar text-sm"
//                       style={{ color: "#666" }}
//                     />
//                     <small className="text-sm text-gray-600">
//                       Aug 2022 - July 2026
//                     </small>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="mx-4">
//             <h1 className="mb-4 text-2xl text-gray-700 font-bold">
//               Experience
//             </h1>
//             <ul>
//               <li className="mb-4">
//                 <h2 className="text-xl font-medium text-gray-700">
//                   Full Stack Developer Intern
//                 </h2>
//                 <div className="mt-1">
//                   <div>
//                     <i className="bx bx-buildings" style={{ color: "#666" }} />
//                     <small className="text-base text-gray-700">
//                       Renan Partners (Hyderabad)
//                     </small>
//                   </div>

//                   <div>
//                     <i
//                       className="bx bx-calendar text-sm"
//                       style={{ color: "#666" }}
//                     />
//                     <small className="text-sm text-gray-600">
//                       Jan 2025 - Present
//                     </small>
//                   </div>
//                   <div className="text-gray-500">
//                     <small>
//                       <ul className="list-disc">
//                         <li>Part of the Central Implementation Group</li>
//                         <li>
//                           Worked on iforms, custom hooks with helpdesk
//                           attachment and Troubleshoot module using Java and
//                           Restful Api Architecture
//                         </li>
//                         <li>
//                           Successfully deployed programs, actively evaluated
//                           user feedback with Javascipt custom Validation
//                         </li>
//                       </ul>
//                     </small>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="mx-4">
//             <h1 className="mb-4 text-2xl text-gray-700 font-bold">Skill</h1>
//             <ul>
//               <li className="mb-6 flex flex-wrap">
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   C
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   C++
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Javascript
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   ReactJS
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   ExpressJS
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   NodeJS
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   MongoDB
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Data Structures
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Web Development
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Database Design
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   MySql
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   PostgerSQL
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Django
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   HoppScoth
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Object Oriented Programming
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Code Principles
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Design Pattern
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Tailwind css/Bootstrap
//                 </span>
//                 <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
//                   Sass/Scss
//                 </span>
//               </li>
//             </ul>
//           </div>
//           <div className="mx-4">
//             <h1 className="mb-4 text-2xl text-gray-700 font-bold">
//               Co-Cirriculars:
//             </h1>
//             <ul className="list-disc text-md">
//               <li className="mb-2">
//                 <div className="mt-1">
//                   <div>
//                     <i className="bx bx-buildings" style={{ color: "#666" }} />
//                     <small className="text-base text-gray-700">
//                       3rd Ranked in World Robotics Championship Technoxian-2023
//                     </small>
//                   </div>
//                 </div>
//               </li>
//               <li className="mb-2">
//                 <div className="mt-1">
//                   <div>
//                     <i className="bx bx-buildings" style={{ color: "#666" }} />
//                     <small className="text-base text-gray-700">
//                       Winner of Techathon - 48 Hours of Hardware Hacakthon
//                     </small>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center">
//         <div className="xl:max-w-[1280px] w-screen flex flex-cols ">
//           <Footer />
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Resume;

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Harsh from "../assets/Harsh.jpeg";

const Resume = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col md:flex-row gap-6 py-8 px-4">
        {/* Sidebar */}
        <aside className="md:w-1/3 bg-white shadow-md rounded-lg p-6">
          <img
            src={Harsh}
            alt="Harsh Salve"
            className="w-40 h-40 mx-auto rounded-full shadow-md"
          />
          <div className="text-center mt-4">
            <h1 className="text-xl font-semibold text-gray-800">Harsh Salve</h1>
            <p className="text-base font-medium text-gray-600">Software Engineer</p>
            <p className="text-sm font-medium text-gray-500">harshsalve2782003@gmail.com</p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-base font-bold text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
              </svg>
              harshsalve2782003@gmail.com
            </div>
            <div className="flex items-center text-base font-bold text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
              </svg>
              Mumbai, Maharashtra
            </div>
            <a
              href="https://www.linkedin.com/in/harsh-salve-b22991256/"
              className="flex items-center text-base font-semibold text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </aside>

        {/* Main Section */}
        <section className="md:w-2/3 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Summary</h1>
          <p className="text-gray-700 mb-4">
            I enjoy turning abstract ideas into tangible solutions through
            coding. Forever on the hunt for the most streamlined solutions to
            problems, while keeping the elegance of code a top priority.
          </p>

          <div className="mb-6">
            <h1 className="text-2xl text-gray-700 font-bold">Education</h1>
            <ul className="mt-4 space-y-4">
              <li>
                <h2 className="text-xl font-medium text-gray-700">
                  Vidyalankar Institute of Technology (GPA: 8.63)
                </h2>
                <div className="mt-1 text-gray-600">
                  <p>Bachelor of Technology (B.Tech)</p>
                  <p>Aug 2022 - July 2026</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Add other sections (Skills, Experience, Co-Curriculars) here */}
         <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  C
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  C++
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Javascript
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                ExpressJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  NodeJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MongoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Data Structures
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Web Development
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Database Design
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MySql
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  PostgerSQL
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Django
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  HoppScoth
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Object Oriented Programming
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Code Principles
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Design Pattern
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Tailwind css/Bootstrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Sass/Scss/                 
                </span>
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
               Experience
            </h1>
             <ul>
               <li className="mb-4">
                 <h2 className="text-xl font-medium text-gray-700">
                   Full Stack Developer Intern
                 </h2>
                 <div className="mt-1">
                   <div>
                     <i className="bx bx-buildings" style={{ color: "#666" }} />
                     <small className="text-base font-medium text-gray-700">
                       Renan Partners (California, US)
                     </small>
                   </div>
                   <div>
                     <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-base font-medium text-gray-500">
                      Jan 2025 - Present
                    </small>
                  </div>
                  <div className="font-normal text-gray-700">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-gray-700">
                        <span className="font-medium">Developed a responsive Reports page</span> with dynamic data visualization (React/Django) to showcase project outcomes, <span className="font-medium">improving user engagement by 30%</span>.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Customized Django Admin Panel</span> with workflow-specific filters, bulk actions, and automated reporting, <span className="font-medium">reducing admin task time by 40%</span>.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Built a secure user invitation system</span> with role-based access control (RBAC) for multi-workspace collaboration, <span className="font-medium">streamlining onboarding by 50%</span>.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Enhanced UI/UX</span> with animations (Framer Motion/GSAP) and design refinements, <span className="font-medium">achieving 95% alignment with Figma prototypes</span>.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Built full-stack features</span> from scratch with end-to-end implementation.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Co-Curriculars:
            </h1>
            <ul className="list-disc text-md">
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      3rd Ranked in World Robotics Championship Technoxian-2023
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Winner of Techathon - 48 Hours of Hardware Hacakthon
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Resume;
