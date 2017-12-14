import React,{Component} from 'react'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import {updateNews} from '../actions/index'
import {connect} from 'react-redux'

class ListNews extends Component{
  constructor(props){
    super(props)
    // this.state={
    //   news:[]
    // }
  }
  // 
  render(){
    console.log('ini hasil props new',this.props.news);
    return(
      <div className="App">
        <div className="container">
          {this.props.news.map((data, index)=>{
          return (
            <div className="col-md-6">
              <p>Author: {data.author}</p>
              <h2><Link to={'/news/' + index} key="index"> <b>{data.title}</b> </Link> </h2>
              // <img className="pic img-responsive" src={data.urlToImage} alt=""/>              
            </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  console.log('ini mapstatetoprops',state);
  return {
    news: state.news
  }
  // console.log('ini news',news);
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateNews: (params) => dispatch(updateNews(params))
  }
}
const send = connect( mapStateToProps,mapDispatchToProps)(ListNews)
export default connect(mapStateToProps)(ListNews)