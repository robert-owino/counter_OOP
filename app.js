

function Counter(element,value){
  this.element = element
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.decreaseBtn = element.querySelector('.decrease')
  this.increasetBtn = element.querySelector('.increase')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.value

  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)

  this.increasetBtn.addEventListener('click', this.increase)
  this.decreaseBtn.addEventListener('click', this.decrease)
  this.resetBtn.addEventListener('click', this.reset)
}

Counter.prototype.increase = function(){
  this.value++
   this.valueDOM.textContent = this.value;
}
Counter.prototype.decrease = function(){
  this.value--
   this.valueDOM.textContent = this.value;
}
Counter.prototype.reset = function(){
  this.value = 0
   this.valueDOM.textContent = this.value;
}


const firstCounter = new Counter(getElement(".first-counter"),100);
const secondCounter = new Counter(getElement(".second-counter"),200);


function getElement(selection){
  const element = document.querySelector(selection)
  if(element){
    return element
  }
  throw new Error(`please check selection "${selection}", no such element exist`)
}



