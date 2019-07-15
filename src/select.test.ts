import { Option } from './option';
import { Select } from './select';

test('Select', () => {
  const s = new Select('test-name');
  s.setId('test-id');
  s.setLabel('test-label');
  s.setValue('opt-value-2');

  const o1 = new Option('option-label-1');
  o1.setLabel('opt-label-1');
  o1.setValue('opt-value-1');

  s.addOption(o1);

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
