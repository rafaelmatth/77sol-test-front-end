export default function signin(state = [], action){
  switch(action.type){
    case 'ADD_TOKEN':
      return [...state, {
        token: action.token,
      }]
    default:
      return state
  }
}
