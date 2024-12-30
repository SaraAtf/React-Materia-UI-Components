import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating } from '@mui/material'
import React, { useState } from 'react'

const MUIRating = () => {
    const [ rate, setRate ] = useState( null );
    const handelChange = ( e, newValue ) => {
        setRate( newValue )
    }
    return (
        <>
            <Rating
                value={rate}
                size='large'
                onChange={handelChange}
                precision={0.5}
                icon={<Favorite fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorder fontSize='inherit' />}
            />
        </>
    )
}

export default MUIRating
