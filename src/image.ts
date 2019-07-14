import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';

export class Image extends AbstractField implements IRenderable {
  public prepareForReading(): HTMLElement {
    if (this.value) {
      const img: HTMLElement = document.createElement('img');
      img.setAttribute('src', this.value);

      const div: HTMLElement = this.getContainerElement('fieldDisplay');
      div.appendChild(img);
      return div;
    }
    return document.createElement('span');
  }

  public prepareForEditing(): HTMLElement {
    const txt: HTMLElement = document.createElement('input');
    txt.setAttribute('type', 'text');
    txt.setAttribute('id', this.id);
    txt.setAttribute('value', this.value);

    const picker: HTMLElement = document.createElement('input');
    picker.setAttribute('type', 'file');
    picker.setAttribute('id', `${this.id}-picker`);
    picker.addEventListener('change', (e: any) => {
      const filePicker = e.target;

      const reader = new FileReader();
      reader.addEventListener(
        'load',
        loaded => {
          const dataUrlInput: any = document.querySelector('#${this.id}');
          if (dataUrlInput !== null && reader !== null && reader.result !== null) {
            dataUrlInput.val(reader.result.toString());
          }
        },
        false,
      );
      reader.readAsDataURL(filePicker.files[0]);
    });

    const div: HTMLElement = this.getContainerElement('fieldEdit');
    div.appendChild(txt);
    div.appendChild(picker);
    return div;
  }
}
