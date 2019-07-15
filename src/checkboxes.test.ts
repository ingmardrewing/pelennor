import { CheckBoxes } from './checkboxes';
import { Option } from './option';

test('CheckBoxes', () => {
  const cb: CheckBoxes = new CheckBoxes('test-name');
  cb.setId('test-id');
  cb.setLabel('test-label');
  const o1: Option = cb.addOption('opt-1-name').setValue('opt-1-value');

  expect(cb.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<div><div><input type="checkbox" name="opt1name" id="opt1name" value="opt-1-value">opt-1-name</div>' +
      `</div></div>`,
  );

  o1.setSelected();

  expect(cb.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<div><div><input type="checkbox" name="opt1name" id="opt1name" value="opt-1-value" checked="checked">opt-1-name</div>' +
      `</div></div>`,
  );

  expect(cb.prepareForReading().outerHTML).toBe(
    `<div class="fieldDisplay">` +
      '<div class="fieldLabel">test-label:</div>' +
      '<div><span>opt-1-value</span></div>' +
      '</div>',
  );
});
