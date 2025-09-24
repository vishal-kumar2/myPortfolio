import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qrh2fva",    // 🔹 replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",   // 🔹 replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"     // 🔹 replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-13 px-6 text-black dark:text-white"
    >
      <h2 className="underline text-3xl font-bold text-center mb-10">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">🚀 Open to Work</h3>
          <p className="mb-6">
            I’m currently looking for exciting frontend roles and freelance opportunities. Let's connect and build something great together!
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/vishal-kumar2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-kumar-gupta-012b65216/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:vishalk73877@email.com"
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-md p-6">
          <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
