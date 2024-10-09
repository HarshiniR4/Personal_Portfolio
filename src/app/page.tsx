// src/app/page.tsx

import About from './components/About';
import MainPage from './components/MainPage';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import HireMe from './components/HireMe';
import Projects from './components/Projects';
import Skills from './components/Skills';


export default function Home() {
  return (
    <>
      <main>
        <MainPage />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blogs />
        <HireMe />
      </main>
    </>
  );
}
