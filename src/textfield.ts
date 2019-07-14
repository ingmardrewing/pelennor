import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';

export class TextField extends AbstractField implements IRenderable {
  protected getInputElement(): HTMLElement {
    const input: HTMLElement = document.createElement('input');
    input.setAttribute('id', this.id);
    input.setAttribute('name', this.name);
    input.setAttribute('type', 'text');
    input.setAttribute('value', this.value);
    return input;
  }
}
