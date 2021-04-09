import React from 'react'
import { Grid, Box, Paper, Divider } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import './styles.css'

const Result = (props) => {
  const resultData = props.location.resultData
  const economy = resultData.economia
  const potential = resultData.potencial
  const companies = resultData.integradores_regiao
  const maxCompanies = resultData.integradores_maximo

  function capitalize(s) {
    const sLow = s.toLowerCase()
    return sLow[0].toUpperCase() + sLow.slice(1)
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
            <p className="title-content-result">Economia: </p>
            <p className="text-result">{economy}</p>
          </div>
          <Divider />
          <div className="result-text-container">
            <p className="title-content-result">Potencial: </p>
            <p className="text-result">{capitalize(potential)}</p>
          </div>
          <Divider />
          <div className="result-text-container">
            <p className="title-content-result">Qtd. Empresas parceiras: </p>
            <p className="text-result">{companies}</p>
          </div>
          <Divider />
          <div className="result-text-container">
            <p className="title-content-result">Qtd. Empresas parceiras (Espaço mais abrangente): </p>
            <p className="text-result">{maxCompanies}</p>
          </div>
          <Divider />
          <p className="title-table">Parcelas: </p>
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
