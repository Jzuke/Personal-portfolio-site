import "core-js/stable"
import "regenerator-runtime/runtime"

let things = ['stuff', 'apps', 'websites', 'IoT things', 'animations', 'graphics', 'illustrations', 'music', 'houseboats', 'friends']
const contentEl = document.querySelector('#content')
contentEl.textContent = things[0]

document.querySelector('#content').addEventListener('click', (e) => {
	contentEl.classList.add('fadeOut')
	let nextItem
	let index = things.indexOf(contentEl.innerHTML)
	contentEl.textContent = index >= 0 && index < things.length - 1 ? nextItem = things[index + 1] : nextItem = things[0]
})