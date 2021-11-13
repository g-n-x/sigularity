import React from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { deepOrange, grey } from '@mui/material/colors'
import ContentViewer from './components/ContentViewer';


const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: deepOrange,
      divider: deepOrange[700],
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
      text: {
        primary: '#fff',
        secondary: grey[500],
      }
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <ContentViewer></ContentViewer>
      </ThemeProvider>
    </>
  );
}

export default App;
