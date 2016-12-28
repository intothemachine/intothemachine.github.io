import React,{Component} from 'react';
import {PostsData} from '../data';
import axios from 'axios'

export default class PostFormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      title: '',
      categorie: '',
      content: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    this.getPostContent(this.props.postId);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeCategorie(event) {
    this.setState({categorie: event.target.value});
  }
  
  handleChangeContent(event) {
    this.setState({content: event.target.value});
  }

  getPostContent(id){
    axios.get('/api/posts/'+id)
    .then((response)=> {
      const newPost = response.data;
       this.setState({
      _id: newPost._id,
      title: newPost.title,
      categorie: newPost.categorie,
      content: newPost.content,
    });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSubmit(event) {
    const newPost = this.state;
    console.log("new post : "+newPost);
    axios.put('/api/posts/'+newPost._id,newPost)
  .then( (response)=> {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </label>
          <label>
          Categorie:
          <input type="text" value={this.state.categorie} onChange={this.handleChangeCategorie} />
        </label>
                <label>
          Content:
          <input type="text" value={this.state.content} onChange={this.handleChangeContent} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
