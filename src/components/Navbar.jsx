import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Menu, X, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
    navigate('/');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white py-4 md:py-6 px-4 md:px-8 border-b-2 border-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={isAdmin ? "/admin" : "/"} className="flex items-center gap-3 group z-50" onClick={closeMenu}>
           <div className="grid grid-cols-2 gap-0.5 w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110">
              <div className="bg-nc-sky rounded-tl-lg"></div>
              <div className="bg-nc-wood rounded-tr-lg"></div>
              <div className="bg-nc-grass rounded-bl-lg"></div>
              <div className="bg-nc-hair rounded-br-lg"></div>
           </div>
           <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight group-hover:text-nc-wood transition-colors">NumeriCalm</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 lg:gap-12 font-bold text-gray-600 text-lg">
          {isAdmin ? (
            <Link to="/admin" className="text-nc-wood flex items-center gap-2 hover:opacity-80 transition">
              <LayoutDashboard size={20} />
              Dashboard Admin
            </Link>
          ) : (
            <>
              <Link to="/" className="hover:text-nc-wood transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nc-wood after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Beranda</Link>
              <Link to="/privacy" className="hover:text-nc-wood transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nc-wood after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Privacy</Link>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
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

        <button 
          className="md:hidden text-nc-wood p-2 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {isAdmin ? (
            <Link to="/admin" onClick={closeMenu} className="text-2xl font-bold text-nc-wood flex items-center gap-2">
              <LayoutDashboard size={24} />
              Dashboard Admin
            </Link>
          ) : (
            <>
              <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-gray-700 hover:text-nc-wood">Beranda</Link>
              <Link to="/privacy" onClick={closeMenu} className="text-2xl font-bold text-gray-700 hover:text-nc-wood">Privacy</Link>
            </>
          )}
          
          <div className="flex flex-col gap-4 mt-4 w-full px-12">
            {user ? (
              <button 
                onClick={handleSignOut}
                className="w-full py-3 rounded-full border-2 border-nc-wood text-nc-wood font-bold hover:bg-nc-wood hover:text-white transition"
              >
                Keluar
              </button>
            ) : (
              <Link to="/login" onClick={closeMenu} className="w-full">
                <button className="w-full py-3 rounded-full bg-nc-brown-card text-white font-bold hover:opacity-90 transition">
                  Masuk
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}