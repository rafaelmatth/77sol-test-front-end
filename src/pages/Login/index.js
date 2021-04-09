import React from 'react'
import { TextField, Avatar, Button, Grid } from '@material-ui/core';

import './styles.css'

const Login = () => {
  return (
    <div className="container-login">
      <Grid sm={3} xs={11} className="grid-login">
        <Avatar className="avatar-login"></Avatar>
        <TextField id="outlined-basic" className="input-login" label="E-mail" variant="outlined" type="email" />
        <TextField id="outlined-basic" className="input-login" label="Senha" variant="outlined" type="email" />
        <Button variant="contained" color="primary" className="button-login" disableElevation>Login</Button>
      </Grid>
    </div>
  )
}

export default Login