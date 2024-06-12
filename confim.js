const buttonHapusdata =  document.getElementById('hapus_data');
console.log(buttonHapusdata);
buttonHapusdata.addEventListener("click", e =>{
    const konfimasi = confirm("Apakah anda ingin menghapus data tersebut!!!!!!");
    if(konfimasi == false){
        e.preventDefault();
    }
});