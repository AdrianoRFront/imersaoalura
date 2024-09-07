function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa"
    // onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Verifica se o campo de pesquisa está vazio.
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Campo vazio!</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada elemento (dado) no array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Concatena a string 'resultados' com o HTML formatado para cada dado.
      // Cria um novo elemento div com as classes e conteúdo correspondentes.
      resultados += `
        <div class="item-resultado">
          <h2><a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado!/p>";
    }
    // Atribui a string completa de resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
        }
  }