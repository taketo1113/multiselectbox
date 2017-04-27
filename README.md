# multiselectbox


## Features
- Moving values between select boxes (button or double click)
- Moving options up and down

## Usage
### JS
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="jquery.multiselectbox.js"></script>
<script>
$(function() {
	$('#selectbox').multiSelectbox();
});
</script>
```
### HTML
(TBD)

## Options
| Name | Type | Default | Description |
|---|---|---|---|
| selected | string | 'select.selected' |  |
| selectable | string | 'select.selectable' |  |
| btn_move_selected | string | '.btn-move-selected' |  |
| btn_move_selectable | string | '.btn-move-selectable' |  |
| btn_move_up | string | '.btn-move-up' |  |
| btn_move_down | string | '.btn-move-down' |  |
