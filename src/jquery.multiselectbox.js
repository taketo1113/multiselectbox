/*
 * jQuery MultiSelectbox
 * https://github.com/taketo1113/multiselectbox
 *
 * Copyright 2017 Taketo Takashima
 * Released under the MIT license
 */

(function( $ ) {
    var methods = {
	moveSelectedOptions : function(from, to) {
	    $('option:selected', from).each(function() {
		to.append($('<option>').text($(this).text()).val($(this).val()));
	    }).remove();
	},
	moveUpOption : function(selected) {
	    var options = selected.find(':selected');
	    options.each(function() {
		$(this).prev(':not(:selected)').before($(this));
	    });
	},
	moveDownOption : function(selected) {
	    var options = selected.find(':selected');
	    options.each(function() {
		$(this).next(':not(:selected)').after($(this));
	    });
	}
    }

    $.fn.multiSelectbox = function( options ) {
	var settings = $.extend( {
	    'selected': 'select.selected',
	    'selectable': 'select.selectable',
	    'btn_move_selected': '.btn-move-selected',
	    'btn_move_selectable': '.btn-move-selectable',
	    'btn_move_up': '.btn-move-up',
	    'btn_move_down': '.btn-move-down',
	}, options);

	return this.each(function() {
	    var $this = $(this);

	    // selectbox
	    var selected = $(settings.selected, $this);
	    var selectable = $(settings.selectable, $this);

	    // button
	    var btn_move_selected = $(settings.btn_move_selected, $this);
	    var btn_move_selectable = $(settings.btn_move_selectable, $this);
	    var btn_move_up = $(settings.btn_move_up, $this);
	    var btn_move_down = $(settings.btn_move_down, $this);

	    // Event: move options
	    selected.on('dblclick', function() { methods.moveSelectedOptions(selected, selectable); });
	    selectable.on('dblclick', function() { methods.moveSelectedOptions(selectable, selected); });

	    btn_move_selected.on('click', function() { methods.moveSelectedOptions(selectable, selected); return false; });
	    btn_move_selectable.on('click', function() { methods.moveSelectedOptions(selected, selectable); return false; });

	    btn_move_up.on('click', function() { methods.moveUpOption(selected); return false; });
	    btn_move_down.on('click', function() { methods.moveDownOption(selected); return false; });

	    // Select all the options at selected select box when submiting the parent form
	    var form = $this.closest('form');
	    form.on('submit', function(e) {
		$('option', selected).prop("selected", true);
	    });
	});
    };
})( jQuery );
