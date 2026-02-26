import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
        <h1 className="text-lg font-bold">Sagar</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Sagar Patil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-400 mb-6"
        >
          Full-Stack Developer | Cloud & ML Enthusiast
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          View Projects
        </motion.a>

      </section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-900 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-gray-400 leading-relaxed">
          Full Stack Developer with hands-on industry experience building scalable,
          user-centric web applications. Currently working at Avenir Technologies,
          developing end-to-end solutions across front-end and back-end layers,
          integrating APIs, and optimizing application performance. Passionate about
          cloud technologies and machine learning, I enjoy solving real-world problems
          by building efficient, reliable, and scalable systems.
        </p>
      </motion.section>

      {/* EDUCATION SECTION */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Education
        </h2>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left">
          <h3 className="text-xl font-semibold">
            Bachelor of Technology (B.Tech) in Computer Science
          </h3>
          <p className="text-gray-400">
            Parul University | 2021 – 2025
          </p>
          <p className="text-gray-400 mt-2">
            CGPA: 6.66 / 10
          </p>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-900 text-center"
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-400">
              Avenir Technologies | March 2023 – Present | Remote
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left">
            <h3 className="text-xl font-semibold">Web Developer Intern</h3>
            <p className="text-gray-400">
              CodeTech | Dec 2022 – Feb 2023 | Remote
            </p>
          </div>

        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">
              Heart Disease Prediction
            </h3>
            <p className="text-gray-400">
              ML-powered web application with full-stack deployment.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack MERN Application
            </h3>
            <p className="text-gray-400">
              Authentication-based web application with REST API integration.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* CONTACT SECTION */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 px-6 bg-gray-900 text-center"
>
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
    Contact Me
  </h2>

  <div className="space-y-4 text-gray-400 mb-6">

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
</motion.section>

    </div>
  );
}

export default App;