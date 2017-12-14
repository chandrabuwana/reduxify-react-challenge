import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import {updateNews} from './actions/index'
import {connect} from 'react-redux'

import './App.css';
import axios from 'axios'

import ListNews from './components/listnews'
import DetailNews from './components/detailnews'

class App extends Component {

constructor(props){
  super(props)
  this.state ={
    news: []
  }
}

  componentWillMount(){
    var self = this;
    axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=44ef8cde89194d51ad8b42b69516d151')
    .then(function(response){
      console.log('INI BERITA',response);
      const news = response.data.articles
      self.props.updateNews(news)
    })
    .catch(function(error){
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
            <div>
              <h1>halo</h1>
              <ListNews/>
              <Route exact path = "/" render= {(props) => ( <ListNews/> )} />
              <Route exact path="/news/:id" render={(props) =>(<DetailNews news={this.props.news}/>)}/>              
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps  = (state) => {
  console.log('ini state di app',state);
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateNews: (params) => dispatch(updateNews(params))
  }
}

const send = connect(mapStateToProps , mapDispatchToProps)(App)
export default send;
