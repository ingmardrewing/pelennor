import { IField } from './ifield';
import { Opter } from './opter';

export class Select extends Opter implements IField {
  public prepareForEditing(): HTMLElement {
    const label: HTMLElement = this.getLabel();
    const select: HTMLElement = this.getSelect();
    const container: HTMLElement = this.getContainerElement('fieldEdit');
    container.appendChild(label);
    container.appendChild(select);
    return container;
  }

  public getSelect(): HTMLElement {
    const select: HTMLElement = document.createElement('select');
    select.setAttribute('id', this.id);
    for (const o of this.options) {
      if (o.value === this.value) {
        o.setSelected();
      }
      select.appendChild(o.prepareForEditing());
    }
    return select;
  }

  public setValue(value: any): Select {
    return super.setValue(value) as Select;
  }

  public storeInput(): void {
    const select = document.getElementById(this.id) as HTMLSelectElement;
    const sel = select.selectedIndex;
    const opt = select.options[sel] as HTMLOptionElement;
    this.setValue(opt.value);
  }
}
