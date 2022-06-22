
### Home page
The home page includes 3 tabs:
- comming soon movies information cards
- top 250 movies information cards
- most popular movies information cards

In the right-bottom corner of the page there is the watchlist,and this list is available all over the app.
On every card there is a whatchlist button that will add that moview to the whatshlist and in the watchlist window every movie title is clickable and can navigate to the movie details page. Also, every title in the watchlist has an delete button(trash icon) for deleteing any of the watchlist items.

![Screenshot of homepage](/screenshots/homepage.png?raw=true)

On the seconds tab the user can browse throuth a list of 250 movies rated as the top movies.
The list is paginated and every page displays 10 movies, the user has to navigate through pages by clicking the next and previous 
buttons on the bottom of the page. On this page-navigation control there is also displayed the number of movies and the current page.
Again, all cards have a watchlist button for adding any movie to the watchlist table

![Screenshot of homepage](/screenshots/homepage-top250.png?raw=true)

The same behavior we have on the third tab, the most popular movies list.

![Screenshot of homepage](/screenshots/homepage-mostPopular.png?raw=true)

### Movie page
By clicking the title of the movie in any card on the homepage (on-hover the title turns blue), the user is redirected to a new page,
the movie details page, where the trailer video of the movie can be played, and information about the genres, description, directors, writers and stras can be found.

![Screenshot of movie page](/screenshots/moviepage1.png?raw=true)

By scrolling down the page, user will found a list of actors with picture and full name, the list is scrollable on the horizontal direction.

![Screenshot of movie page](/screenshots/moviepage2.png?raw=true)

And by scrolling down more, user can find list of similar movies, with picture and title, and list of already visited movies.
All this visited and similar movie titles are links to navigate to the movie details.

![Screenshot of movie page](/screenshots/moviepage3.png?raw=true)

### Search results
On the header of the app, there is a search input and button, the user can search movies by typing an expression and clicking the search button.This action will open a new page with the list of all movies found by the api.

![Screenshot of search](/screenshots/search-input.png?raw=true)

Every card in the search results list have a watchlist button to be able to add the found movie to watchlist.

![Screenshot of search](/screenshots/search-results.png?raw=true)

### Watchlist
The watchlist window, located in the bottom-right corner of the page is:
- present on every page of the app
- has a remove movie button from list(add can be done from watchlist button on cards and movie details page)
- collapsible, and show the number of movies on the list when collapsed

(Note: The watchlist does not need to persist through page refreshes, but should persist through clicking into each movie.)

![Screenshot with populated watchlist](/screenshots/watchlist.png?raw=true)

### Pro features
We'd like to add a few features to the "Pro" version of our app.  Please choose at least one of these options to expand the app's functionality - the more the better!  For each pro feature you add, we will ask you to write a short explanation of your implementation on submission.

1. **Home page list**

    Allow users to chose from three different homepages - Upcoming, Top 250, or Most Popular
    ![Screenshot of homepage list](/screenshots/homepage-options.png?raw=true)

2. **Similarity score**

    Show a similarity score on the watchlist. Not including "current movie" (the page we're on), this score should show how similar the movie in the watchlist is to the movie on the page we're currently viewing. This should have at least 2 levels of similarity (Very similar, similar), but may have more (Somewhat similar, Not very similar, ...).  How you implement the similarity score is up to you, but please explain your implemented design on submission.
    ![Screenshot of similarity score](/screenshots/similarity.png?raw=true)

3. **Recommendations**

    Sometimes a user has seen a movie, and wants recommendations based on that!  Add the ability to make recommendations based on movies that users indicate that they have already watched.  The recommendation list should not exceed 10 titles.  How you implement the recommendation engine is up to you, but please explain your implemented design on submission.
    ![Screenshot of recommendations](/screenshots/recs.png?raw=true)

## Quick Requirements
- Use React/Typescript
    - Any other publicly available Javascript/Typescript library may also be added to the project
- Home page
    - Display information about movies
    - Click into each movie
- Movie page
    - More details about movie, including:
        - Plot
        - Actors
        - Similar movies (which can also be clicked into)
- Search page
    - Display relevant searched-for movies
    - Each movie can be clicked into
- Watchlist
    - Movies may be added to and removed from the watchlist with ease from anywhere in the app
    - Collapsible with total movie count
    - Display logical/relevant information when opened
- At least one of the three pro features implemented:
    - Home page list
    - Similarity score in watchlist
    - Recommendation engine

## Submisssion
The best way to submit this project is as a pull request to your private fork of this repository.  Be sure to keep the fork private, and give us the appropriate access (after notifying us by email).  For each pro feature implemented, please include a short explanation (< 200 words) in the pull request description, or as PR comments on the relevant files.

The submission should be able to be cloned directly from the forked repository and launched using `yarn start` or `npm start`.

If you are unable use the fork/pull request method, you may also submit as a zip file (please do not include the `node_modules` folder).  If submitting with this method, please include a text/markdown file with any pro feature explanations.
