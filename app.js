function pesquisar() {
    // 1. Obtém a seção HTML onde os resultados serão exibidos e armazena em uma variável.
    let section = document.getElementById("resultados-pesquisa");
    
    // 2. Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação e armazena em uma variável.
    let abaPesquisar = document.getElementById("aba-pesquisar").value.toLowerCase();
  
    // 3. Verifica se o campo de pesquisa está vazio.
    // Se estiver vazio, exibe uma mensagem de erro na seção de resultados.
    if (abaPesquisar === "") {

      // 4. Insere uma mensagem de erro em HTML, com a cor definida em CSS, dentro da seção.
      section.innerHTML = "<p style='color: #00ff9d;'>Nenhuma empresa ou site foi encontrado(a). Você precisa pesquisar a tecnologia.</p>";

      // 5. Interrompe a execução da função.
      return;
    }
  
    // 6. Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
  
    // 7. Itera sobre cada elemento (dado) no array de dados.
    for (let dado of dados) {

      // 8. Converte o título e a descrição do dado para minúsculas para facilitar a comparação com o termo de pesquisa.
      const titulo = dado.titulo.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const tags = dado.tags.toLocaleLowerCase();
      const link = dado.link.toLocaleLowerCase()
  
      // 9. Verifica se o termo de pesquisa está presente no título ou na descrição do dado.
      if (titulo.includes(abaPesquisar) || descricao.includes(abaPesquisar) || tags.includes (abaPesquisar)) {

        // 10. Se o termo foi encontrado, cria uma nova div com a classe "item-resultado" para exibir o resultado.
        // 11. Dentro da div, cria elementos HTML para exibir o título (com um link), a descrição e um link para mais informações.

        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
      }
    }

    if (!resultados) {
        resultados = "<p style='color: #00ff9d;'>Nenhuma empresa ou site foi encontrado(a).</p>"
    }
  
    // 12. Após iterar por todos os dados, atualiza o conteúdo da seção de resultados com a string de resultados concatenada.
    section.innerHTML = resultados;
  }