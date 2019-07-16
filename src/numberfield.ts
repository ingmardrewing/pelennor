import { AbstractField } from './abstractfield';
import { IField } from './ifield';

export class NumberField extends AbstractField implements IField {
  protected getInputElement(): HTMLElement {
    const input: HTMLElement = document.createElement('input');
    input.setAttribute('id', this.id);
    input.setAttribute('name', this.name);
    input.setAttribute('type', 'number');
    input.setAttribute('value', this.value);
    return input;
  }
}
