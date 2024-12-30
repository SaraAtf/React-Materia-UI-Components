import { Autocomplete, Box, Stack, TextField } from '@mui/material';
import React from 'react'

const MUIAutoComplete = () => {

    const skills = [ 'JavaScript', 'Python', 'Java', 'C++', 'Ruby' ];
    return (
        <Stack border="1px solid red" width="90vw" spacing={2} direction="row">
            <Box
                width="250px"
                height="100px"
                backgroundColor='secondary.light'
            >
                1
            </Box>
            <Box
                width="250px"
                height="100px"
                backgroundColor='success.dark'
            >2</Box>
            <Box
                width="250px"
                height="100px"
                backgroundColor='primary.light'
            >
                3
            </Box>

        </Stack>
        // <Box width="250px">
        //     <Autocomplete options={skills}
        //         renderInput={( params ) => < TextField {...params} label="skill" />}
        //         freeSolo
        //     />

        // </Box>
        // <Box backgroundColor='red' width="300px" p={2}>hello</Box>
    )
}

export default MUIAutoComplete
