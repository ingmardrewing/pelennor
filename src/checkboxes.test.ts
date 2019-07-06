import { CheckBoxes } from './checkboxes';
import { Option } from './option';

test('CheckBoxes', () => {
  let cb = new CheckBoxes();
  cb.setId('test-id');
  cb.setName('test-name');
  cb.setLabel('test-label');

  let o1 = new Option();
  o1.setName("opt-1-name")
  o1.setValue("opt-1-value")
  o1.setLabel("opt-1-label")
  o1.setSelected()

  let o2 = new Option();
  o2.setName("opt-2-name")
  o2.setValue("opt-2-value")
  o2.setLabel("opt-2-label")
  o2.setSelected()

  let o3 = new Option();
  o3.setName("opt-3-name")
  o3.setValue("opt-3-value")
  o3.setLabel("opt-3-label")

  cb.addOption(o1)
  cb.addOption(o2)
  cb.addOption(o3)

  expect(cb.renderForEditing()).toBe(
    `<div class="fieldEdit">
    <div>test-label:</div>
    <div><div><input name="opt-1-name" value="opt-1-value" checked="checked">opt-1-label</div>
<div><input name="opt-2-name" value="opt-2-value" checked="checked">opt-2-label</div>
<div><input name="opt-3-name" value="opt-3-value">opt-3-label</div></div>
</div>`
  );

  expect(cb.renderForReading()).toBe(
    `<div class="fieldDisplay">
    <div>test-label:</div>
    <div>opt-1-value,
opt-2-value</div>
</div>`
  );
});
