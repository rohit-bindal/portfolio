import { ThemeProvider } from "./ThemeContext";

import {
  Contact,
  Experience,
  Stars,
  Navbar,
  Skills,
  Projects,
  Testimonials,
  Footer,
} from "./components";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative z-50 bg-black">
        <div className="bg-black">
          <Navbar />
          <SocialLinks/>
          <div className="relative z-0">
            <Stars />
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
