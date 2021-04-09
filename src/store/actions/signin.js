export function signIn(token){
  return {
    type: 'ADD_TOKEN',
    token,
  }
}
