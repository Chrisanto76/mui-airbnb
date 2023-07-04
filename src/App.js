import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';

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
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default App;
