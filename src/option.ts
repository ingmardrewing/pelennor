export class Option {
  public label: string = '';
  public name: string = '';
  public value: any = null;
  public isSelected: boolean = false;
  public isCheckbox: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public setLabel(label: string): void {
    this.label = label;
  }

  public setValue(value: any): Option {
    this.value = value;
    return this;
  }

  public getValue(): any {
    return this.value;
  }

  public setSelected(): Option {
    this.isSelected = true;
    return this;
  }

  public setUnselected(): Option {
    this.isSelected = false;
    return this;
  }

  public setIsCheckbox(): void {
    this.isCheckbox = true;
  }

  public prepareForEditing(): HTMLElement {
    if (this.isCheckbox) {
      const cb: HTMLElement = document.createElement('input');
      cb.setAttribute('type', 'checkbox');
      cb.setAttribute('name', this.name);
      cb.setAttribute('id', this.name);
      cb.setAttribute('value', this.value);
      if (this.isSelected) {
        cb.setAttribute('checked', 'checked');
      }
      const label = document.createTextNode(this.label);

      const div: HTMLElement = document.createElement('div');
      div.appendChild(cb);
      div.appendChild(label);
      return div;
    } else {
      const opt: HTMLElement = document.createElement('option');
      opt.setAttribute('value', this.value);
      opt.textContent = this.label;
      if (this.isSelected) {
        opt.setAttribute('selected', 'selected');
      }
      return opt;
    }
  }

  public prepareForReading(): HTMLElement {
    const span = document.createElement('span');
    if (this.isSelected) {
      span.textContent = this.value.toString();
    }
    return span;
  }
}
