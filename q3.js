class Aluno {
  constructor(id, nome, nota, situacao) {    
    this.id = id;
    this.nome = nome;
    this.nota = nota;
    this.situacao = situacao;
  }
}

function gerarRelatorio() {
  let qtdAprov = 0
  let qtdReprov = 0

  let tabelaHtml = document.getElementById("tabela");
  let rodapeHtml = document.getElementById("resultado");
  tabelaHtml.innerHTML = 
  `<tr>
    <th>ID</th>
    <th>Nome</th>
    <th>Nota</th>
    <th>Situação</th>
  </tr>`;
  rodapeHtml.innerHTML = '';

  for (let i=1; i<21; i++) {
    let notaRandom = Math.floor(Math.random() * 100)
    let nomeRandom = Math.random().toString(36).substr(2, 5)  
    let situacaoRandom = notaRandom > 69 ? "APROVADO(A)" : "REPROVADO(A)"

    let aluno1 = new Aluno (id=i, nome=nomeRandom, nota=notaRandom, situacao=situacaoRandom);
    let tabelaHtml = document.getElementById("tabela");
    tabelaHtml.innerHTML += `<tr>
                            <td>${aluno1.id}</td>
                            <td>${aluno1.nome}</td>
                            <td>${aluno1.nota}</td>
                            <td>${aluno1.situacao}</td>
                          </tr>`

    if (notaRandom > 69) {
      qtdAprov++
    } else {
      qtdReprov++
    }
  }

  function mediaSituacao(qtdAprov, qtdReprov){
    let rodapeHtml = document.getElementById("resultado")
    rodapeHtml.innerHTML += `<br><div>Alunos aprovados: ${qtdAprov}%</div>
                              <div>Alunos reprovados: ${qtdReprov}%</div>`
  }

  mediaSituacao(Math.floor(qtdAprov / 20 * 100),
                Math.floor(qtdReprov / 20 * 100))
}
