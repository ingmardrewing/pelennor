import { AbstractField } from './abstractfield';
import { IRenderable } from './irenderable';

export class Image extends AbstractField implements IRenderable {
  public renderForReading(): string {
    if (this.value) {
      return `<div class="fieldDisplay">
    <img src="${this.value}">
</div>`;
    }
    return '';
  }

  public renderForEditing(): string {
    return `<div class="fieldDisplay">
      <input type="text" id="${this.id}" value="${this.value}" />
      <input type="file" id="${this.id}-picker" />
      <script>
        let imgPicker = document.querySelector('#${this.id}-picker');
        imgPicker.addEventListener('change',function(e){
          let filePicker = e.target;

          let reader = new FileReader();
          reader.addEventListener("load", function(loaded){
            let dataUrlInput = document.querySelector('#${this.id}');
            dataUrlInput.val(reader.result.toString());
          }, false);
          reader.readAsDataURL(filePicker.files[0]);
        });
      </script>
    <div>`;
  }
}
