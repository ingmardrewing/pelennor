import { Renderable } from './renderable';

export class FieldGroup {
  id: string = '';
  fields: Array<Renderable> = new Array<Renderable>();

  setId(id: string) {
    this.id = id;
  }

  addField(field: Renderable) {
    this.fields.push(field);
  }

  renderForReading(): string {
    return `<div>${this.renderFieldsForReading()}</div>`;
  }

  renderFieldsForReading(): string {
    let fieldsHtml: Array<string> = [];
    for (let f of this.fields) {
      fieldsHtml.push(f.renderForReading());
    }
    return fieldsHtml.join('\n');
  }

  renderForEditing(): string {
    return `<form id="${this.id}">
${this.renderFieldsForEditing()}
  <a id="${this.id}-save">save</a>
  <a id="${this.id}-cancel">cancel</a>
</form>`;
  }

  renderFieldsForEditing(): string {
    let fieldsHtml: Array<string> = [];
    for (let f of this.fields) {
      fieldsHtml.push(f.renderForEditing());
    }
    return fieldsHtml.join('\n');
  }
}
