/**
 * Copyright (C) 2018, 2019 Nikita Tseykovets <tseikovets@rambler.ru>
 * Copyright (C) narmiel (UrqW project from which part of code is borrowed)
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
