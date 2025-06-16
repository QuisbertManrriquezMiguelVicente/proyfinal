import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4 justify-center">
      <Link to="/" className="hover:underline">Principal</Link>
      <Link to="/peliculas" className="hover:underline">Películas</Link>
    </nav>
  );
}
