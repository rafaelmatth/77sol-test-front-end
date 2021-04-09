import React from 'react'
import { Grid, Box } from '@material-ui/core';

import './styles.css'

const Result = () => {
  return (
    <div className="container-result">
      <Grid sm={8} xs={11} className="grid-result">
        <p className="title">Resultado</p>
        <Box boxShadow={3} className="box-result"></Box>
      </Grid>
    </div>
  )
}

export default Result