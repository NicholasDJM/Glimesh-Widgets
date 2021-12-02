// ==UserScript==
// @name         Glimesh Widgets
// @namespace    http://github.com/NicholasDJM/Glimesh-Widgets
// @version      0.1.0-alpha
// @updateURL    https://raw.githubusercontent.com/NicholasDJM/Glimesh-Widgets/master/glimeshwidgets.js
// @downloadURL  https://raw.githubusercontent.com/NicholasDJM/Glimesh-Widgets/master/glimeshwidgets.js
// @supportURL   https://github.com/NicholasDJM/Glimesh-Widgets/issues/new
// @description  Provides widgets for https://glimesh.tv on every profile that has the correct data.
// @author       Nicholas Miller
// @include      https://glimesh.tv/*
// @exclude      https://glimesh.tv/
// @exclude      https://glimesh.tv/users/*
// @exclude      https://glimesh.tv/*/profile
// @exclude      https://glimesh.tv/streams/*
// @exclude      https://glimesh.tv/events/*
// @exclude      https://glimesh.tv/platform_subscriptions/*
// @exclude      https://glimesh.tv/about/*
// @exclude      https://glimesh.tv/s/*
// @icon         https://icons.duckduckgo.com/ip2/glimesh.tv.ico
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js#sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=
// @grant        GM_info
// @grant        GM_log
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @noframes
// ==/UserScript==
/* global $, jQuery */

// ====================================================== //
// ====================== Variables ===================== //
// ====================================================== //

const width = "350",
	height = "500";

// ====================================================== //
// ====================== Functions ===================== //
// ====================================================== //

function log(text) {
	GM_log("Glimesh Widgets: " + text);
}

function error(text) {
	throw new Error("Glimesh Widgets: " + text);
}

function variables() {
	return {
		"theme": $("#settingsDropdown:contains(🌘)").length > 0 ? "dark" : "light",
		"tag": $("img[alt^=\"GlimeshWidgets\"]"),
		"social": $(".container-fluid.container-stream #social-buttons"),
		"container": $("#widgets"),
		"name": $("[title='View Profile']").find("h3").text()
	};
}

function createWidget(type) {
	const {theme, tag, social, container, name} = variables();
	switch (type) {
	case "discord": {
		if (tag.length === 0) {break;}
		let data = tag.attr("alt").split("discord=")[1];
		data = data.split(",")[0];
		if (/\d/g.test(data)) {
			log("Discord server ID: " + data);
			createCard(container).append($(`<iframe src="https://discord.com/widget?id=${data}&theme=${theme}" width=${width} height=${height} frameborder=0 allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`));
			log("Created Discord Widget");
		}
		break;
	}
	case "twitter": {
		social.find("li").each((index, element) => {
			let link = $(element).find("a[href*='https://twitter.com'");
			if (link.length > 0) {
				link = link.attr("href");
				log("Twitter address: " + link);
				const card = createCard(container);
				card.append($(`<a class="twitter-timeline" href=${link + "?ref_src=twsrc%5Etfw"} data-width=${width} data-height=${height} data-dnt="true" data-theme=${theme}>Tweets by ${name}</a>`));
				card.append($("<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"));
				log("Created Twitter Widget");
			}
		});
		break;
	}
	case "calendar": {
		if (tag.length === 0) {break;}
		let data = tag.attr("alt").split("calendar=")[1];
		if (data.length > 0){
			data = data.split(",")[0];
			if (/[\da-z]+@group.calendar.google.com/g.test(data)) {
				log("Google Calendar ID: " + data);
				createCard(container).append($(`<iframe src="https://calendar.google.com/calendar/embed?height=${height}&wkst=1&bgcolor=%23${theme == "dark" ? "0E1726" : "FFFFFF"}&ctz=America%2FToronto&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=${data}&color=%23039BE5" style="border-width:0" width="${width}" height="${height}" frameborder="0" scrolling="no"></iframe>`));
				log("Created Calendar Widget");
			}
		}
		break;
	}
	}
}

function createCard(element) {
	const column = $("<div class=\"col-xl-3 layout-spacing\"></div>"),
		card = $("<div class=\"card\"></div>"),
		cardBody = $("<div class=\"card-body user-content\" style=\"margin-left:auto;margin-right:auto;\"></div>");
	card.append(cardBody);
	column.append(card);
	element.append(column);
	return cardBody;
}

