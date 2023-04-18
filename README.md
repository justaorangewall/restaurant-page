# 🚀 RESTAURANT PAGE

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application


1.  Inside of `src/index.js` write a simple console.log or alert statement and then run `npx webpack`. Load up `dist/index.html` in a browser to make sure everything is working correctly.
    
    *   Quick tip #2: if you run `npx webpack --watch` you will not have to rerun webpack every time you make a change.
2.  Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.
    
3.  Now remove those elements from the HTML (so leave only the `<html>`, `<body>`, and `<div id="content">` tags) and instead create them by using JavaScript only, e.g. by appending each new element to `div#content` once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of `index.js`.
    
4.  Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. [Look at the behavior of this student solution](https://eckben.github.io/bearysBreakfastBar/) for visual inspiration.
    
    1.  Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
        
    2.  Write the tab-switching logic inside of `index.js`. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
        
5.  If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running `webpack` the full bundled version of your site is available in the `dist` folder, but GH pages is looking for an index.html in the root directory of your project.
    
    1.  Simply follow the instructions on [this gist](https://gist.github.com/cobyism/4730490). EZPZ!
    2.  Recall that the **source branch** for GitHub Pages is set in your repository’s settings.