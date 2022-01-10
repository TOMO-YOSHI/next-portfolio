import * as Scroll from 'react-scroll';
// import Link from 'next/link';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home() {
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;
  // const ScrollLink = Scroll.Link;
  
  const scrollToEle = (elementName:string) => {
    scroller.scrollTo(elementName, {
      duration: 500,
      delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
      // offset: 50, // Scrolls to element + 50 pixels down the page
    })
  }

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    })
  }

  return (
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
      <div
        // onClick={() => scrollToEle("welcome")}
        onClick={scrollToTop}
      >
        Top
      </div>
      {/* <ScrollLink
        activeClass="active"
        to="welcome"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={0}>
          To Welcome
        </ScrollLink> */}
    </Layout>
  )
}
