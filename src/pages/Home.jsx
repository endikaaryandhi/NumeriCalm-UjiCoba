import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Lightbulb, Gamepad2, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const { openModal } = useModal();

  return (
    <div className="max-w-7xl mx-auto px-6 pb-16 pt-10 space-y-12 relative">
      
      <button 
        onClick={openModal}
        className="fixed bottom-6 right-6 md:absolute md:top-0 md:right-0 md:bottom-auto z-50 bg-white text-nc-wood p-3 rounded-full shadow-lg border-2 border-nc-wood hover:scale-110 transition-transform group flex items-center gap-2"
        title="Lihat Panduan"
      >
        <HelpCircle size={24} />
        <span className="hidden md:inline font-bold text-sm">Panduan</span>
      </button>

      <div className="text-center space-y-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="text-5xl md:text-7xl font-extrabold text-nc-wood tracking-tight">
          NumeriCalm
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-nc-sky font-sans">
          Your first step to stress free math!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[600px]">
        
        <div className="lg:col-span-7 bg-[#FFE8D1] rounded-[48px] p-10 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border-4 border-[#FFE8D1] hover:border-[#FBCFA0] flex flex-col justify-between">
          
          <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
             <h1 className="text-9xl font-extrabold font-pixel text-nc-wood tracking-widest -rotate-12 select-none">GAME</h1>
          </div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-3 mb-2">
               <div className="bg-[#4A90E2] p-2 rounded-xl text-white"><Gamepad2 size={24} /></div>
               <span className="font-bold text-[#4A90E2] tracking-wider text-sm uppercase">Coming Soon</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#4A90E2] font-pixel" style={{ textShadow: '3px 3px 0px white' }}>
              MATH GAME
            </h2>
          </div>
            
          <button className="relative z-20 bg-[#4A90E2] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_6px_0_rgb(50,100,180)] active:shadow-none active:translate-y-1 transition-all hover:brightness-110 flex items-center gap-3 w-max">
            Mainkan Game <ArrowRight size={20} />
          </button>

          <img 
            src="/assets/mascot-jump.png" 
            alt="Mascot Happy" 
            className="absolute bottom-0 right-[-20px] h-64 md:h-80 object-contain drop-shadow-2xl transform group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 z-10"
          />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
          
          <div className="bg-[#8C5E35] rounded-[48px] p-8 flex-1 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-white group border-4 border-[#8C5E35] hover:border-[#6B4525] flex flex-col justify-between">
            <div className="flex justify-between items-start relative z-10">
              <div>
                 <h2 className="text-3xl font-bold mb-2">Screening</h2>
                 <span className="inline-block bg-[#FDF6E9] text-[#8C5E35] px-3 py-1 rounded-full text-xs font-bold">10-12 Tahun</span>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl group-hover:rotate-12 transition duration-300 backdrop-blur-sm">
                <ClipboardList size={32} className="text-white" />
              </div>
            </div>

            <div className="relative z-10 flex justify-end">
               <Link to="/screening" className="group/btn">
                 <span className="bg-white text-[#8C5E35] px-6 py-3 rounded-full font-bold shadow-lg group-hover/btn:bg-[#FDF6E9] transition-all flex items-center gap-2">
                    Mulai Cek <ArrowRight size={18} />
                 </span>
               </Link>
            </div>
            <Link to="/screening" className="absolute top-0 left-0 w-full h-full z-0"></Link>
          </div>

          <div className="bg-[#5D9CEC] rounded-[48px] p-8 flex-1 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-white group border-4 border-[#5D9CEC] hover:border-[#4A80C0] flex flex-col justify-between">
             <div className="flex justify-between items-start relative z-10">
              <h2 className="text-3xl font-bold">Belajar Yuk!</h2>
              <div className="bg-white/10 p-3 rounded-full group-hover:rotate-12 transition duration-300 backdrop-blur-sm">
                <Lightbulb size={32} className="text-[#F8E71C]" />
              </div>
            </div>
            
             <div className="relative z-10 flex justify-end">
               <Link to="/learn" className="group/btn">
                 <span className="bg-white text-[#5D9CEC] px-6 py-3 rounded-full font-bold shadow-lg group-hover/btn:bg-[#FDF6E9] transition-all flex items-center gap-2">
                    Baca Tips <ArrowRight size={18} />
                 </span>
               </Link>
            </div>
            <Sparkles className="absolute -bottom-6 -left-6 text-white/10 w-40 h-40 rotate-12 pointer-events-none" />
            <Link to="/learn" className="absolute top-0 left-0 w-full h-full z-0"></Link>
          </div>

        </div>
      </div>
    </div>
  );
}