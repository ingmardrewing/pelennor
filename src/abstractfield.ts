import { IField } from './ifield';

export class AbstractField implements IField {
  public id: string = '';
  public name: string = '';
  public label: string = '';
  public description: string = '';
  public value: any = null;

  constructor(name: string) {
    if (!name) {
      throw new Error('A field needs a name ...');
    }
    this.name = name;
  }

  public setLabel(label: string): void {
    this.label = label;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setValue(value: any): IField {
    this.value = value;
    return this;
  }

  public getValue(): any {
    return this.value;
  }

  public storeInput(): void {
    const element: any = document.getElementById(this.id);
    if (element !== null) {
      this.setValue(element.value);
    }
  }

  public setId(id: string) {
    this.id = id;
  }

  public prepareForReading(): HTMLElement {
    const container: HTMLElement = this.getContainerElement('fieldDisplay');
    container.appendChild(this.getLabelDiv());
    container.appendChild(this.getValueDiv());
    return container;
  }

  public prepareForEditing(): HTMLElement {
    const container: HTMLElement = this.getContainerElement('fieldEdit');
    container.appendChild(this.getLabel());
    container.appendChild(this.getInputElement());
    return container;
  }

  protected getInputElement(): HTMLElement {
    return document.createElement('div');
  }

  protected getContainerElement(cssClass: string): HTMLElement {
    const container: HTMLElement = document.createElement('div');
    container.setAttribute('class', cssClass);
    return container;
  }

  protected getLabel(): HTMLElement {
    const labelElm: HTMLElement = document.createElement('label');
    labelElm.setAttribute('for', this.id);
    labelElm.textContent = this.label + ':';
    return labelElm;
  }

  protected getLabelDiv(): HTMLElement {
    const labelDiv: HTMLElement = document.createElement('div');
    labelDiv.setAttribute('class', 'fieldLabel');
    labelDiv.textContent = this.label + ':';
    return labelDiv;
  }

  protected getValueDiv(): HTMLElement {
    const valueDiv: HTMLElement = document.createElement('div');
    valueDiv.setAttribute('class', 'fieldValue');
    valueDiv.textContent = this.value;
    return valueDiv;
  }
}
