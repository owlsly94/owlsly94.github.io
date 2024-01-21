import styles from './App.module.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
