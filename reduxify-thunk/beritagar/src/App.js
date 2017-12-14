import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom' 
import { newsGet,newsOneGet } from './actions/index'
import { connect } from 'react-redux'

import './App.css';
import axios from 'axios'
import newNews from './components/newNews'
import ListNews from './components/listnews'
// import DetailNews from './components/detailnews'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      news: []
    }
  }

  nindex(index){
    this.props.newsOneGet(index)
  }

  componentWillMount(){
    this.props.newsGet()
  }
  
  render() {
    let locpar = window.location.pathname.split('/')
    let params = locpar[2]
    return (
      <Router>
        <div className="App">
          <div className="container">
            {this.props.news.map((data,index)=>{
              return(
                <div className="col-md-6">
                  <Link to={'/news/' + index}><p onClick={ ()=> this.nindex(index)}><b>{data.title}</b></p></Link>
                  <p>{data.description}</p>              
                </div>
              )
            })}
          </div>
          <div className="col-md-6">
            <div>
              <h3>Full news</h3>                  
            </div>
            <Route exact path="/news/:id" render={(props)=>(<ListNews/>)}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => {
  console.log('ini state di app',state);
  return {
    news: state.news.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newsGet:  ()=> dispatch(newsGet()),
    newsOneGet: (lengthparams) => dispatch(newsOneGet(lengthparams))
  }
}

const send = connect(mapState , mapDispatchToProps)(App)
export default send;
