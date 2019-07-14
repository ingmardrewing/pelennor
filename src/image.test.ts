import { Image } from './image';

test('Image', () => {
  const img = new Image();
  img.setId('test-id');
  img.setName('test-name');
  img.setLabel('test-label');
  img.setValue('test-data-url');

  expect(img.prepareForReading().outerHTML).toBe(`<div class="fieldDisplay">` + '<img src="test-data-url">' + `</div>`);

  expect(img.prepareForEditing().outerHTML).toBe(
    `<div class="fieldEdit">` +
      '<input type="text" id="test-id" value="test-data-url">' +
      '<input type="file" id="test-id-picker">' +
      `</div>`,
  );
});
