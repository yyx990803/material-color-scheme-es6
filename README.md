[Material Theme](https://github.com/equinusocio/material-theme) syntax highlighting tweaked for [JavaScript Next](https://github.com/Benvie/JavaScriptNext.tmLanguage).

## Problems with the original color scheme

- Method and accessor short hands in class declarations / object literals are not highlighted properly.
- All variables are in bright red, which is too noisy and causes visual fatigue.

## Screenshots

#### Before

![screen shot 2015-07-23 at 8 27 09 am](https://cloud.githubusercontent.com/assets/499550/8850319/143f6790-3115-11e5-8e00-810735926d79.png)

#### After

![screen shot 2015-07-23 at 8 27 23 am](https://cloud.githubusercontent.com/assets/499550/8850321/157b5e0c-3115-11e5-84f7-1172471b2380.png)

## Installation

Copy the file into your Sublime's `Packages/User` folder, then in your settings, change the color scheme to:

``` json
{
  "color_scheme": "Packages/User/Material-Theme.tmTheme"
}
```
