import React,{Component} from 'react';
import Header from '../components/Header';
import PostFormNew from '../components/PostFormNew';

export default class PostNew extends Component{

	render(){
		return(
			<div>
			<Header showLinks=""/>
			<PostFormNew />
			</div>
			);
	}

}	