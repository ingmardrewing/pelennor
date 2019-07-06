import { FieldGroup } from './fieldgroup';
import { TextField } from './textfield';
import { TextArea } from './textarea';
import { Select } from './select';
import { Option } from './option';
import { Image } from './image';

test('FieldGroup rendering', () => {
  let fg = new FieldGroup();
  fg.setId('test-id');

  let tf = new TextField();
  tf.setId('field-id');
  tf.setLabel('field-label');
  tf.setName('field-name');
  tf.setValue('field-value');

  fg.addField(tf);

  let ta = new TextArea();
  ta.setId('ta-field-id');
  ta.setLabel('ta-field-label');
  ta.setName('ta-field-name');
  ta.setValue('ta-field-value');

  fg.addField(ta);

  let s = new Select();
  s.setId('test-id');
  s.setName('test-name');
  s.setLabel('select-label');
  s.setValue('opt-value-2');

  let o1 = new Option();
  o1.setLabel('opt-label-1');
  o1.setValue('opt-value-1');
  s.addOption(o1);

  let o2 = new Option();
  o2.setLabel('opt-label-2');
  o2.setValue('opt-value-2');
  s.addOption(o2);

  let o3 = new Option();
  o3.setLabel('opt-label-3');
  o3.setValue('opt-value-3');
  s.addOption(o3);

  fg.addField(s);

  let img = new Image();
  img.setId('test-id');
  img.setName('test-name');
  img.setLabel('test-label');
  img.setValue('test-data-url');

  fg.addField(img);

  expect(fg.renderForEditing()).toBe(
    `<form id="test-id">
<div class="fieldEdit">
    <label for="field-id">field-label</label>
    <input id="field-id" name="field-name" type="text" value="field-value" />
</div>
<div class="fieldEdit">
    <label for="ta-field-id">ta-field-label</label>
    <textarea id="ta-field-id" name="ta-field-name">ta-field-value</textarea />
</div>
<div class="fieldEdit">
    <label for="test-id">select-label</label>
<select id="test-id">
<option value="opt-value-1">opt-label-1</option>
<option value="opt-value-2" selected="selected">opt-label-2</option>
<option value="opt-value-3">opt-label-3</option>
</select>
</div>
<div class="fieldDisplay">
      <input type="text" id="test-id" value="test-data-url" />
      <input type="file" id="test-id-picker" />
      <script>
        let imgPicker = document.querySelector('#test-id-picker');
        imgPicker.addEventListener('change',function(e){
          let filePicker = e.target;

          let reader = new FileReader();
          reader.addEventListener("load", function(loaded){
            let dataUrlInput = document.querySelector('#test-id');
            dataUrlInput.val(reader.result.toString());
          }, false);
          reader.readAsDataURL(filePicker.files[0]);
        });
      </script>
    <div>
  <a id="test-id-save">save</a>
  <a id="test-id-cancel">cancel</a>
</form>`,
  );

  expect(fg.renderForReading()).toBe(
    `<div><div class="fieldDisplay">
    <div class="fieldLabel">field-label:</div>
    <div class="fieldValue">field-value</div>
</div>
<div class="fieldDisplay">
    <div class="fieldLabel">ta-field-label:</div>
    <div class="fieldValue">ta-field-value</div>
</div>
<div class="fieldDisplay">
    <div class="fieldLabel">select-label:</div>
    <div class="fieldValue">opt-value-2</div>
</div>
<div class="fieldDisplay">
    <img src="test-data-url">
</div></div>`,
  );
});
