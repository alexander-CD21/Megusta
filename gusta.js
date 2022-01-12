function actualizarDatos(like){
    let div=like.closest('.linea1').querySelector('.item22');
    let nums=Number(div.innerText)
    nums++;
    div.innerText=nums;
}
