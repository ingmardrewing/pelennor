export class AbstractField {
  id :string = ''
  name :string = ''
  label :string = ''
  description :string = ''
  value :any = null
  options :Array<any> = []

  setId(id :string) {
    this.id = id
  }

  setName(name:string) :void {
    this.name = name
  }

  setLabel(label:string) :void {
    this.label = label
  }

  setDescription(description :string) :void {
    this.description = description
  }

  setValue(value :any) :void {
    this.value = value
  }

  setOptions(options :Array<any>) :void {
    this.options = options
  }
}
