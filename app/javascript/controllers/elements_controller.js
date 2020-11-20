import ApplicationController from './application_controller'
export default class extends ApplicationController {


  sort() {
     let element = document.getElementById('elements')
     let element_items = Array.from(document.getElementByClassName('element-item'))
     let elemens = element_items.map((element, index) => {
       return { id: element.dataset.id, index + 1 }
     })
     console.log(elements)

     element.dataset.elements = JSON.stringify(elements)
     this.stimulute('ElementsReflex#sort', element)
  }
}
