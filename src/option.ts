import { Renderable } from './renderable';

export class Option implements Renderable {
  label: string = '';
  value: any = null;
  isDefault: boolean = false;

  setLabel(label: string): void {
    this.label = label;
  }

  setValue(value: any): void {
    this.value = value;
  }

  setDefault(): void {
    this.isDefault = true;
  }

  renderForEditing(): string {
    if (this.isDefault) {
      return `<option value="${this.value}" selected="selected">${this.label}</option>`;
    }
    return `<option value="${this.value}">${this.label}</option>`;
  }

  renderForReading(): string {
    return this.value.toString();
  }
}
