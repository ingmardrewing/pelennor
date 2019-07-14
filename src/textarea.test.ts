import { TextArea } from './textarea';

test('TextField', () => {
  const ta = new TextArea();
  ta.setId('test-id');
  ta.setName('test-name');
  ta.setLabel('test-label');
  ta.setValue('test-value');

  expect(ta.prepareForReading().outerHTML).toBe(
    `<div class="fieldDisplay">` +
      '<div class="fieldLabel">test-label:</div>' +
      '<div class="fieldValue">test-value</div>' +
      `</div>`,
  );

  expect(ta.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<label for="test-id">test-label:</label>' +
      '<textarea id="test-id" name="test-name">test-value</textarea>' +
      `</div>`,
  );
});
