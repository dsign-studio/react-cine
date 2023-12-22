import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Movies from "./components/pages/Movies";
import Trending from "./components/pages/Trending";
import TV from "./components/pages/Tv";
import Search from "./components/views/Search";
import Error from "./components/views/Error";

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
