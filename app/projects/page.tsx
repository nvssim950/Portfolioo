import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Projects | DevTeam Portfolio',
  description: 'Explore our portfolio of web development projects built with modern technologies like Next.js, TypeScript, React, MongoDB, and PostgreSQL.',
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment processing.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Real Estate Listing App',
    description: 'A modern real estate platform allowing users to browse, filter, and save property listings with an intuitive user interface.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A collaborative task management tool for teams with real-time updates, task assignments, deadline tracking, and reporting features.',
    technologies: ['Next.js', 'TypeScript', 'Nest.js', 'MongoDB', 'Socket.io'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'Corporate Website',
    description: 'A responsive corporate website with content management system, blog, and contact forms, optimized for search engines.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity.io'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Frontend'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description: 'An online reservation system for restaurants with table management, booking calendar, and automated email confirmations.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Nodemailer'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Full Stack'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for businesses to track key performance indicators with interactive charts and reports.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'MongoDB'],
    imageUrl: '/images/placeholder.jpg',
    category: 'Data Visualization'
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore our portfolio of web development work. Each project demonstrates our expertise and commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              These selected projects showcase our capabilities across different industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                  <svg className="h-20 w-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h5v2H7v-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/projects/${project.id}`} className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm inline-flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We begin by understanding your business needs, target audience, and project goals to establish a clear vision.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We create detailed specifications, select appropriate technologies, and establish project timelines.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team builds your application using modern development practices, with regular updates and milestone reviews.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deploy your application and provide ongoing support to ensure it continues to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can bring your ideas to life with our expertise in web development.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-medium shadow-lg transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 