import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const img = "http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4 bg-black">
			<Link to="/">
				<img id="img1" src={img}>
				</img>

			</Link>
			<div className="ml-auto">
				{/* <Link to="/Demo"> */}
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Favorites
						<span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><a href="#">Primera opcion</a></li>
						<li><a href="#">Segunda opcion</a></li>
						<li><a href="#">Tercera opcion</a></li>
					</ul>
				</div>
				
				{/* </Link> */}
			</div>
		</nav>
	);
};
