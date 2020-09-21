# Movie search app
Movie search app with express backend and vue frontend.
The app finds movies based on the search term in OMDB database, which must be at least 3 chars, then lists the movies it found.
By clicking the movie title in the movie list, a modal window appears that shows the excerpt of the movie from Wikipedia if the information is available.

# APP setup
To run the backend, an OMDB api key is needed which can be freely obtained at http://omdbapi.com/
The key is going to arrive in email and must be added to the .env file.