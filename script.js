// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})
