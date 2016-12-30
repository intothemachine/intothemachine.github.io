import React,{Component} from 'react';
import Header from '../components/Header';
import PostFormNew from '../components/PostFormNew';

export default class PostNew extends Component{

	render(){
		return(
			<div>
		{/* dont get the edit/new post in the header when creating new post*/}
			<Header showLinks=""/>
			<div>
				<PostFormNew />
			</div>
			</div>
			);
	}

}	