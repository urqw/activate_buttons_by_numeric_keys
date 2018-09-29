/**
 * Copyright (C) 2018 Nikita Tseykovets <tseikovets@rambler.ru>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

var target = document.getElementById('buttons');

// Implementing hotkeys for buttons
document.addEventListener('keydown', function(event) {
	var number = event.key;
	if(number== 0) {
		number = 10;
	}
	if(number >= 1 && number <= 10) {
		var buttons = target.getElementsByTagName('button');
		if(number <= buttons.length) {
			buttons[number - 1].click();
		}
	}
});

// Automatic number assignment to buttons
var observer = new MutationObserver(function(mutations) {
	var buttons = target.getElementsByTagName('button'), n = buttons.length;
	if(n > 0) {
		for(var i = 0; i < n; i++) {
			buttons[i].innerHTML = '<b>'+(i+1)+':</b> '+buttons[i].innerHTML;
		}
	}
});
var config = { childList: true }
observer.observe(target, config);
