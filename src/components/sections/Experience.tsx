'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="pt-12">
      <h4 className="text-2xl font-bold mb-6 gradient-text">Experience</h4>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 relative overflow-hidden group"
      >
        {/* Experience Details */}
        <div className="flex-1 space-y-3 z-10 relative">
          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            House of MarkTech - Internship
          </h5>
          <p className="text-gray-600 dark:text-gray-300 font-medium">
            Mar 2025 - Aug 2025
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              Worked as a Backend Developer in a 4-member team to build two full-stack MERN apps—a wedding website and a real estate platform—boosting engagement by 40% and improving property workflows by 20%.
            </li>
            <li>
              Designed and developed scalable RESTful APIs for user management, listings, and RSVP handling, ensuring secure and efficient backend operations.
            </li>
            <li>
              Led end-to-end project lifecycles, reducing development time by 30% and acquiring 100+ new users weekly.
            </li>
            <li>
              Improved performance with Vite, code-splitting, and optimized backend response times.
            </li>
            <li>
              Used Git/GitHub for version control, streamlining collaboration and code reviews across the team.
            </li>
          </ul>
        </div>

        {/* Certificate Image on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-0 pointer-events-none group-hover:z-20 group-hover:pointer-events-auto"
        >
          <div className="relative w-64 h-64">
            <Image
              src="/images/certificate.jpg"
              alt="House of MarkTech Certificate"
              fill
              className="rounded-xl shadow-2xl object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
