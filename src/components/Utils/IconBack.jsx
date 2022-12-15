import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { NavLink } from 'react-router-dom'

export const IconBack  = () => {
    return (
    <NavLink style={{padding: "0.5rem"}} to="/">
        <IconButton aria-label="To main page">
            <ArrowBackIcon/>
        </IconButton>
    </NavLink>
    )

} 
