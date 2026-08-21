const dashboard = () => {
    let dashboard = document.getElementById('dashboard');

    dashboard.classList.toggle('active');
}

let materia = [] 

 function adicionar(){
    let input = document.getElementById('Materias_')
    let NomeM = input.value.trim()

    if (NomeM === "") {
     return
} materia.push(NomeM)
input.value = ""

     atualizar()
}

  function remover(){
      let input = document.getElementById('Materias_')
      let NomeM = input.value.trim()

      if (NomeM === "") {
          return 
      } 
      let index = materia.indexOf(NomeM)
      if (index === -1) {
          return 
      }
      materia.splice(index, 1)
      input.value = ""

      atualizar()
  } 

  function atualizar() {
      let lista = document.getElementById('lista_materias')

      lista.innerHTML = ""
      materia.forEach(function(materia) {

          let item = document.createElement("li")
          item.textcontext = materia

          lista.appendChild(item)
          
      } )
      document.getElementById("mat_quant").textContext =
          materia.length
  }
