import { Option } from './option';
import { Select } from './select';

test('Select', () => {
  const s = new Select();
  s.setId('test-id');
  s.setName('test-name');
  s.setLabel('test-label');
  s.setValue('opt-value-2');

  const o1 = new Option();
  o1.setLabel('opt-label-1');
  o1.setValue('opt-value-1');
  s.addOption(o1);

  const o2 = new Option();
  o2.setLabel('opt-label-2');
  o2.setValue('opt-value-2');
  s.addOption(o2);

  const o3 = new Option();
  o3.setLabel('opt-label-3');
  o3.setValue('opt-value-3');
  s.addOption(o3);

  expect(s.renderForEditing()).toBe(
    `<div class="fieldEdit">
    <label for="test-id">test-label</label>
<select id="test-id">
<option value="opt-value-1">opt-label-1</option>
<option value="opt-value-2" selected="selected">opt-label-2</option>
<option value="opt-value-3">opt-label-3</option>
</select>
</div>`,
  );
});
