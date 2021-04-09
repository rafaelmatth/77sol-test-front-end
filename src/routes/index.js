import Login from '../pages/Login'
import Simulator from '../pages/Simulator'
import Result from '../pages/Result'

import React from "react";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singnInActions from '../store/actions/signin'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {props.signin.length ? (<Route path="/simulator" component={Simulator} />) : (<Redirect to="/" />)}
        {props.signin.length ? (<Route path="/result" component={Result} />) : (<Redirect to="/" />)}
      </Switch>
    </BrowserRouter>
  )
};

const mapStateToProps = state => ({
  signin: state.signin,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(singnInActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)