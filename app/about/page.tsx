import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Les Batar',
  description: 'Learn more about Les Batar, a team of software engineers specializing in web development with Next.js, React, and modern web technologies.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Team</h1>
            <p className="text-xl text-blue-100">
              We are a team of passionate software engineers committed to delivering high-quality web applications with modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2020, our team came together with a shared vision of creating modern, accessible, and high-performance web applications. With our combined expertise in frontend and backend technologies, we have successfully delivered numerous projects for clients across various industries.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We believe in continuous learning and staying up-to-date with the latest technologies and best practices in web development. Our commitment to quality and attention to detail sets us apart from other development teams.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you need a simple website or a complex web application, we have the skills and experience to bring your vision to life.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <svg className="h-32 w-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These core principles guide our work and ensure we deliver the best solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <svg className="h-12 w-12 text-blue-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We never compromise on quality. Every line of code we write is crafted with care and attention to detail, ensuring robust and maintainable applications.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <svg className="h-12 w-12 text-blue-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage in their respective fields.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <svg className="h-12 w-12 text-blue-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in open and transparent communication with our clients throughout the development process, ensuring that your vision is realized exactly as you imagined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our talented team of software engineers brings diverse skills and expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lakaichi Moundir</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Frontend Developer</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With over 5 years of experience in frontend development, Lakaichi specializes in creating responsive and user-friendly interfaces using React, Next.js, and TypeScript. Lakaichi is passionate about accessibility and ensuring all users can navigate our applications with ease.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Baheddi Nassim</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Backend Developer</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Baheddi has 7 years of experience in backend development, with expertise in Node.js, Express, Nest.js, and database management with MongoDB and PostgreSQL. Baheddi ensures our applications are secure, scalable, and performant.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Zougar Mohammed</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Full-Stack Developer</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Zougar brings 6 years of full-stack development experience to the team, with proficiency in both frontend and backend technologies. He specializes in Python, Django, and has a strong foundation in DevOps practices, ensuring smooth deployment and operation of our applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for new challenges and exciting projects. Let's discuss how we can help bring your ideas to life.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-2.5 rounded-md text-lg font-medium shadow-sm border border-transparent transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 