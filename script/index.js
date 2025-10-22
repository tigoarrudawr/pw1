const loremIpsumSettings = {
	words: {
		min: 8,
		max: 16
	},
	phrases: {
		min: 4,
		max: 8
	},
	paragraph: {
		min: 2,
		max: 4
	},
	commaChance: 0.15
}

function preencherSelectMarcas() {
	loremIpsunGenerator();
	const selectElement = document.getElementById('marca-select');
	const optionsHTML = montadoras.sort((a, b) => {
		if (a.text < b.text) {
			return -1;
		}
		if (a.text > b.text) {
			return 1;
		}
		return 0;
	}).map(marca => {
		return `<option value="${marca.value}">${marca.text}</option>`;
	}).join('');
	selectElement.innerHTML += '<option value="" selected>Selecione uma marca</option>' + optionsHTML;
}

function preencherSelectModels() {
	document.getElementById("marca-select").addEventListener("change", function () {
		const montadora = this.value;
		const modeloSelect = document.getElementById("modelo-select");

		modeloSelect.innerHTML = '<option value="" selected>Selecione um modelo</option>';

		if (montadora && modelos[montadora]) {
			modelos[montadora].sort((a, b) => {
				if (a.text < b.text) {
					return -1;
				}
				if (a.text > b.text) {
					return 1;
				}
				return 0;
			}).forEach(function (modelo) {
				const option = document.createElement("option");
				option.value = modelo.value;
				option.textContent = modelo.text;
				modeloSelect.appendChild(option);
			});
		}
	});
}

function loremIpsunGenerator() {
	const paragraphLenght = randomNumber(loremIpsumSettings.paragraph);
	var paragraphList = [];
	for (var i = 0; i < paragraphLenght; i++) {
		const sentenceLength = randomNumber(loremIpsumSettings.phrases);
		var sentenceList = [];
		for (var j = 0; j < sentenceLength; j++) {
			const wordsLength = randomNumber(loremIpsumSettings.words);
			var wordList = [];
			for (var k = 0; k < wordsLength; k++) {
				var word = dictionary[Math.floor(Math.random() * dictionary.length)];
				if (k == 0) {
					word = word.charAt(0).toUpperCase() + word.slice(1);
				} else if (k == wordsLength - 1) {
					word += ".";
				} else if(Math.random() < loremIpsumSettings.commaChance) {
					word += ",";
				}
				wordList.push(word);
			}
			sentenceList.push(wordList.join(" "));
		}
		paragraphList.push("<p class='about-us'>" + sentenceList.join(" ") + "</p>");
	}
	return paragraphList.join("\n");
}

function randomNumber(structure) {
	return Math.floor(Math.random() * (structure.max - structure.min + 1)) + structure.min;
}

function loadAboutUs() {
	const loremText = loremIpsunGenerator();
	// 2. Find the element by its ID
	const targetElement = document.getElementById('about-us');

	// 3. Insert the string into the element
	targetElement.innerHTML = loremText; 
}

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            // Verifica se a requisição foi bem-sucedida
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
			document.getElementsByTagName(elementId)[0].innerHTML = data;
        })
        .catch(e => {
            console.error(`Erro ao carregar o componente ${url}:`, e);
        });
}

document.addEventListener('DOMContentLoaded', loadComponent('/pw1/pages/footer/footer.html', 'footer-placeholder'));
document.addEventListener('DOMContentLoaded', loadComponent('/pw1/pages/header/header.html', 'header-placeholder'));
document.addEventListener('DOMContentLoaded', preencherSelectMarcas);
document.addEventListener('DOMContentLoaded', preencherSelectModels);
document.addEventListener('DOMContentLoaded', loadAboutUs);

