angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/inset_display.html","<div class=\"inset_display\">\n	<div class=\"inset\">\n		<div class=\"display\"></div>\n	</div>\n</div>");
$templateCache.put("components/knob_row.html","<div class=\"knob_row\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n</div>");
$templateCache.put("components/waveform_selectors.html","<div class=\"waveform_selectors\">\n\n	<div class=\"selector\">\n		<img src=\"images/selector.svg\">\n	</div>\n\n	<div class=\"edit_select 1\">\n		<header><h4>Edit Select 1</h4></header>\n		<img src=\"images/knob.svg\">\n	</div>\n\n	<div class=\"edit_select 2\">\n		<header><h4>Edit Select 2</h4></header>\n		<img src=\"images/knob.svg\">		\n	</div>\n\n</div>");
$templateCache.put("components/waveform_settings.html","<div class=\"waveform_settings\"></div>");}]);