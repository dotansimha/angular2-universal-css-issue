# What to we have here?

- Angular 2 application.
- Universal server side rendering.
- Two Component's with SASS style loaded via Webpack (beta 25). 
- ONLY SERVER SIDE RENDERING - HTML is served to the browser without any JS file.

To run:

    $ npm install -g webpack rimraf nodemon node-nightly typescript
    $ npm install
    $ typings install
    
And in two different Terminal tabs:
    
    $ npm run watch
    $ npm start 
    
To debug server side rendering:

    $ npm run watch
    $ npm run debug:server 

Open you browser [http://localhost:3000](http://localhost:3000) !


# How to reproduce the bug?

1. Run the application.
2. The app have two routes: "/" (should be colored with red background) and "/test" (should be colored with blue background), start with "/"/
3. If you are seeing the red color on the "/" route - go to "/test" and you won't see any CSS styles.
4. Edit the Component that does not have styles (just add a space in the end of the file and wait for re-compile)
5. Repeat step 3 - now the last edited Component will have styles and the other one won't.