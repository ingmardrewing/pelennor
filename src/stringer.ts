export class Stringer {
  protected check(name: string): void {
    if (name.length === 0) {
      throw new Error('clean(name).length === 0. A fields needs a name ...');
    }
  }

  protected clean(dirty: string): string {
    return dirty.replace(/[^A-Za-z0-9]/g, '');
  }
}
