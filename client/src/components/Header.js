import React, {Component} from 'react';
import {Link} from 'react-router';


export default class Header extends Component{
	render() {
		const link= this.props.showLinks;
		const postId = this.props.postId;
		console.log("inside the Header"+postId);
		const linkItems=()=>{
			if(link == "newPost"){
				return(<li key={1}><Link to="/postNew">New Post</Link></li>);
			}
			// to avoid the limitation of not able to return adjacent jsx elements, return elements as a array.
			else if(link == "editDelPost"){
				return(<li key={2}><Link to={"/postEdit/"+postId}>Edit Post</Link></li>);
			}
		}
		return(
		<ul className='nav  nav-pills navbar-right'>
		<li key={0}>
			<Link to="/">Home</Link>
		</li>
		{
			linkItems()
		}
		<li key={3}>
			<Link to="/about">About</Link>
		</li>
		</ul>
		);
	}

}

