import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/nav-bar';
import { Socials } from './components/socials';
import { projects } from './constants/projects';
import { skills } from './constants/skills';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { SkillsGrid } from './pages/skills';
import { Toaster } from './components/ui/toaster';
import { Footer } from './pages/footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <Navbar />
        <Home />
        <About />
        <Projects projects={projects} />
        <SkillsGrid skills={skills} />
        <Contact />
        <Footer />
        <Socials />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
