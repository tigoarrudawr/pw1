function preencherSelectMarcas() {
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

document.addEventListener('DOMContentLoaded', preencherSelectMarcas);
document.addEventListener('DOMContentLoaded', preencherSelectModels);
