import { Builder } from './builder';
import { CheckBoxes } from './checkboxes';
import { IField } from './ifield';
import { Image } from './image';
import { Select } from './select';
import { TextArea } from './textarea';
import { TextField } from './textfield';

export class Fields extends Builder {
  public id: string = '';
  public fields: IField[] = [];

  private saveFn: () => void;
  private cancelFn: () => void;

  constructor(id: string) {
    super();
    this.id = id;
    this.saveFn = () => {
      alert('no save fn set');
    };
    this.cancelFn = () => {
      alert('no cancel fn set');
    };
  }

  public setSaveCallback(saveFn: () => void) {
    this.saveFn = saveFn;
  }

  public setCancelCallback(cancelFn: () => void) {
    this.cancelFn = cancelFn;
  }

  public setId(id: string) {
    this.id = id;
  }

  public addTextField(name: string): TextField {
    const tf: TextField = this.buildTextField(name);
    this.addField(tf);
    return tf;
  }

  public addTextArea(name: string): TextArea {
    const ta: TextArea = this.buildTextArea(name);
    this.addField(ta);
    return ta;
  }

  public addCheckBoxes(name: string): CheckBoxes {
    const cbx: CheckBoxes = this.buildCheckBoxes(name);
    this.addField(cbx);
    return cbx;
  }

  public addSelect(name: string): Select {
    const select: Select = this.buildSelect(name);
    this.addField(select);
    return select;
  }

  public addImage(name: string): Image {
    const image: Image = this.buildImage(name);
    this.addField(image);
    return image;
  }

  public addField(field: IField) {
    this.fields.push(field);
  }

  public getField(fieldName: string): any {
    for (const f of this.fields) {
      if (f.name === fieldName) {
        return f;
      }
    }
    return null;
  }

  public prepareForReading(): HTMLElement {
    const div: HTMLElement = document.createElement('div');
    for (const f of this.fields) {
      div.appendChild(f.prepareForReading());
    }
    return div;
  }

  public prepareForEditing(): HTMLElement {
    const save: HTMLElement = document.createElement('a');
    save.setAttribute('id', `${this.id}-save`);
    save.textContent = 'save';
    save.addEventListener('click', () => {
      this.storeInput();
      this.saveFn();
    });

    const cancel: HTMLElement = document.createElement('a');
    cancel.setAttribute('id', `${this.id}-cancel`);
    cancel.textContent = 'cancel';
    cancel.addEventListener('click', () => {
      this.cancelFn();
    });

    const form: HTMLElement = document.createElement('form');
    form.setAttribute('id', this.id);
    for (const f of this.fields) {
      form.appendChild(f.prepareForEditing());
    }
    form.appendChild(save);
    form.appendChild(cancel);
    return form;
  }

  public storeInput(): void {
    for (const f of this.fields) {
      f.storeInput();
    }
  }
}
