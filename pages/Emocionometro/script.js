const AbrirAba = () => {
    const lista = document.getElementById("ul");
    if (lista.style.display == "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  }