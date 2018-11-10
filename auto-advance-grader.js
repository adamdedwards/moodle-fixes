// ==UserScript==
// @match         https://learn.illinois.edu/*/*
// @name          Auto-advance gradebook in moodle.org
// @description   Auto-advances gradebook in moodle.org
// @author        Adam Edwards
// @homepage      https://github.com/adamdedwards/moodle-fixes
// @namespace     https://github.com/adamdedwards/moodle-fixes
// @version       0.1
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$( "button.btn-primary" ).click(function() {
    var checkExist = setInterval(function() {
    if ($('input.btn-primary').length) {
        $( "input.btn-primary" ).click();
        clearInterval(checkExist);
       }
    }, 100);
});

$( "button.btn-primary" ).click(function() {
    setTimeout(function(){ $( 'div.alignment > a[data-action="next-user"]' )[0].click();},2000);

});
