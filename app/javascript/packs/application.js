 // This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const Trix = require("trix")
require("@rails/actiontext")

const Chart = require('chart.js')

Trix.config.blockAttributes.heading1.tagName= "h3"

import Sortable from 'sortablejs'
import "controllers"

import '../stylesheets/application';

document.addEventListener('turbolinks:load', ()=>{

  var ctx = document.getElementById('page-views')
  if (ctx) {
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: JSON.parse(ctx.dataset.labels),
          datasets: [{
              label: 'Page Views',
              data: JSON.parse(ctx.dataset.data),
              borderWidth: 1
          }]
      },
  });
}
  var ctx = document.getElementById('unique-page-views').getContext('2d');
  if (ctx) {
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: JSON.parse(ctx.dataset.labels),
          datasets: [{
              label: 'Unique Page Views',
              data: JSON.parse(ctx.dataset.data),
              borderWidth: 1
          }]
      },
  });
}
  document.addEventListener('click',(){
     let element = evet.target.closest('.paragraph-content')
     if (!element) return;

     element.classList.add('d-none')
     element.nextElementSibling.classList.remove('d-none')
  })
  document.addEventListener('click',(){
    if (!event.target.matches('.cancel'))return;
    event.preventtDefault()

    let element = event.target.closest('.paragraph-form')

    element.class.add(d-none)
    element.previousElemnetSibling.classList.remove('d-none')
  })

  let element = document.getElementById('element')
  Sortable.create(elements,{ animation: 150})
})

import "controllers"
