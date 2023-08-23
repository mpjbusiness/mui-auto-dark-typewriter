import './App.css';
import ResponsiveDrawerNavBar from './components/ResponsiveDrawerNavBar';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import Typewriter from './components/Typewriter';
import Codebox from './components/Codebox'

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveDrawerNavBar />
        <Container>
        <Box sx={{mt: '6rem' }}>
      Javascript Code Auto-coloring using PrismJS
      <Codebox line={`console.log("Goodbye World")`} language={`js`} githubLink={`https://github.com`} />
      <br />
      HTML Code Auto-coloring using PrismJS
      <Codebox line={`<!DOCTYPE html>
          <html>
          <head>
          <title>Page Title</title>
          </head>
          <body>

          <h1>My First Heading</h1>
          <p>My first paragraph.</p>

          </body>
          </html>`} language={`html`} />
          Typing Effect Test
          <Box sx={{ display: 'flex', p: 2, pl: 3, pr: 3, mt: 1, mb: 2, bgcolor: '#222222', borderRadius: 2 }}>
            <code>
              <Typewriter line={`console.log("Goodbye World")`} startDelay={0} letterSpeed={0.07} letterFade={0.07} language={`js`} />
            </code>
            <br /> 
          </Box>
          Install the Fathym CLI
          <Box sx={{ display: 'flex', p: 2, pl: 3, pr: 3, mt: 1, mb: 2, bgcolor: '#222222', borderRadius: 2 }}>
            <code>
              <Typewriter line={"npm i @fathym/cli@latest -g"} startDelay={0} letterSpeed={0.07} letterFade={0.07} />
            </code>
            <br /> 
          </Box>
          Deploy Alfresco Environment - Typewriter effect with a 2.5 second delay
          <Box sx={{ display: 'flex', p: 2, pl: 3, pr: 3, mt: 1, mb: 10, bgcolor: '#222222', borderRadius: 2 }}>
              <code>
                <Typewriter line={"fathym lcu @fathym-hyland/lcu-alfresco-default"} startDelay={2.5} letterSpeed={0.07} letterFade={0.07} />
              </code>
          </Box>
        </Box>
        </Container>
      </ThemeProvider>
    </>
  );
  
}

export default App;