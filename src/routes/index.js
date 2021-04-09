
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singnInActions from '../store/actions/signin'

const Routes = (props) => {
  return props.signin.length ? <AppRoutes /> : <AuthRoutes />
}

const mapStateToProps = state => ({
  signin: state.signin,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(singnInActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);