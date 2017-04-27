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
```html
  <div id="selectbox">
    <select class="selected" multiple="multiple" size="10"></select>
    <div>
      <a class="btn-move-selected" href="#">Add</a>
      <a class="btn-move-selectable" href="#">Delete</a>
      <a class="btn-move-up" href="#">Up</a>
      <a class="btn-move-down" href="#">Down</a>
    </div>
    <select class="selectable" multiple="multiple" size="10">
      <option value="">Item1</option>
      <option value="">Item2</option>
      <option value="">Item3</option>
      <option value="">Item4</option>
      <option value="">Item5</option>
    </select>
  </div>
```

## Options
| Name | Type | Default | Description |
|---|---|---|---|
| selected | string | 'select.selected' |  |
| selectable | string | 'select.selectable' |  |
| btn_move_selected | string | '.btn-move-selected' |  |
| btn_move_selectable | string | '.btn-move-selectable' |  |
| btn_move_up | string | '.btn-move-up' |  |
| btn_move_down | string | '.btn-move-down' |  |
