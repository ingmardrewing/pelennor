import {AbstractField} from './abstractfield'
import {Renderable} from './renderable'

export class TextField extends AbstractField implements Renderable {
  renderForReading() :string {
    return `<div class="fieldDisplay">
    <div class="fieldLabel">${this.label}:</div>
    <div class="fieldValue">${this.value}</div>
</div>`
  }

  renderForEditing() :string {
    return `<div class="fieldEdit">
    <label for="${this.id}">${this.label}</label>
    <input id="${this.id}" name="${this.name}" type="text" value="${this.value}" />
</div>`
  }
}
