import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white py-6 px-8 border-b-2 border-gray-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
           <div className="grid grid-cols-2 gap-0.5 w-10 h-10 transition-transform group-hover:scale-110">
              <div className="bg-nc-sky rounded-tl-lg"></div>
              <div className="bg-nc-wood rounded-tr-lg"></div>
              <div className="bg-nc-grass rounded-bl-lg"></div>
              <div className="bg-nc-hair rounded-br-lg"></div>
           </div>
           <span className="text-2xl font-bold text-gray-800 tracking-tight group-hover:text-nc-wood transition-colors">NumeriCalm</span>
        </Link>
        
        <div className="flex items-center gap-12 font-bold text-gray-600 text-lg">
          <Link to="/" className="hover:text-nc-wood transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nc-wood after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Beranda</Link>
          <Link to="/privacy" className="hover:text-nc-wood transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nc-wood after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Privacy</Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <button 
              onClick={handleSignOut}
              className="px-6 py-2 rounded-full border-2 border-nc-wood text-nc-wood font-bold hover:bg-nc-wood hover:text-white transition active:scale-95"
            >
              Keluar
            </button>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 rounded-full border-2 border-nc-brown-card text-nc-brown-card font-bold hover:bg-nc-brown-card hover:text-white transition active:scale-95">
                Masuk
              </button>
            </Link>
          )}
          <div className="p-2 rounded-full bg-gray-100 text-gray-400">
            <User size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
}