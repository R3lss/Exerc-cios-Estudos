
function verificar(){
    var vel = document.getElementById("txtvel")
    var velo = Number(vel.value)
    var res = document.getElementById("res")
    if (velo > 120){
        res.innerHTML = "<p>Você foi multado</p>"
    } else{
        res.innerHTML = "<p>Passou com a velocidade adequada</p>"
    }
}