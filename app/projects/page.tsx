import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

export const metadata = {
  title: 'Our Projects | DevTeam Portfolio',
  description: 'Explore our portfolio of web development projects built with modern technologies like Next.js, TypeScript, React, MongoDB, and PostgreSQL.',
};

const projects = [
  {
    id: 1,
    title: 'Composable Themes Library',
    description: 'A full-featured e-commerce platform with user authentication, product management and payment processing.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/images/projects/ecommerce-platform.jpg',
    category: 'Full Stack',
    url: 'https://statichunt.com/themes/nextjs-food-and-restaurant'
  },
  {
    id: 2,
    title: 'marketplace of themes, templates',
    description: 'A modern real estate platform allowing users to browse, filter, and save property listings with an intuitive user interface.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    imageUrl: '/images/projects/ecommerce-platform.jpg',
    category: 'Full Stack',
    url: 'https://www.builtatlightspeed.com/'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A collaborative task management tool for teams with real-time updates, task assignments, deadline tracking, and reporting features.',
    technologies: ['Next.js', 'TypeScript', 'Nest.js', 'MongoDB', 'Socket.io'],
    imageUrl: '/images/projects/Capture.jpg',
    category: 'Full Stack',
    url: 'https://taskmanager.trivix.com'
  },
  {
    id: 4,
    title: 'Corporate Website',
    description: 'A responsive corporate website with content management system, blog, and contact forms, optimized for search engines.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity.io'],
    imageUrl: '/images/projects/ecommerce-platform.jpg',
    category: 'Frontend',
    url: 'https://corporate.trivix.com'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description: 'An online reservation system for restaurants with table management, booking calendar, and automated email confirmations.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Nodemailer'],
    imageUrl: '/images/projects/Capture.jpg',
    category: 'Full Stack',
    url: 'https://restaurant.trivix.com'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for businesses to track key performance indicators with interactive charts and reports.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'MongoDB'],
    imageUrl: '/images/projects/ecommerce-platform.jpg',
    category: 'Data Visualization',
    url: 'https://analytics.trivix.com'
  }
];


export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">Our Projects</h1>
            <p className="text-xl text-blue-100 animate-slideUp">
              Explore our portfolio of web development work. Each project demonstrates our expertise and commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slideUp">
              These selected projects showcase our capabilities across different industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">Our Development Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slideUp">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We begin by understanding your business needs, target audience, and project goals to establish a clear vision.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We create detailed specifications, select appropriate technologies, and establish project timelines.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Our team builds your application using modern development practices, with regular updates and milestone reviews.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We deploy your application and provide ongoing support to ensure it continues to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">Have a Project in Mind?</h2>
            <p className="text-xl text-blue-100 mb-10 animate-slideUp">
              Let's discuss how we can bring your ideas to life with our expertise in web development.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-sky-500 text-blue-700 hover:bg-sky-400 px-8 py-4 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 