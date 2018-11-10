// ==UserScript==
// @match         https://learn.illinois.edu/*/*
// @name          Hover over edit button moodle.org
// @description   Opens the edit menu without clicking in Moodle
// @author        Adam Edwards
// @homepage      https://github.com/adamdedwards/moodle-fixes
// @namespace     https://github.com/adamdedwards/moodle-fixes
// @version       0.1
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

// TEST: Will show all edit menus
//var editMenus = document.getElementsByClassName("moodle-actionmenu");

//for(var i = 0; i < editMenus.length; i++) {
//    var targetMenu = editMenus[i];
//    targetMenu.className += " show";
//}

var hoverTimeout;

$('.moodle-actionmenu').hover(
       function(){ clearTimeout(hoverTimeout);
                  $(this).addClass('show'); },
    function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $self.removeClass('show');
    }, 100);
    }
)
