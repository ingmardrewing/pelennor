export interface IRenderable {
  prepareForReading(): HTMLElement;
  prepareForEditing(): HTMLElement;
  storeInput(): void;
}
