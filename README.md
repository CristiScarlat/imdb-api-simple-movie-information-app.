
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
