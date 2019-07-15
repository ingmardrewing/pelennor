import { IField } from './ifield';

export class FieldGroup {
  public id: string = '';
  public fields: IField[] = [];

  private saveFn: () => void;
  private cancelFn: () => void;

  constructor(saveFn: () => void, cancelFn: () => void) {
    this.saveFn = saveFn;
    this.cancelFn = cancelFn;
  }

  public setId(id: string) {
    this.id = id;
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
    save.addEventListener('click', () => {
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
