import SideBar from './components/SideBar/SideBar'
import TimeLine from './components/TimeLine/TimeLine'
import Widget from './components/Widget/Widget'
import Grid from '@mui/material/Unstable_Grid2';
import { Container, minHeight } from '@mui/system';

function App() {

  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid xs={3}>
            <SideBar />
          </Grid>
          <Grid xs={6}>
            <TimeLine />
          </Grid>
          <Grid xs={3}>
            <Widget />
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default App
