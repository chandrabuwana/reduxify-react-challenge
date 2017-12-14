// import {combineReducers} from 'redux'

const stateNews ={
  news:[],
  details:[]
}

const datNews= (state = stateNews,actions)=>{
  switch (actions.type) {
    case 'NEWS':
      return {...state, news: actions.payload}
      default: 
        return state
  }
}

export default datNews