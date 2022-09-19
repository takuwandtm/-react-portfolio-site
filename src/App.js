import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Profile } from './components/Profile';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

