## README

### Feed Engine || Turing-Trails || Wonder-Ways

This application is availabe online at https://wonder-ways.herokuapp.com/

Wonder-ways was brought to you by Emily Berkeley, Bhargavi Satpathy, Lydia Shafer and Christopher Luhring.

This project is for the fourth module at the Turing School of Software and Design.

Full project specifications are available here: http://tutorials.jumpstartlab.com/projects/feed_engine/feed_engine.html

Emily Berkeley: https://github.com/emilyMB

Bhargavi Satpathy: https://github.com/bhargavisatpathy

Lydia Shafer: https://github.com/lydias303

Christopher Luhring: https://github.com/cluhring

### Ruby Gem for the backend API is at
https://github.com/bhargavisatpathy/wonder_ways_gem

```ruby
gem 'wonder_ways'
```

### Here's what you'll need to do after pulling to get it working on heroku

* Clone the repo
* bundle install
* rake run - to run the applications locally.
* The backend Rails API can be found ["here."](http://localhost:3900/api/v1/trails)
* The frontend Ember application can be found ["here."](http://localhost:4900)

To deploy this application to heroku, please follow the steps below:
* rake deploy
* heroku run rake db:migrate - will set up your Postgress database
* heroku run rake populate - will populate your Postgress database.
* heroku open and look at all the interesting trails at your place
