import { Container, Grid, TextField } from '@mui/material';
import { SvgComponent } from '../../assets';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
// components
import Page from '../../components/Page';

export default function UserProfile() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <h1 style={{ marginBottom: '25px' }}>Linea 1</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SvgComponent />
        </div>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid container item xs={6} md={6} lg={6} xl={6}>
            <Grid item xs={12}>
              <TextField
                label="Producto"
                id="standard-size-normal"
                defaultValue="ACTRON RAP ACC cap x20 AR/UR"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Lote" id="standard-size-normal" defaultValue="ARE495" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hora de Inicio"
                id="standard-size-normal"
                defaultValue="14/03/2014 11:23:19"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Minutos en Marcha" id="standard-size-normal" defaultValue="186" variant="standard" />
            </Grid>
          </Grid>
          <Grid container item xs={6} md={6} lg={6} xl={6}>
            <TextField label="Estuches/min" id="standard-size-normal" defaultValue="0" variant="standard" />
            <TextField label="Estuches consumidos" id="standard-size-normal" defaultValue="54395" variant="standard" />
            <TextField label="Estruches producidos" id="standard-size-normal" defaultValue="54000" variant="standard" />
            <TextField label="Cant. de Bultos" id="standard-size-normal" defaultValue="669" variant="standard" />
            <TextField label="Cant. de Paletas" id="standard-size-normal" defaultValue="5" variant="standard" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
