# jekyll-boilerpack
A minimalist boilerplate to get you started on a new Jekyll project quickly.

After working on a few Jekyll projects, I got tired of setting everything up from scratch every time, including setting up Bootstrap,  cleaning up the default Jekyll stuff, and configuring Grunt. So I decided to create BoilerPack as my own Jekyll starter kit. 

BoilerPack comes pre-configured with the following tools so you can hit the ground running:

* Bootstrap 3 (Sass port)
* Font Awesome (loaded from CDN)
* Autoprefixer
* Grunt

It also has the following features right out of the box:

* Static navbar
* Sticky footer
* Old-browser warning notification
* Disabled-javascript notification
* Site-wide custom notification
* Dynamic go-to-top button

## Installation

Run the following commands (replace `myproject` with your actual project name):

```bash
mkdir myproject

cd myproject

git clone https://github.com/mariordev/jekyll-boilerpack.git .

npm update
```

## Serve

Before serving the site, you must run Grunt to generate the default CSS and Javascript. Grunt is already pre-configured to run Sass preprocessing, js uglify, autoprefixing, and minification tasks and watch for changes in `_source/js/*.js` and `_source/sass/*.scss`. All you have to do is:

```bash
grunt
```

Now you can serve the site with:

```bash
jekyll serve
```

In your browser, go to `localhost:4000` and you should get the default index.html page.

## Folder Structure

After running `npm update` and `grunt`, you'll have the following folder structure:

	_includes
	_layouts
	_posts
	_source
		js
		sass
	assets
		css
		js
	node_modules

### _includes
This folder contains your typical Jekyll includes. I've provided some files to support the default layout, navbar, footer, and custom notifications.

### _layouts

The _layouts folder includes the default layout plus simple page and post layouts.

### _posts

The default _posts folder for you to store your blog posts.

### _source

This is a custom folder to store your Sass and Javascript source files. Grunt is pre-configured to process files from the `js` and `sass` folders into `assets/js` and `assets/css` respectively.

### assets

This is the folder where Grunt will save the output of the pre-process and post-process operations.

### node_modules

This is where all your dependencies are installed when you run `npm update`.

## Styles

You can add your main custom styles to `_source/sass/_styles.scss`. 

All sass files in this folder are imported together by `_source/sass/main.scss`. Bootstrap sass files, which are located inside `node_modules` are loaded here as well.

After the Grunt tasks run, the end result is a single `main.css` file, which is loaded by `_includes/head.html`.

Please check out the heading comments on each `.scss` file for usage details.


## Javascript

If you want to add things like Google Analytics code and similar stuff, the `_includes/javascript.html` file is a good place for it, since it's loaded on every page via the default layout.

This is also where jQuery, Bootstrap js, and custom js files are loaded.

## Notifications

There are three types of notifications included by default: "old-browser", "no-script", and "site-wide" notifications. These notifications are loaded and displayed as needed by the default layout.

### old-browser notification

Displayed automatically if the browser is IE and it's older than version 9, just in case! You may edit the text for this notification in `_includes/old-browser.html`.

### no-script notification

Displayed automatically when Javascript has been disabled on the user's browser. You may edit the text for this notification in `_includes/no-script.html`.

### site-wide notification

Displayed automatically when the variable `notification` is set in `_config.yml`. This is useful when you need to display some kind of  global notification or warning to your users on every page.


## Enjoy!

I hope this is useful to you as it's been to me. Let me know if you have any questions or comments. I'm [@mariordev on the Twittersphere](https://www.twitter.com/mariordev). Have a great day!