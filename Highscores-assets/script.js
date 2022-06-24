let scoreEl = document.querySelector('#results');
let name = localStorage.getItem("name");
let right = localStorage.getItem("score");



name.textContent = nameInput;
localStorage.setItem('name', name);
right.textContent = rightEl;
localStorage.setItem('score', right);

nameEl.append('results');
rightEl.append('results');