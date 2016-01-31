var list = ['articles.html'];

var wget = require('wget-improved'),
	$ = require('jquery-node'),
	get = require('get');

var src = 'http://www.paulgraham.com/';
var output = './essays/';
var options = {
};

var dl = get('http://www.paulgraham.com/articles.html');
dl.asString(function(err, str) {
    var elements = $(str);
    $($(str).find('table[width="435"]')[1]).find('a').each(function(index, e){list.push($(e).attr('href'))});
    
    var counter = 1000;
    console.log('Downloading essasys');
    list.forEach(function(e){
		var src2 = ""
		if(e.indexOf('http') < 0) src2 = src + e;
		//else src2 = src + e;
		if(src2 != "") {
			wget.download(src2, output + counter  + ".html", options);
			counter++;
		}

	});
	console.log('Done (:   .... now run "cat essays/2000.html essays/1*.html > output.html"');

});
