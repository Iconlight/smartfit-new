import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FeaturedItems from './components/FeaturedItems';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Services />
      <Process />
      <FeaturedItems />
    </main>
  );
}
