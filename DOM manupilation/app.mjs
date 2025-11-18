const body = document.body
const div  = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

console.log(spanHi.dataset)
console.log(spanHi.dataset.test)

console.log(spanBye.dataset.shorterTest)

spanHi.dataset.newTest = "newTest"




console.log(spanHi.getAttribute('title'))

console.log(spanBye.getAttribute('title'))

spanHi.setAttribute('title', 'greeting')

spanBye.id = 'goodbye'

spanHi.removeAttribute('title')

div.removeChild(spanBye)

spanBye.remove()

div.textContent = "Hello Everyone"

console.log(div.textContent)

div.innerText = "Hello World"

console.log(div.innerText)


body.append(div)

console.log(div)

// div.append(strong)

body.append(div)




const spanNew = document.querySelector('#chinese')
// 
// spanNew.classList.add('mosimosi3')

// spanNew.classList.remove('mosimosi1')

spanNew.classList.toggle('mosimosi4', true)

spanHi.style.backgroundColor = 'red' 

// spanNew.className = "hello world"