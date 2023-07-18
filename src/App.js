import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Container from '@mui/material/Container';
import OptionTab from 'components/OptionsTab';
import LocationCards from 'components/LocationCards';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionTab />
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
