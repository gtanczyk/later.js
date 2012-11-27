later.js
========

One function lightweight library useful in some situations, an alternative for "ugly" setTimeout.

Example 0
---------

	console.log.later(1000, console)('Hello world.')

Example 1
---------

	node.style.width = '100px';
	function() {
		node.className += 'do-some-css-transition';
	}.later(0)();		

Example 3
---------

	dojo.query('textarea.autogrow:not(.-autogrow-parsed)', refNode).toggleClass('-autogrow-parsed').on("keydown", function() {
			 this.style.height = "";
			 this.style.height = Math.min(this.scrollHeight, 256) + "px"; 
		}.later(0))	
