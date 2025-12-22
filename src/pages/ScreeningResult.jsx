import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import mascotHappy from '../assets/mascot-happy1 (1).png';
import mascotSad from '../assets/mascot-sad.png';
import mascotCry from '../assets/mascot-cry.png';

export default function ScreeningResult() {
  const location = useLocation();
  const { score, category } = location.state || {};

  if (score === undefined || category === undefined) {
    return <Navigate to="/screening" />;
  }
  
  let mascotImage;
  let bgColor;
  let textColor;

  if (category === "Tinggi") {
    mascotImage = mascotHappy;
    bgColor = "bg-nc-grass";
    textColor = "text-nc-grass-dark";
  } else if (category === "Sedang") {
    mascotImage = mascotSad;
    bgColor = "bg-nc-yellow";
    textColor = "text-yellow-700";
  } else {
    mascotImage = mascotCry;
    bgColor = "bg-nc-wood";
    textColor = "text-red-800";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      
      {/* Gambar Maskot */}
      <img 
        src={mascotImage} 
        alt={`Mascot ${category}`} 
        className="h-48 mx-auto mb-8 drop-shadow-xl hover:scale-105 transition-transform" 
      />
      
      <Card className={`border-4 ${bgColor.replace('bg-', 'border-')}/30`}>
        <CardHeader>
          <CardTitle className="text-4xl">Hasil Screening Anda</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className={`${bgColor} bg-opacity-20 p-8 rounded-[30px] inline-block mx-auto`}>
             <h2 className={`text-5xl font-extrabold ${textColor} mb-2`}>{category}</h2>
             <p className="text-xl font-bold opacity-80">Skor: {score}</p>
          </div>

          <div className="text-left bg-white p-6 rounded-2xl text-sm text-gray-600 space-y-2 border-2 border-gray-100">
            <p><strong>Keterangan Skor:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rendah: Skor 12 - 19</li>
              <li>Sedang: Skor 20 - 27</li>
              <li>Tinggi: Skor 28 - 36</li>
            </ul>
            <p className="mt-4 text-xs italic">Range skor: 12-36. Mean=24, SD=4</p>
          </div>

           <div className="bg-nc-sky/10 p-6 rounded-2xl text-sm text-nc-brown-dark border-2 border-nc-sky/20">
            <p className="font-bold mb-2">Catatan Penting:</p>
            <p>Hasil screening tidak dapat menggantikan penilaian profesional dari tenaga ahli. Jika Anda membutuhkan penanganan lebih lanjut, kami selalu menyarankan untuk berkonsultasi dengan profesional.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/learn">
              <Button size="lg" className="w-full sm:w-auto bg-nc-sky hover:bg-nc-blue-dark">Baca Tips Belajar</Button>
            </Link>
             <Link to="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Kembali ke Beranda</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}