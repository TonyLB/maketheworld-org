import React from 'react'

import CardContent from '@mui/material/CardContent'
import AppCard from './AppCard'

function Contact() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <AppCard>
                <CardContent>
                    We seriously want your feedback.
                    <br />
                    Are you playing? Are you using the code? Are you building your own?
                    <br />
                    Conversely, does something not make sense to you?
                    <br />
                    Come talk to us on our <a href="https://discord.gg/sPmeFTM">Discord server</a>
                </CardContent>
            </AppCard>
        </div>
    )
}

export default Contact
