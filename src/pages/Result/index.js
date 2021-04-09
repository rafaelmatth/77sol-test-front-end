import React from 'react'
import { Grid, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './styles.css'

const Result = (props) => {
  const resultData = props.location.resultData
  const economy = resultData.economia
  const potential = resultData.potencial

  function capitalize(s) {
    const sLow = s.toLowerCase()
    return sLow[0].toUpperCase() + sLow.slice(1);
  }

  function formatFloatNumber(number_value) {
    const number = Math.round(parseFloat(number_value)).toFixed(2)
    return String(number).replace('.', ',')
  }

  return (
    <div className="container-result">
      <Grid sm={8} xs={11} className="grid-result">
        <p className="title">Resultado</p>
        <Box boxShadow={3} className="box-result">
          <div className="result-text-container">
            <p className="text-result">Economia: </p>
            <p className="text-result">{economy}</p>
          </div>
          <div className="result-text-container">
            <p className="text-result">Potencial: </p>
            <p className="text-result">{capitalize(potential)}</p>
          </div>

          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Número de Parcelas</TableCell>
                  <TableCell align="right">Taxa mínima</TableCell>
                  <TableCell align="right">Taxa máxima</TableCell>
                  <TableCell align="right">Valor minimo</TableCell>
                  <TableCell align="right">Valor máximo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultData.parcelamento.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.parcelas}
                    </TableCell>
                    <TableCell align="right">{row.taxa_minina}</TableCell>
                    <TableCell align="right">{row.taxa_maxima}</TableCell>
                    <TableCell align="right">R$ {formatFloatNumber(row.valor_minimo)}</TableCell>
                    <TableCell align="right">R$ {formatFloatNumber(row.valor_maximo)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </div>
  )
}

export default Result
