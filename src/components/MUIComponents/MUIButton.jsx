import { Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import React, { useState } from 'react'

const MUIButton = () => {
    const [ format, setFormats ] = useState( [] );
    const styleObje = {
        '&.Mui-selected': {
            backgroundColor: 'green',
            color: 'white'
        }
    }
    const handleFormat = ( e, updatedFormat ) => {
        setFormats( updatedFormat )
    }
    return (
        <>
            <ToggleButtonGroup exclusive orientation='vertical' aria-label='text formating' value={format} onChange={handleFormat}>
                <ToggleButton
                    sx={styleObje}
                    value="bold"
                    aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton sx={styleObje} value="italic" aria-label='bold'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton sx={styleObje} value="underline" aria-label='underline'>
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            {/* <Button variant='text' href='https://www.google.com.eg/'>Text</Button>
            <Button variant='contained' startIcon={<SendIcon />}>Login</Button>
            <Button variant='outlined' endIcon={<SendIcon />}>outlined</Button> */}
            {/* <IconButton onClick={() => alert( "hello" )} aria-label='Alarm' color='error' size='large'>
                <AccessAlarmIcon />
            </IconButton> */}
            {/* <Button
                component="label"
                variant='contained'
                startIcon={<CloudUploadIcon />}
            >
                Upload files

            </Button> */}
            {/* <ButtonGroup variant='outlined' orientation='vertical'>
                <Button color='success'>Left</Button>
                <Button color='secondary'>Center</Button>
                <Button >Right</Button>
            </ButtonGroup> */}

        </>
    )
}

export default MUIButton
