import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { element } from "prop-types";



export const Home = () => {
	
	const { store, actions } = useContext(Context);

const auxdatos = store.characters;

console.log(auxdatos);
<div className="text-center mt-5">
	{auxdatos.map((el, i) => {
		
		return (
			<div key={i} className="card" style={{ width: "18rem" }}>
				<img src="..." class="card-img-top" alt="..."></img>
				<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		)
	}


	)}
	<p>aqui metemos ScrollToTop

	</p>
</div>
};
