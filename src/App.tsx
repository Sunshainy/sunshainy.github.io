import { Hero } from './components/Hero';
import { DirectorQuote } from './components/DirectorQuote';
import { About } from './components/About';
import { Goals } from './components/Goals';
import { Results } from './components/Results';
import { Audience } from './components/Audience';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { Productions } from './components/Productions';
// Calendar removed per request
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DirectorQuote />
      <About />
      <Productions />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}
