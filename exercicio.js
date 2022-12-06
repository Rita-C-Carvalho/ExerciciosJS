var jogo = [];
var n = window.document.querySelector(`input#n`);
var n = Number(n.value);
var res = window.document.querySelector(`div.res`);
var i = 1;

    function tamanho(){
        var n = window.document.querySelector(`input#n`);
        var n = Number(n.value);
        var res = window.document.querySelector(`div.res`);
    res.innerHTML = `<p> O tamanho do <strong>array</strong> é <strong>${n}</strong> `;

    while(i<=n){
        jogo.push(Math.round(Math.random()*1000));
        i++;

        if(n <= 1000 && n >= 1 && i == n + 1){
    res.innerHTML += `<p> O array de números aleatórios com tamanho <strong> ${n} </strong> é [${jogo}] </p>`; 
    


    jogo.sort(function(a,b){
        return a - b;
      });
      
    res.innerHTML += `<p> O array ordenado é [${jogo}] `;   
    } 
    };    
}






