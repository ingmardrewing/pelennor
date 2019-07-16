export interface IField {
  label: string;
  prepareForReading(): HTMLElement;
  prepareForEditing(): HTMLElement;
  storeInput(): void;
  setValue(value: any): IField;
  getValue(): any;
}
