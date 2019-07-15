import { AbstractField } from './abstractfield';
import { IField } from './ifield';

export class TextArea extends AbstractField implements IField {
  protected getInputElement(): HTMLElement {
    const input: HTMLElement = document.createElement('textarea');
    input.setAttribute('id', this.id);
    input.setAttribute('name', this.name);
    input.textContent = this.value;
    return input;
  }
}
