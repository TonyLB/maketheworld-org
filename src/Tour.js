import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import AppCard from './AppCard'

function Tour() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={4}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader title="System Tour" />
                        <CardContent>
                            What does Make The World look like, in practice?  Here's a quick preview of what you'll see if you pick a world to
                            log into ... it will also double as a getting started guide, to make it easier if you do choose to jump in.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            When you first visit a MTW site, it will ask you to identify who you are as a <em>player</em>, and give a password.
                            Since you'll never have visited this site before, your first step will be to create an account that lets MTW know
                            you as a player (distinct from the characters you play).  MTW will not reveal your player information to other players,
                            it will only use it behind the scenes to interact with you.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour1" src="/images/Tour/Tour1.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <p>
                                Once MTW knows who you are as a player, you have access to the Library.  While you <em>could</em> get a sense of the
                                world by reading the catalog of public rooms, it would be akin to trying to learn a language by reading its dictionary.
                                Much easier to use the Library only to take a look at the available (currently-unplayed) characters, and choose (or
                                create) one of them to act as your eyes and limbs within the world.  Checking a character out from the Library makes it
                                yours to play (and edit).
                            </p>

                            <p><em>
                                Feature-in-Planning:  The Character Honeycomb will present a visual mosaic of all the characters in game ... those
                                currently in play, those permanently retired, and those available for play.  It will also represent their changing
                                relationships and the various factions that they make up together.  This will help give you as a player a much better
                                view of which characters are likely to get you into the kind of stories you like to tell, with the kind of people
                                you'd like to spend time with.
                            </em></p>
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour2" src="/images/Tour/Tour2.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <p>
                                Once you've checked out a character, you can click that character on the Home tab in order to play the role of that
                                character.  You will make all the decisions about what that character does, and see the world through their eyes ...
                                it may look very different than the same world seen by someone else!
                            </p>

                            <p>
                                Your character exists (at each moment) in a particular place (generically called a "room") with its own appearance.
                                One of the most basic things you do in the game is to go somewhere else.  Each room is connected to others by exits,
                                forming a network of virtual places, each with their own description and details.
                            </p>

                            <p>
                                Part of playing a character in MTW is simply exploring that space. The creators of those places will have left any number
                                of things to discover. You might find something as simple as a beautiful sunrise that can only be spotted from the right
                                place at the right time of the game-world's day. Or you might discover a hidden lever that opens a secret passage
                                leading to a whole adventure of riddles, challenges, and peril.
                            </p>
                            </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour3" src="/images/Tour/Tour3.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <p>
                                What makes the story worlds of MTW particularly magical, though, is that you are not alone in them.  Other players
                                are playing their characters in (often) the same spaces you are exploring. When they come into a room, you will see
                                them, and they will see you. You can talk to each other, help each other, threaten each other ... whatever works
                                for the story you want to tell.
                            </p>
                            
                            <p>
                                If they need help in telling their story (a rival for an important position at court, for example) they may well ask you
                                (out of character) to fit into a supporting role, just as you can ask them to play a part in your own story. As you make
                                more and more of these connections over time, your character will change.  What started as just a point-of-view for you
                                to look at the world other people made becomes a fictional character with interlocking sets of relationships, obligations,
                                grudges, and loose ends. The places that started out as simply pretty (or clumsy) words on the screen become the alleys
                                where secrets were exchanged, the balconies where duels are held, the stage upon which your shared drama plays out.
                            </p>
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour4" src="/images/Tour/Tour4.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <p>
                                In addition to exploring and telling stories <em>within</em> the created world, every player of MTW can also take part
                                in creating and extending the world itself.  Perhaps you've caught wind of a motley band of thieves who would love to
                                break into the royal vaults, but so far those vaults are nothing more than a formidable reputation. You could use the
                                MTW tools to create a network of rooms with traps and challenges, and then offer it to those thieves for them to play
                                out their heist. Perhaps you could even play a few steely-eyed guards you made for the occasion (or draft some other
                                players to have that pleasure)
                            </p>
                            
                            <p>
                                You can also create more permanent fixtures. Suppose you've made a group of students and teachers at the poorly-described
                                city university. You and your friends can detail more rooms, adding lecture theaters, dining halls, and dormitories
                                to extend your school-time stories into. Whatever your reasons for needing them, the same world-creation tools that the
                                host of the world first used to sketch out the very first places are always available to every player to draft their
                                own suggestions, either to share just with friends or to submit to review by the community for inclusion in the larger game.
                            </p>

                            <p><em>
                                Feature-in-Planning: A story-driven system for proposing possible changes in the world (for instance, the renovation of
                                an abandoned fort on the outskirts of town) and linking in-game actions as justification for that change (e.g. the logs
                                of an adventure in which you and your comrades delve into the ruins of the fort to purge an infestation of giant spiders),
                                to be weighed in the community review of the change
                            </em></p>
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour1" src="/images/Tour/Tour1.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <p>
                                And just as you can go from exploring places others created to creating places for others to explore, the same
                                applies to characters.  As you build out relationships in the shared world, you will notice that there is room
                                for other characters who do not yet exist.
                            </p>
                            
                            <p>
                                Maybe you're part of a group of thugs and hooligans who would love to be a proper gang if only there were a
                                charismatic leader to boss you around.  You can create the outlines of that leader, and advertise them as a
                                character in need of a player.  The fact that they would come with a built-in set of connections and minions
                                makes for a very attractive offer!
                            </p>

                            <p>
                                As with places and things, the creation tools for characters are available to everyone.  That encapsulates the
                                basic cycle that Make The World is built to support:  You come to a world that has interesting things for you
                                to explore because people before you created them.  And, if you choose, you can pay that forward by creating
                                even more fascinating adventures and opportunities from your own imagination, to share with new players that
                                join after you.
                            </p>
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img style={{ maxWidth: "100%" }} alt="Tour1" src="/images/Tour/Tour1.png" />
                        </CardContent>
                    </AppCard>
                </Grid>

            </Grid>
        </div>
    )
}

export default Tour
