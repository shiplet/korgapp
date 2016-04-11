angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("adminLogin.html","<div class=\"login\">\n	<header><h3>Please login to access this page</h3></header>\n	<form name=\"adminLogin\" class=\"adminLogin\">\n		<input class=\"userLogin\" type=\"text\" ng-model=\"user.username\" title=\"username\" placeholder=\"username\" autofocus/>\n		<input class=\"userLogin\" type=\"password\" ng-model=\"user.password\" title=\"password\" placeholder=\"password\" ng-change=\"resetAlert()\"/>\n		<div class=\"alert\"><p ng-bind=\"alert\"></p></div>\n		<button type=\"submit\" class=\"submitLogin\" ng-click=\"submitLogin()\">Submit</button>\n	</form>\n</div>");
$templateCache.put("adminSubmit.html","<div class=\"adminSubmit\">\n	<h2 class=\"title\">Submit a Waveform</h2>\n	<form name=\"waveformItem\">\n\n		<!-- Waveform ID -->\n		<div class=\"formSegment\">\n\n			<div class=\"formItem\">\n				<h4 class=\"segmentTitle\">Waveform ID</h4>\n				<input type=\"text\" title=\"waveform ID\" ng-model=\"waveform.ID\" class=\"formInput\">\n			</div>\n\n			<div class=\"spacer\"></div>\n\n			<div class=\"formItem\">			\n				<h4 class=\"segmentTitle\">Edit Select</h4>\n				<input id=\"edit-select-1\" type=\"radio\" ng-model=\"waveform.edit_select\" value=\"1\" class=\"formRadio\" title=\"edit select 1\" ng-change=\"trackInput()\">\n				<label class=\"edit-select\" for=\"edit-select-1\">1</label>\n				<input id=\"edit-select-2\" type=\"radio\" ng-model=\"waveform.edit_select\" value=\"2\" class=\"formRadio\" title=\"edit select 2\" ng-change=\"trackInput()\">\n				<label class=\"edit-select\" for=\"edit-select-2\">2</label>\n			</div>\n\n		</div>\n\n		<!-- Edit Select 1 -->\n		<div ng-show=\"waveform.edit_select == \'1\'\">\n			<div class=\"formSegment\" ng-repeat=\"(key, value) in EditSelect_1\">\n				<h4 class=\"segmentTitle\">{{key.toUpperCase()}}</h4>\n				<div class=\"formRow\">\n					<div ng-repeat=\"item in EditSelect_1[key]\">\n						<div ng-if=\"item.type == \'text\'\">\n							<input class=\"formInput formField\" type=\"text\" ng-model=\"waveform.EditSelect_1[key][item.name]\" placeholder=\"{{item.label}} [{{item.values}}]\" ng-change=\"trackInput()\" title=\"{{item.label}}\">\n						</div>\n						<div ng-else-if=\"item.type == \'dropdown\'\">\n							<select class=\"formSelect formField\" ng-model=\"waveform.EditSelect_1[key][item.name]\" ng-change=\"trackInput()\" title=\"{{item.label}}\">\n								<option value=\"\" selected>-- {{item.label.toUpperCase()}} --</option>\n								<option ng-repeat=\"subitem in item.values\" value=\"{{subitem}}\">{{subitem}}</option>\n							</select>\n						</div>\n						<div ng-else-if=\"!item.label\">\n							<div class=\"noValue formField\">						\n								<img src=\"images/knob_transparent.svg\">\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<!-- Edit Select 2 -->\n		<div ng-show=\"waveform.edit_select == \'2\'\">\n			<div class=\"formSegment\" ng-repeat=\"(key, value) in EditSelect_2\">\n				<h4 class=\"segmentTitle\">{{key.toUpperCase()}}</h4>\n				<div class=\"formRow\">\n					<div ng-repeat=\"item in EditSelect_2[key]\">\n						<div ng-if=\"item.type == \'text\'\">\n							<input class=\"formInput formField\" type=\"text\" ng-model=\"waveform.EditSelect_2[key][item.name]\" placeholder=\"{{item.label}} [{{item.values}}]\" ng-change=\"trackInput()\" title=\"{{item.label}}\">\n						</div>\n						<div ng-else-if=\"item.type == \'dropdown\'\">\n							<select class=\"formSelect formField\" ng-model=\"waveform.EditSelect_2[key][item.name]\" ng-change=\"trackInput()\" title=\"{{item.label}}\">\n								<option value=\"\" selected>-- {{item.label.toUpperCase()}} --</option>\n								<option ng-repeat=\"subitem in item.values\" value=\"{{subitem}}\">{{subitem}}</option>\n							</select>\n						</div>\n						<div ng-else-if=\"!item.label\">\n							<div class=\"noValue formField\">\n								<img src=\"images/knob_transparent.svg\">\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<button type=\"submit\" class=\"submitWaveform\" ng-click=\"testWaveform()\">Submit</button>\n	</form>\n</div>");
$templateCache.put("main.html","<!-- LEFT COLUMN -->\n<div class=\"left-column\">\n	<div ng-include=\"\'components/inset_display.html\'\"></div>\n	<div ng-include=\"\'components/waveform_selectors.html\'\"></div>\n</div>\n\n\n<!-- RIGHT COLUMN -->\n<div class=\"right-column\">\n	<div ng-include=\"\'components/knob_row.html\'\"></div>\n	<div ng-include=\"\'components/waveform_settings.html\'\"></div>\n</div>");
$templateCache.put("components/button_row.html","<div class=\"button_row\" buttons>\n	<div class=\"button active\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n	<div class=\"button\"></div>\n</div>");
$templateCache.put("components/inset_display.html","<div class=\"inset_display\">\n	<div class=\"inset\">\n		<div class=\"display\"><span class=\"side\">A.</span> <span class=\"instrument\">11</span></div>\n	</div>\n</div>");
$templateCache.put("components/knob_row.html","<div class=\"knob_row\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n	<img src=\"images/knob.svg\">\n</div>");
$templateCache.put("components/waveform_selectors.html","<div class=\"waveform_selectors\">\n\n	<div class=\"selectors\">\n		<img src=\"images/selector.svg\">\n		<header><h4 class=\"one\">Program Number</h4></header>\n		<div ng-include=\"\'components/button_row.html\'\"></div>\n	</div>\n\n	<div class=\"edit_select\">\n		<header><h4 class=\"one\">Edit Select 1</h4> <h4 class=\"two\">Edit Select 2</h4></header>\n		<img class=\"one\" src=\"images/knob.svg\">\n		<img class=\"two\" src=\"images/knob.svg\">		\n	</div>\n\n</div>");
$templateCache.put("components/waveform_settings.html","<div class=\"waveform_settings\"></div>");}]);