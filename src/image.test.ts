import { Image } from './image';

test('Image', () => {
  let img = new Image();
  img.setId('test-id');
  img.setName('test-name');
  img.setLabel('test-label');
  img.setValue('test-data-url');

  expect(img.renderForReading()).toBe(
    `<div class="fieldDisplay">
    <img src="test-data-url">
</div>`);

  expect(
    img.renderForEditing()
  ).toBe(
  `<div class="fieldDisplay">
      <input type="text" id="test-id" value="test-data-url" />
      <input type="file" id="test-id-picker" />
      <script>
        let imgPicker = document.querySelector('#test-id-picker');
        imgPicker.addEventListener('change',function(e){
          let filePicker = e.target;

          let reader = new FileReader();
          reader.addEventListener("load", function(loaded){
            let dataUrlInput = document.querySelector('#test-id');
            dataUrlInput.val(reader.result.toString());
          }, false);
          reader.readAsDataURL(filePicker.files[0]);
        });
      </script>
    <div>`
  );

});
