const AbrirAba = () => {
    const lista = document.getElementById("ul");
    if (lista.style.display == "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  }
  const formulario = document.getElementById('formulario')

const cadAluno= async (aluno) => {
  await fetch('http://localhost:3000/alunos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(aluno)
  })

  window.location = "../ListarAluno/ListarAluno.html"

}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = formulario.elements['nome'].value
  const turma = formulario.elements['turma'].value
  const ativo = formulario.elements['ativo'].checked ? true : false

  const aluno = {
    nome,
   turma,
    ativo
  }

  cadAluno(aluno)

})