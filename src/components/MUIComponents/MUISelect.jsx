import { Box, IconButton, Input, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
const MUISelect = () => {
    const [ country, setCountry ] = useState( 'cairo' )
    const [ showPassword, setShowPassword ] = useState( false )

    const handleChange = ( e ) => {
        setCountry( e.target.value )
    }

    const showPasswordHandler = ( e ) => {
        setShowPassword( !showPassword )
    }

    return (
        <Box width="250px">
            {/* <TextField

                variant='standard'
                placeholder='Enter your name'
                slotProps={{
                    input: {
                        startAdornment: <AccountCircle />
                    }
                }}
            /> */}
            {/* <TextField
                variant='standard'
                placeholder='Enter your name'
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position='start'>
                            KG
                        </InputAdornment>
                    }
                }}
            /> */}
            <TextField
                margin='dense'
                type={showPassword ? 'text' : 'password'}
                variant='outlined'
                placeholder='Enter your Password'
                slotProps={{
                    input: {
                        endAdornment:
                            <InputAdornment position='end'>
                                <IconButton onClick={showPasswordHandler}>
                                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    }
                }}
            />
            <TextField
                type={showPassword ? 'text' : 'password'}
                variant='outlined'
                placeholder='Enter your Password'
                slotProps={{
                    input: {
                        endAdornment:
                            <InputAdornment position='end'>
                                <IconButton onClick={showPasswordHandler}>
                                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    }
                }}
            />
            {/* <Input placeholder='Enter Your Name' margin='dense' /> */}
            {/* <TextField
                value={country}
                onChange={handleChange}
                label='Country'
                select
                fullWidth
                color='secondary'

            >
                <MenuItem value='cairo'>Cairo</MenuItem>
                <MenuItem value='alex'>Alex</MenuItem>
                <MenuItem value='benha'>Benha</MenuItem>
                <MenuItem value='menofia'>Menofia</MenuItem>
            </TextField>
            <Typography variant='h6' color='success' marginTop={2} >{country}</Typography> */}
        </Box>
    )
}

export default MUISelect
