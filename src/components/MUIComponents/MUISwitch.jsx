import { FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MUISwitch = () => {
    const [ darkModel, setDarkMode ] = useState( false );
    console.log( darkModel )
    return (
        <>
            <FormControlLabel label="Dark Mode" control={<Switch value={darkModel} onChange={( e ) => setDarkMode( e.target.checked )} color='secondary' size='medium' />} />

        </>
    )
}

export default MUISwitch
