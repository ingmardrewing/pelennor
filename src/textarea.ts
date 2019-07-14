import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';

export class TextArea extends AbstractField implements IRenderable {
  public renderForReading(): string {
    return `<div class="fieldDisplay">
    <div class="fieldLabel">${this.label}:</div>
    <div class="fieldValue">${this.value}</div>
</div>`;
  }

  public renderForEditing(): string {
    return `<div class="fieldEdit">
    <label for="${this.id}">${this.label}</label>
    <textarea id="${this.id}" name="${this.name}">${this.value}</textarea />
</div>`;
  }
}
