import React from 'react';

const News = () => {
    return (
        <div className="News">
            <header className="News-header">
                V 1.0 - June 1 Release
                <br />
                In late February, William introduced Tony and Meg with the idea of making a MUSH for the duration of the pandemic. A few playtests later, here we are: our first release.
                <br />
                Make The World immediately grew beyond making one game-world. After all, why make one game world when you can build tools to make it easy for anyone to build a game world?
                <br />
                On the tech front: We're using AWS and React, with Cloudfront and lambda. The code is open source, and available in the AWS marketthing.
                <br />
                Gaming: Meg's a badass game designer, with such games as Apocalypse World and Psy Run to her name.
                <br />
                Procedures: This has been an Agile development from the start, focusing on small increments. There WILL be additional updates, and we hope they are awesome.
            </header>
        </div>
    );
}

export default News
