const AbrirAba = () => {
    const lista = document.getElementById("ul");
    if (lista.style.display == "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  };
  const getUsuarioProfessor = async () => {
    const apiURL = await fetch("http://localhost:3000/professores");
    const usuarioProfessor = await apiURL.json();
    mostrarUsuarioProfessor(usuarioProfessor);
  };
  
  const mostrarUsuarioProfessor = (usuarioProfessor) => {
    const tabela = document.querySelector("tbody");
    tabela.innerHTML = "";
  
    usuarioProfessor.forEach((usuarioProfessor) => {
      const useProfessorHTML = `
            <tr>
                <td>${usuarioProfessor.nome}</div></td>
                <td>${usuarioProfessor.disciplina}</td>
                <td>${usuarioProfessor.perfil}</td>
                <td>${
                  usuarioProfessor.ativo
                    ? "<img src='../../assets/images/ListarProfessores/toggleverde.svg' class='toggle-img'"
                    : "<img src='../../assets/images/ListarProfessores/togglevermelho.svg' class='toggle-img'"
                }">
                <td>
                <button class="botaoEditar" onclick="editarUseProfessor(${
                  usuarioProfessor.id
                })"></button>
                <button class="botaoExcluir" onclick="excluirUseProfessor(${
                  usuarioProfessor.id
                })"></button>
                </td>
    
            </tr>
            
            `;
      tabela.innerHTML = tabela.innerHTML + useProfessorHTML;
    });
  };
  
  getUsuarioProfessor();
  
  const excluirUseProfessor = async (id) => {
    await fetch(`http://localhost:3000/professores/${id}`, {
        method: 'DELETE'
    })
    getUsuarioProfessor()
  }
  const editarUseProfessor = (id) => {
    window.location = `../../pages/EditarProfessor/EditarProfessor.html?id=${id}`
}
  