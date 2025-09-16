'use client';

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import Button from "../ui/Button";
import { Download, Mail } from "lucide-react";
import Experience from "./Experience"; // Import Experience component

export default function About() {
  const stats = [
    { label: "Years Experience", value: "0.6" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "10+" },
    { label: "Happy Clients", value: "100%" },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-20"
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
              <Image
                src={"/photo.jpg"}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Passionate Software Developer
          </h3>

          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I’m a dedicated full-stack developer with hands-on experience in
              Node.js, Express, TypeScript, MongoDB, Redis, PostgreSQL, Next.js,
              and React.js. I enjoy building innovative and user-friendly web
              applications, combining scalable backend systems with modern,
              responsive frontends.
            </p>
            <p>
              My journey in development began with curiosity and has grown into
              strong expertise in both frontend and backend. I focus on writing
              clean, maintainable code and creating seamless digital
              experiences.
            </p>
            <p>
              When I’m not coding, I explore new technologies, work on side
              projects, and share knowledge with the developer community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="https://drive.google.com/uc?export=download&id=1ZUeIzvTr7B04gTP7Dr6YiB1HzbdMWTSH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group">
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>

              <a href="mailto:gagansharma9560@gmail.com">
                <Button variant="secondary" className="group">
                  <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add Experience Component Here */}
      <Experience />
    </SectionWrapper>
  );
}
