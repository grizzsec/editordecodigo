const actualizar = () =>{
    const texto_ingresado = document.getElementById("texto_ingresado");
    const editor = document.getElementById("editor");
    editor.srcdoc = texto_ingresado.value;
  
}