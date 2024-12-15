import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from '../../api/apiAuth';  // Pastikan API SignUp benar
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi password dan konfirmasi password
        if (password !== confirmPassword) {
            toast.error('Password dan Konfirmasi Password tidak cocok');
            return;
        }

        // Validasi panjang password
        if (password.length < 6) {
            toast.error('Password harus memiliki minimal 6 karakter');
            return;
        }

        // Validasi phone number
        if (!phoneNumber) {
            toast.error('No. Telp harus diisi');
            return;
        }

        setLoading(true);

        // Menyusun data untuk dikirim ke API dengan field yang sesuai dengan backend
        const data = { username, email, password, no_telp: phoneNumber };  // ubah phoneNumber menjadi no_telp
        console.log('Data yang dikirim:', data); // Debug: log data yang dikirim

        try {
            // Mengirim data ke API SignUp
            const response = await SignUp(data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Debug: log respons dari API
            console.log('Respons dari API:', response);

            // Jika registrasi berhasil
            toast.success('Registrasi Berhasil! Silakan Login.');

            // Setelah beberapa detik, redirect ke halaman login
            setTimeout(() => {
                navigate('/login');
            }, 4000);
        } catch (err) {
            // Menangani error jika registrasi gagal
            console.error('Error registrasi:', err);
            toast.error(err.response?.data?.message || 'Registrasi gagal. Coba lagi!');
        } finally {
            setLoading(false); // Set loading ke false setelah proses selesai
        }
    };

    return (
        <div className="background-animation">
            <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
            <div className="bg-img">
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <h1 className="mb-3 text-center text-white"><strong>Register</strong></h1>
                    </div>

                    {/* Username Input */}
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>

                    {/* Email Input */}
                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    {/* Password Input */}
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            id="kpassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                        <label htmlFor="kpassword">Konfirmasi Password</label>
                    </div>

                    {/* Phone Number Input */}
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="noTelp"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="No.Telp"
                            required
                        />
                        <label htmlFor="noTelp">No.Telp</label>
                    </div>

                    {/* Submit button */}
                    <button type="submit" style={{ width: "100px" }} className="btn btn-primary btn-block mb-2 mt-3" disabled={loading}>
                        {loading ? 'Mendaftar...' : 'Daftar'}
                    </button>

                    <p className="text-white">Sudah Punya Akun?</p>
                    <Link to="/login" className="text-white">Login</Link>
                </form>
            </div>

            {/* ToastContainer untuk menampilkan toast */}
            <ToastContainer
                toastStyle={{
                    backgroundColor: 'black',  // Ganti latar belakang toast menjadi hitam
                    color: 'white',            // Ganti teks toast menjadi putih
                }}
            />
        </div>
    );
};

export default Register;
