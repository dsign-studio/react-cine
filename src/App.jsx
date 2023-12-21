import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Movies from "./Components/Pages/Movies";
import Trending from "./Components/Pages/Trending";
import TV from "./Components/Pages/TV";
import Search from "./Components/Views/Search";
import Error from "./Components/Views/Error";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Trending />} exact />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tv" element={<TV />} />
                    <Route path="/search" element={<Search />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};


export default App;
