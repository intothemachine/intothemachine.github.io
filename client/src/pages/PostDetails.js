import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';

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
  render(){
    console.log("hi");
    return(
      <div>
      <Header showLinks="editDelPost"/>
      <div></div>
      <div>{JSON.stringify(this.state.postDetail)}</div>
      </div>
      );    
  }
}