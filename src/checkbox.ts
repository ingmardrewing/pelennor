import { Renderable } from './renderable';

export class Checkbox implements Renderable {
  label: string = '';
  name: string = '';
  value: any = null;
  isChecked: boolean = false;

  setLabel(label: string): void {
    this.label = label;
  }

  setValue(value: any): void {
    this.value = value;
  }

  setName(name: string) :void {
    this.name = name;
  }

  addOption(opt :Option) {
    opt.isCheckbox()
    this.options.push(opt)
  }

  check(): void {
    this.isChecked = true;
  }

  renderForEditing(): string {
    if (this.isChecked) {
      return `<div><input name="${this.name}" value="${this.value}" checked="checked">${this.label}</div>`;
    }
    return `<div><input name="${this.name}" value="${this.value}">${this.label}</div>`;
  }

  renderForReading(): string {
    return this.value.toString();
  }
}
