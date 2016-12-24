import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Header extends Component{
	render() {
		return(
		<ul className='nav  nav-pills navbar-right'>
		<li>
			<Link to="/postNew">New Post</Link>
		</li>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/about">About</Link>
		</li>
		</ul>
		);
	}

}

