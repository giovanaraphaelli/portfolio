import { Navbar } from './components/nav-bar';
import { Socials } from './components/socials';
import { projects } from './constants/projects';
import { skills } from './constants/skills';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { SkillsGrid } from './pages/skills';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <SkillsGrid skills={skills} />
      <Projects projects={projects} />
      <Socials />
    </div>
  );
}

export default App;
