import { FieldGroup } from './fieldgroup';
import {TextField} from './textfield'

test('FieldGroup rendering', () => {
  let fg = new FieldGroup()
  fg.setId("test-id")

  let tf = new TextField()
  tf.setId("field-id")
  tf.setLabel("field-label")
  tf.setName("field-name")
  tf.setValue("field-value")

  fg.addField(tf)

  expect(
    fg.renderForEditing()
  ).toBe(
`<form id="test-id">
  <div class="fieldEdit">
    <label for="field-id">field-label</label>
    <input id="field-id" name="field-name" type="text" value="field-value" />
</div>
  <a id="test-id-save">save</a>
  <a id="test-id-cancel">cancel</a>
</form>`
  );

  expect(
    fg.renderForReading()
  ).toBe(
`<div><div class="fieldDisplay">
    <div class="fieldLabel">field-label:</div>
    <div class="fieldValue">field-value</div>
</div></div>`
  );
});
