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
}
