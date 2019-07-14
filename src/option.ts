import { IRenderable } from './irenderable';

export class Option implements IRenderable {
  public label: string = '';
  public name: string = '';
  public value: any = null;
  public isSelected: boolean = false;
  public isCheckbox: boolean = false;

  public setLabel(label: string): void {
    this.label = label;
  }

  public setValue(value: any): void {
    this.value = value;
  }

  public setName(name: any): void {
    this.name = name;
  }

  public setSelected(): void {
    this.isSelected = true;
  }

  public setIsCheckbox(): void {
    this.isCheckbox = true;
  }

  public renderForEditing(): string {
    if (this.isCheckbox) {
      if (this.isSelected) {
        return `<div><input name="${this.name}" value="${this.value}" checked="checked">${this.label}</div>`;
      }
      return `<div><input name="${this.name}" value="${this.value}">${this.label}</div>`;
    } else {
      if (this.isSelected) {
        return `<option value="${this.value}" selected="selected">${this.label}</option>`;
      }
      return `<option value="${this.value}">${this.label}</option>`;
    }
  }

  public renderForReading(): string {
    if (this.isSelected) {
      if (this.isCheckbox) {
        return this.value.toString();
      } else {
        return this.value.toString();
      }
    }
    return '';
  }
}
