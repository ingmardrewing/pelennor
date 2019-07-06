import { Option } from './option';

export class AbstractField {
  public id: string = '';
  public name: string = '';
  public label: string = '';
  public description: string = '';
  public value: any = null;
  public options: Option[] = [];

  public setId(id: string) {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setLabel(label: string): void {
    this.label = label;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setValue(value: any): void {
    this.value = value;
  }

  public addOption(option: Option): void {
    this.options.push(option);
  }
}
