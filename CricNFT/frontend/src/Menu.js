import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {

	return(
			<Navbar>
  			<Container>
    			<Navbar.Brand as={Link} to="/" style={{color : "#ffffff"}}>CRIC<span style={{color:"#51E8EF"}}>SHOT</span></Navbar.Brand>
    				<Nav className="mr-auto">
        				<Nav.Link as={Link} to="/Marketplace" style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>ARKETPLACE</Nav.Link>
        				<Nav.Link as={Link} to="/giveaway" style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>G</span>IVEAWAYS</Nav.Link>
						<Nav.Link as={Link} to="/about" style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>A</span>BOUT</Nav.Link>
      				</Nav>
    		</Container>
		</Navbar>	
	)
}

export default Menu;