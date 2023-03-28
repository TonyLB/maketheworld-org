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
                    <CardHeader title="March 2023..." />
                    <CardContent>
                        <p>
                            March has been a month of cleanup and quality-of-life improvements throughout MTW, in
                            anticipation of exposing the system the alpha testers. The Suggestion mechanic has been
                            streamlined and optimized, and the what-you-see-is-what-you-get room and feature editors
                            have been made a leap more capable and powerful.
                        </p>
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="February 2023..." />
                    <CardContent>
                        <p>
                            February sees the debut of the in-place Suggestion mechanic:  Rather than
                            starting in the (overwhelming) Library, and searching through the index of an Asset to find the
                            right key to make a suggested change, players should be able to click a pencil icon on
                            the room they're currently playing in, and start a Suggestion file by directly editing
                            the scene they're looking at right that instant.  These suggestions will be kept private
                            while in draft phase.  When the creator feels the change is ready, it can be opened to
                            volunteer reviewers for approval. Unreviewed (or unapproved) drafts can still be shared
                            directly with friends, but a review for community standards is required before the general
                            public sees the changes, either as part of a temporary story or a permanent change in the world.
                        </p>
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="January 2023..." />
                    <CardContent>
                        <p>
                            This month is focused on pushing all of the back-end changes of the past months to the
                            user-facing toolkit provided by the Make The World web client:  Variables, state,
                            actions, conditionals, and the tools for rendering the most complicated of rooms,
                            details, and behaviors need to be presented in a way that's fun rather than overwhelming.
                        </p>
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="December 2022..." />
                    <CardContent>
                        Development turns toward building out the new, more powerful, more intuitive set of world
                        creation tools.  Step 1 is an internal toolkit that reduces the complexity of changing the
                        internal representation of a world quickly and easily, and comparing different representations
                        to each other in order to easily determine how to create a change-set.  This will allow small,
                        independent changes to a large world:  If you want to suggest just changing one detail in the
                        marketplace, your suggestion can be considered and approved (or rejected) independently of
                        someone else's suggestion for a complete overhaul of the temple catacombs.
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="October 2022..." />
                    <CardContent>
                        Having established in the demo that MTW and the WML system can approach the complexity of Infocomm
                        adventures in either solo or cooperative play, we've worked to make WML a simpler and more powerful
                        format to use.  Quality of life improvements include:
                        <ul>
                            <li>More powerful and more easily nested conditionals for compactly describing complex worlds</li>
                            <li>Bookmarks, Messages, and Moments to abstract complex behaviors for easier reuse</li>
                            <li>
                                Much simpler parsing of plain text descriptions ... the newly beefed up WML parser is much
                                smarter about divining intent
                            </li>
                        </ul>
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="August 2022..." />
                    <CardContent>
                        Following up the data-lake performance changes in June, the next few months saw focussed performance
                        tuning in the most common way that players interact with MTW:  The perception system.  A new architecture
                        guarantees that changes in the state of the world can be mapped immediately to exactly (and only) the
                        players who are in a position to actually perceive the impact of those changes.  No matter how complicated
                        the cause and effect, MTW can now say with certainty that in our worlds, when a tree falls in a forest
                        with nobody to hear it, we do <b>not</b> waste CPU cycles on making a sound.  What this means for players
                        directly is that in an instance that isn't just waking up from low-usage hibernation, requests to look at
                        a room or feature will usually return a response in a "nearly indistinguishable from instantaneous" ~100ms.
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="June 2022..." />
                    <CardContent>
                        In the wake of May's demo, development turns to performance, performance, performance.  MTW's internal
                        parsing engine for World Markup Language is given a top-to-bottom overhaul for specialized specialized
                        and efficiency:  The result?  An over 1000x speedup in saves and reads, bringing read-from-data-lake times
                        for even quite large assets down to the 100ms range.  This allows the system to more aggressively unload
                        data that isn't being used <em>right this instant</em> (because it can be loaded back when needed almost
                        faster than you can blink), which in turn means that the response times on data that is being used are
                        ever so much faster.  Performance means the destruction of limits, which means that MTW has room for
                        everyone to create everything.
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="May 2022..." />
                    <CardContent>
                        <p>
                            New feature: Features!  The ability to add clickable details to room descriptions (and to add details
                            within those details, without limit) gives creators the ability to make a world of limitless
                            intricacy, without overwhelming players with an eye-glazing wall of text.
                        </p>

                        <p>
                            New feature: Maps!  Visual maps that lay out the rooms and connections in an area help players to
                            orient themselves in the larger space they are imagining.
                        </p>

                        <p>
                            And a round of demoes with internal partners to test out the combination of V2's features to date,
                            as our intrepid adventurers explore the puzzling <em>Dungeon of Draft</em>
                        </p>
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="April 2022..." />
                    <CardContent>
                        Creation of the first draft for front-end world-editing tools
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="March 2022..." />
                    <CardContent>
                        Creation of the cascading state architecture for scalable world state.  Creation of the dynamic
                        perception system to efficiently render the state of the world into human-readable descriptions
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="February 2022..." />
                    <CardContent>
                        Creation of the MTW data-lake architecture for scalable and self-healing world storage.  Where V1
                        of MTW stored the entire world in a live database (and would lose the ability to operate if any partners
                        of that database were unavailable or corrupted), V2 stores the WML source for each asset in a data
                        lake that shares AWS S3's world-class 99.999999999% reliability guarantee.  The system itself caches
                        derived data into the active database as and when needed, and seamlessly recaches from the data lake
                        in the case of any loss of data, or error condition
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="January 2022..." />
                    <CardContent>
                        Internal debut of World Markup Language.  Where V1 of MTW recorded the details of the world in a
                        database format that was difficult to reason about and *very* difficult to import or export as a
                        saveable file (for transfer or backups), V2 will record worlds in files structured in the World Markup
                        Language, a customized markup language that looks similar to HTML while providing all (and only) the
                        capabilities needed to make rich and engaging text-based worlds
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="November 2021..." />
                    <CardContent>
                        V2 of the messaging system is laid down as a foundation.  Unlike the previous messaging system, in which things done
                        and said were available only to those who actually saw them on screen, the V2 system provides secure and scalable
                        logging of the story of the game as a whole.  This both lets players share their stories (if they wish to invite other
                        people to see what they've achieved), and guarantees accountability in the case of bad actors:  If a moderator gets
                        called in regarding your bad behavior, there will be no bickering about what happened.
                    </CardContent>
                </AppCard>
                <AppCard>
                    <CardHeader title="June 2021..." />
                    <CardContent>
                        After a long pause, development gets traction on V2, with the following priorities:
                        <ul>
                            <li>Rebuild from the ground up to be easier to administer and maintain</li>
                            <li>Add the capability for automated worlds at least on par with Infocomm games like Zork</li>
                            <li>Create easier to use and more robust world creation tools for users</li>
                            <li>Create more extensive records of what happens in the game, for sharing stories and moderating community standards</li>
                            <li>And always, <em>always</em>, increase the resilience of the system to scale to larger and larger worlds</li>
                        </ul>
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
