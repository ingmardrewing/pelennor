import { Fields } from './fields';
import { Image } from './image';
import { Option } from './option';
import { Select } from './select';
import { TextArea } from './textarea';
import { TextField } from './textfield';

test('Fields rendering', () => {
  const fg = new Fields('test-id');

  fg.addNumberField('field-number').setValue(5);
  fg.addTextField('field-name').setValue('field-value');
  fg.addTextArea('ta-field-name').setValue('ta-field-value');
  const s: Select = fg.addSelect('test-name').setValue('opt-value-2');
  s.addOption('opt-label-1').setValue('opt-value-1');
  s.addOption('opt-label-2').setValue('opt-value-2');
  s.addOption('opt-label-3').setValue('opt-value-3');
  fg.addImage('test-name').setValue('test-data-url');

  expect(fg.prepareForEditing().outerHTML).toBe(
    `<form id="test-id"><div class="fieldEdit"><label for="pelennor-numberfield-fieldnumber">field-number:</label><input id="pelennor-numberfield-fieldnumber" name="fieldnumber" type="number" value="5"></div><div class="fieldEdit"><label for="pelennor-textfield-fieldname">field-name:</label><input id="pelennor-textfield-fieldname" name="fieldname" type="text" value="field-value"></div><div class="fieldEdit"><label for="pelennor-textarea-tafieldname">ta-field-name:</label><textarea id="pelennor-textarea-tafieldname" name="tafieldname">ta-field-value</textarea></div><div class="fieldEdit"><label for="pelennor-select-testname">test-name:</label><select id="pelennor-select-testname"><option value="opt-value-1">opt-label-1</option><option value="opt-value-2" selected="selected">opt-label-2</option><option value="opt-value-3">opt-label-3</option></select></div><div class="fieldEdit"><input type="text" id="pelennor-image-testname" value="test-data-url"><input type="file" id="pelennor-image-testname-picker"></div><a id="test-id-save">save</a><a id="test-id-cancel">cancel</a></form>`,
  );

  expect(fg.prepareForReading().outerHTML).toBe(
    `<div><div class="fieldDisplay"><div class="fieldLabel">field-number:</div><div class="fieldValue">5</div></div><div class="fieldDisplay"><div class="fieldLabel">field-name:</div><div class="fieldValue">field-value</div></div><div class="fieldDisplay"><div class="fieldLabel">ta-field-name:</div><div class="fieldValue">ta-field-value</div></div><div class="fieldDisplay"><div class="fieldLabel">test-name:</div><div class="fieldValue">opt-value-2</div></div><div class="fieldDisplay"><img src="test-data-url"></div></div>`,
  );
});
