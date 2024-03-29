import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import AppCard from './AppCard'

function About() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader
                            title="Meguey Baker"
                            titleTypographyProps={{ variant: "h5" }}
                            avatar={<Avatar alt="Meg" src="/images/Meg.jpg" style={{ width: "60px", height: "60px", border: "2px solid #a342fe" }} />}
                            style={{ backgroundColor: "#c98fff" }}
                        />
                        <CardContent>
                            Meg's a badass game designer, with such games as Apocalypse World, PsiRun  and Under Hollow Hills to her name, and runs LARP at the
                            local high school for 25 students a year. She spent most of the 1990s playing and moderating MUSHs.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader
                            title="Tony Lower-Basch"
                            titleTypographyProps={{ variant: "h5" }}
                            avatar={<Avatar alt="Tony" src="/images/FennecFox.jpg" style={{ width: "60px", height: "60px", border: "2px solid #ffc81c" }} />}
                            style={{ backgroundColor: "#ffe9a4" }}
                        />
                        <CardContent>
                            Tony dissects and builds systems.  He's been building ways for gamers to come together for decades, some successful, many not.
                            Bringing mathematics and computers together with that is a rare treat.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader
                            title="William Nichols"
                            titleTypographyProps={{ variant: "h5" }}
                            avatar={<Avatar alt="William" src="/images/William.jpg" style={{ width: "60px", height: "60px", border: "2px solid #20c234" }} />}
                            style={{ backgroundColor: "#93e89e" }}
                        />
                        <CardContent>
                            William verbs games, and manages software projects professionally. He's been building communities of gamers for years, and knows he
                            doesn't quite get video-based online RPGs -- he's the sort whose favorite video game is a kindle.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader
                            title="Early Playtesters"
                            titleTypographyProps={{ variant: "h5" }}
                        />
                        <CardContent>
                            <ul>
                                <li>Sean Leventhal</li>
                                <li>Jamie O'Marr</li>
                                <li>Ash Kreider</li>
                                <li>Zoe Bloom</li>
                                <li>jay Dragon</li>
                                <li>George Austin</li>
                                <li>Jason Morningstar</li>
                                <li>Shayna Cook</li>
                            </ul>
                            ... and many more who have yet to get us their preferred names.  We are positive we have missed some folks. If so, please let us know what name you want to be credited by.
                        </CardContent>
                    </AppCard>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
