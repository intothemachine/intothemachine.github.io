import React,{Component} from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';

export default class PostNew extends Component{

	render(){
		return(
			<div>
			<Header showLinks=""/>
			<PostForm />
			</div>
			);
	}

}	