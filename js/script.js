// YOUR CODE HERE
document.querySelector('#btn1').addEventListener('click', () => {
	document.querySelector('#output1').style.color = 'red';
})

document.querySelector('#btn2').addEventListener('click', () => {
	const span = document.createElement('span')
	span.textContent = 'Hello World'
	document.querySelector('#output2').append(span)
})

document.querySelector('#btn3').addEventListener('click', () => {
	document.querySelector('#output3').innerHTML = ''
})

document.querySelector('#btn4').addEventListener('click', () => {
	document
		.querySelector('#output4')
		.querySelectorAll('p')
		.forEach(p => p.style.color = 'red')
})

document.querySelector('#btn5').addEventListener('click', () => {
	const inputValue = document
		.querySelector('#message')
		.value;
	console.log(inputValue)
})