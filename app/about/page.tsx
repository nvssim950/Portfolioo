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
          We are a team of three passionate developers who met at the Higher School of Computer Science. Our shared love for coding, problem-solving, and digital creativity brought us together early in our academic journey.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Since then, we've worked collaboratively on a wide range of projects — from small personal tools to complex web platforms. Our team combines strong frontend skills, backend expertise, and UI/UX knowledge to deliver full-stack solutions that are both functional and user-friendly.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          We are constantly exploring new technologies, learning from each other, and pushing our limits to build modern, scalable, and impactful applications. Our goal is to turn great ideas into even better digital experiences.
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
                  With over 3 years of experience in frontend development, Lakaichi specializes in creating responsive and user-friendly interfaces using React, Next.js, and TypeScript. Lakaichi is passionate about accessibility and ensuring all users can navigate our applications with ease.
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
                  Baheddi has 3 years of experience in backend development, with expertise in Node.js, Express, Nest.js, and database management with MongoDB and PostgreSQL. Baheddi ensures our applications are secure, scalable, and performant.
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
                  Zougar brings 4 years of full-stack development experience to the team, with proficiency in both frontend and backend technologies. He specializes in Python, Django, and has a strong foundation in DevOps practices, ensuring smooth deployment and operation of our applications.
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
            <Link href="/contact" className="inline-block bg-sky-500 text-blue-600 hover:bg-sky-400 px-8 py-2.5 rounded-md text-lg font-medium shadow-sm border border-transparent transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 