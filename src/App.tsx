import SideBar from './components/SideBar/SideBar'
import TimeLine from './components/TimeLine/TimeLine'
import Widgets from './components/Widgets/Widgets'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';

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
            <Widgets />
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default App
