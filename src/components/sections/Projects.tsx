"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "1",
    title: "Medimeet",
    description:
      "A full-stack doctor appointment platform with Next.js, Shadcn UI, scheduling, secure authentication, and Stripe integration.",
    image: "/images/Medimeet.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind",
      "Vonage",
    ],
    liveUrl: "https://medimeet-black.vercel.app/",
    githubUrl: "https://github.com/Gagan956/Medimeet",
  },
  {
    id: "2",
    title: "Ecommerce SnapShop shopping site",
    description:
      "Snapshap is a full-stack e-commerce platform that lets users browse products, add them to a cart, and place secure orders with integrated payments.",
    image: "/images/Snapshop.png",
    technologies: [
      "Reactjs",
      "NodeJs",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "Nodemailer",
    ],
    liveUrl: "https://snap-shop-47s1.vercel.app/",
    githubUrl: "https://github.com/Gagan956/SnapShop.git",
  },
  {
    id: "3",
    title: "Hireme",
    description:
      "A frontend job portal built with Next.js and TypeScript, featuring listings, applications, and a responsive UI.",
    image: "/images/Hireme.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://hireme-lemon.vercel.app",
    githubUrl: "https://github.com/Gagan956/Hireme.git",
  },
  {
    id: "4",
    title: "Foodhub",
    description:
      "A food ordering platform with secure login, cart, menu browsing, and real-time order updates.",
    image: "/images/FoodHub.png",
    technologies: ["React", "Next.js", "Redux", "MongoDB", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "5",
    title: "Microservice based Social Media API",
    description:
      "A scalable social media backend built with a microservices architecture, featuring user authentication, post management, follow system, and real-time notifications.",
    image: "/images/API.png",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Cloudinary",
      "Rate limiting",
    ],
    liveUrl: "https://github.com/Gagan956/Social-Media-App.git",
    githubUrl: "https://github.com/Gagan956/Social-Media-App.git",
  },
  {
    id: "6",
    title: "Taskify-Task management app",
    description:
      "Task Manager is a lightweight app that fetches tasks from Airtable, caches them in Redis for faster performance, and displays them in a clean, organized table with real-time sync.",
    image: "/images/Todo.png",
    technologies: [
      "ReactJs",
      "NodeJs",
      "Express",
      "Typescript",
      "MongoDB",
      "Airtable",
      "Redis",
    ],
    liveUrl: "https://task-mauve-six.vercel.app/",
    githubUrl: "https://github.com/Gagan956/task.git",
  },
  
];

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Some of my latest work"
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card
              className="h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 
              bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />

                {/* Overlay buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/90 shadow-md hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <Eye size={20} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/90 shadow-md hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100/70 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <Button size="sm" href={project.liveUrl} className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.githubUrl}
                      className="flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-14"
      >
        <Button
          size="lg"
          href="https://github.com/Gagan956?tab=repositories"
          variant="outline"
          className="hover:bg-purple-600 hover:text-white"
        >
          View More Projects
          <ExternalLink size={20} className="ml-2" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
