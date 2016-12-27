import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Header extends Component{
	render() {
		const link= this.props.showLinks;
		const linkItems=()=>{
			if(link == "newPost"){
				return(<li><Link to="/postNew">New Post</Link></li>);
			}
			// to avoid the limitation of not able to return adjacent jsx elements.
			else if(link == "editDelPost"){
				return([<li><Link to="/">Edit Post</Link></li>,
					<li><Link to="/">Delete Post</Link></li>]);
			}
		}
		return(
		<ul className='nav  nav-pills navbar-right'>
		<li>
			<Link to="/">Home</Link>
		</li>
		{
			linkItems()
		}
		<li>
			<Link to="/about">About</Link>
		</li>
		</ul>
		);
	}

}

