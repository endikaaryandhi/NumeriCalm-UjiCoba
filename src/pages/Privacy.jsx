import React from 'react';
import { ShieldCheck, Lock, HeartHandshake, Stethoscope } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-nc-wood mb-6">Kebijakan Privasi</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Kami percaya bahwa pengalaman belajar yang baik dimulai dari rasa aman.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-[30px] p-8 border-4 border-nc-sky/30 shadow-lg hover:shadow-xl transition flex flex-col items-start">
          <div className="bg-nc-sky/20 p-4 rounded-2xl mb-6">
            <Lock size={40} className="text-nc-sky" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Keamanan Data</h2>
          <p className="text-gray-600 leading-relaxed">
            Kami berkomitmen menjaga keamanan dan kerahasiaan data pengguna. Semua informasi yang diberikan, termasuk hasil screening dan aktivitas dalam aplikasi, tidak akan dibagikan kepada pihak manapun.
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-8 border-4 border-nc-wood/30 shadow-lg hover:shadow-xl transition flex flex-col items-start">
          <div className="bg-nc-wood/20 p-4 rounded-2xl mb-6">
            <ShieldCheck size={40} className="text-nc-wood" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tujuan Penggunaan</h2>
          <p className="text-gray-600 leading-relaxed">
            Fitur screening math anxiety dan game dalam website ini dibuat untuk memberikan gambaran awal, bukan untuk memberikan diagnosis klinis.
          </p>
        </div>
      </div>

      <div className="bg-[#FFE8D1] rounded-[40px] p-10 md:p-12 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Stethoscope size={32} className="text-nc-wood" />
            </div>
            <h2 className="text-3xl font-bold text-nc-brown-card">Penting untuk Diketahui</h2>
          </div>
          
          <div className="space-y-6 text-lg text-nc-brown-card/90 font-medium">
            <p className="flex gap-4 items-start">
              <span className="bg-white/50 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">1</span>
              Hasil screening tidak dapat menggantikan penilaian profesional dari tenaga ahli.
            </p>
            <p className="flex gap-4 items-start">
              <span className="bg-white/50 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">2</span>
              Jika Anda membutuhkan penanganan lebih lanjut, kami selalu menyarankan untuk berkonsultasi dengan profesional yang sesuai dengan kompetensinya.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t-2 border-nc-brown-card/10">
            <div className="flex items-center gap-4">
              <HeartHandshake size={32} className="text-nc-wood" />
              <p className="text-xl font-bold text-nc-wood">
                Kami berharap platform ini dapat digunakan untuk membantu Anda belajar matematika dengan menyenangkan!
              </p>
            </div>
          </div>
        </div>
        
        <img 
          src="/assets/mascot-run.png" 
          alt="Mascot Running" 
          className="absolute -bottom-10 -right-10 h-80 object-contain opacity-90 hidden md:block transform rotate-12" 
        />
      </div>
    </div>
  );
}