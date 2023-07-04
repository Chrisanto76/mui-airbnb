import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import Logo from './Logo';
import { flexBetweenCenter, dflex } from 'themes/commonStyles';

const Header = () => {
    return (
        <Box
            sx={{
                ...dflex,
                minHeight: 70,
                borderBottom: '1px solid #ddd',
            }}
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        ...flexBetweenCenter,
                        minHeight: 70,
                        px: 4,
                    }}
                >
                    <Logo />
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
