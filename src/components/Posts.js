import React,{Component} from 'react';
import {PostsData} from '../data'
import Post from './Post'

export default class Posts extends Component{



	getPost(){
		console.log(PostsData);
		PostsData.map((post)=>
			(<li>
						<Post post={post}></Post>
						</li>
			)
			);
	}

	render(){
    return(<div>
      {PostsData.map((postItem,index)=> (<Post key={postItem.id} postData={postItem} />))}
        </div>
      );

	}

}