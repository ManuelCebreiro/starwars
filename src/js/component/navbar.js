import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from 'react-bootstrap/Dropdown';


export const Navbar = () => {
	const img = "http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"

	const { store, actions } = useContext(Context);
	const fav = store.favoritos

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4 bg-black">
			<Link to="/">
				<img id="img1" src={img}>
				</img>

			</Link>
			<div className="ml-auto">
				{/* <Link to="/Demo"> */}
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favoritos
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{fav.map((texto, index) =>{
							return(
							<Dropdown.Item 
							key={index}
							>
								{texto}
								<button
										type="button"
										className="btn-close "
										onClick={() => actions.setborrarfavorito(texto)}></button>
							
							</Dropdown.Item>

							)
							}
						)	
						}

					</Dropdown.Menu>
				</Dropdown>


				{/* </Link> */}
			</div>
		</nav>
	);
};
