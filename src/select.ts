import { AbstractField } from './abstractfield';
import { IField } from './ifield';

export class Select extends AbstractField implements IField {
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

  public storeInput() :void {
    const select = document.getElementById(this.id) as HTMLSelectElement
    const sel = select.selectedIndex
    const opt = select.options[sel] as HTMLOptionElement
    this.value = opt.value
  }
}
