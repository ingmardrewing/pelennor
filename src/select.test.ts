import { Option } from './option';
import { Select } from './select';

test('Select', () => {
  const s: Select = new Select('test-name').setValue('opt-value-2');
  s.setId('test-id');
  s.setLabel('test-label');
  const o1: Option = s.addOption('opt-label-1').setValue('opt-value-1');

  expect(s.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<select id="test-id">' +
      '<option value="opt-value-1">opt-label-1</option>' +
      '</select>' +
      '</div>',
  );

  o1.setSelected();

  expect(s.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<select id="test-id">' +
      '<option value="opt-value-1" selected="selected">opt-label-1</option>' +
      '</select>' +
      '</div>',
  );
});
