// ==UserScript==
// @name         Glimesh Widgets
// @namespace    http://github.com/NicholasDJM/Glimesh-Widgets
// @version      0.1
// @description  Provides widgets for https://glimesh.tv on every profile that has the correct data.
// @author       Nicholas Miller
// @include      https://glimesh.tv/*
// @exclude      https://glimesh.tv/users/*
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
// ==/UserScript==
/* global $ jQuery */
function log(text) {
	GM_log("Glimesh Widgets: "+text);
}
function createCard() {
	let container = $(".container-fluid.container-stream");
	let social = $(".container-fluid.container-stream #social-buttons");
	let row = $(".container-fluid.container-stream > .row:nth-child(2) > .col-lg-9.layout-spacing");
	if (container.length > 0 && social.length > 0) {
		let foundTwitter = false,
			createdTwitter = false,
			foundDiscord = false,
			createdDiscord = false,
			discordLink,
			twitterLink,
			discordID,
			card = (type) => {
				let column = $("<div></div>");
				column.addClass("col-lg-3 layout-spacing widget");
				let card = $("<div></div>");
				card.addClass("card");
				let content = $("<div></div>");
				content.addClass("card-body user-content-body");
				content.id = type;
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
						widget.attr("src", `https://discord.com/widget?id=${discordID}&theme=dark`);
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
						widget.attr("data-theme", "dark");
						widget.addClass("twitter-timeline");
						widget.text(`Tweets by ${twitterLink.split("https://twitter.com/")[1]}`);
						log("Twitter Widget Created");
					}
					break;
				}
				//console.dir(row);
				setTimeout(()=>{
					row.after(column);
					column.append(card);
					card.append(content);
					console.dir(widget);
					content.append(widget);
					if (createdTwitter) {
						let script = $("<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
						widget.after(script);
					}
					log("Widget Appended");
				}, 1000);
				//console.dir(row);
			};
		social.find("li").each((index, element)=>{
			let twitter = $(element).find("a[href*='twitter.com'");
			if (twitter && twitter.length > 0 && !foundTwitter) {
				twitterLink = twitter.attr("href");
				log("Found Twitter Link: "+twitterLink);
				foundTwitter=true;
				card("twitter");
				//
			}
			let discord = $(element).find("a[href*='discord.gg'");
			if (( discord && discord.length > 0 && !foundDiscord)) {
				foundDiscord = true;
				discordLink = discord.attr("href");
				log("Found Discord Link: "+discordLink);
				discordID = $("img[alt*=GlimeshWidgets").attr("alt").split("discord=")[1];
				if (discordID.length > 0) {
					//
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
	log("jQuery Version: "+jQuery.fn.jquery);
	if (jQuery.fn.jquery != "3.6.0") {
		throw new Error("We were expecting jQuery version 3.6.0");
	}
	createCard();
	let settingsButton = $("a.dropdown-item:nth-child(6)");
	console.dir(settingsButton);
	let newButton = $(`<a href="#" class="dropdown-item" id="glimeshWidgetsSettingsButton">
	<i class="fas fa-cog fa-fw"></i>
	Widgets
</a>`);
	// eslint-disable-next-line unicorn/consistent-function-scoping
	const saveSettings = () => {
		log("TODO: Save Settings");
		handleMenu();
	};
	const handleMenu = () => {
		let menu = $("#glimeshWidgetsMenu");
		if (menu.length === 0) {
			log("Creating settings menu");
			let container = $(`<div id='glimeshWidgetsMenu' style='position:fixed;top:15px;left:0;right:0;z-index:123456790;border-radius:.25rem;margin:auto;width:300px;padding:20px;background-color:#1b2e4b'>
	<h6>Glimesh Widgets Settings</h6>
	<a href="https://github.com/NicholasDJM/Glimesh-Widgets">Github</a><br>
	<br>
	<input name="widget-enable" type="checkbox" checked> Enable</input><br>
	<input name="widget-twitter" type="checkbox" checked> Enable Twitter Widget</input><br>
	<input name="widget-discord" type="checkbox" checked> Enable Discord Widget</input><br>
	<br>
	<button id="glimeshWidgetsSettingsSave" class="btn btn-success" type="button">Save</button>
</div>`);
			$("body").append(container);
			$("#glimeshWidgetsSettingsSave").click(saveSettings);
		} else {
			console.dir(menu);
			log("Destroying settings menu");
			menu.remove();
		}
	};
	settingsButton.after(newButton);
	$("#glimeshWidgetsSettingsButton").click(handleMenu);
	GM_registerMenuCommand("Settings", handleMenu);
});