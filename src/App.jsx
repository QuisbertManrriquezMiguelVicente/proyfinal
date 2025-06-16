import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-600 text-white p-4 text-center text-2xl font-bold">
        Cinemateca Boliviana
      </header>
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
