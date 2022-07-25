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
	// const img= "https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg?quality=52"

	return (

		<div className="container-fluid py-2" >
			<h1 style={{ color: "red" }}>Characters</h1>
			<div className="d-flex flex-row flex-nowrap" id="scrollhorizontal">
				{ datoscharacters.length > 0 && datoscharacters.map((el) => {

					return (
						<Card demo={"characters"} uid={el.uid} name={el.name} url={el.url}/>
						
					)
				}
				)}				
			</div>
		</div>
	)
			}

			export default Characters