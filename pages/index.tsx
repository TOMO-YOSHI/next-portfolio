import * as Scroll from 'react-scroll';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home() {
  const Element = Scroll.Element;

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
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const apiConfig = {
//     method: 'GET',
//     url: `${API_URL}/api/works`
//   };

//   const res = await axios(apiConfig);
//   const works = res.data;

//   return {
//     props: { works }
//   }
// }

