import React from "react"

export const Card = ({ uid, name, url }) => {

    return (

        <div className="text-center mx-3 my-3" style={{ width: "18rem" }}>
            <div key={uid} className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )

}