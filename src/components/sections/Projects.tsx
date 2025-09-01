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
      "Medimeet is a full-stack doctor appointment platform built with Next.js and Shadcn UI, featuring secure authentication, doctor-patient management, scheduling, and Stripe payments for a seamless booking experience.",
    image: "/images/Medimeet.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "Vonage (video calling)",
    ],
    liveUrl: "https://medimeet-black.vercel.app/",
    githubUrl: "https://github.com/Gagan956/Medimeet",
  },
  {
    id: "2",
    title: "Hireme",
    description:
      "HireMe is a frontend job portal built with Next.js and TypeScript, featuring job listings, application forms, and a clean, responsive UI for a smooth hiring experience.",
    image: "/images/Hireme.png",
    technologies: ["React", "Next.js", "Responsive Design", "Tailwind CSS"],
    liveUrl: "https://hireme-lemon.vercel.app",
    githubUrl: "https://github.com/Gagan956/Hireme.git",
  },
  {
    id: "3",
    title: "Foodhub",
    description:
      "Foodhub is a full-stack food ordering platform built with Next.js, React, TypeScript, and MongoDB, featuring secure authentication, menu browsing, cart management, and real-time order updates for a smooth delivery experience",
    image: "/images/Foodhub.png",
    technologies: ["ReactJs", "NextJs", "Redux", "MongoDB", "Typescript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and glassmorphism effects.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
    image: "/images/weather.png",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "6",
    title: "Microservice based Social Media API",
    description:
      "A scalable social media backend built with a microservices architecture, featuring user authentication, post management, follow system, and real-time notifications.",
    image: "/images/social.png",
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
];

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card tilt className="h-full flex flex-col overflow-hidden">
              {/* Project Image with Aspect Ratio */}
              <div className="relative aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                )}

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-800 hover:text-purple-600 transition-colors"
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
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-800 hover:text-purple-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.liveUrl && (
                    <Button size="sm" href={project.liveUrl} className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
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
        className="text-center mt-12"
      >
        <Button
          size="lg"
          href="https://github.com/Gagan956?tab=repositories"
          variant="outline"
        >
          View More Projects
          <ExternalLink size={20} className="ml-2" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
