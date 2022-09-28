import './App.css';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

