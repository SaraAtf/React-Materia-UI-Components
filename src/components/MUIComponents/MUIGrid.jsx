import { Box, Grid2 } from '@mui/material'
import React from 'react'

const MUIGrid = () => {
    return (
        <Box width="100vw" height="100vh">
            <Grid2 container backgroundColor='primary.light'>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                    <Box backgroundColor="secondary.light">Size = 8</Box>
                </Grid2>
                <Grid2 size={4}>
                    <Box backgroundColor="success.light">Size = 4</Box>
                </Grid2>
                <Grid2 size={6}>
                    <Box backgroundColor="secondary.light">Size = 8</Box>
                </Grid2>
                <Grid2 size={6}>
                    <Box backgroundColor="success.light">Size = 4</Box>
                </Grid2>


            </Grid2>
        </Box>
    )
}

export default MUIGrid
