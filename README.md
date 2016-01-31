# paulgraham-essays-concatenator
This is a node.js app that concatenates all the available essays in paulgraham.com/articles.html (the most recent first) into one only html file, hidding the menu bar and the background in order to make it easily printable, this repo contains an html (output.html) with all the essays until 30th Jan 2016.

---
## Requisites
* Have node.js (npm) installed

---
## How to use
1. Run `git clone https://github.com/NotAnyMike/paulgraham-essays-concatenator.git`
2. Move to the folder `cd cd paulgraham-essays-concatenator`
3. Run `npm install`
3. Run in the terminal `node paulgraham.js` and wait until it finishes
6. run `cat essays/2000.html essays/1*.html > output.html` in the terminal
7. Done, the file output.html should contain all the essasy in one html, print it or do whatever you want it with

or simple run
```
git clone https://github.com/NotAnyMike/paulgraham-essays-concatenator.git && cd paulgraham-essays-concatenator && npm install && node paulgraham.js && cat essays/2000.html essays/1*.html > output.html && open output.html && echo "That was all .... bye (:"
```

---
## Support
Contact me on twitter [@NotAnyMike](https://twitter.com/NotAnyMike)