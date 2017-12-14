import React,{Component}  from 'react'
import axios  from 'axios';
// import App from '../App.js'
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'

class DetailNews extends Component{
  constructor(props){
    super(props)
    this.state={
      detail:[]

    }
  }

  componentDidMount(){
    let params = window.location.pathname.split('/')
    let lengthp = Number(params[2])
    var self =this;
    axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=44ef8cde89194d51ad8b42b69516d151')
    .then(function(response){
      const details = response.data.articles[lengthp]
      self.setState({details})
      console.log('ini isi details',details);
    })
    .catch(err=>{
      console.error(err)
    })
  }
  render(){
    return(
      <div className="App">
        <div className="container">
          <div className="mid">
            <img className ="pic img-responsive" src={this.state.detail.urlToImage} alt=""/>
            <h3>{this.state.detail.title}</h3>
            <a href={this.state.detail.url}><p>{this.state.detail.url}</p></a>
          </div>
        </div>
      </div>
    )
  }
}



export default DetailNews;