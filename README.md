# Alan Oakden Movie UI Task

This is my submission in response to the Movie UI task

### Getting started

1. Git Clone this repository
2. `cd` into project root folder
3. For local dev, run `npm dev`, this will start up the frontend on `http://localhost:5173` and the server on `https://localhost:3000`, feel free to adjust this if required.

### Optional - Local docker

There is a simple dockerfile placed in this project

#### Build image

Run `docker build -t uitechtest .` you can replace 'uitechtest' with any image name you prefer.

Then run `docker run -d --rm -p 5173:5173 --name oak_den uitechtest:latest` to spin up a local docker container and run the front end locally should you wish to. You'll need to run `npm start` separately within the backend directory.

### Completed

* Improved layout and formatting
* Get endpoints implemented
* Refresh button for movies
* Review column shows average scores
* Review column is sortable
* Movie review form appears upon row click
* Error handling
* Loading handling
* Utilise docker / containerise in some manner, merge with express project

### To do


* Add unit tests
* Add stars next to average score text

### Potential Future Improvements

* Customise the theme / enhance UI rather than use default material UI
* Implement against a full API linked to a DB
* Implement a responsive table so side scrolling is not required on mobile - [React super responsive table](https://www.npmjs.com/package/react-super-responsive-table)
* Add a clearer call to action on row select


## Original Task
Our developer was part way through developing the following feature but left the company and you are tasked with picking up where they left off.

The aim is to complete the piece of work by refactoring and improving the current code to get it to a working state that passes all A/C. Use material UI components and a form library where desirable.

Please return as a link to a public GIT store of your choice. e.g. Github

***A/C***
Must have(s)
* Display total number of movies.
* Table must show movie title, average review score to 1 decimal place and company that produces the film.
    * Movie company data comes from movieCompanies GET request.
    * Movies data comes from movies GET request.
* User must be able to select table row to leave a review with form appearing when there is a selected movie.
    * POST request to submitReview endpoint and display message returned on response.
    * Form must restrict message to 100 characters and show an error message if over 100 and not allow for submission in this instance.
* Highlight selected movie row when clicked.
* Handle error and loading states.

Should have(s)
* Review column should be sortable.
* Submit review form should appear in a modal on mobile devices or small breakpoints.

Could have(s)
* Add a button (or other mechanism) to refresh movies and movie companies.
* Containerise application using docker.


The three endpoints to be used are:
* GET movie companies: http://localhost:4321/movieCompanies
* GET movies: http://localhost:4321/movies
* POST review: http://localhost:4321/submitReview
    * body {review: message}

Please run server locally from https://github.com/michaelOptix1/starter-express-api
