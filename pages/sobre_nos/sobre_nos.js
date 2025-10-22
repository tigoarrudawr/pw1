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
