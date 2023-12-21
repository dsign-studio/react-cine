import React, { useState, useEffect } from "react";
import Pagination from "../pages/Pagination";
import { img_300, unavailable } from "../../services/config.js";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchSearch = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=080f1b1cb9978ae08b86c1ca6a48ed74&language=es-AR&query=${searchText}&page=${page}&include_adult=false`
        );
        const { results } = await data.json();
        setContent(results);
    };

    useEffect(() => {
        fetchSearch();
    }, []);

    const Search = () => {
        fetchSearch();
    };

    const Trigger = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <>
            <div className="container">
                <div className="row pt-3 mb-5 pb-5">
                    <div className="col-12 pt-5 pb-3 mt-5 d-flex justify-content-center align-items-center">
                        <input
                            type="text"
                            placeholder="buscar..."
                            onChange={Trigger}
                            className="form-control-lg col-6 search bg-dark border border-0"
                        />
                        <input
                            type="submit"
                            className="btn btn-primary mx-2 col-md-1 col-sm-2 py-2"
                            value="Buscar"
                            onClick={Search}
                        />
                    </div>
                    {content &&
                        content.map((Val) => {
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
                                    <div className="col-md-3 col-sm-4 py-3" id="card" key={id}>
                                        <div className="card bg-dark" key={id}>
                                            <img
                                                src={
                                                    poster_path
                                                        ? `${img_300}/${poster_path}`
                                                        : unavailable
                                                }
                                                className="card-img-top pt-3 pb-0 px-3"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-5">
                                                    {title || name}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    {page > 1 && <Pagination page={page} setPage={setPage} />}
                </div>
            </div>
        </>
    );
};

export default Search;