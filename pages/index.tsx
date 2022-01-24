import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Contact from '../components/Contact';
import BackgroundAnimation from '../components/BackgroundAnimation';

export default function Home() {
  // const [displayBackground, setDisplayBackground] = useState(false);
  const Element = Scroll.Element;

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setDisplayBackground(true)
  //   }, 3000)
  // }, [])
  
  return (
    <>
      <Layout>
        <Element name="welcome">
          <Welcome />
        </Element>
        <Element name="profile">
          <Profile />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="works">
          <Works />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>      
      </Layout>
      {/* {
        displayBackground ?
          <BackgroundAnimation />
          : null
      } */}
    </>
  )
}
