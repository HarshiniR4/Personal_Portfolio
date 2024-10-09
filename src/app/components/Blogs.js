"use client"; // Required for using hooks in Next.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogsData = [
  {
    title: "Fashion Investment Dashboard",
    description: "The Fashion Investment Dashboard is a comprehensive web application that helps users make informed investment decisions in the fashion industry.",
    link: "https://www.linkedin.com/pulse/fashion-investment-dashboard-summer-project-harshini-raju-95cve/",
    imgSrc: "/blog_imgs/Fashion_Project_Screenshot.png",
  },
  {
    title: "Stress Detector API Using Python and Flask",
    description: "API to detect Stress through real-time facial recognition using Deep learning and CNN.",
    link: "https://medium.com/swlh/stress-detector-api-using-python-and-flask-5f54c04c65e3",
    imgSrc: "/blog_imgs/Stress_detector.png",
  },
  {
    title: "LyricBot RAG with Langchain and HuggingFaceHub",
    description: "Utilising the concepts of LLM from Langchain and integrating Hugging Face model and Google Gemini AI chatbot to understand emotional sentiments of lyrics and develop a pseudo-RAG that will return quotes from BTS songs.",
    link: "https://medium.com/@harshiniraju4/lyricbot-rag-with-langchain-and-huggingfacehub-28c4106d923c",
    imgSrc: "/blog_imgs/Streamlit Recommendation output 1.png",
  },
];

const Blogs = () => {
  return (
    <div id="blogs" className="full-page-section blogs-section">
      <h1 className="main-title">Blogs</h1>
      <motion.div
        className="blogs-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {blogsData.map((blog, index) => (
          <motion.div
            key={index}
            className="blog-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="blog-image-container">
              <Image  src={blog.imgSrc} alt={blog.title} className="blog-image" width={500} height={300}/>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p>{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
