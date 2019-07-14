import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';

export class TextArea extends AbstractField implements IRenderable {
  protected getInputElement(): HTMLElement {
    const input: HTMLElement = document.createElement('textarea');
    input.setAttribute('id', this.id);
    input.setAttribute('name', this.name);
    input.textContent = this.value;
    return input;
  }
}
