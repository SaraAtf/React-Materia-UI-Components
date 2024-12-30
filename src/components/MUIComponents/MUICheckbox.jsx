import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React, { useState } from 'react'

const MUICheckbox = () => {
    const [ mark, setMark ] = useState( false )

    const [ skills, setSkills ] = useState( [] )

    const handelChecked = ( e ) => {
        if ( skills.includes( e.target.value ) ) {
            setSkills( skills.filter( skill => skill !== e.target.value ) )
        } else {
            setSkills( [ ...skills, e.target.value ] )
        }

    }

    console.log( skills )
    return (
        <>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup >
                    <FormControlLabel onChange={handelChecked} value="html" control={<Checkbox />} label="html" />
                    <FormControlLabel onChange={handelChecked} value="css" control={<Checkbox />} label="css" />
                    <FormControlLabel onChange={handelChecked} value="js" control={<Checkbox />} label="js" />
                </FormGroup>
            </FormControl>

            {/* <Checkbox
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                checked={mark}
                onChange={( e ) => setMark( e.target.checked )}
            /> */}
        </>
    )
}

export default MUICheckbox
