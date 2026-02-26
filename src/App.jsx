function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
        <h1 className="text-lg font-bold">Sagar</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Sagar Patil
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Full-Stack Developer | ML Enthusiast | Cloud Explorer
        </p>
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          View Projects
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          I am a Computer Science undergraduate passionate about building scalable 
          web applications and intelligent machine learning systems. I have experience 
          in full-stack development, API integration, and deploying cloud-based solutions. 
          I enjoy solving real-world problems using technology.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Heart Disease Prediction
            </h3>
            <p className="text-gray-400 mb-4">
              Machine learning powered web application that predicts heart disease 
              using logistic regression and deployed with full-stack integration.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-blue-400 hover:underline">GitHub</a>
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack MERN Application
            </h3>
            <p className="text-gray-400 mb-4">
              Authentication-based web application with REST API integration, 
              secure login system, and responsive UI.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-blue-400 hover:underline">GitHub</a>
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <div className="space-y-3 text-gray-400 mb-6">
          <p>
            Email:
            <a
              href="mailto:patilsagar2130@gmail.com"
              className="text-blue-400 hover:underline ml-2"
            >
              patilsagar2130@gmail.com
            </a>
          </p>

          <p>
            Phone:
            <a
              href="tel:+917666476318"
              className="text-blue-400 hover:underline ml-2"
            >
              +91 76664 76318
            </a>
          </p>
        </div>

        <div className="space-x-6">
          <a
            href="https://github.com/sagarrr21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sagar-patil-392b3124b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sagar Patil. All rights reserved.
      </footer>

    </div>
  )
}

export default App