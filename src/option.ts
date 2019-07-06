import { Renderable } from './renderable';

export class Option implements Renderable {
  label: string = '';
  name: string = '';
  value: any = null;
  isSelected: boolean = false;
  isCheckbox: boolean = false;

  setLabel(label: string): void {
    this.label = label;
  }

  setValue(value: any): void {
    this.value = value;
  }

  setName(name: any): void {
    this.name= name;
  }

  setSelected(): void {
    this.isSelected= true;
  }

  setIsCheckbox() :void {
    this.isCheckbox = true;
  }

  renderForEditing(): string {
    if (this.isCheckbox) {
      if (this.isSelected) {
        return `<div><input name="${this.name}" value="${this.value}" checked="checked">${this.label}</div>`;
      }
    return `<div><input name="${this.name}" value="${this.value}">${this.label}</div>`;
    }
    else{
      if (this.isSelected) {
        return `<option value="${this.value}" selected="selected">${this.label}</option>`;
      }
      return `<option value="${this.value}">${this.label}</option>`;
    }
  }

  renderForReading(): string {
    if (this.isSelected) {
      if (this.isCheckbox ) {
        return this.value.toString();
      }
      else {
        return this.value.toString();
      }
    }
    return ''
  }
}
