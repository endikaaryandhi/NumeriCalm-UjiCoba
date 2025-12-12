import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { toast } from 'sonner';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        const { error } = await signUp({ email, password });
        if (error) throw error;
        toast.success('Pendaftaran berhasil! Silakan masuk.');
        setIsSignUp(false);
      } else {
        const { error } = await signIn({ email, password });
        if (error) throw error;
        toast.success('Berhasil masuk!');
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md border-nc-sky/30">
        <CardHeader className="text-center">
          <img src="/assets/mascot-jump.png" alt="Mascot" className="h-24 mx-auto mb-4" />
          <CardTitle className="text-3xl text-nc-sky">{isSignUp ? 'Daftar Akun' : 'Masuk'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-nc-brown-dark mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-nc-sky focus:outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-nc-brown-dark mb-1">Password</label>
              <input
                type="password"
                required
                minLength={6}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-nc-sky focus:outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-nc-sky hover:bg-nc-blue-dark" disabled={loading}>
              {loading ? 'Memproses...' : (isSignUp ? 'Daftar' : 'Masuk')}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-nc-brown-dark">
              {isSignUp ? 'Sudah punya akun?' : 'Belum punya akun?'}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-2 font-bold text-nc-sky hover:underline"
              >
                {isSignUp ? 'Masuk disini' : 'Daftar sekarang'}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}