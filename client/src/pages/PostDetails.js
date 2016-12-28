import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import {browserHistory} from 'react-router';

export default class PostDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      postDetail: {}
    }
  }
  componentWillMount(){
    this.fetchPost(this.props.params.id);
  }
  fetchPost(id){
    axios.get('/api/posts/'+id)
    .then((response)=> {
      this.setState({
        postDetail: response.data
      });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deletePost(id){
    axios.delete('/api/posts/'+id)
      .then((response)=> {
        console.log(response);}
        )
      .catch((error)=> {
        console.log(error);}
        );
      
  }  
  render(){
    console.log("hi");
    return(
      <div>
      <Header showLinks="editDelPost"  postId={this.state.postDetail._id}/>
      <div></div>
      <div>{JSON.stringify(this.state.postDetail)}</div>
      <button onClick={this.deletePost(this.props.params.id)}>delete</button>
      </div>
      );    
  }
}