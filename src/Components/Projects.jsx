// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const projects = [
  {
    title: "Connect",
    desc: "Web-based Video Calling Platform Achieved 50+ Users",
    techstack: "(Nextjs | Stream)",
    href: "https://connect-pearl.vercel.app/sign-in?redirect_url=https%3A%2F%2Fconnect-pearl.vercel.app%2F",
    img: "https://blog.logomyway.com/wp-content/uploads/2021/08/zoom-icon.png",
  },
  {
    title: "MealMe!",
    desc: "Food ordering platform with real-time payment integration using Stripe",
    techstack: "(MERN | Stripe)",
    href: "https://mealme-frontend.onrender.com/",
    img: "https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png",
  },
  {
    title: "E-Commerce Backend",
    desc: "E-Commerce backend with PostgreSQL as database and Sequelize ORM",
    techstack: "(Nodejs | PostgreSQL | Sequelize ORM)",
    href: "https://github.com/harsh4677/MealMe-backend",
    img: "https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo-thumbnail.png",
  },
  {
    title: "Calendar",
    desc: "Dynamic Event Calendar Application enables users to manage and organize events with advanced features like drag-and-drop rescheduling, color-coded categories, and export options in JSON or CSV format.",
    techstack: "(Reactjs| shadcn UI)",
    href: "https://calendar-two-lyart.vercel.app/",
    img: "https://i.pinimg.com/736x/48/ec/ca/48ecca114371f544e3402c9ec1c6c719.jpg",
  },
  {
    title: "Pneumonia Detection Model",
    desc: "The Pneumonia Detection Model uses CNNs to classify chest X-rays as pneumonia or healthy.",
    techstack: "(VGG16 ResNet| CNN)",
    href: "https://colab.research.google.com/drive/13r3HkxDFRWwpqvru6OSz9SgZHtGESi39",
    img: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/db67bd8f-6ba6-43d0-9386-b21494640fec/f1c4c17d-3cb5-487d-8044-b3c63efe4bab.png",
  },
  {
    title: "AutoCount: Real-Time Vehicle Analytics",
    desc: "AutoCount: AI-powered real-time vehicle detection & analytics using YOLOv11 for smarter cities. 🚗💡.",
    techstack: "(OpenCV | YOLO11)",
    href: "https://colab.research.google.com/drive/1H0xhvrzZ1t3NCyraOci7ch0hCD9B-Ba3?usp=sharing",
    img: "https://bi3.co.uk/wp-content/uploads/2023/05/Vehicle-Detection_-Vehicle-Counting-Counting.png",
  },
];

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </header>

      <div className="container px-5 py-2 flex-col lg:w-4/6 mx-auto ">
        <div className="card ">
          <div className="flex mx-4 flex-row items-center text-center pt-4 pb-4 justify-between border-b">
            <h1 className="font-bold text-gray-900 text-xl">Projects</h1>
            <a
              href="https://github.com/harsh4677/"
              target="blank"
              className="bg-black rounded-md px-4 py-1 font-bold text-white"
            >
              GitHub
            </a>
          </div>
          <div className="mx-auto w-full max-w-5xl ">
            <ul className="flex flex-col sm:grid-cols-2 gap-4 ">

              {projects.map((item) => (
                <li
                  key={item.title}
                  className="relative border border-gray-200 rounded-xl bg-white p-6 shadow-sm hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <img
                        src={item.img}
                        alt={`${item.title} logo`}
                        className="w-12 h-12 rounded-lg shadow-sm mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center">
        <div className="xl:max-w-[1280px] w-screen flex flex-cols ">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Projects;
