
import './App.css';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import InfoHeader from './components/InfoHeader/InfoHeader';
import Article from './components/Article/Article';


const useStyles = makeStyles(theme =>({
  container: {
    marginTop: "120px!important",
    width : '50%',
    margin : '0 auto',
    [theme.breakpoints.down('md')] : {
      width : '75%',
    },
    [theme.breakpoints.down('sm')] : { 
      width : '85%',

    }
    
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Article />
      </Box>
    </Box>
  );
}

export default App;
