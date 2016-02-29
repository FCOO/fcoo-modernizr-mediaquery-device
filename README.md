# fcoo-modernizr-mediaquery-device

[Modernizr]: https://modernizr.com/
[modernizr-device]: https://github.com/FCOO/modernizr-device
[modernizr-mediaquery]: https://github.com/FCOO/modernizr-mediaquery
[grunt-modernizr]: https://github.com/Modernizr/grunt-modernizr

>Modernizr, Media queries and device/browser detection used by FCOO web applications


## Description
This package includes different packages and contains the css and JavaScript object to set media queries, device detection and set the tests by [Modernizr] needed:

- Set-up for [modernizr-device]
- Set-up for  [modernizr-mediaquery]
- Set-up for [Modernizr] created by [grunt-modernizr] 

### Install modernizr

To edit this packages you need to install modernizr by running

	npm install -g modernizr


## Demo

A full list of added [Modernizr] tests can be seen at 
http://FCOO.github.io/fcoo-modernizr-mediaquery-device/demo/ 


## Installation
### bower
`bower install https://github.com/FCOO/fcoo-modernizr-mediaquery-device.git --save`

## name-space `window.fcoo`
All JavaScript objects are create in the name space `window.fcoo`

## [modernizr-device]

### fcoo.modernizrDevice

Create a `ModernizrDevice`-object as

	window.fcoo.modernizrDevice = new window.ModernizrDevice();

### device-tests

Adds test for the following classes to `<html>`
 
	desktop, mobile, phone, tablet, windows, ios, android, ie7, ie8, ie9, ie10, mobilegradea

#### `show-for-TEST`, `hide-for-TEST`
To create classes to show or hide element when certain test succeed or fails (see [modernizr-scss](https://github.com/FCOO/modernizr-scss)) the test classes must be added to `$modernizr-device-list` in `src\fcoo-modernizr-mediaquery-device.scss` 


## [modernizr-mediaquery]

### fcoo.modernizrMediaquery

Create a `ModernizrMediaquery`-object as

	window.fcoo.modernizrMediaquery = new window.ModernizrMediaquery();


### scss-options

| Variable | Default | New value | Description |
| :--: | :--: | :--: | :--- |
|<code>$html-font-size</code>| 16px | | 
|<code>$create-FOR-NO</code>| true | **false** | When true the display-classes for show-for-no-NAME / hide-for-no-NAME is also created. show-for-NAME and hide-for-NAME is always created 
|<code>$create-FIRST-up</code>| false |  | When true the media query FIRST-up (always display) and no-FIRST-up (allways hidden) are created
|<code>$create-LAST-down</code>| false |  | When true the media query LAST-down (always display) and no-LAST-down (allways hidden) are created

### Breakpoints 

Sets the breakpoints as:

| Class | Window width | Screen |
| :--: | :--: | :---- |
| mini | <b>0</b>-479px | Phone portrait |
| small | <b>480</b>-767px | Phone landscape |
| medium | <b>768</b>-959px | Tablet portrait |
| large | <b>960</b>-1199px | Tablet landscape and desktop | 
| xlarge | <b>>=1200px</b> | Large desktop



## Modernizr

The [Modernizr] JavaScript file for this package is created when running one of the following grunt-commands:

	>grunt dev 
	>grunt prod
	>grunt github

To modify the options or features included you need to 


- edit the config-file `\src\modernizr-config.json`, OR
- go to [Modernizr Download](https://modernizr.com/download) and
	- Select the options and feature
	- Press the `BUILD` button and `download` the `Command Line Config` into `\src\modernizr-config.json`  

At [Modernizr Download](https://modernizr.com/download) and in `\src\modernizr-config.json` the settings are divided in *options* and *feature-detects* where 
**options** defines witch JavaScript methode are included. See [Modernizr API](https://modernizr.com/docs/#modernizr-api) for details.
**feature-detects** defines witch *browser feature* Modernizr will test for. 

### CSS Classes
The option *Add CSS Classes* at [Modernizr Download](https://modernizr.com/download)) must be selected or `options: [..]` must include `"setClasses"`. 
Then eash test in `feature-detects` will set a class to `<html>` to mark the result of the test: `<html class="TEST">` or `<html class="no-TEST">`

**Example:** The test *Event Listener* will detects native support for addEventListener and set the class `eventlistener` or `no-eventlistener` to `<html>`

#### `show-for-TEST`, `hide-for-TEST`
To create classes to show or hide element when certain test succeed or fails (see [modernizr-scss](https://github.com/FCOO/modernizr-scss)) the test classes must be added to `$modernizr-test-list` in `src\fcoo-modernizr-mediaquery-device.scss` 

### options

See [Modernizr API](https://modernizr.com/docs/#modernizr-api) for description of the different methods.
The following methods must always be included:

	Modernizr.addTest()
	Modernizr.atRule()
	Modernizr.hasEvent()
	Modernizr.mq()

`html5printshiv` and `html5shiv` are polyfills for browsers not supporting HTML5  

#### NOTE
The option `minify` **MUST** be set to **`false`**
The option `Add CSS Classes` **MUST** be set to **`true`**

### feature-detects
See [Modernizr - Features detected by Modernizr](https://modernizr.com/docs#features) for a complete list of possible tests

See complete meta-data file at http://FCOO.github.io/modernizr-mediaquery/src/fcoo-modernizr-metadata.json
 
A full list of added tests can be seen at [the demo page](http://FCOO.github.io/fcoo-modernizr-mediaquery-device/demo/)



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-modernizr-mediaquery-device/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



