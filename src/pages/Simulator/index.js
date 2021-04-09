import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core';
import './styles.css'

const Simulator = () => {
  return (
    <div className="container-simulator">
      <Grid xs={11} sm={8} className="grid-simulator">
        <p className="title">Simulador</p>
        <Grid sm={5} xs={12} className="grid-form-simulator">
          <TextField id="outlined-basic" className="input-simulator" label="CEP" variant="outlined" type="email" />
          <TextField id="outlined-basic" className="input-simulator" label="Valor da conta" variant="outlined" type="email" />
          <TextField id="outlined-basic" className="input-simulator" label="Tipo do telhado" variant="outlined" type="email" />
          <Button variant="contained" color="primary" disableElevation>Simular</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Simulator