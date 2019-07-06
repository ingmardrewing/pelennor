import { AbstractField } from './abstractfield';
import { Renderable } from './renderable';

export class Select extends AbstractField implements Renderable {
  renderForReading(): string {
    return `<div class="fieldDisplay">
    <div class="fieldLabel">${this.label}:</div>
    <div class="fieldValue">${this.value}</div>
</div>`;
  }

  renderForEditing(): string {
    return `<div class="fieldEdit">
    <label for="${this.id}">${this.label}</label>
<select id="${this.id}">
${this.renderOptionsForEditing()}
</select>
</div>`;
  }

  renderOptionsForEditing(): string {
    let optionsHtml: Array<string> = [];
    for (let o of this.options) {
      if (o.value == this.value) {
        o.setSelected();
      }
      optionsHtml.push(o.renderForEditing());
    }
    return optionsHtml.join('\n');
  }
}
