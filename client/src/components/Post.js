import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component{
	
	render(){
		return(
			<div className="row">
				<Link to={'/postdetails/'+this.props.postData._id}>{this.props.postData.title}</Link>
		</div>
			);		
	}
}