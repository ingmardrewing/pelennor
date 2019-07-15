import { IField } from './ifield';
import { Opter } from './opter';
import { Option } from './option';

export class CheckBoxes extends Opter implements IField {
  public addOption(name: string): Option {
    const o: Option = super.addOption(name);
    o.setIsCheckbox();
    return o;
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

  public storeInput(): void {
    for (const o of this.options) {
      if (o === null) {
        continue;
      }
      const cb = document.getElementById(o.name) as HTMLInputElement;
      if (cb.checked) {
        o.setSelected();
      } else {
        o.setUnselected();
      }
    }
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
