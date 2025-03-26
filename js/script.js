//Recupero dati da input
const km = document.getElementById('km')
const age = document.getElementById('age')
const button = document.getElementById('button')
const form = document.querySelector('form')
const finalPrice = document.querySelector('.finalPrice')

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
    return `€ ${price.toFixed(2).replace('.',',')}`
}

//Recupero dati dopo button
form.addEventListener('submit', function(e){
    e.preventDefault();
    input_km = km.value.trim();
    input_age = age.value.trim();
    alert(`Dati ricevuti`)
    km.value='';
    age.value='';
    const res = calcPrice(input_km, input_age);
    console.log(res);
    finalPrice.textContent = res
})