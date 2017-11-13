# Welcome **Earthlings** to Lightspeed Web Genesis
This is a simple framework consisting of **[gulp](https://github.com/gulpjs/gulp/blob/master/docs/API.md), [gulp-sass](https://github.com/dlmanning/gulp-sass), and [gulp-pug](https://github.com/pugjs/gulp-pug)**.

I decided to use **Pug** for its syntax and template inheritance capabilities, like so:
```
//- layout.pug
html
  head
    title My Site - #{title}
    block scripts
      script(src='/jquery.js')
  body
    block content
    block foot
      #footer
        p some footer content

//- page-a.pug
extends layout.pug

block scripts
  script(src='/jquery.js')
  script(src='/pets.js')

block content
  h1= title
  - var pets = ['cat', 'dog']
  each petName in pets
    include pet.pug


//- pet.pug
p= petName
```
For the complete guide, head to [pugjs](https://pugjs.org/api/getting-started.html) documentation or jump drive to [António Regadas' article](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33) for more comprehensive explanation.

**Sass'** syntax has almost the same structure to that of Pug. It also has same powerful capabilities which bodes well for my coding rhythm. Inheritance is a big thing for me *(will make you think of my trust fund)* and here's an example for sass:

```
.message
  border: 1px solid #ccc
  padding: 10px
  color: #333


.success
  @extend .message
  border-color: green


.error
  @extend .message
  border-color: red


.warning
  @extend .message
  border-color: yellow
```
Sass has good [documentation](http://sass-lang.com/guide) which will propel your skills in no time. If you're more of a moving image person, head to [The Net Ninja](https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) or [LevelUpTuts](https://www.youtube.com/watch?v=fbVD32w1oTo&list=PL2CB1F80266E986EA) series for Sass.

**Gulp** doesn't require javascript skills but you have to at least read through guides to modify destination path or add your own functions. [CSS-TRICKS](https://css-tricks.com/gulp-for-beginners/) has a nice tutorial for gulp and [Traversy Media](https://www.youtube.com/watch?v=1rw9MfIleEg) has mini crash course for this topic.


# Things that Matter
**Before you continue your exploration, be sure to have Node.js installed for seamless journey**

#### Installation of dependencies
>npm install

#### Gulp setup
>**pug** change source (the compiled single pug file) and destination of output html
>**sass** the source for separate sass folder for .sass and .scss files  and desination for single css output
>**watch** the destination of files that will trigger browserSync

#### I'm confused
My project structure was inspired by DevTips project setup tutorial which can help to understand the process, [part 1](https://www.youtube.com/watch?v=nY4kQssg3lw&list=PLqGj3iMvMa4KeBN2krBtcO3U90_7SOl-A&index=5) and [part 2](https://www.youtube.com/watch?v=Wm-BhGoaD70&list=PLqGj3iMvMa4KeBN2krBtcO3U90_7SOl-A&index=6). His video includes jekyll which I do not have but you will learn lots of things including the css folder structure that I followed. 
