import { AbstractField } from './abstractfield';
import { Renderable } from './renderable';
import { Option } from './option';

export class CheckBoxes extends AbstractField implements Renderable {

  addOption(opt :Option) :void {
    opt.setIsCheckbox()
    this.options.push(opt)
  }

  renderForReading(): string {
    return `<div class="fieldDisplay">
    <div>${this.label}:</div>
    <div>${this.renderOptionsForReading()}</div>
</div>`;
  }

  renderOptionsForReading(): string {
    let optionsHtml :Array<string> = []
    for(let o of this.options) {
      if(o.isSelected){
        optionsHtml.push(o.renderForReading())
      }
    }
    return optionsHtml.join(",\n")
  }

  renderForEditing(): string {
    return `<div class="fieldEdit">
    <div>${this.label}:</div>
    <div>${this.renderOptionsForEditing()}</div>
</div>`;
  }

  renderOptionsForEditing(): string {
    let optionsHtml :Array<string> = []
    for(let o of this.options) {
      optionsHtml.push(o.renderForEditing())
    }
    return optionsHtml.join("\n")
  }
}
