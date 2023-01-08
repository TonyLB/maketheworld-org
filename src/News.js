import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import AppCard from './AppCard'

function News() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Stack>
                <AppCard>
                    <CardHeader title="The Future..." />
                    <CardContent>
                        Development doesn't stop at the minimum-viable-product!  We've got big plans for objects, asynchronous messages, game-state that will
                        allow for automated puzzles and processes, and much, much more!
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="June, 2020..." />
                    <CardContent>
                        We released version 1.0 (the <em>minimum viable product</em>) to the public.  It supports rooms, neighborhoods, maps, navigation, chat,
                        direct messaging, permissions, etc.  V1.0 is a bit threadbare, but that's the nature of getting things in front of people as soon as
                        you can!
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="April, 2020..." />
                    <CardContent>
                        We held our first open alpha-test with a few dozen people.  They rattled around the Apocalypse World, created new rooms and neighborhoods
                        to suit their fancy, and told stories with each other.  Space Station Zero emerged from some collaborative creation during that session,
                        and grew from there.
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="February, 2020..." />
                    <CardContent>
                        Over on the Apocalypse World Discord server, Meg said she wished there was an Apocalypse World: Burned Over MUSH for the duration
                        of the pandemic. William said something like that was actually feasible and looped Tony into the project, who had the tech skill
                        to make it happen.
                    </CardContent>
                </AppCard>
            </Stack>            
        </div>
    )
}

export default News
