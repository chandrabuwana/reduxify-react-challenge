import * as actionTypes from './actionType'
import axios from 'axios'

const url ='https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=44ef8cde89194d51ad8b42b69516d151'

export const getNewsSuccess = (news)=>{
 return{
   type: actionTypes.GET_NEWS_SUCCESS,news
 } 
}

export const getNewsOneSuccess =(newsone)=>{
  return {
    type:actionTypes.GET_NEWS_ONE_SUCCESS,newsone
  }
}

export const newsGet =()=>{
  return (dispatch)=>{
    return axios.get(url)
    .then(response =>{
      dispatch(getNewsSuccess(response.data))
    })
    .catch(err =>{
      throw(err)
    })
  }
}

export const newsOneGet =(newsOne)=>{
  return (dispatch)=>{
    return axios.get(url,newsOne)
    .then(response=>{
      dispatch(getNewsOneSuccess(response.data.articles[newsOne]))
    })
    .catch(error =>{
      throw(error)
    })
  }
}