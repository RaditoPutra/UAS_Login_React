import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Import Toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk Toast
import { SignIn } from '../../api/apiAuth';  
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const response = await SignIn(data); // Panggil SignIn dari apiAuth

      // Jika login sukses
      if (response.token) {
        localStorage.setItem("token", response.token); // Simpan token ke localStorage
        
        // Mengecek apakah user adalah Admin
        if (username === 'Admin' && password === 'admin123') {
          navigate("/admin"); // Navigasi ke halaman admin
        } else {
          navigate("/home"); // Navigasi ke halaman home setelah login
        }
      }
    } catch (error) {
      // Menampilkan toast error jika login gagal
      toast.error('Username atau Password salah!');
    }
  };

  // Fungsi untuk navigasi ke halaman Register
  const handleRegisterRedirect = () => {
    navigate("/register"); // Mengarahkan ke halaman register
  };

  return (
    <div className="background-animation">
      <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
      <div className="bg-img">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <h1 className="mb-4 text-center text-white"><strong>Login</strong></h1>
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

          {/* Password Input */}
          <div className="form-floating">
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

          <button
            type="submit"
            style={{ width: "100px" }}
            className="btn btn-primary btn-block mb-2 mt-3"
          >
            Login
          </button>

          <p className="text-white">Belum punya akun?</p>
          <button
            className="btn btn-link text-white"
            onClick={handleRegisterRedirect}
          >
            Register
          </button>
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

export default Login;
