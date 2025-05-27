import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./components/Home.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*承認不要ルート*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/*承認チェク付きルート*/}
                <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
