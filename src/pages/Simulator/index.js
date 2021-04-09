import React, { useState } from 'react'
import { TextField, Button, Grid, CircularProgress } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singnInActions from '../../store/actions/signin'

import './styles.css'

import { API } from '../../services/api';

const Simulator = (props) => {
  let history = useHistory();

  const [zipocode, setZipcode] = useState('');
  const [value, setValue] = useState('');
  const [roofType, setRoofType] = useState('');
  const [loading, setLoading] = useState(false)

  const dataPost = {
    "zipcode": zipocode,
    "value": value,
    "roof_type": roofType
  }

  async function handleSimulation(){
    
    setLoading(true)
    await API.post('/api/simulate_installments', dataPost, { headers: { "Authorization": `${props.signin[0].token}` } })
      .then((item) => {
        setLoading(false);
        history.push({
          pathname: '/result',
          resultData: item.data
        });
      })
      .catch((item) => {
        setLoading(false)
      });
  };

  return (
    <div className="container-simulator">
      <Grid xs={11} sm={8} className="grid-simulator">
        <p className="title">Simulador</p>
        <Grid sm={5} xs={12} className="grid-form-simulator">
          <InputMask  onChange={(e) => setZipcode(e.target.value)} mask="99999-999">
            {() => <TextField className="input-simulator" label="CEP" variant="outlined" type="text" />}
          </InputMask>
          <TextField onChange={(e) => setValue(e.target.value)} className="input-simulator" label="Valor da conta" variant="outlined" type="number" />
          <TextField onChange={(e) => setRoofType(e.target.value)} className="input-simulator" label="Tipo do telhado" variant="outlined" type="text" />
          <Button onClick={handleSimulation} variant="contained" color="primary" className="button-login" disableElevation>
            {loading == true ? <CircularProgress style={{color: '#fff', width: '25px', height: '25px', padding: '5px' }} /> : 'Simular'}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  signin: state.signin,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(singnInActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);
