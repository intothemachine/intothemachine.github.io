import React,{Component} from 'react';
import Post from './Post'
import axios from 'axios'

export default class Posts extends Component{



	getPosts(){
		let PostsData;
		axios.get('api/posts')
  .then(function (response) {
  	PostsData = response.data;
  	console.log(PostsData);
  	PostsData.map((postItem,index)=> (<Post key={postItem.id} postData={postItem} />))    		
  })
  .catch(function (error) {
    console.log(error);
  });
	console.log(PostsData);

	}

	render(){
    return(<div>
      {this.getPosts()}
        </div>
      );

	}

}