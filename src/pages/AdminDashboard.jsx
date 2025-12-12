import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    try {
      const { data, error } = await supabase
        .from('screening_results')
        .select('*, profiles(email)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResults(data);
      calculateStats(data);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  }

  const calculateStats = (data) => {
    const counts = { Rendah: 0, Sedang: 0, Tinggi: 0 };
    data.forEach(r => {
      if (counts[r.category] !== undefined) counts[r.category]++;
    });
    const statsData = [
      { name: 'Rendah', count: counts.Rendah, color: '#7ED657' },
      { name: 'Sedang', count: counts.Sedang, color: '#77E86' },
      { name: 'Tinggi', count: counts.Tinggi, color: '#E67337' },
    ];
    setStats(statsData);
  };

  if (loading) return <div className="flex h-[50vh] items-center justify-center"><Loader2 className="animate-spin text-nc-wood" size={40} /></div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-nc-wood">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
         {stats.map(stat => (
            <Card key={stat.name} className="border-2" style={{borderColor: stat.color}}>
               <CardContent className="p-6 flex items-center justify-between">
                  <div>
                     <p className="text-sm font-bold opacity-70">Kategori {stat.name}</p>
                     <p className="text-4xl font-extrabold" style={{color: stat.color}}>{stat.count}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full opacity-20" style={{backgroundColor: stat.color}}></div>
               </CardContent>
            </Card>
         ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statistik Kategori Kecemasan</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
              <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                {stats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Riwayat Submit Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-nc-brown-dark uppercase bg-nc-cream/50 font-bold">
                <tr>
                  <th className="px-6 py-4 rounded-tl-xl">Tanggal</th>
                  <th className="px-6 py-4">Email Pengguna</th>
                  <th className="px-6 py-4">Skor Total</th>
                  <th className="px-6 py-4 rounded-tr-xl">Kategori</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id} className="bg-white border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{new Date(result.created_at).toLocaleDateString('id-ID')}</td>
                    <td className="px-6 py-4">{result.profiles?.email || 'Guest'}</td>
                    <td className="px-6 py-4 font-bold">{result.total_score}</td>
                    <td className="px-6 py-4">
                       <span className={`px-3 py-1 rounded-full text-xs font-bold
                        ${result.category === 'Rendah' ? 'bg-nc-grass/20 text-nc-blue-dark' : 
                          result.category === 'Sedang' ? 'bg-nc-yellow/20 text-yellow-700' : 
                          'bg-nc-wood/20 text-nc-wood'}`}>
                        {result.category}
                      </span>
                    </td>
                  </tr>
                ))}
                 {results.length === 0 && (
                    <tr><td colSpan={4} className="text-center py-8 opacity-60">Belum ada data screening.</td></tr>
                 )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}