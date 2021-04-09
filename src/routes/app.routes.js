import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Simulator from '../pages/Simulator'
import Result from '../pages/Result'

const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Simulator} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes