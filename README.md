# fcoo-modernizr-mediaquery-device

[Modernizr]: https://modernizr.com/
[modernizr-device]: https://github.com/FCOO/modernizr-device
[modernizr-mediaquery]: https://github.com/FCOO/modernizr-mediaquery
[grunt-modernizr]: https://github.com/Modernizr/grunt-modernizr
[fcoo-modernizr]: https://github.com/FCOO/fcoo-modernizr

>Modernizr, Media queries and device/browser detection used by FCOO web applications


## Description
This package includes different packages and contains the css and JavaScript object to set media queries, device detection and set the tests by [Modernizr] needed:

- Include [Modernizr] tests via [fcoo-modernizr] and include extra tests
- Set-up for [modernizr-device]
- Set-up for  [modernizr-mediaquery]
- Create CSS classes `show-for-TEST`,`hide-for-TEST` etc. for a subset of the tests

## Installation
### bower
`bower install https://github.com/FCOO/fcoo-modernizr-mediaquery-device.git --save`

## name-space `window.fcoo`
All JavaScript objects are create in the name space `window.fcoo`

## [fcoo-modernizr]
The [Modernizr] tests used are defined in [fcoo-modernizr]

For consistency the Modernizr is 'create' in window.fcoo

        window.fcoo..modernizr = Modernizr;

### Extra Modernizr test

`https` - A test to check if the protocol is `https:\\` or not is added.

## [modernizr-device]

### fcoo.modernizrDevice

Create a `ModernizrDevice`-object as

	window.fcoo.modernizrDevice = new window.ModernizrDevice();

### device-tests
The following tests are available `desktop, mobile, phone, tablet, windows, ios, android, ie7, ie8, ie9, ie10, ie11, mobilegradea`

But only the following test gets added classes to `<html>`
 
	ie9, ie10, ie11


## [modernizr-mediaquery]

### fcoo.modernizrMediaquery

Create a `ModernizrMediaquery`-object as

	window.fcoo.modernizrMediaquery = new window.ModernizrMediaquery();


### scss-options

| Variable | Default | New value | Description |
| :--: | :--: | :--: | :--- |
|<code>$html-font-size</code>| 16px | | 
|<code>$create-FIRST-up</code>| false |  | When true the media query FIRST-up (always display) and no-FIRST-up (allways hidden) are created
|<code>$create-LAST-down</code>| false |  | When true the media query LAST-down (always display) and no-LAST-down (allways hidden) are created

### Breakpoints 

Sets the breakpoints as:

| Class | Window width | Screen |
| :--: | :--: | :---- |
| mini | <b>0</b>-319px | Smaller than small phone portrait |
| xsmall-port | <b>320</b>-479px | Small phone portrait |
| xsmall-land | <b>480</b>-575px | Small phone landscape |
| small | <b>576</b>-767px | Small devices |
| medium | <b>768</b>-959px | Tablet portrait |
| large | <b>960</b>-1199px | Tablet landscape and desktop | 
| xlarge | <b>>=1200px</b> | Large desktop


## CSS Classes `show-for-TEST`, `hide-for-TEST`, `show-for-no-TEST`, `hide-for-no-TEST`

To create classes to show or hide element when certain test succeed or fails (see [modernizr-scss](https://github.com/FCOO/modernizr-scss)) the test classes must be added to `$modernizr-device-list` in `src\fcoo-modernizr-mediaquery-device.scss` 

### Classes 
The following classes are created for the listed tests (TEST) to show or hide elements
`show-for-`*TEST*
`hide-for-`*TEST*
`show-for-no-`*TEST*
`hide-for-no-`*TEST*


### TEST 
 `fullscreen`
 `https`
 `fullscreen`
 `ie9 `
 `ie10 `
 `ie11`

### Example
	<p class="hide-for-ie9">This is only visible for browser <> IE9</p>

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-modernizr-mediaquery-device/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt)




