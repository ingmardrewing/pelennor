import { AbstractField } from './abstractfield';
import { IField } from './ifield';
import { Option } from './option';

export class CheckBoxes extends AbstractField implements IField {
  public addOption(opt: Option): void {
    opt.setIsCheckbox();
    this.options.push(opt);
  }

  public prepareForReading(): HTMLElement {
    const container: HTMLElement = this.getContainerElement('fieldDisplay');
    container.appendChild(this.getLabelDiv());
    container.appendChild(this.getSelectedOptions());
    return container;
  }

  public prepareForEditing(): HTMLElement {
    const container: HTMLElement = this.getContainerElement('fieldEdit');
    container.appendChild(this.getLabel());
    container.appendChild(this.getSelectableOptions());
    return container;
  }

  public getValue(): any {
    const values: string[] = [];
    for (const o of this.options) {
      if (o.isSelected) {
        values.push(o.getValue());
      }
    }
    return values;
  }

  private getSelectedOptions(): HTMLElement {
    const divWrapper: HTMLElement = document.createElement('div');
    for (const o of this.options) {
      if (o.isSelected) {
        divWrapper.appendChild(o.prepareForReading());
      }
    }
    return divWrapper;
  }

  private getSelectableOptions(): HTMLElement {
    const divWrapper: HTMLElement = document.createElement('div');
    for (const o of this.options) {
      divWrapper.appendChild(o.prepareForEditing());
    }
    return divWrapper;
  }
}
