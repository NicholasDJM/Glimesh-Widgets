// ==UserScript==
// @name         Glimesh Widgets
// @namespace    http://github.com/NicholasDJM/Glimesh-Widgets
// @version      0.0.2-alpha
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
// @grant        GM_log
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @noframes
// ==/UserScript==
/* global $, jQuery */
function log(text) {
	GM_log("Glimesh Widgets: "+text);
}
function loadSettings(setting, streamerName=null) {
	if (streamerName===null) {
		switch(setting) {
		case "enabled":
			return GM_getValue("enabled", true);
		case "discord":
			return GM_getValue("discord", true);
		case "twitter":
			return GM_getValue("twitter", true);
		case "theme":
			return GM_getValue("theme", "auto");
		}
		throw new Error("Setting is blank.");
	} else {
		//
	}
}
function saveSettings(setting, value) {
	switch(setting) {
	case "enabled":
		GM_setValue("enabled", value);
		log("Set enabled="+value);
		break;
	case "discord":
		GM_setValue("discord", value);
		log("Set discord="+value);
		break;
	case "twitter":
		GM_setValue("twitter", value);
		log("Set twitter="+value);
		break;
	case "theme":
		GM_setValue("theme", value);
		log("Set theme="+value);
		break;
	}
}
function createCard(theme, name) {
	let container = $(".container-fluid.container-stream");
	let social = container.find("#social-buttons");
	let row = $("#app");
	// Unfortunately, we cannot place anything inside the app div, as that is constantly refreshed by Glimesh's scripts, and thus our widgets get deleted.
	// The navigation bar is also inside the app div, so we must place our widgets below.
	let newRow = $("<div class=\"row widget-row\"></div>");
	newRow.attr("style", "padding-left:15px;padding-right:15px");
	row.after(newRow);
	if (container.length > 0 && social.length > 0 && loadSettings("enabled")) {
		let foundTwitter = false,
			createdTwitter = false,
			foundDiscord = false,
			createdDiscord = false,
			discordLink,
			twitterLink,
			discordID,
			card = (type) => {
				if (!loadSettings("discord") && type=="discord" && !loadSettings("discord", name)) {
					return;
				}
				if (!loadSettings("twitter") && type=="twitter" && !loadSettings("twitter", name)) {
					return;
				}
				let column = $("<div></div>");
				column.addClass("col-lg-4 layout-spacing widget");
				column.attr("style", "width:450px;max-width:450px");
				let card = $("<div></div>");
				card.addClass("card");
				let content = $("<div></div>");
				content.addClass("card-body user-content-body");
				content.attr("id", type);
				let widget;
				switch(type) {
				case "discord":
					if (!createdDiscord) {
						createdDiscord = true;
						widget = $("<iframe></iframe>");
						widget.attr("width", "350");
						widget.attr("height", "500");
						widget.attr("allowtransparency", true);
						widget.attr("frameborder", 0);
						widget.attr("sandbox", "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts");
						widget.attr("src", `https://discord.com/widget?id=${discordID}&theme=${theme}`);
						widget.attr("data-widget", "discord");
						log("Discord Widget Created");
					}
					break;
				case "twitter":
					if (!createdTwitter) {
						createdTwitter = true;
						widget = $("<a></a>");
						widget.attr("href", twitterLink+"?ref_src=twsrc%5Etfw");
						widget.attr("data-width", "350");
						widget.attr("data-height", "500");
						widget.attr("data-dnt", "true");
						widget.attr("data-theme", theme);
						widget.addClass("twitter-timeline");
						widget.text(`Tweets by ${twitterLink.split("https://twitter.com/")[1]}`);
						widget.attr("data-widget", "twitter");
						log("Twitter Widget Created");
					}
					break;
				}
				//console.dir(row);
				setTimeout(()=>{
					newRow.append(column);
					column.append(card);
					card.append(content);
					//console.dir(widget);
					content.append(widget);
					if (createdTwitter) {
						let script = $("<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
						widget.after(script);
					}
					log("Widget Appended: " +type);
				}, 10);
				//console.dir(row);
			};
		social.find("li").each((index, element)=>{
			let twitter = $(element).find("a[href*='twitter.com'");
			if (twitter && twitter.length > 0 && !foundTwitter) {
				twitterLink = twitter.attr("href");
				log("Found Twitter Link: "+twitterLink);
				foundTwitter=true;
				card("twitter");
			}
			let discord = $(element).find("a[href*='discord.gg'");
			if (( discord && discord.length > 0 && !foundDiscord)) {
				foundDiscord = true;
				discordLink = discord.attr("href");
				log("Found Discord Link: "+discordLink);
				discordID = $("img[alt^=\"GlimeshWidgets\"");
				if (discordID.length > 0) {
					discordID = discordID.attr("alt").split("discord=")[1];
					// eslint-disable-next-line unicorn/prevent-abbreviations
					for (let i = 0; i < discordID.length; i++) {
						if (!(discordID[i] >= 0 && discordID[i] <= 9)) {
							discordID = discordID.split(discordID[i])[0];
							log("split: "+discordID[i]);
							break;
						}
					}
					log("Discord Server ID: "+discordID);
					card("discord");
				} else {
					log("Cannot find Discord Server ID");
				}
			}
		});

	}
}

$(()=> {
	log("Glimesh Widgets Version 0.1 Initializing");
	if (jQuery.fn.jquery != "3.6.0") {
		throw new Error("We were expecting jQuery version 3.6.0, we got", jQuery.fn.jquery);
	}
	log("jQuery Version: "+jQuery.fn.jquery);
	let streamerName = $("[title='View Profile']").find("h3").text(),
		theme = $("#settingsDropdown:contains(🌘)").length > 0 ? "dark" : "light";
	function timer() {
		if (loadSettings("enabled")) {
			setInterval(()=>{
				if ($(".widget-row").length === 0) {
					log(".widget-row does not exist, creating...");
					createCard(theme, streamerName);
				}
			}, 100);
		}
	}
	timer();
	let nav = $(".navbar-nav.d-lg-flex.align-items-lg-center .nav-item:first-child");
	//console.dir("Nav object:", nav);
	let newButton = $("<li></li>");
	newButton.addClass("nav-item");
	let buttonLink = $("<a></a>");
	buttonLink.attr("id", "glimeshWidgetsSettingsButton");
	buttonLink.addClass("nav-link");
	buttonLink.attr("target", "_blank");
	buttonLink.attr("style", "cursor:pointer");
	buttonLink.data("placement", "bottom");
	buttonLink.data("original-title", "Glimesh Widgets Settings");
	buttonLink.data("toggle", "tooltip");
	newButton.append(buttonLink);
	let buttonIcon = $("<i></i>");
	buttonIcon.addClass("fas fa-cog fa-fw");
	buttonLink.append(buttonIcon);
	let buttonSpan = $("<span></span>");
	buttonSpan.text("Glimesh Widgets Settings");
	buttonSpan.addClass("d-lg-none");
	buttonLink.append(buttonSpan);

	const closeMenu = () => {
		log("Saving Settings");
		saveSettings("enabled", $("[name='widget-enable']").prop("checked"));
		saveSettings("discord", $("[name='widget-discord']").prop("checked"));
		saveSettings("twitter", $("[name='widget-twitter']").prop("checked"));
		handleMenu();
	};
	const handleMenu = () => {
		let menu = $("#glimeshWidgetsMenu");
		if (menu.length === 0) {
			log("Creating settings menu");
			log("enabled="+loadSettings("enabled"));
			let container = $(`<div id='glimeshWidgetsMenu' style='position:fixed;top:15px;left:0;right:0;z-index:123456790;border-radius:.25rem;margin:auto;width:350px;padding:20px;background-color:#1b2e4b'>
	<h5>Glimesh Widgets Settings</h5>
	<a href="https://github.com/NicholasDJM/Glimesh-Widgets">Github</a><br>
	<br>
	<strong>Global Settings</strong><br>
	<input name="widget-enable" type="checkbox" ${loadSettings("enabled") ? "checked" : ""}> Enable</input><br>
	<input name="widget-twitter" type="checkbox" ${loadSettings("twitter") ? "checked" : ""}> Enable Twitter Widget</input><br>
	<input name="widget-discord" type="checkbox" ${loadSettings("discord") ? "checked" : ""}> Enable Discord Widget</input><br>
	<br>
	<!--
		<strong>Channel Settings${streamerName ? " for "+streamerName : ""}</strong><br>
		<input name="widget-streamer-enable" type="checkbox" checked> Enable</input><br>
		<input name="widget-streamer-twitter" type="checkbox" checked> Enable Twitter Widget</input><br>
		<input name="widget-streamer-discord" type="checkbox" checked> Enable Discord Widget</input><br>
		<br>
	-->
	<button id="glimeshWidgetsSettingsSave" class="btn btn-success" type="button">Save</button>
	<button id="glimeshWidgetsSettingsClose" class="btn btn-primary" type="button">Cancel</button>
</div>`);
			$("body").append(container);
			$("#glimeshWidgetsSettingsSave").click(closeMenu);
			$("#glimeshWidgetsSettingsClose").click(handleMenu);
		} else {
			//console.dir(menu);
			log("Toggling settings menu visibility");
			$("[name='widget-enable']").prop("checked", loadSettings("enabled"));
			$("[name='widget-discord']").prop("checked", loadSettings("discord"));
			$("[name='widget-twitter']").prop("checked", loadSettings("twitter"));
			menu.toggle();
		}
	};
	nav.before(newButton);
	$("#glimeshWidgetsSettingsButton").click(handleMenu);
	GM_registerMenuCommand("Settings", handleMenu);
});