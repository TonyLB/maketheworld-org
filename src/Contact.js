import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    card: {
        border: '2px solid',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        margin: "10px",
        height: "100%"
    },
    paper: {
    }
}))

function Contact() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Card className={classes.card}>
                <CardContent>
                    We seriously want your feedback.
                    <br />
                    Are you playing? Are you using the code? Are you building your own?
                    <br />
                    Conversely, does something not make sense to you?
                    <br />
                    Come talk to us on our <a href="https://discord.gg/sPmeFTM">Discord server</a>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact
