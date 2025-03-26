//Recupero dati da input
const formkm = document.getElementById('km')
const formage = document.getElementById('age')
const formnome = document.getElementById('nome')
const button = document.getElementById('button')
const form = document.querySelector('form')
const finalPrice = document.querySelector('.finalPrice')
const ticketSection = document.getElementById('ticketSection')
const ticketName = document.getElementById('ticketName')
const ticketKm = document.getElementById('ticketKm')
const ticketTariffa = document.getElementById('ticketTariffa')
const initialPrice  = document.getElementById('initialPrice ')
const totalDiscount = document.getElementById('totalDiscount')

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
    input_km = formkm.value.trim();
    input_age = formage.value.trim();
    input_name = formnome.value.trim()
    alert(`Dati ricevuti`)
    formkm.value='';
    formage.value='';
    const res = calcPrice(input_km, input_age);
    console.log(res);
    finalPrice.textContent = res;
    ticketName.textContent = input_name;
    ticketKm.textContent = input_km;
    ticketSection.classList.remove('d-none')
    initialPrice.textContent = `€ ${(input_km*0.21).toFixed(2).replace('.',',')}`

    let tariffa = '';
    if (input_age < 18){
        tariffa = `Young -20%`;
    }else if(input_age > 65){
        tariffa = `Senior -40%`
    }else{
        tariffa = `Standard`
    }

    ticketTariffa.textContent=tariffa;

    if (tariffa == 'Standard' && ticketTariffa) {
        initialPrice.classList.remove('text-decoration-line-through');
        totalDiscount.textContent = '€ 0,00'
    }else{
        let numericValue = parseFloat(res.replace('€', '').replace(' ', '').replace(',', '.'));
        let sconto = (input_km*0.21) - numericValue;
        totalDiscount.textContent = `€ ${(sconto).toFixed(2).replace('.',',')}`
    }
       
})