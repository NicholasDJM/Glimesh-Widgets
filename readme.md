# Glimesh Widgets

[![License](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAYAAABzyUiPAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AwbFx8sDSuc4wAABHdJREFUWMPtmEFIVFsYx393muxiaGUFFQwDRjOlRRFKRIRkQqt2FS0Co3UrCRNJECSqhftaRJuSFiJBEBRRkyARhE0WSosYq5km0xlKZhqvc+/5v4V5X/W0p+PbPOmDC/d833fuOed/7v1//3MtQPyxki0IIP2N4d27d+ns7GRwcBCA8vJydu3axdatWykrKyOdTvP69WtSqRSrVq2itraWbdu2UV5ezufPnxkeHiaRSABgWRZnz57l4sWLVFRULDvwLMviO34z9vLlSx08eFDf30odOXJEt2/fViaTkeu68jxP375907Nnz3Tp0iXduHFDY2NjKhaL8jxPhUJBQ0NDam9vV1VVlQBZlqWuri5JUiKR0Nq1a/3n/58vzbx18gE0xqilpcVPOHHihIaHhyVJqVRKyWRSyWRSxhhJkud5PvBfvnzx45OTkzLG6Nq1a1q3bp0AhUIh9ff3S5JOnz69PAF89eqVwuGwAEUiEQ0MDEiS+vv7tX//fkUiER0/flzpdFq/2s2bNxWJRBSJRNTa2irP82SMUVtbmz/guXPnJEkvXrxY7ATnjc1lv+b9Gpsvf67+iwLw+vXrCgQC/mKNMTLGqLOz0+/U3Nws13X1+PFj9fb2qre3V5lMRrFYTJWVlQIUjUY1OjoqSYrH4/6m1NXVaXx8fMGTnG9BvwPj32IL8S8WwMAsIY6MjGCMwbZtDhw4gGVZFItFhoaGfNLcvn0709PTdHd3c/LkSc6cOUM8HiccDrN+/XoAPn78SDKZBCAajbJjxw4APnz4wKdPn0oia0k/FbofSXyWyOdq/+ibz79UCwB4nsfExAQAtm2zefNmAKanp8lkMgCsWLGCLVu2AFAsFnFdF9d1AaisrGTNmjUAOI7D169fAVi5ciVVVVUAFAoFcrlcSeDNdV9K/4VsSkkABgIBVq9eDYDruuTzeR+0Wb8xhmw2iyQKhcJPPsdxcBxnRhcFg9i27cdnc4PBIGVlZYuWCIuNlSpFlqQDLcuiuroay7LI5XIMDg7S2NiIbdvs3buXe/fuIYm+vj7evXtHPB4HYGpqip6eHh49esSbN28ACIVChMNhAMbHx3n79i0AGzZsYOPGjUvVW/8ZQPP5fxxjoeBKkmKxmK/RGhsb/Wr7/Plz7du3zydPy7IE6NChQwqFQv8g166uLl/qXL16VcFgUIBOnTq1qCo8F7EvpLCUkvu7qr3gKpzL5XTs2DE/4cKFCz4QDx8+VHNzs2pqarRnzx6dP39e79+/161bt3T06FFFo1E1NDSou7tbjuNIkp48eaL6+noBsm1bPT09y1sHStKdO3e0adOmmfIcCKitrU2JRELGGE1NTSmdTmtsbEz5fF6xWEwjIyOanJxUKpVSNpuVMUaO46ivr08NDQ0/yZ98Pr8sTyLW94b/PV+5coWOjg6KxSIA9fX1NDU1sXPnTmzbZnR0lIGBAR48eEB1dTVNTU3s3r2biooKkskkT58+5f79+2SzWQAOHz7M5cuXqaurW5ZnYevP35il2V+SVBekBnkz6QAAAABJRU5ErkJggg==)](https://en.wikipedia.org/wiki/WTFPL)

**Warning: This is script is in ALPHA, and comes with zero warranty. This script is very unstable at this point.**

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

To get the ID, go to your Discord server settings, go down to Widget, turn on “Enable server widget”, and copy the server ID, then paste into the alt text section of your image. The image doesn’t have to be the image we provide, it can be any image, though I recommend one of two above.

## [Shields.io](https://shields.io)

You may want to take a look at [Social](https://shields.io/category/social) and [Chat](https://shields.io/category/chat) categories of Shields.io, as they contain some neat badges that can be used on your Glimesh channel, like number of Twitter followers, the number of online Discord users in your server, and YouTube channel subscriber count. These badges are just images that Shields.io generates on the fly, so they work in every browser, without this script.

## Todo

- CRITICAL: Add support for style option
- CRITICAL: Finish settings panel

- Create Chrome and Firefox extensions.