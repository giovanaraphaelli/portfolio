import { Navbar } from './components/nav-bar';
import { Socials } from './components/socials';
import { skills } from './constants/skills';
import { About } from './pages/about';
import { Home } from './pages/home';
import { SkillsGrid } from './pages/skills';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <SkillsGrid skills={skills} />
      <Socials />
    </div>
  );
}

export default App;
