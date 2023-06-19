const Button = document.querySelector('#invia')
const containcells = document.querySelector('#containcells')
const estratto = document.querySelector('.NumberEstrai')


for (let x = 1; x <= 76; x++) {
  const number = document.createElement('div');
  number.classList.add("selectorCell1");
  number.innerHTML = x;
  number.id = "casella_"+x
  containcells.appendChild(number);
}

Button.addEventListener('click', (e) => { generate_random()})

function generate_random() {
  let numeroCasuale = Math.floor(Math.random() * 76) + 1; //1 a 76

  estratto.innerHTML = "il numero estratto è: "+numeroCasuale;

  let casella_selezionata = document.querySelector("#casella_" + numeroCasuale);
  casella_selezionata.classList.add('casella_selezionata');

}
//