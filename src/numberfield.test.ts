import { NumberField } from './numberfield';

test('NumberField', () => {
  const n = new NumberField('test-number');
  n.setId('test-id');
  n.setLabel('test-label');
  n.setValue(5);

  expect(n.prepareForReading().outerHTML).toBe(
    '<div class="fieldDisplay">' +
      '<div class="fieldLabel">test-label:</div>' +
      '<div class="fieldValue">5</div>' +
      '</div>',
  );

  expect(n.prepareForEditing().outerHTML).toBe(
    '<div class="fieldEdit">' +
      '<label for="test-id">test-label:</label>' +
      '<input id="test-id" name="test-number" type="number" value="5">' +
      '</div>',
  );
});
