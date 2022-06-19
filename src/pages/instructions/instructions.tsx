import React from "react";

// Replace this component with your own in the `App.tsx`
export function Instructions(): JSX.Element {
    return <div style={{textAlign: "left", width: "50vw", margin: "auto"}}>
        <header>
            <h1>
            Welcome to RegalVoice Movies!
            </h1>
        </header>

        <section>
            <p>
                Using the <a href="https://imdb-api.com/api" target="_blank">IMDb API</a>, with the API key you have been provided, build a simple movie information app.
                <br />
                In this app, we will be able to:
                <ul>
                    <li>view upcoming movies</li>
                    <li>search for movies</li>
                    <li>track movies we have seen</li>
                    <li>show similarity to movie we are currently viewing</li>
                    <li>track movies we want to see</li>
                    <li>recommend movies based on what we've seen</li>
                </ul>
            </p>

            <p>
                The landing page should show a list of upcoming movies (/ComingSoon) (bonus for switching to Top250/MostPopular)
            </p>

            <p>
                There should be a search bar to search for a movie by name, which will replace the existing list of upcoming
            </p>

            <p>
                Any movie should be able to be clicked into to view full page
            </p>

            <p>
                Any movie can be added to a watch list which follows you around the app
            </p>

            <p>
                <b>BONUS</b>
                <ul>
                    <li>When actively viewing a movie, movies in your watch list get a similarity score.  This is calculated with the following formula:
                        <ul>
                            <li>If in the list of `similars`, score is Very similar</li>
                            <li>If in a similar movies list of similars, score is Similar</li>
                            <li>3 deep, score is Somewhat similar</li>
                            <li>Otherwise, not similar</li>
                            <li><i>Extra bonus:</i> on hover of similarity score, show the movies that connect it</li>
                        </ul>
                    </li>
                    <li>
                        Recommended movies: Any movie can marked/unmarked watched.  Based on your watched movies, you can get recommended movies
                        <ul><li>These should be ranked by total similarity to your watch list (max of 10)</li></ul>
                    </li>
                </ul>
            </p>
        </section>
    </div>
}
