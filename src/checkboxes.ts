import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';
import { Option } from './option';

export class CheckBoxes extends AbstractField implements IRenderable {
  public addOption(opt: Option): void {
    opt.setIsCheckbox();
    this.options.push(opt);
  }

  public renderForReading(): string {
    return `<div class="fieldDisplay">
    <div>${this.label}:</div>
    <div>${this.renderOptionsForReading()}</div>
</div>`;
  }

  public renderOptionsForReading(): string {
    const optionsHtml: string[] = [];
    for (const o of this.options) {
      if (o.isSelected) {
        optionsHtml.push(o.renderForReading());
      }
    }
    return optionsHtml.join(',\n');
  }

  public renderForEditing(): string {
    return `<div class="fieldEdit">
    <div>${this.label}:</div>
    <div>${this.renderOptionsForEditing()}</div>
</div>`;
  }

  public renderOptionsForEditing(): string {
    const optionsHtml: string[] = [];
    for (const o of this.options) {
      optionsHtml.push(o.renderForEditing());
    }
    return optionsHtml.join('\n');
  }
}
