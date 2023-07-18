import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import OptionTab from 'components/OptionsTab';

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
                    <OptionTab/>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default App;
