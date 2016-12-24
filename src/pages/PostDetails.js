import React,{Component} from 'react';
import {PostsData} from '../data'

export default class PostDetails extends Component{
  fetchPost(id){
    return(PostsData.find((postItem)=>(postItem.id == id)));
  }
  render(){
    console.log("hi");
    return(
      <div>
      <div>Post Details, where are you</div>
      <div>{JSON.stringify(this.fetchPost(this.props.params.id))}</div>      
      </div>
      );    
  }
}