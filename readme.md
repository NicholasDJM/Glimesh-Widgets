# Glimesh Widgets [![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/NicholasDJM/Glimesh-Widgets?include_prereleases)](http://github.com/NicholasDJM/Glimesh-Widgets/releases)

[![WTFPL](https://img.shields.io/github/license/NicholasDJM/Glimesh-Widgets)](http://www.wtfpl.net/about/) [![Version](https://img.shields.io/github/package-json/v/NicholasDJM/Glimesh-Widgets)](http://github.com/NicholasDJM/Glimesh-Widgets) [![GitHub issues](https://img.shields.io/github/issues/NicholasDJM/Glimesh-Widgets)](https://github.com/NicholasDJM/Glimesh-Widgets/issues)

**Warning: This script is in ALPHA, and comes with zero warranty. This script is very unstable at this point, AND NOT BATTLE-TESTED.** If you’d like to help create this script, create a pull request.

This project is not affiliated with Glimesh, Inc

This Tampermonkey script is used to add widgets to channels on https://glimesh.tv. You need the Tampermonkey extension installed before installing this script. Head to https://tampermonkey.net to install. This script has only been tested on Tampermonkey, but might work on other userscript extensions.

Currently has support for Twitter, Discord, and Google Calendar widgets. Twitter works out-of-the-box, you only need to connect your Twitter account to your Glimesh Account.

#### Discord Widget and Setup

The Discord widget requires an image with alt text containing your Discord Server ID, as well as enabling the widget from your Discord server settings. The alt text must start with “GlimeshWidgets” exactly, the discord ID must be prepended with “discord=”, and all entries must be delimited by an comma.

- For example, `GlimeshWidgets,discord=DISCORD ID HERE,style=light`
- You may also notice that you customize widgets here as well, the `style` parameter allows you to style your widgets, though only dark and light is currently supported.

To setup the Discord widget, copy/paste this one of these codes into your channel description:

[Shields.io](https://shields.io) Image ![Glimesh Widgets](https://img.shields.io/static/v1?label=Glimesh+Widgets&message=install&color=brightgreen&labelColor=white&style=flat)

- `[![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID,style=dark](https://img.shields.io/static/v1?label=Glimesh+Widgets&message=install&color=brightgreen&labelColor=white&style=flat](https://github.com/NicholasDJM/Glimesh-Widgets)`

Simple Dot Image (If you don’t want to advertise Glimesh Widgets) [![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)](https://github.com/NicholasDJM/glimeshwidgets)

- `[![GlimeshWidgets,discord=REPLACE ME WITH SERVER ID,style=dark](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)](https://github.com/NicholasDJM/Glimesh-Widgets)`

Of course, where it says “REPLACE ME WITH SERVER ID”, you need to get the server ID and copy/paste it there.

To get the ID, go to your Discord server settings, go down to Widget, turn on “Enable server widget”, and copy the server ID, then paste into the alt text section of your image.

The image doesn’t have to be the images we provide, it can be any image, though I recommend one of two above.

#### Google Calendar Setup

You may also display a Public Google Calendar widget. Like with the Discord widget, you must add the calendar ID to the image alt text.

- For example, `GlimeshWidgets,discord=DISCORD ID HERE,calendar=CALENDER ID HERE,style=light`

To get a public calendar ID, first, you’ll need a dedicated Google calendar:

- You should create a new Google account that is NOT associated with any personal details.
- Head to https://caledar.google.com, (login if needed), and click the cog wheel at the top-right, then click Settings.
- On the right, click Add Calendar, and then Create New Calendar. Enter a name for this calendar, something like “Streaming Schedule”
- When the Calendar has been created, click on it on the right side, then click on Integrate Calendar.
- Copy the Calendar ID.
- In your Glimesh profile, update the image alt text (see Discord Widget Setup above) with the Calendar ID by adding `calendar=ID` at the end.
	- The final image should look something like this, minus the “ID HERE” idiom:
	- `[![GlimeshWidgets,discord=DISCORD ID HERE,calendar=CALENDAR ID HERE,style=dark](https://img.shields.io/static/v1?label=Glimesh+Widgets&message=install&color=brightgreen&labelColor=white&style=flat](https://github.com/NicholasDJM/Glimesh-Widgets)`

## Adblockers

You may find that the Twitter widget doesn’t load, and only says “Tweets by…”, check to make sure your adblocker isn’t blocking Twitter. For Firefox users, make sure the built-in tracker protection is turned off: At the beginning of the address bar is a shield icon, click that and turn off tracking protection.

If you prefer not to see the Twitter widget to protect against tracking, simply disable it in the Widget Settings (The cog wheel at the top right).

## [Shields.io](https://shields.io)

You may want to take a look at [Social](https://shields.io/category/social) and [Chat](https://shields.io/category/chat) categories of Shields.io, as they contain some neat badges that can be used on your Glimesh channel, like number of Twitter followers, the number of online Discord users in your server, and YouTube channel subscriber count. These badges are just images that Shields.io generates on the fly, so they work in every browser, without this script.

## Todo

- CRITICAL: Add support for style option
- Add other platform widgets that are supported by Glimesh
  - Including Instagram, YouTube, Guilded, and Streamloots
- Create Chrome and Firefox extensions.

## Done

- Settings panel is now complete. Widgets can be enabled/disabled on a per channel basis.
- Google Calendar widget has been added.
- Most input has been sanitized, though this hasn’t been tested throughor

