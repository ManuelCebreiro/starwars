import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


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
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>
						
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>


				{/* </Link> */}
			</div>
		</nav>
	);
};
