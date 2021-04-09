import React, { useState } from 'react'
import { TextField, Avatar, Button, Grid, CircularProgress } from '@material-ui/core';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singnInActions from '../../store/actions/signin'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

import { API } from '../../services/api';

import './styles.css'

const Login = (props) => {
  let history = useHistory();

  const [mail, setMail] = useState('');
  const [pass, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  async function handleAuth() {
    setLoading(true)
    await API.post('/api/auth', { email: mail, password: pass })
      .then((item) => {
        setLoading(false);
        props.signIn(item.data.access_token);
        history.push({
          pathname: '/simulator',
        });
      })
      .catch((item) => {
        setLoading(false)
        toast.error("Credenciais Inválidas", {
          autoClose: 2500
        });
      });
  };

  return (
    <>
      <div className="container-login">
        <Grid sm={3} xs={11} className="grid-login">
          <Avatar className="avatar-login"></Avatar>
          <TextField onChange={(e) => setMail(e.target.value)} className="input-login" label="E-mail" variant="outlined" type="email" />
          <TextField onChange={(e) => setPassword(e.target.value)} className="input-login" label="Senha" variant="outlined" type="password" />
          <Button onClick={handleAuth} variant="contained" color="primary" className="button-login" disableElevation>
            {loading == true ? <CircularProgress style={{ color: '#fff', width: '25px', height: '25px', padding: '5px' }} /> : 'Login'}
          </Button>
          <ToastContainer />
        </Grid>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  signin: state.signin,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(singnInActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
