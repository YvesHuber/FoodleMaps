var jcontent = {
    "Hello": "Hello",
    "World": "World",
}
var output = document.getElementById('output');
output.innerHTML = jcontent.Hello + ' ' + jcontent.World;

var jtext = {
    "text": "<center>The team consists of 4 informatics students (3 application developers and 1 systems engineer), which are in their first year of apprenticeship.<br> During the project week, we were given the task to deepen our knowledge of programming and to realize our own ideas. It is important to note that we are developing an application that serves a purpose with a public programming interface.<br> We came up with the idea to develop a kind of Google Maps, which should show all restaurants. That is why our site is also called Foodle (Food + Google).Another of our goals was also that our site should be user-friendly, that is, easy to use.<br> We hope you like this site, even if there are some flaws on these pages.</center>"
}
var text = document.getElementById('text');
text.innerHTML = jtext.text;
