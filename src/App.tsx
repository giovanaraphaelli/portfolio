import { Navbar } from './components/nav-bar';
import { skills } from './constants/skills';
import { About } from './pages/about';
import { Home } from './pages/home';
import { SkillsGrid } from './pages/skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <SkillsGrid skills={skills} />
    </>
  );
}

export default App;
