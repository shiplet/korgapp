angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("adminLogin.html","<div class=\"login\">\n	<header><h3>Please login to access this page</h3></header>\n	<form name=\"adminLogin\" class=\"adminLogin\">\n		<input class=\"userLogin\" type=\"text\" ng-model=\"user.username\" title=\"username\" placeholder=\"username\" autofocus/>\n		<input class=\"userLogin\" type=\"password\" ng-model=\"user.password\" title=\"password\" placeholder=\"password\"/>\n		<div class=\"alert\"><p ng-bind=\"alert\"></p></div>\n		<button type=\"submit\" class=\"submitLogin\" ng-click=\"submitLogin()\">Submit</button>\n	</form>\n</div>");
$templateCache.put("adminSubmit.html","<h1>Admin</h1>");
$templateCache.put("main.html","<!-- LEFT COLUMN -->\n<div class=\"left-column\">\n	<div ng-include=\"\'components/inset_display.html\'\"></div>\n	<div ng-include=\"\'components/waveform_selectors.html\'\"></div>\n</div>\n\n\n<!-- RIGHT COLUMN -->\n<div class=\"right-column\">\n	<div ng-include=\"\'components/knob_row.html\'\"></div>\n	<div ng-include=\"\'components/waveform_settings.html\'\"></div>\n</div>");
$templateCache.put("components/button_row.html","<div class=\"button_row\" buttons>\n	<div class=\"button active\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n</div>");
$templateCache.put("components/inset_display.html","<div class=\"inset_display\">\n	<div class=\"inset\">\n		<div class=\"display\"><span class=\"side\">A.</span> <span class=\"instrument\">11</span></div>\n	</div>\n</div>");
$templateCache.put("components/knob_row.html","<div class=\"knob_row\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n</div>");
$templateCache.put("components/waveform_selectors.html","<div class=\"waveform_selectors\">\n\n	<div class=\"selectors\">\n		<img src=\"images/selector.svg\">\n		<header><h4 class=\"one\">Program Number</h4></header>\n		<div ng-include=\"\'components/button_row.html\'\"></div>\n	</div>\n\n	<div class=\"edit_select\">\n		<header><h4 class=\"one\">Edit Select 1</h4> <h4 class=\"two\">Edit Select 2</h4></header>\n		<img class=\"one\" src=\"images/knob.svg\">\n		<img class=\"two\" src=\"images/knob.svg\">		\n	</div>\n\n</div>");
$templateCache.put("components/waveform_settings.html","<div class=\"waveform_settings\"></div>");}]);