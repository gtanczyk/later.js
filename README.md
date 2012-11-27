later.js
========

One function lightweight library useful in some situations, an alternative for "ugly" setTimeout.

#### Example 0

	console.log.later(1000, console)('Hello world.')

It just works, need to pass scope for console.log invocation.

#### Example 1

	node.className += 'do-some-css-transition';
	function() {
		node.style.width = '100px';
	}.later()();		

Defering invocations is required while working with CSS transitions.

#### Example 3

	dojo.query('textarea.autogrow:not(.-autogrow-parsed)', refNode).toggleClass('-autogrow-parsed').on("keydown", function() {
			 this.style.height = "";
			 this.style.height = Math.min(this.scrollHeight, 256) + "px"; 
		}.later(0));
		
Code from www.gamedev.pl interface. Function call must be deferred, because scrollHeight value is not recalculated by browser during initial event invocation.