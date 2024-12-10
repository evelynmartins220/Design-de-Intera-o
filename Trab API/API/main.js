import { carregarPaises } from './paises.js';
import { consultarCNPJ } from './cnpj.js';

document.addEventListener('DOMContentLoaded', () => {
    carregarPaises();
    consultarCNPJ();
});