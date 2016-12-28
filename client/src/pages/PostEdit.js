import React,{Component} from 'react';
import Header from '../components/Header';
import PostFormEdit from '../components/PostFormEdit';

export default class PostEdit extends Component{

	render(){
		return(
			<div>
			<Header showLinks=""/>
			<PostFormEdit postId= {this.props.params.id} />
			</div>
			);
	}

}	