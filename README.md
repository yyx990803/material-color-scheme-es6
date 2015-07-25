[Material Theme](https://github.com/equinusocio/material-theme) syntax highlighting tweaked for [JavaScript Next](https://github.com/Benvie/JavaScriptNext.tmLanguage).

## Problems with the original color scheme

- Module keywords such as `import` and `export` are not highlighted.
- Method and accessor short hands in class declarations / object literals are not highlighted.
- All variables are in bright red, which is too noisy and causes visual fatigue.

## Screenshots

#### Before

![before](https://cloud.githubusercontent.com/assets/499550/8887582/75279fae-3256-11e5-9d68-30547955f67e.png)

#### After

![after](https://cloud.githubusercontent.com/assets/499550/8887581/7456c65e-3256-11e5-858b-696724d1b3ac.png)

## Installation

Copy the file into your Sublime's `Packages/User` folder, then in your settings, change the color scheme to:

``` json
{
  "color_scheme": "Packages/User/Material-Theme.tmTheme"
}
```
