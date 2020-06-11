import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
        height: "100%"
    },
    header: {
    },
    image: {
        maxWidth: "100%"
    }
}))

function Tour() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={4}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                title="System Tour"
                            />
                            <CardContent>
                                What is Make The World really about, in practice?  Here's a quick preview of what you'll see if you pick a world to
                                log into ... it will also double as a getting started guide, to make it easier if you do choose to jump in.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                When you first visit a MTW site, it will ask you to identify who you are as a <em>player</em>, and give a password.
                                Since you'll never have visited this site before, your first step will be to create an account that lets MTW know
                                you as a player (distinct from the characters you play).  MTW will not reveal your player information to other players,
                                it will only use it behind the scenes to interact with you.  Click "Create an Account".
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour1" src="/images/Tour/Tour1.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                You can name yourself pretty much whatever, but since this is just between you and the system it's easiest to
                                pick some variant on your own name, and a simple password you will remember.  All of your interaction with people
                                will be through your characters, so you can put your creativity into <em>those</em> names.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour2" src="/images/Tour/Tour2.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="Frequently Asked Question" />
                            <CardContent>
                                <strong>How are passwords, email addresses, etc stored?  Specifically, how safe and private is my information?</strong><br /><br />
                                <em>Answer: As per industry standards, this information is stored by AWS, not by our system.  MTW only knows that you have authenticated that you are
                                    the person associated with a given player name. We DO NOT have access to your email address, password, etc. We cannot even access how the
                                    underlying technology works.

                                    It is worth restating: It’s not just that we won’t or do not know how to get your password -- it is that it is protected from us in much the same
                                    way your Netflix password is protected from Netflix employees.  They aren't given the tools to access your information, and neither are we.</em>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                Once you are logged in, you should see a screen a lot like the one at right, except yours won’t have all those characters. Those are the ones William
                                (in a fit of originality) used for testing.  So, click at bottom to create a new character!
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour3" src="/images/Tour/Tour3.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                You will be presented a dialog that lets you enter the information about your character.  It can look daunting, but
                                really it's all just whatever you want to type.  If you get into the game and discover that people are using "One Cool Thing"
                                in some specific way that you'd like to emulate, you'll be able to edit anything and everything about your character (even their
                                name) at any time.  So let's enter something to go forward with...
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour4" src="/images/Tour/Tour4.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                ... and then, once you have what you want, click the "Save" button at bottom right, and the character will be added to your
                                (previously empty) list of characters to select from.  Click that character name, and you will be taken into the game,
                                playing that character.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour5" src="/images/Tour/Tour5.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour6" src="/images/Tour/Tour6.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                            When you connect to your character you should see a screen similar to the one above.  At the top of the screen is a description
                            of your current room, and since the most recent event in your timeline is that you arrived in that room there is <em>also</em> a
                            description of the room in your timeline of messages (though that bottom one may scroll away as things happen).  Worth noting
                            in the description of the room is that it has other rooms you can go to (by walking, taking the bus, etc.)  In the image above,
                            there are four places you can go (Deep Space, Drowned City, Bottomless Vaults, and The Rubbles).
                            <br />
                            You can move your character in one of several ways:
                            <ul>
                                <li>You can click on one of those buttons at top.</li>
                                <li>You can type the name of the exit in the text entry field at bottom (if it is a long or hard to type exit, you can press the
                                    up-arrow key to activate an auto-complete list of possible commands given what you've typed so far)</li>
                                <li>At left, there is a small tab with a compass and an arrow:  Pressing the arrow will open the map pane which (depending
                                    on where you are) may show you the local layout of rooms.  Clicking on any adjacent room in that map will move your
                                    character to it.
                                </li>
                            </ul>
                            Exploring is one of the keys to getting settled into a space and envisioning what kind of stories you want to be part of there.
                            So go explore!
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>
                                There is more to do than just explore, though.  You may have happened upon some other people in your travels ... important
                                to know how to talk to them!  That's most of what you'll be doing in the game, after all, getting together with other players
                                and having your characters create scenes and stories together.
                                </p>
                                <p>
                                To get a handle on those options, start by typing <em>help</em>, or clicking the question-mark button at upper right, to
                                raise the help dialog (at right).
                                </p>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour7" src="/images/Tour/Tour7.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                Clicking on the "Keyboard Commands" tab at top will bring you to a listing of the things you can do by typing in the
                                text entry area:  Play around with talking, with describing your character's actions, with describing things happening
                                in the world.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour8" src="/images/Tour/Tour8.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                If you've now seen some things that make you think that you should update your character, it's simple:  At the upper right of
                                your page, you'll see a little gear.  Press it to get the menu of things you can adjust about your game experience and your
                                characters:
                                <ul>
                                    <li>Set home to here: At any time, and anywhere, you can always go back home. By default, your home is the vortex, but this
                                        allows you to set it to whatever room you are currently in.
                                    </li>
                                    <li>My characters: Get a list of your characters, and modify their traits.</li>
                                    <li>Client settings: Things like how many lines you want to see at a time on the text field.</li>
                                    <li>Sign Out: You can log out from your player account.  You don't need to do this to leave the game ... just closing the
                                        browser tab will smoothly disconnect your character.  But sometimes you want to make sure nobody is going to get at
                                        your game without your password.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour9" src="/images/Tour/Tour9.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                You're ready to introduce yourself to people!  At the right is a column of characters currently being played ... you can click
                                the arrow at top to open it up and see their names and where they're playing.  You can go try to find them, or if you'd prefer
                                you can click on their entry to send a direct message.  Ask what kind of scenes they're interested in playing!
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                Suppose you've played with people, you have a sense what sort of stories you want to tell, but there isn't a good place to
                                tell them yet.  That sounds like you should be looking at the upper left, where a little menu-hamburger will give you access
                                to the tools to change the <em>world</em> (as opposed to changing your characters).  There are options to edit places, and
                                to edit maps ... maps are just a way of visually depicting how places relate, so you would start by creating a new place.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img className={classes.image} alt="Tour10" src="/images/Tour/Tour10.png" />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>
                                Places in MTW are organized into Neighborhoods and Rooms.  A room is simply "a place characters can come together to have
                                a scene".  If you've explored, you've been moving from room to room.  Neighborhoods are a bit more abstract:  They collect
                                a bunch of rooms and say, for instance, "All these little stalls and back alleys are part of <em>The Low Market</em>."
                                </p>
                                <p>
                                Neighborhoods are also where permissions are managed in the game.  You likely don't have permissions on any neighborhood to
                                create a new <em>room</em> ... but you have permissions everywhere to create a new <em>neighborhood</em>.  So pick a place
                                that suits your fancy, find its neighborhood in the World dialog, and click the button for "Add Neighborhood".  You'll
                                create a smaller neighborhood inside of the larger one.
                                </p>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>
                                There are lots of fiddly little bits to a Neighborhood, but the main two to focus on immediately are <em>Visibility</em>&nbsp;
                                and <em>Topology</em>.  Visibility is just what it sounds like:  Can other people see the Neighborhood?  And Topology is
                                about how the Neighborhood can connect to other places.  Dead-End topology means you have one way in, one way out, no
                                more.  Connected is just that ... connect where you like.
                                </p>
                                <p>
                                As a starting player, you can create any neighborhoods you want.  Inside your own neighborhoods you can make more
                                neighborhoods and rooms in any arrangement, but a neighborhood you create in somebody else's space must be both <em>Private</em>&nbsp;
                                and <em>Dead-End</em>.
                                </p>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="Some MUSH history" />
                            <CardContent>
                                <p>MTW is a new version of an old concept ... the Multi-User Social Hub (MUSH), which grew out of old Infocomm-style text
                                adventure games, as the early prototypes of the internet started connecting systems.  Back in the day, these games were
                                often run on college mainframes, mostly hidden from administrators ... so resources were scarce.
                                </p>
                                <p>
                                That gave the MUSH community an unfortunate culture of scarcity.  There were games where you would literally have to
                                wander for <em>hours</em>, randomly picking up magic pennies, in order to gather the "resources" needed to create a room.
                                That doesn't make a lot of sense in today's age of ubiquitous cheap storage, and so MTW takes a chainsaw to such notions.
                                Create all you want!  If you can <em>type</em> enough to fill even a megabyte of storage then you should really try your
                                hand at being an author.  That's a lot of text (but a meaningless droplet in terms of computer storage).
                                </p>
                                <p>
                                But there <strong>are</strong> scarce resources in a social game:  Player attention, and player security.  Players don't want to be flooded
                                with a million possible links (making it impossible to find the ones they actually might be interested in), and in the same
                                way nobody wants to see "Hate Crime World" just because some edgelord felt like shoving it in front of your face.
                                </p>
                                <p>
                                That's why neighborhoods start out as private and dead-end:  You can create anything you want, but it is created in a space
                                that impinges on nobody else (and doesn't give you any magic powers to jump from one side of the map to the other in an
                                instant, through your private neighborhood).  For all intents and purposes, entering your private neighborhood is no different
                                than logging off would be.  You leave play with everyone else, and a while later you come back at the same place.
                                </p>
                                <p>
                                But in terms of what it allows you to <em>create</em>, of course, it's a world of difference.  Literally.  You can privately create
                                entire imaginary worlds with the access every first-time player is given.  And if someone who edits a public neighborhood
                                feels that they'd like to give your ideas a place, you can hang that neighborhood off of theirs, and they'll turn it public for
                                you.  Then all and sundry can come in and explore the world that you made.
                                </p>
                                <p>
                                And then, if history is any guide, they'll start coming to <em>you</em>, asking if you're willing to make public the new
                                spaces they've made inside of your creation.
                                </p>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </div>
    )
}

export default Tour
