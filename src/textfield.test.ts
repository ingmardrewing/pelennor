import { TextField } from './textfield';

test('TextField', () => {
  const tf = new TextField();
  tf.setId('test-id');
  tf.setName('test-name');
  tf.setLabel('test-label');
  tf.setValue('test-value');

  expect(tf.prepareForReading().outerHTML).toBe(
    '<div class="fieldDisplay">' +
      '<div class="fieldLabel">test-label:</div>' +
      '<div class="fieldValue">test-value</div>' +
      '</div>',
  );

  expect(tf.prepareForEditing().outerHTML).toBe(
    '<div class="fieldEdit">' +
      '<label for="test-id">test-label:</label>' +
      '<input id="test-id" name="test-name" type="text" value="test-value">' +
      '</div>',
  );
});
