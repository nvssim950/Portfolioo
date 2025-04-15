import Link from 'next/link';

export const metadata = {
  title: 'Our Services | DevTeam Portfolio',
  description: 'Discover our web development services including frontend, backend, full-stack development, and database design using modern technologies.',
};

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We create modern, responsive, and high-performance web applications tailored to your business needs.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: [
      'Custom web application development',
      'Progressive Web Apps (PWAs)',
      'Single Page Applications (SPAs)',
      'SEO-friendly website development',
      'Performance optimization',
      'Responsive design for all devices'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'We build intuitive user interfaces and engaging user experiences using modern frontend technologies.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    details: [
      'React and Next.js development',
      'TypeScript implementation',
      'Modern UI/UX design',
      'State management (Redux, Context API)',
      'Interactive data visualization',
      'Animation and micro-interactions'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'We develop secure, scalable, and efficient server-side applications and APIs to power your web applications.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    details: [
      'API development and integration',
      'Node.js, Express, and Nest.js development',
      'Authentication and authorization systems',
      'Real-time applications with WebSockets',
      'Microservices architecture',
      'Server-side rendering'
    ]
  },
  {
    id: 'database',
    title: 'Database Design',
    description: 'We design and implement efficient database structures that ensure data integrity, security, and performance.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    details: [
      'MongoDB database design and optimization',
      'PostgreSQL schema design',
      'Database migration and version control',
      'Data modeling and normalization',
      'Query optimization',
      'Database security implementation'
    ]
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'We provide expert advice on technology selection, architecture, and development strategies for your projects.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    details: [
      'Technology stack selection',
      'Architecture planning and design',
      'Development process optimization',
      'Performance audit and recommendations',
      'Security assessment',
      'Migration strategies for legacy systems'
    ]
  },
  {
    id: 'maintenance',
    title: 'Support & Maintenance',
    description: 'We provide ongoing support and maintenance services to ensure your web applications remain secure, up-to-date, and performing optimally.',
    icon: (
      <svg className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    details: [
      'Regular maintenance and updates',
      'Security patches and vulnerability fixes',
      'Performance monitoring and optimization',
      'Bug fixing and troubleshooting',
      'Feature enhancements and additions',
      '24/7 support options for critical systems'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              We offer a comprehensive range of web development services to help businesses build modern, scalable, and high-performance web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our team combines technical expertise with creative problem-solving to deliver web solutions that help our clients achieve their business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <Link 
                  href={`/services#${service.id}`} 
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Dive deeper into our service offerings and discover how we can help you build exceptional web applications.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-600 rounded-lg h-64 flex items-center justify-center p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                      Expert {service.title} for Modern Web Applications
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We leverage modern technologies to build robust, scalable, and high-performing applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-blue-500 mb-4">TS</div>
              <h3 className="text-lg font-semibold">TypeScript</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-black dark:text-white mb-4">N</div>
              <h3 className="text-lg font-semibold">Next.js</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-green-600 mb-4">M</div>
              <h3 className="text-lg font-semibold">MongoDB</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-blue-700 mb-4">Pg</div>
              <h3 className="text-lg font-semibold">PostgreSQL</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-red-600 mb-4">Ex</div>
              <h3 className="text-lg font-semibold">Express</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-red-500 mb-4">N</div>
              <h3 className="text-lg font-semibold">Nest.js</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-green-500 mb-4">D</div>
              <h3 className="text-lg font-semibold">Django</h3>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-mono text-4xl text-blue-500 mb-4">R</div>
              <h3 className="text-lg font-semibold">React</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your project needs and discover how our services can help you achieve your goals.
            </p>
            <Link href="/contact" className="inline-block bg-sky-500 text-blue-600 hover:bg-sky-400 px-8 py-4 rounded-md text-lg font-medium shadow-lg transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}