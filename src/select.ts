import { AbstractField } from './abstractfield';
import { IRenderable } from './renderable';

export class Select extends AbstractField implements IRenderable {
  public renderForReading(): string {
    return `<div class="fieldDisplay">
    <div class="fieldLabel">${this.label}:</div>
    <div class="fieldValue">${this.value}</div>
</div>`;
  }

  public renderForEditing(): string {
    return `<div class="fieldEdit">
    <label for="${this.id}">${this.label}</label>
<select id="${this.id}">
${this.renderOptionsForEditing()}
</select>
</div>`;
  }

  public renderOptionsForEditing(): string {
    const optionsHtml: string[] = [];
    for (const o of this.options) {
      if (o.value === this.value) {
        o.setSelected();
      }
      optionsHtml.push(o.renderForEditing());
    }
    return optionsHtml.join('\n');
  }
}
