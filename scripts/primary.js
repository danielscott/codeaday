// Navigation Item Width
$(document).ready(function() {
			if(document.documentElement.clientWidth >= 768) {
				var navitems = 100 / $('nav li').size() - .1;
				$('header nav ul li').css('width',navitems + '%');
			}
		}
);