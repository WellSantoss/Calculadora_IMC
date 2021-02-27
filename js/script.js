const form = document.querySelector('.form');

form.addEventListener('submit', function(evento){
   evento.preventDefault();
   
   const peso = document.querySelector('#peso').value;
   const altura = document.querySelector('#altura').value;
   const imc = (peso / (altura ** 2)).toFixed(2);
   
   if (imc > 40){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Obesidade Grau III`, 'Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC', 'red');
   } else if (imc >= 35){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Obesidade Grau II`, 'Apneia do sono, falta de ar', 'orange2');
   } else if (imc >= 30){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Obesidade Grau I`, 'Diabetes, angina, infarto, aterosclerose', 'orange1');
   } else if (imc >= 25){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Acima do peso`, 'Fadiga, má circulação, varizes', 'yellow');
   } else if (imc >= 18.5){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Peso normal`, 'Menor risco de doenças cardíacas e vasculares', 'green');
   } else if (imc >= 17){
      return setResultado(`Seu IMC é de ${imc}, classificado como: Abaixo do peso`, 'Fadiga, stress, ansiedade', 'yellow');
   } else{
      return setResultado(`Seu IMC é de ${imc}, classificado como: Muito abaixo do peso`, 'Queda de cabelo, infertilidade, ausência menstrual', 'orange1');
   }
});

const resultado = document.querySelector('.resultado');

function setResultado(result, podeAcontecer, classP){
   const p = document.createElement('p');
   const p1 = document.createElement('p');

   resultado.innerHTML = '';
   resultado.classList.remove('anim');

   p.classList.add(classP);
   
   p.innerHTML = result;
   p1.innerHTML = podeAcontecer;
   
   resultado.classList.add('anim');
   resultado.appendChild(p);
   resultado.innerHTML += '<h4>O que pode acontecer:</h4>';
   resultado.appendChild(p1);
}