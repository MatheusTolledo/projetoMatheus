const AbrirAba = () => {
  const lista = document.getElementById("ul");
  if (lista.style.display == "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
};
const getUsuarioAluno = async () => {
  const apiURL = await fetch("http://localhost:3000/alunos");
  const usuarioAluno = await apiURL.json();
  mostrarUsuarioAluno(usuarioAluno);
};

const mostrarUsuarioAluno = (usuarioAluno) => {
  const tabela = document.querySelector("tbody");
  tabela.innerHTML = "";

  usuarioAluno.forEach((usuarioAluno) => {
    const useAlunoHTML = `
          <tr>
              <td>${usuarioAluno.nome}</div></td>
              <td>${usuarioAluno.turma}</td>
              <td>${
                usuarioAluno.ativo
                  ? "<img src='../../assets/images/ListarProfessores/toggleverde.svg' class='toggle-img'"
                  : "<img src='../../assets/images/ListarProfessores/togglevermelho.svg' class='toggle-img'"
              }">
              <td>
              <button class="botaoEditar" onclick="editarUseAluno(${
                usuarioAluno.id
              })"></button>
              <button class="botaoExcluir" onclick="excluirUseAluno(${
                usuarioAluno.id
              })"></button>
              </td>
  
          </tr>
          
          `;
    tabela.innerHTML = tabela.innerHTML + useAlunoHTML;
  });
};

getUsuarioAluno();

const excluirUseAluno = async (id) => {
  await fetch(`http://localhost:3000/alunos/${id}`, {
      method: 'DELETE'
  })
  getUsuarioAluno()
}
const editarUseAluno = (id) => {
  window.location = `../../pages/EditarAluno/EditarAluno.html?id=${id}`
}
