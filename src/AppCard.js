import React from 'react'

import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'

export const AppCard = ({ children, sx }) => {
    return <Paper elevation={0} sx={{ height: "100%" }}>
        <Card sx={{
            border: '2px solid',
            borderColor: '#E7EDF3',
            borderRadius: "16px",
            margin: "10px",
            height: "100%",
            ...sx
        }}>
            { children }
        </Card>
    </Paper>
}

export default AppCard
