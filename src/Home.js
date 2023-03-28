import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import AppCard from './AppCard'

function Home() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <AppCard sx={{ borderRadius: "0px 0px 16px 16px", position: "relative" }}>
                <CardHeader title={<img src="/images/Cave.png" alt="Example" style={{ width: "100%", objectFit: "contain", margin: "0px" }} />} />
                <CardContent>
                    <p>
                        Welcome to Make The World.  MTW is a tool for imagining worlds and telling stories together, as easily as you can
                        read and write. 
                    </p>

                    <p>
                        MTW takes the simple-seeming task of "write a story at the same time with friends on the internet" and gleefully over-engineers
                        it with all of the powerful software tools available in modern times. The result is an infrastructure for making stories
                        together that aggressively abolishes limits: Everyone can create, everyone can share, and everyone can choose (of that
                        potential bounty) what to make part of <em>their</em> stories. There's no reason to stop anyone from imagining, because
                        text is <b>tiny</b> and cloud databases are <b>huge</b>.
                    </p>
                </CardContent>
            </AppCard>
        </div>
    )
}

export default Home
