import { toggleLayout } from "./mural.js";

const btn = document.querySelector('#btnMudaLayout');
btn.addEventListener('click', function () {
    if (btn.textContent.trim() === 'Linhas') {
        btn.textContent = 'Blocos';
    }
    else {
        btn.textContent = 'Linhas';
    }

    toggleLayout();
});

