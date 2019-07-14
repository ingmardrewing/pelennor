import { CheckBoxes } from './checkboxes';
import { Option } from './option';

test('CheckBoxes', () => {
  const cb = new CheckBoxes();
  cb.setId('test-id');
  cb.setName('test-name');
  cb.setLabel('test-label');

  const o1 = new Option();
  o1.setName('opt-1-name');
  o1.setValue('opt-1-value');
  o1.setLabel('opt-1-label');

  cb.addOption(o1);

  expect(cb.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<div><div><input type="checkbox" name="opt-1-name" value="opt-1-value">opt-1-label</div>' +
      `</div></div>`,
  );

  o1.setSelected();

  expect(cb.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<div><div><input type="checkbox" name="opt-1-name" value="opt-1-value" checked="checked">opt-1-label</div>' +
      `</div></div>`,
  );

  expect(cb.prepareForReading().outerHTML).toBe(
    `<div class="fieldDisplay">` +
      '<div class="fieldLabel">test-label:</div>' +
      '<div><span>opt-1-value</span></div>' +
      '</div>',
  );
});
