#Guess1app
Create an application using any version of Angular2 and whatever libraries to make this App looks nice.
This App is created by [Jak Ratiwanich][98e89d95]

  [98e89d95]: https://www.linkedin.com/in/jakratiwanich/ "Go to my LinkedIn"

###Requirements:
1) Application is uses to enter children in/out times for a day.

2) Data for time entries will be stored on localStorage. Only valid records has to be stored. Records have to be stored right when they became valid.

3) Hardcode list of 10 children.

4) Time entry has the following logic:
* OUT time must be greater than IN time
* Next IN Time must be greater that previous OUT time
* For last entry OUT time is not required.

5) Click on header must set next In or Out time with current time. The button `Add Time` will be used for this functionality.

6) After date change page present previously stored records for changed date.

7) Header of each Timesheet contains :
* Child or student's name
* if last record has no out time (or null) display `IN` on the header.
* if last record has out time, displays `OUT`.
* If there is no records entered, display only child name.


###Out of Scope:
1) No authentication and authorization required.

2) Page Responsive to mobile devices will not be tested. Timesheet form can only be scaled to 600 pixel in width minimum.

###Bonus features:
1) When selecting a new date from the calendar, user will be able to add student from a `student dropdown` input box.

##Importan Test Cases
1) mock up student list will ONLY be populated on the current date

#My Development server and demo
1) For viewing on my demo server:
goto http://dev.triangleitc.com/guess/

2) For running locally -
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

3) Use your own server - copy and deploy the entire `dist` folder to your web server

## NOTE
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

To get more info on the Angular CLI use `ng help`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

Should you need help compiling or running this App, email me from Github or call me at +1-949-346-2989. Thank you!