function createMenu() {
	log("Creating settings menu...");
	const { name } = variables(),
		// eslint-disable-next-line unicorn/consistent-function-scoping
		input = (key, global = true) => {
			return `<input id="widget-${( global ? "global-" : "") + key.toLowerCase()}" type="checkbox"${GM_getValue((global ? "global" : name) + key, true) ? " checked" : ""}></input><label class="widget-setting-label" for="widget-${(global ? "global-" : "") + key.toLowerCase()}">${key}</label><br>`;
		},
		menu = $(`<div id="widget-menu">
	<h6>Glimesh Widgets Settings</h6>
	<a href="https://www.github.com/NicholasDJM/Glimesh-Widgets">Github</a><br>
	<br>
	<h6>Global Settings</h6>
	${input("Enable") +
	input("Twitter") +
	input("Discord") +
	input("Calendar")}
	<h6>Channel Settings for ${name}</h6>
	${input("Enable", false) +
	input("Twitter", false) +
	input("Discord", false) +
	input("Calendar", false)}
	<br>
	<button id="widget-save-settings" class="btn btn-success">Save</button>
	<button id="widget-revert-settings" class="btn btn-outline-primary">Cancel</button>
</div>`),
		settingsButton = $(`<li class="nav-item">
	<a id="widget-show-settings" class="nav-link target="_blank" data-placement="bottom" data-toggle="tooltip" data-original-title="Glimesh Widget Settings">
		<i class="fa fa-cog fa-fw"></i>
		<span class="d-lg-none">Glimesh Widgets Settings</span>
	</a>
</li>`);
	$(".navbar-nav.d-lg-flex.align-items-lg-center .nav-item:first-child").before(settingsButton);
	$("body").append(menu);
	settingsButton.click(menuToggle);
	$("#widget-revert-settings").click(menuRevert);
	$("#widget-save-settings").click(menuSave);
	log("Created settings menu!");
}

function addStyle() {
	return GM_addStyle(`#widget-menu {
	position:fixed;
	top:15px;
	left:0;
	right:0;
	z-index:123456791;
	border-radius:.25rem;
	margin:auto;
	min-width:400px;
	width:0;
	padding:20px;
	background-color:#1b2e4b;
	display:none;
}
#widget-show-settings {
	cursor:pointer;
}
#widget-menu-overlay {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:rgba(0,0,0,0.25%);
	z-index:123456790;
	display:none;
}
.widget-setting-label {
	padding-left:5px;
}`);
}

function menuToggle() {
	$("#widget-menu").toggle();
}

function menuRevert() {
	const { name } = variables();
	$("#widget-global-enable").prop("checked", GM_getValue("globalEnable", true));
	$("#widget-global-twitter").prop("checked", GM_getValue("globalTwitter", true));
	$("#widget-global-discord").prop("checked", GM_getValue("globalDiscord", true));
	$("#widget-global-calendar").prop("checked", GM_getValue("globalCalendar", true));
	$("#widget-enable").prop("checked", GM_getValue(name + "Enable", true));
	$("#widget-twitter").prop("checked", GM_getValue(name + "Twitter", true));
	$("#widget-discord").prop("checked", GM_getValue(name + "discord", true));
	$("#widget-calendar").prop("checked", GM_getValue(name + "Calendar", true));
	menuToggle();
}

function menuSave() {
	const { name } = variables();
	GM_setValue("globalEnable", $("#widget-global-enable").prop("checked"));
	GM_setValue("globalTwitter", $("#widget-global-twitter").prop("checked"));
	GM_setValue("globalDiscord", $("#widget-global-discord").prop("checked"));
	GM_setValue("globalCalendar", $("#widget-global-calendar").prop("checked"));
	log($("#widget-global-enable").prop("checked"));
	GM_setValue(name + "Enable", $("#widget-enable").prop("checked"));
	GM_setValue(name + "Twitter", $("#widget-twitter").prop("checked"));
	GM_setValue(name + "Discord", $("#widget-discord").prop("checked"));
	GM_setValue(name + "Calendar", $("#widget-calendar").prop("checked"));
	menuToggle();
}

// ====================================================== //
// ======================== Main ======================== //
// ====================================================== //

$(()=>{
	log("Loading Glimesh Widgets version " + GM_info.script.version);
	if (jQuery.fn.jquery != "3.6.0") {
		error("jQuery is the incorrect version: " + jQuery.fn.jquery);
	}
	addStyle();
	createMenu();
	$("#app").after($("<div class=\"container-fluid\"><div id=\"widgets\" class=\"row\"></div></div>"));
	if ($("#widget-global-enable").prop("checked") && $("#widget-enable").prop("checked")) {
		if ($("#widget-global-twitter").prop("checked") && $("#widget-twitter").prop("checked")) {
			createWidget("twitter");
		}
		if ($("#widget-global-discord").prop("checked") && $("#widget-discord").prop("checked")) {
			createWidget("discord");
		}
		if ($("#widget-global-calendar").prop("checked") && $("#widget-calendar").prop("checked")) {
			createWidget("calendar");
		}
	}
	GM_registerMenuCommand("Settings", menuToggle);
});