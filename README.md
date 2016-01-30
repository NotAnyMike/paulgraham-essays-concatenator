# paulgraham-essays-concatenator
This is a node.js app that concatenates all the available essays in paulgraham.com/articles.html

---
# Requisites
* Have node installed

---
# How to use
1. Go to http://www.paulgraham.com/articles.html
2. Open the javascript console and type:
  ```
  var list = "['articles.html',";
  var jq = document.createElement('script');
  jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  jQuery.noConflict();
  ```
  and then run 
  ```
  $($("table[width='435']")[1]).find('a').each(function(index, e){list = list + "'" + $(e).attr('href') + "',"})
  list = list + "'html']";
  ```
3. Copy the value of the variable list
4. Replace the first line with `var list = ` and then add the value copied.
5. Go to the folder containing paulgraham.js and run in the terminal `node paulgraham.js` and wait until it finishes
6. run `cat essays/2000.html essays/1*.html > output.html` in the terminal
7. Done, the file output.html should contain all the essasy in one html, print it or do whatever you want it with