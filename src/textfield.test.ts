import { TextField } from './textfield';

test('TextField', () => {
  let tf = new TextField();
  tf.setId('test-id');
  tf.setName('test-name');
  tf.setLabel('test-label');
  tf.setValue('test-value');

  expect(tf.renderForReading()).toBe(
    `<div class="fieldDisplay">
    <div class="fieldLabel">test-label:</div>
    <div class="fieldValue">test-value</div>
</div>`,
  );

  expect(tf.renderForEditing()).toBe(
    `<div class="fieldEdit">
    <label for="test-id">test-label</label>
    <input id="test-id" name="test-name" type="text" value="test-value" />
</div>`,
  );
});
