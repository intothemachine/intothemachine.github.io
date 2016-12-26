import React,{Component} from 'react';
import Post from './Post'
import axios from 'axios'


export default class Posts extends Component{

constructor(props) {
    super(props);
    this.state = {
      PostsData: [],
    };
    this.getPosts();
  }
	
	getPosts(){
	axios.get('api/posts')
  	.then((response)=> {
  		this.setState({
  			PostsData: response.data
  		});  	
  	})
	.catch((error)=> {
		console.log(error);
	});
	}

	render(){		
    return(
    	<div>
      {this.state.PostsData.map((postItem)=> (<Post key={postItem._id} postData={postItem} />))}
        </div>);
	}
}