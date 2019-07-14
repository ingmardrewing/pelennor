import { IRenderable } from './irenderable';

export class FieldGroup implements IRenderable {
  public id: string = '';
  public fields: IRenderable[] = [];

  public setId(id: string) {
    this.id = id;
  }

  public addField(field: IRenderable) {
    this.fields.push(field);
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
    save.setAttribute('id', this.cssIdForElementClickedToSave());
    save.textContent = 'save';

    const cancel: HTMLElement = document.createElement('a');
    cancel.setAttribute('id', this.cssIdForElementClickedToCancel());
    cancel.textContent = 'cancel';

    const form: HTMLElement = document.createElement('form');
    form.setAttribute('id', this.id);
    for (const f of this.fields) {
      form.appendChild(f.prepareForEditing());
    }
    form.appendChild(save);
    form.appendChild(cancel);
    return form;
  }

  public cssIdForElementClickedToSave(): string {
    return `${this.id}-save`;
  }

  public cssIdForElementClickedToCancel(): string {
    return `${this.id}-cancel`;
  }

  public storeInput(): void {
    for (const f of this.fields) {
      f.storeInput();
    }
  }
}
