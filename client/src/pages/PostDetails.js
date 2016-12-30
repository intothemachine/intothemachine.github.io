import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import {browserHistory,Link} from 'react-router';

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
        <Header showLinks="editPost"  postId={this.state.postDetail._id}/>
        <div>
          <div>{JSON.stringify(this.state.postDetail)}</div>
        {/* the '()=>{this.func()}' is imp bcos if we dont use '()=>' before the func, the function gets executed on page load, and every item u select gets delteted when viewed.*/}
          <button onClick={()=>{this.deletePost(this.props.params.id)}}><Link to="/">delete</Link></button>
        </div>
      </div>
      );    
  }
}