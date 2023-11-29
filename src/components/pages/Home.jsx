import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../../services/config.js";
import Pagination from "./Pagination.jsx";

const Home = () => {
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const data = await fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=080f1b1cb9978ae08b86c1ca6a48ed74&page=${page}`);
        const dataJ = await data.json();
        // console.log(dataJ.results);
        setState(dataJ.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]);

    //console.log(state);

    return (
        <>
                <div className="row">
                    <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-decoration-underline head d-flex justify-content-center align-items-center">
                        <h4 className="fs-2">Mas vistas en Argentina</h4>
                    </div>
                    {state.map((Val) => {
                        const {
                            name,
                            title,
                            poster_path,
                            first_air_date,
                            release_date,
                            media_type,
                            id,
                        } = Val;
                        return (
                            <>
                                <div
                                    key={id}
                                    className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
                                    id="card"
                                >

                                    <div className="card bg-dark">
                                        <img
                                            src={
                                                poster_path ? `${img_300}/${poster_path}` : unavailable
                                            }
                                            className="card-img-top pt-3 pb-0 px-3"
                                            alt={title}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-5">
                                                {title || name}
                                            </h5>
                                            <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                                                <div>{media_type === "tv" ? "TV" : "Movie"}</div>
                                                <div>{first_air_date || release_date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    <Pagination page={page} setPage={setPage} />
                </div>
        </>
    );
};

export default Home;