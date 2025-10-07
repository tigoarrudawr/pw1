const loremIpsumSettings = {
	words: {
		min: 8,
		max: 16
	},
	paragraph: {
		min: 4,
		max: 8
	}
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
	dictionary[Math.floor(Math.random() * dictionary.length)];
	console.log(dictionary);
	console.log(dictionary[Math.floor(Math.random() * dictionary.length)]);
	const paragraphLength = Math.floor(Math.random() * (loremIpsumSettings.paragraph.max - loremIpsumSettings.paragraph.min + 1)) + loremIpsumSettings.paragraph.min;
	var text = [];
	for(var i = 0; i < paragraphLength; i++) {
		const wordsLength = Math.floor(Math.random() * (loremIpsumSettings.words.max - loremIpsumSettings.words.min + 1)) + loremIpsumSettings.words.min;
		var iParagraph = [];
		for(var j = 0; j < wordsLength; j++) {
			iParagraph.push(dictionary[Math.floor(Math.random() * dictionary.length)]);
		}
		text.push(iParagraph);
	}
	console.log(text);
	text.forEach(paragraph => {
		console.log(paragraph.join(" "));
	});
}

function randomWord(dictionary) {

}

document.addEventListener('DOMContentLoaded', preencherSelectMarcas);
document.addEventListener('DOMContentLoaded', preencherSelectModels);
