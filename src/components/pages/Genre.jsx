import React, { useEffect } from "react";

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
    const fetchGenre = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=080f1b1cb9978ae08b86c1ca6a48ed74&language=es-AR`
        );
        const { genres } = await data.json();
        console.log(genres);
        setGenre(genres);
    };

    useEffect(() => {
        fetchGenre();
    }, []);


    const CategoryAdd = (genres) => {
        setValue([...value, genres]);
        setGenre(genre.filter((g) => g.id !== genres.id));
        setPage(1);
    };

    const CategoryRemove = (genres) => {
        setValue(value.filter((g) => g.id !== genres.id));
        setGenre([...genre, genres]);
        setPage(1);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-12 d-flex flex-wrap">
                        {value && 
                            value.map((Val) => {
                                const { id, name } = Val;
                                return (
                                    <>
                                        <div className="m-2" key={id}>
                                            <button
                                                className="btn-warning text-white px-4 py-2 text-center buttons"
                                                onClick={() => CategoryRemove(Val)}
                                            >
                                                {name}
                                            </button>
                                        </div>
                                    </>
                                );
                            })}

                        {genre && 
                            genre.map((Gen) => {
                                const { id, name } = Gen;
                                return (
                                    <>
                                        <div className="m-2" key={id}>
                                            <button
                                                className="btn-warning text-white px-4 py-2 text-center button"
                                                onClick={() => CategoryAdd(Gen)}
                                            >
                                                {name}
                                            </button>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Genre;