import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children, media_type, id }) => {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);

    const fetchData = async () => {
        const Data = await fetch(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=080f1b1cb9978ae08b86c1ca6a48ed74&language=es-AR`
        );
        const DataJ = await Data.json();
        setData(DataJ.adult);
    };

    const fetchVideo = async () => {
        const ytvideo = await fetch(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=080f1b1cb9978ae08b86c1ca6a48ed74&language=es-AR`
        );
        const YTvideo = await ytvideo.json();
        console.log(YTvideo.results[0]);
        setVideo(YTvideo.results[0]);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);

    return (
        <AppContext.Provider value={{ video }}>{children}</AppContext.Provider>
    );
};

export { AppContext, AppProvider };