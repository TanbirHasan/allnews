
import './App.css';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './components/Header/Header';
import InfoHeader from './components/InfoHeader/InfoHeader';


const useStyles = makeStyles({
  container: {
    marginTop: "120px!important",
    width : '50%',
    margin : '0 auto',
    
  },
});


function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
      </Box>
    </Box>
  );
}

export default App;