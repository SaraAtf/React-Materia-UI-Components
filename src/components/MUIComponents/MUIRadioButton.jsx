import { Box, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

const MUIRadioButton = () => {
    const [ gender, setGender ] = useState( null )
    const handleChange = ( e ) => {
        setGender( e.target.value )
        console.log( gender )
    }
    return (
        <Box>
            <FormControl>
                <FormLabel id='testGender'>Gender</FormLabel>
                <RadioGroup value={gender} onChange={handleChange} row name='gender' aria-labelledby='testGender'>
                    <FormControlLabel control={<Radio size='medium' color='secondary' />} value="femal" label="Female" />
                    <FormControlLabel checked control={<Radio />} value="male" label="Male" />
                    <FormControlLabel control={<Radio />} value="Other" label="Others" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MUIRadioButton
