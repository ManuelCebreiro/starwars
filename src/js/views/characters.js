import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

import "../../styles/demo.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])

	const datoscharacters = store.characters;  
	const img= "https://static.wikia.nocookie.net/esstarwars/images/1/15/Luke_Skywalker_Ep_7_SWCT.png/revision/latest?cb=20170215060145"

	return (

		<div className="container-fluid py-2" >
			<h1 style={{ color: "red" }}>Characters</h1>
			<div className="d-flex flex-row flex-nowrap" id="scrollhorizontal">
				{ datoscharacters.length > 0 && datoscharacters.map((el) => {

					return (
						<Card uid={el.uid} name={el.name} url={el.url} key={el.uid} img={img}/>
					)
				}
				)}				
			</div>
		</div>
	)
			}

			export default Characters