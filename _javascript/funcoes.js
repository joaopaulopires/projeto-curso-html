function mudaFoto (foto)
{
    document.getElementById("icone").src = foto
}
function calc_total () {
    var qtd = parseInt(document.getElementeById('cQtd').value);
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}