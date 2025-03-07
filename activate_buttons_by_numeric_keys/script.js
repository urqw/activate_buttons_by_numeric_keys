/**
 * Copyright (C) 2018, 2019 Nikita Tseykovets <tseikovets@rambler.ru>
 * Copyright (C) 2015, 2016 Akela <akela88@bk.ru>
 *     (UrqW project from which part of code is borrowed)
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/**
 * Modifying buttons drawing function
 * from UrqW (/js/Client.js)
 * to buttons numbering
 */
Client.prototype.drawButtons = function() {
	var me = this;
	this.crtlButtonField.empty();

	$.each(GlobalPlayer.buttons, function(index, button) {
		if (button) {
			var buttonCtrl = $('<button class="list-group-item button">').attr('data-action', button.id).html('<b>' + (index + 1) + ':</b> ' + button.desc);

			me.crtlButtonField.append(buttonCtrl);
		}
	});
};

var target = document.getElementById('buttons');
document.addEventListener('keydown', function(event) {
	var number = event.key;
	if(number == 0) {
		number = 10;
	}
	if(number >= 1 && number <= 10) {
		var buttons = target.getElementsByTagName('button');
		if(number <= buttons.length) {
			buttons[number - 1].click();
		}
	}
});
