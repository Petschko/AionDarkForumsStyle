// ==UserScript==
// @name         Dark AION-GF-Forums-Style
// @namespace    http://petschko.org/
// @version      0.1
// @description  Changes the White-Gameforge AION-Style to a darker Style
// @author       Peter Dragicevic [peter-91@hotmail.de]
// @match        https://board.de.aion.gameforge.com/*
// @match        https://board.en.aion.gameforge.com/*
// @grant        none
// ==/UserScript==

/**
 * User-Script Body
 */
(function() {
	'use strict';

	// Colors
	var specialColor							= '#FFC705';
	var specialBackgroundColor					= '#6E0000';
	var darkerSpecialBackgroundColor			= '#370000';
	var baseBackground							= '#3C3C3C66';
	var baseBackgroundFallback					= '#3C3C3C';
	var navBarBackgroundColor					= '#045C8DCC';
	var navBarBackgroundColorFallback			= '#045C8D';
	var contentBackgroundColor					= '#414141E6';
	var contentBackgroundColorFallback			= '#444444';
	var contentBackgroundColor2					= '#434343E6';
	var contentBackgroundColor2Fallback			= '#474747';
	var contentBackgroundColorHover				= '#3B3B3BE6';
	var contentBackgroundColorFallbackHover		= '#404040';
	var quoteBackgroundColor					= '#3A3A3A';
	var contentColor							= '#FFF';
	var contentLinkColor						= '#F0613B';
	var contentIconsColor						= contentLinkColor;
	var contentLinkColorHover					= '#18E3F2';
	var lessImportantContentColor				= '#ABABAB';
	var nonContentLinks							= '#FF8700';
	var nonContentLinksHover					= '#FF0';

	// Settings
	var enableFixedBackground					= true; // Set to false if you don't want to have to background image fixed
	var useSemiTransparency						= true; // Set to false to disable semi-transparent background colors (Render faster)

	//------------------------------------------ End of Configuration Area ------------------------------------------
	//---------------------------------------------------------------------------------------------------------------
	//-------------------------------------------------- CSS-Area ---------------------------------------------------
	var cssCode =
		// Handle Main Background-Color here
		'body {' +
			'color: ' + contentColor + ';' +
			((enableFixedBackground) ? 'background-attachment: fixed !important;' : '') +
		'}' +
		'#main > div > div > .content {' +
			'background-color: ' + baseBackgroundFallback + ' !important;' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + baseBackground + ' !important;' : '') +
		'}' +
		'#main {' +
			'background-color: ' + baseBackgroundFallback + ' !important;' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + baseBackground + ' !important;' : '') +
		'}' +
		'.container,' +
		'.wbbBoardList .wbbBoardNode1,' +
		'#main > div > div > .sidebar,' +
		'.table td,' +
		'.message .messageContent {' +
			'background-color: ' + contentBackgroundColorFallback + ';' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + contentBackgroundColor + ';' : '') +
		'}' +
		'.containerList > li:nth-child(2n),' +
		'.wbbBoardList .wbbBoardNode2,' +
		'.table > tbody > tr:nth-child(2n) > td,' +
		'li:nth-child(2n+1) .message .messageContent,' +
		'.redactor-box > .redactorAutosaveNotice,' +
		'.dropdownMenu {' +
			'background-color: ' + contentBackgroundColor2Fallback + ';' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + contentBackgroundColor2 + ';' : '') +
		'}' +
		'.tabularBox {' +
			'background-color: #696868;' + /* Fallback */
			'background-color: transparent;' +
		'}' +
		'.containerList > li:hover,' +
		'.wbbBoardList .wbbBoard:hover,' +
		'.table > tbody > tr:hover > td,' +
		'li:nth-child(2n+1) .message .messageContent:hover,' +
		'.message .messageContent:hover,' +
		'.commentList > li:hover:not(.commentAdd),' +
		'.commentList > li:hover:nth-child(2n):not(.commentAdd),' +
		'.likeList > li:first-child:hover {' +
			'background-color: ' + contentBackgroundColorFallbackHover + ';' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + contentBackgroundColorHover + ';' : '') +
		'}' +
		'.table,' +
		'article.message,' +
		'.pollContainer > .formSubmit,' +
		'.messageFooterNote,' +
		'.messageTabMenu > nav.messageTabMenuNavigation > ul,' +
		'.messageTabMenu > div,' +
		'.messageTabMenu > fieldset {' +
			'background-color: transparent;' +
		'}' +
		'article.message,' +
		'textarea,' +
		'input[type="text"],' +
		'input[type="search"],' +
		'input[type="date"],' +
		'input[type="datetime"],' +
		'input[type="email"],' +
		'input[type="number"],' +
		'input[type="url"],' +
		'input[type="password"],' +
		'select[multiple] {' +
			'background-image: none !important;' +
		'}' +
		'article aside.messageSidebar {' +
			'background-color: #141414;' + /* Fallback */
			((useSemiTransparency) ? 'background-color: #0009;' : '') +
		'}' +
		'.message.messageSidebarOrientationLeft .messageContent {' +
			'border-left-color: transparent;' +
		'}' +
		'.popover > .popoverContent {' +
			'background-color: ' + contentBackgroundColorFallbackHover + ';' +
		'}' +
		'.quoteBox.container {' +
			'background-color: ' + quoteBackgroundColor + ';' +
		'}' +
		'.framed > img,' +
		'.framed > .icon,' +
		'.breadcrumbs {' +
			'background-color: #000;' + /* Fallback */
			'background-color: transparent;' +
		'}' +
		'.redactor-dropdown-box-fontcolor > li.redactorColorPallet:hover,' +
		'.dialogContent,' +
		'.dialogContent .formSubmit,' +
		'textarea,' +
		'textarea:hover,' +
		'input[type="text"]:hover,' +
		'input[type="search"]:hover,' +
		'input[type="date"]:hover,' +
		'input[type="datetime"]:hover,' +
		'input[type="email"]:hover,' +
		'input[type="number"]:hover,' +
		'input[type="url"]:hover,' +
		'input[type="password"]:hover,' +
		'select[multiple]:hover,' +
		'#main > div > div > .sidebar > span > .collapsibleButton {' +
			'background-color: ' + contentBackgroundColor2Fallback + ' !important;' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + contentBackgroundColor2 + ' !important;' : '') +
		'}' +
		'.messageTabMenu > nav.messageTabMenuNavigation > ul > li > a,' +
		'.tabMenu > ul > li > a {' +
			'background-color: #D9D9D9;' +
			'color: #000;' +
		'}' +
		'.messageTabMenu > nav.messageTabMenuNavigation > ul > li.active > a,' +
		'.messageTabMenu > nav.messageTabMenuNavigation > ul > li:hover > a,' +
		'.tabMenu > ul > li > a:hover,' +
		'.tabMenu > ul > li.ui-state-active > a {' +
			'background-color: #000;' +
			'color: ' + contentColor + ';' +
		'}' +
		// Handle Main Text-Colors here
		'.messageBody > .messageSignature,' +
		'dl.dataList dt,' +
		'fieldset > legend,' +
		'.messageFooterNote,' +
		'.quoteBox > div:first-of-type::before,' +
		'.messageGroupList .columnLastPost > div > div > small,' +
		'.containerHeadline > h3 > small,' +
		'.wbbBoardList .wbbLastPost > div > div > small time,' +
		'dl.statsDataList > dt,' +
		'.wbbSimilarThreadList .box48 > div > p:not(:first-child),' +
		'.sidebar .sidebarBoxHeadline > h3,' +
		'dl:not(.plain) > dt,' +
		'dl:not(.plain) > dd > small:not(.innerError) {' +
			'color: ' + lessImportantContentColor + ';' +
		'}' +
		'textarea,' +
		'input[type="text"],' +
		'input[type="search"],' +
		'input[type="date"],' +
		'input[type="datetime"],' +
		'input[type="email"],' +
		'input[type="number"],' +
		'input[type="url"],' +
		'input[type="password"],' +
		'select[multiple],' +
		'.icon,' +
		'.fa,' +
		'.boxHeadline > h1,' +
		'.boxHeadline > h1 a,' +
		'.boxSubHeadline > h2,' +
		'.message .messageContent .messageHeader .messageHeadline > h1,' +
		'.boxHeadline > p,' +
		'.boxHeadline > .dataList,' +
		'.boxHeadline > .inlineDataList,' +
		'dl.inlineDataList > dt,' +
		'.sidebar fieldset > legend,' +
		'dl.statsDataList > dd,' +
		'.popover > .popoverContent,' +
		'.messageBody,' +
		'.dropdownMenu li > a,' +
		'dl:not(.plain) > dd > label,' +
		'.dropdownMenu li > span {' +
			'color: ' + contentColor + ';' +
		'}' +
		// Handle Link-Colors here
		'a,' +
		'.sidebar fieldset > nav ul > li > a {' +
			'color: ' + contentLinkColor + ';' +
		'}' +
		'a:hover,' +
		'.sidebar fieldset > nav ul > li:hover:not(.active) > a {' +
			'color: ' + contentLinkColorHover + ';' +
		'}' +
		'.navigation > ul.navigationItems > li > a,' +
		'.navigation > ul.navigationMenuItems > li > a,' +
		'.boxHeadline > dl.inlineDataList a {' +
			'color: ' + nonContentLinks + ';' +
		'}' +
		'.navigation > ul.navigationItems > li > a:hover,' +
		'.navigation > ul.navigationMenuItems > li > a:hover,' +
		'.boxHeadline > dl.inlineDataList a:hover,' +
		'.navigation > ul.navigationIcons a:hover .icon::before {' +
			'color: ' + nonContentLinksHover + ' !important;' +
		'}' +
		'.mainMenu > ul > li > a,' +
		'.breadcrumbs > ul > li > a,' +
		'.sidebar fieldset > legend > a {' +
			'color: ' + contentColor + ';' +
		'}' +
		'.message .messageHeader .permalink,' +
		'.dashboardBox a i:before,' +
		'.wbbSimilarThreadList .box48 > div > p:not(:first-child) a {' +
			'color: ' + lessImportantContentColor + ';' +
		'}' +
		'.customStyleInfo > p a {' +
			'color: ' + specialColor + ' !important;' +
		'}' +
		// Handle Misc BG & Colors here
		'.message .newMessageBadge::before {' +
			'border-bottom-color: ' + darkerSpecialBackgroundColor + ';' +
		'}' +
		'.wbbBoardList .icon {' +
			'color: ' + contentIconsColor + ';' +
		'}' +
		'.mainMenu > ul,' +
		'.breadcrumbs > ul > li,' +
		'.customStyleInfo,' +
		'.messageTabMenu > div > nav,' +
		'.dialogTitlebar {' +
			'background-color: ' + navBarBackgroundColorFallback + ' !important;' + /* Fallback */
			((useSemiTransparency) ? 'background-color: ' + navBarBackgroundColor + ' !important;' : '') +
		'}' +
		'.breadcrumbs > ul > li > .pointer > span,' +
		'.breadcrumbs > ul > li > .pointer {' +
			'border-left-color: #000 !important;' + /* Fallback */
		'}' +
		'.mainMenu > ul > li.active > a,' +
		'.mainMenu > ul > li.active > a:hover,' +
		'.mainMenu > ul > li > a:hover,' +
		'.breadcrumbs > ul > li:hover,' +
		'.breadcrumbs > ul > li > a:hover {' +
			'background-color: ' + specialBackgroundColor + ' !important;' +
			'color: ' + specialColor + ';' +
		'}' +
		'.badge,' +
		'.message .newMessageBadge,' +
		'.message.messageReduced .newMessageBadge {' +
			'color: ' + specialColor + ';' +
			'background-color: ' + specialBackgroundColor + ';' +
		'}' +
		'.badge.badgeUpdate {' +
			'background-color: ' + darkerSpecialBackgroundColor + ';' +
			'color: ' + specialColor + ';' +
		'}' +
		'.tag::before {' +
			'border-right-color: ' + specialBackgroundColor + ';' +
		'}' +
		'.tag::after {' +
			'background-color: #000;' +
		'}' +
		'li:nth-child(2n+1) .message.messageSidebarOrientationLeft .messageHeader::after,' +
		'.message.messageSidebarOrientationLeft .messageHeader::before {' +
			'border-right-color: ' + contentBackgroundColorFallback + ';' +
			((useSemiTransparency) ? 'border-right-color: ' + contentBackgroundColor + ';' : '') +
		'}' +
		'.message.messageSidebarOrientationLeft .messageHeader::after {' +
			'border-right-color: ' + contentBackgroundColor2Fallback + ';' +
			((useSemiTransparency) ? 'border-right-color: ' + contentBackgroundColor2 + ';' : '') +
		'}' +
		'.quoteBoxAuthor > .quoteAuthorAvatar::after,' +
		'.quoteBoxAuthor > .quoteAuthorAvatar::before {' +
			'border-right-color: #000;' +
		'}' +
		'.framed > img {' +
			'border-color: #424242;' +
		'}' +
		'.button.active .icon,' +
		'.button:hover .icon::before {' +
			'color: ' + specialColor + ';' +
		'}' +
		'.customStyleInfo {' +
			'color: ' + contentColor + ';' +
			'border-radius: 50px;' +
		'}' +
		'.sidebar fieldset > nav ul > li.active,' +
		'.sidebar fieldset > nav ul > li.active > a {' +
			'background-color: ' + specialBackgroundColor + ';' +
			'color: ' + specialColor + ' !important;' +
			'text-decoration: none;' +
		'}' +
		'.customStyleInfo > p {' +
			'padding: 13px 0;' +
		'}' +
		'.redactor-editor {' +
			'background-image: linear-gradient(to bottom, ' + hexToRGB(contentBackgroundColor) + ' 0%, ' + hexToRGB(contentBackgroundColor) + ' 100%);' +
			'border-color: #000;' +
			'border-bottom-color: #FFF;' +
		'}' +
		'.redactor-box > .redactorAutosaveNotice,' +
		'.dropdownMenu {' +
			'border-color: #000;' +
		'}' +
		'.redactor-toolbar > li > a:hover:not(.redactor-button-disabled),' +
		'.redactor-toolbar > li > a.redactor-act,' +
		'.redactor-toolbar > li > a.dropact {' +
			'text-shadow: none;' +
			'background-color: ' + specialBackgroundColor + ';' +
		'}' +
		'.redactor-dropdown-box-fontcolor > li.redactorColorPallet > a {' +
			'border-color: ' + contentBackgroundColor2Fallback + ';' +
			((useSemiTransparency) ? 'border-color: ' + contentBackgroundColor2 + ';' : '') +
		'}' +
		'input[type="text"],' +
		'input[type="search"],' +
		'input[type="date"],' +
		'input[type="datetime"],' +
		'input[type="email"],' +
		'input[type="number"],' +
		'input[type="url"],' +
		'input[type="password"],' +
		'select[multiple],' +
		'textarea {' +
			'box-shadow: none;' +
		'}' +
		// -------- Fixes ----------
		'a.userLink,' +
		'a.badge.tag {' + // Removes lines from username links
			'text-decoration: none;' +
		'}' +
		'.customStyleInfo > p a {' +
			'text-decoration: underline !important;' +
		'}' +
		'.redactor-box, .messageTabMenu {' + // Add missing (visible) border around posting editor
			'border: 1px solid #000 !important;' +
		'}' +
		'.button.active,' +
		'.button:hover,' +
		'.button:hover > a,' +
		'.pollContainer button:hover,' +
		'.commentList button:hover,' +
		'.recentActivitiesMore.showMore > button:hover,' +
		'input[type="reset"]:hover:not([disabled]),' +
		'input[type="submit"]:hover:not([disabled]),' +
		'input[type="button"]:hover:not([disabled]),' +
		'button:hover:not([disabled]) {' + // Fix for hover site-page (where are you with your mouse)
			'background-image: linear-gradient(to bottom, ' + hexToRGB(specialBackgroundColor) + ' 0%, rgb(0, 0, 0) 100%);' +
			'border-color: ' + contentColor + ';' +
			'color: ' + specialColor + ' !important;' +
		'}' +
		'button:disabled,' +
		'button:hover:disabled {' + // Fix for better seen disabled buttons
			'background-image: none;' +
			'background-color: #CCCCCC80;' +
			'color: ' + lessImportantContentColor + ' !important;' +
			'border-color: #000 !important;' +
		'}' +
		'.pageNavigation ul li.disabled {' +
			((useSemiTransparency) ? 'background-color: #CCCCCC80;' : '') +
		'}' +
		'.badge {' +
			'padding: 3px 6px 2px;' + // Fix for bad shown box stuff
		'}' +
		'.navigationFooter {' +
			'background-color: #000;' +
			'padding-bottom: 10px;' + // Fix for footer
		'}' +
		'.messageFooterNote {' +
			'border-left-width: 1px;' +
		'}';

	// Finally add the Code to the Head =)
	addCustomCSStoHeadEnd(cssCode);

	// Add Footer-Info (Style by)
	addStyleBy();

	//------------------------------------------ Lib-Function-Area ------------------------------------------
	/**
	 * Adds CSS-Code to the Head
	 *
	 * @param {string} cssCode - CSS-Code to add to the Head
	 */
	function addCustomCSStoHeadEnd(cssCode) {
		var cssElement = document.createElement('style');
		var headElement = document.getElementsByTagName('head')[0];

		if(headElement === undefined || headElement === null) {
			alert('Your browser doesn\'t support this Script. (Maybe after updating it?) - HEAD-Element not found');

			return;
		}

		cssElement.innerHTML = cssCode;
		headElement.appendChild(cssElement);
	}

	/**
	 * Adds Style-Info to the Footer (Link to Github uvm)
	 */
	function addStyleBy() {
		var footer = document.getElementById('pageFooter');

		if(footer === undefined || footer === null)
			return;

		var footerContent = footer.getElementsByClassName('footerContent')[0];

		if(footerContent === undefined || footerContent === null)
			return;

		// Create own Element
		var styleInfo = document.createElement('div');
		styleInfo.className = 'customStyleInfo';
		styleInfo.innerHTML = '<p><a href="https://github.com/Petschko/AionDarkForumsStyle" target="_blank">' +
			'Dark-AION-Style Fanart</a>' +
			' by Peter Dragicevic <a href="mailto:peter-91@hotmail.de">[E-Mail]</a>' +
			' aka <a href="https://board.de.aion.gameforge.com/index.php/User/39379-Petschko/" data-user-id="39379"' +
			' class="userLink">Petschko</a></p>';
		// Add it =)
		footerContent.insertBefore(styleInfo, footerContent.firstChild);
	}

	/**
	 * Converts a Hex-Color-String to a CSS-RGB(A) String
	 *
	 * @param {string} hex - Hex-Color-String
	 * @returns {string} - RGB(A)-String
	 */
	function hexToRGB(hex) {
		/**
		 * Convert Hex-Chars to Int (1 - 2 Chars)
		 *
		 * @param {string} hexChars - Hex-String (1 - 2 Chars)
		 * @returns {int} - Integer Value of the String
		 */
		function hexToInt(hexChars) {
			if(hexChars.length > 1)
				return parseInt(hexChars, 16);
			else
				return Math.sqrt(parseInt(hexChars, 16));
		}

		// Initial fields
		var startPos = 0;
		var red;
		var green;
		var blue;
		var alpha = null;
		var currentPos;
		var chars = 2;

		var startChar = hex.substr(0, 1);
		if(startChar == '#')
			startPos = 1;
		if((hex.length - startPos) === 3 || (hex.length - startPos) === 4)
			chars = 1;

		// Calc values
		currentPos = startPos;
		red = hexToInt(hex.substr(currentPos, chars));
		currentPos += chars;
		green = hexToInt(hex.substr(currentPos, chars));
		currentPos += chars;
		blue = hexToInt(hex.substr(currentPos, chars));
		currentPos += chars;

		// check if alpha is there and get it if
		if((hex.length - startPos) === 8)
			alpha = hexToInt(hex.substr(currentPos, chars));

		// Output the result
		if(alpha === null)
			return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
		else
			return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	}
})();
