import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Update path sesuai dengan lokasi file
import LoginPage from "../Components/LoginPage/Login.jsx";  // Sesuaikan dengan path LoginPage yang benar
import RegisterPage from "../Components/RegisterPage/Register.jsx";  // Sesuaikan dengan path RegisterPage yang benar
import HomePage from "../Components/HomePage/Home.jsx";  // Jika Anda memiliki halaman Home, import juga

import DaftarFilm from "../Components/DaftarFilm/DaftarFilm.jsx";
// import ManajemenFilm from "../Components/Manajemen Admin Film/ManajemenFilm.jsx"
// import UploadFilm from "../Components/Manajemen Admin Film/UploadFilm.jsx"s

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        children: [
            // Path default untuk login
            {
                path: "/",
                element: <LoginPage />,  // Arahkan ke halaman login
            },
            {
                path: "/login",  // Path khusus untuk login
                element: <LoginPage />,
            },
            {
                path: "/register",  // Path untuk register
                element: <RegisterPage />,
            },
            {
                path: "/home",  // Path untuk halaman home
                element: <HomePage />,
            },
            {
                path: "/daftarFilm",  // Path untuk halaman home
                element: <DaftarFilm />,
            },
            // {
            //     path: "/admin",  // Path untuk halaman admin
            //     element: <AdminPage />,  // Halaman admin
            // },
            // {
            //     path: "/manajemenFilm",  // Path untuk halaman admin
            //     element: <ManajemenFilm />,  // Halaman admin
            // },
            // {
            //     path: "/uploadFilm",  // Path untuk halaman admin
            //     element: <UploadFilm />,  // Halaman admin
            // },
        ],
    },
]);

const AppRouter = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
