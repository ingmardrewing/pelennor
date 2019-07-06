import {Renderable} from './renderable'

export class FieldGroup {
  id :string = ''
  fields :Array<Renderable> = new Array<Renderable>()

  setId(id:string) {
    this.id = id
  }

  addField(field :Renderable) {
    this.fields.push(field)
  }

  renderForReading():string{
    return `<div>${this.renderFieldsForReading()}</div>`
  }

  renderFieldsForReading() :string {
    let fieldsHtml = ""
    for (let f of this.fields){
      fieldsHtml += f.renderForReading()
    }
    return fieldsHtml
  }

  renderForEditing():string {
    let fieldsHtml :string = this.renderFieldsForEditing()
    return `<form id="${this.id}">
  ${fieldsHtml}
  <a id="${this.id}-save">save</a>
  <a id="${this.id}-cancel">cancel</a>
</form>`
  }

  renderFieldsForEditing() :string {
    let fieldsHtml = ""
    for (let f of this.fields){
      fieldsHtml += f.renderForEditing()
    }
    return fieldsHtml
  }
}
