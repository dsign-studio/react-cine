import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import Movies from "./components/pages/movies.jsx";
import Trending from "./components/pages/trending.jsx";
import TV from "./components/pages/tv.jsx";
import Search from "./components/views/search.jsx";
import Error from "./components/views/error.jsx";

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
