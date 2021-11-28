# Glimesh Widgets

[![WTFPL](https://img.shields.io/github/license/NicholasDJM/Glimesh-Widgets)](http://www.wtfpl.net/about/) [![Version](https://img.shields.io/github/package-json/v/NicholasDJM/Glimesh-Widgets)](http://github.com/NicholasDJM/Glimesh-Widgets/releases)

**Warning: This script is in ALPHA, and comes with zero warranty. This script is very unstable at this point, AND NOT BATTLE-TESTED.** If you’d like to help create this script, create a pull request.

This project is not affiliated with Glimesh, Inc

This Tampermonkey script is used to add widgets to channels on https://glimesh.tv. You need the Tampermonkey extension installed before installing this script. Head to https://tampermonkey.net to install. This script has only been tested on Tampermonkey, but might work on other userscript extensions.

Currently has support for Twitter and Discord widgets. Twitter works out-of-the-box, you only need to connect your Twitter account to your Glimesh Account.

The Discord widget requires an image with alt text containing your Discord Server ID, as well as enabling the widget from your Discord server settings. The alt text must start with “GlimeshWidgets” exactly, the discord ID must be prepended with “discord=”, and all entries must be delimited by an comma.

- For example, `GlimeshWidgets,discord=IDHERE,style=light`
- You may also notice that you customize widgets here as well, the `style` parameter allows you to style your widgets, though only dark and light is currently supported.

To setup the Discord widget, copy/paste this one of these codes into your channel description:

[Shields.io](https://shields.io) Image ![Glimesh Widgets](https://img.shields.io/static/v1?label=Glimesh+Widgets&message=install&color=brightgreen&labelColor=white&style=flat)

- `[![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID,style=dark](https://img.shields.io/static/v1?label=Glimesh+Widgets&message=install&color=brightgreen&labelColor=white&style=flat](https://github.com/NicholasDJM/Glimesh-Widgets)`

Simple Dot Image (If you don’t want to advertise Glimesh Widgets) [![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)](https://github.com/NicholasDJM/glimeshwidgets)

- `[![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID,style=dark](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)](https://github.com/NicholasDJM/Glimesh-Widgets)`

Of course, where it says “REPLACE ME WITH SERVER ID”, you need to get the server ID and copy/paste it there.

To get the ID, go to your Discord server settings, go down to Widget, turn on “Enable server widget”, and copy the server ID, then paste into the alt text section of your image.

The image doesn’t have to be the images we provide, it can be any image, though I recommend one of two above.

## Adblockers

You may find that the Twitter widget doesn’t load, and only says “Tweets by…”, check to make sure your adblocker isn’t blocking Twitter. For Firefox users, make sure the built-in tracker protection is turned off: At the beginning of the address bar is a shield icon, click that and turn off tracking protection.

If you prefer not to see the Twitter widget to protect against tracking, simply disable it in the Widget Settings (The cog wheel at the top right).

## [Shields.io](https://shields.io)

You may want to take a look at [Social](https://shields.io/category/social) and [Chat](https://shields.io/category/chat) categories of Shields.io, as they contain some neat badges that can be used on your Glimesh channel, like number of Twitter followers, the number of online Discord users in your server, and YouTube channel subscriber count. These badges are just images that Shields.io generates on the fly, so they work in every browser, without this script.

## Todo

- CRITICAL: Add support for style option
- CRITICAL: Finish settings panel
- CRITICAL: Sanitize image alt text before accepting it.
	- Also sanitize all other potential injection points.
- Create Google calendar widget
- Add other platform widgets that are supported by Glimesh
	- Including Instagram, YouTube, Guilded, and Streamloots
- Add to settings panel: per channel enable/disable
- Create Chrome and Firefox extensions.