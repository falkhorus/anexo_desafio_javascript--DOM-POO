
//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

//
function SetCarToCompare(el, carClass) {
   
    if (el.checked && carArr.length >= 2) {
        alert("Só é possível comparar 2 carros por vez.");
        el.checked = false;
        return;
         
    
    } 
    
    if (el.checked) {
        carArr.push(carClass); //adiciona o objeto carro ao array
    } 
    else {
        const index = GetCarArrPosition(carArr, carClass);
        carArr.splice(index, 1); //remove o objeto carro do array (array e a posição)
    } 
}
function resetarCheck(){
}


function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    //car1 [0] = carArr[0]
    //car2 [1] = carArr[1]

    //#compare_image_0 ${atual.img}.car1;
    //#compare_image_1 ${atual.img}.car2;

}
