function toggleMode() {
  //if(html.classList.contains('light')) {
  //  html.classList.remove ('light')
  //} else {
  // html.classList.add ('light')
  //}
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substuitir a imagem

  if (html.classList.contains("light")) {
    // se estiver no lightmode add a imagem light
    img.setAttribute(
      "alt",
      "Foto de Clara Nascimento sorrindo, com os cabelos ruivos soltos e cabeça levemente inclinada para a esquerda com fundo claro."
    )
  } else {
    // se estiver no darkmode, manter a imagem normal
    img.setAttribute(
      "alt",
      "Foto de Clara Nascimento sorrindo, com os cabelos ruivos soltos e cabeça levemente inclinada para a esquerda."
    )
  }
}
