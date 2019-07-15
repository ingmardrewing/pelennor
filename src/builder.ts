import { CheckBoxes } from './checkboxes';
import { Image } from './image';
import { Select } from './select';
import { Stringer } from './stringer';
import { TextArea } from './textarea';
import { TextField } from './textfield';

export class Builder extends Stringer {
  public buildTextField(name: string): TextField {
    this.check(this.clean(name));
    const tf: TextField = new TextField(this.clean(name));
    tf.setLabel(name);
    tf.setId(`pelennor-textfield-${this.clean(name)}`);
    return tf;
  }

  public buildTextArea(name: string): TextArea {
    this.check(this.clean(name));
    const ta: TextArea = new TextArea(this.clean(name));
    ta.setLabel(name);
    ta.setId(`pelennor-textarea-${this.clean(name)}`);
    return ta;
  }

  public buildSelect(name: string): Select {
    this.check(this.clean(name));
    const select: Select = new Select(this.clean(name));
    select.setLabel(name);
    select.setId(`pelennor-select-${this.clean(name)}`);
    return select;
  }

  public buildCheckBoxes(name: string): CheckBoxes {
    this.check(this.clean(name));
    const cbx: CheckBoxes = new CheckBoxes(this.clean(name));
    cbx.setLabel(name);
    return cbx;
  }

  public buildImage(name: string): Image {
    this.check(this.clean(name));
    const image: Image = new Image(this.clean(name));
    image.setLabel(name);
    image.setId(`pelennor-select-${this.clean(name)}`);
    return image;
  }
}
