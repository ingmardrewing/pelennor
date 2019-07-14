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

  public renderForReading(): string {
    return `<div>${this.renderFieldsForReading()}</div>`;
  }

  public renderFieldsForReading(): string {
    const fieldsHtml: string[] = [];
    for (const f of this.fields) {
      fieldsHtml.push(f.renderForReading());
    }
    return fieldsHtml.join('\n');
  }

  public renderForEditing(): string {
    return `<form id="${this.id}">
${this.renderFieldsForEditing()}
  <a id="${this.id}-save">save</a>
  <a id="${this.id}-cancel">cancel</a>
</form>`;
  }

  public renderFieldsForEditing(): string {
    const fieldsHtml: string[] = [];
    for (const f of this.fields) {
      fieldsHtml.push(f.renderForEditing());
    }
    return fieldsHtml.join('\n');
  }
}
