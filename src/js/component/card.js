import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";


export const Card = ({ uid, name, url, demo }) => {
    // console.log(url)
    const { store, actions } = useContext(Context);
	const [favorito, setfavorito] = useState([]);
    const [favoritonab, setfavoritonab] = useState([]);

    const enlace = `/${demo}/${name}/${uid}`

    return (

        <div className="cartacss text-center mx-3 my-3" style={{ width: "18rem" }}>
            <div key={uid} className="card " style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/${demo}/${uid}.jpg`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to={enlace} onClick={() => actions.getId(url)}>
                                <a className="btn btn-outline-primary">Leer más</a>
                            </Link>

                        </div>
                        <div>
                            <button type="button" onClick={()=>{
                             actions.setfavoritos(name,enlace,url)
                             actions.setfavoritonab(name)

                            }} className="btn btn-outline-warning">  
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}