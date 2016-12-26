import React,{Component} from 'react';
import {PostsData} from '../data';
import axios from 'axios'

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categorie: '',
      content: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  handleSubmit(event) {
    let newPost = this.state;
    console.log(newPost);
    axios.post('api/posts', newPost)
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
