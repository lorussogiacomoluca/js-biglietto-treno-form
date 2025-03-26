//Recupero dati da input
const km = document.getElementById('km')
const age = document.getElementById('age')
const button = document.getElementById('button')

//Funzione di calcolo del costo
const calcPrice = (km, age) => {
    let price;
    if (age<18){
        price = (km*0.21)*(0.8)
    } else if(age>65){
        price = (km*0.21)*(0.6)
    }else{
        price = km*0.21;
    }
    return price.toFixed(2);
}