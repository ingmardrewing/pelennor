import { AbstractField } from './abstractfield';
import { Option } from './option';

export class Opter extends AbstractField {
  public options: Option[] = [];

  public addOption(name: string): Option {
    this.check(name);
    const o = new Option(this.clean(name));
    o.setLabel(name);
    this.options.push(o);
    return o;
  }

  protected check(name: string): void {
    if (name.length === 0) {
      throw new Error('clean(name).length === 0. An option needs a name ...');
    }
  }

  protected clean(dirty: string): string {
    const re = /[^A-Za-z0-9]/g;
    return dirty.replace(re, '');
  }
}
