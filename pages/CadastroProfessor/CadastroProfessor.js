const AbrirAba = () => {
    const lista = document.getElementById("ul");
    if (lista.style.display == "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  }
  const formulario = document.getElementById('formulario')

const cadProf= async (professores) => {
  await fetch('http://localhost:3000/professores', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(professores)
  })

  window.location = "../ListarProfessor/ListarProfessor.html"

}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = formulario.elements['nome'].value
  const perfil = formulario.elements['perfil'].value
  const disciplina = formulario.elements['disciplina'].value
  const ativo = formulario.elements['ativo'].checked ? true : false

  const professor = {
    nome,
    perfil,
    disciplina,
    ativo
  }

  cadProf(professor)

})