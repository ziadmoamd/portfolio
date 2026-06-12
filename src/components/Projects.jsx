/*
PortfolioSection.jsx
React + Tailwind component for a portfolio "Projects" section with animations (Framer Motion).

Features:
- Responsive grid (mobile -> 1 col, md -> 2 cols, lg -> 3 cols)
- Each card animates individually from bottom to top only when it enters the viewport
- Project cards with image, title, description, tech tags and action buttons

*/

import { motion } from "framer-motion"

const defaultProjects = [
    {
        id: 1,
        title: "Project One",
        description: "A short description of project one — what it does and tech used.",
        img: "https://via.placeholder.com/800x500?text=Project+1",
        tech: ["React", "Tailwind", "API"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A short description of project two — responsive & accessible.",
        img: "https://via.placeholder.com/800x500?text=Project+2",
        tech: ["HTML", "CSS", "JS"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Project Three",
        description: "A short description of project three — animations & UI.",
        img: "https://via.placeholder.com/800x500?text=Project+3",
        tech: ["React", "Framer Motion"],
        github: "#",
        demo: "#"
    }
]

// Cards animation: slide from bottom to top when in view
const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function PortfolioSection({ projects = defaultProjects }) {
    return (
        <section
            className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
            id="objects">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {" "}
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <motion.article
                            key={p.id}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{
                                translateY: -6,
                                boxShadow: "0 10px 30px rgba(2,6,23,0.12)"
                            }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ring-1 ring-gray-100 dark:ring-transparent hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-44 md:h-48 lg:h-40 overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={`Screenshot of ${p.title}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    {p.description}
                                </p>

                                <div
                                    className="mt-4 flex flex-wrap gap-2"
                                    aria-hidden>
                                    {p.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        GitHub
                                    </a>
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        عرض
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
