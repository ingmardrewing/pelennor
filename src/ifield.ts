export interface IField {
  name: string;
  prepareForReading(): HTMLElement;
  prepareForEditing(): HTMLElement;
  storeInput(): void;
  setValue(value: any): void;
  getValue(): any;
}