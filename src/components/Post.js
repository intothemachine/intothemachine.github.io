import React,{Component} from 'react'

export default class Post extends Component{
	
	render(){
		return(
			<div className="row">
		{JSON.stringify(this.props.postData)}
		</div>
			);		
	}
}