import push from 'connected-react-router';

export function signIn(token){
  return {
    type: 'ADD_TOKEN',
    token,
  }
}