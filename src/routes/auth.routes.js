
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'

const AuthRoutes = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes