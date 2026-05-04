import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast/Toast';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Work from './components/Work/Work';
import Preloader from './components/Preloader/Preloader';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Preloader />
        <ScrollProgress />
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Work />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
