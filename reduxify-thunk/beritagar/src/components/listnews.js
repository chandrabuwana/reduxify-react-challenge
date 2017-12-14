import React , { Component } from 'react'
import { newsOneGet } from '../actions/index'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from '../App'

class ListNews extends Component{
  constructor(props){
    super(props)
    this.state={
      lengthP:0
    }
  }

  componentWillMount(){
    this.props.newsOneGet()
  }

  render(){
    return(
      <div className="App">
        <img className="image -img-responsive" src={this.props.newsone.urlToImage}/>
        <p><b>{this.props.newsone.title}</b></p>
        <p>{this.props.newsone.description}</p>
      </div>
    )
  }
}

const mapState = state =>{
  return{
    newsone: state.news.newsone
  }
}

const mapDispatchToProps = (dispatch)=>{
  let params = window.location.pathname.split('/')
  let lengthParams =  Number(params[2])
  return{
    newsOneGet:()=> dispatch(newsOneGet(lengthParams))
  }
}

const send = connect(mapState,mapDispatchToProps)(ListNews)

export default send