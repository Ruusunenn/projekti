document.querySelector('#lisaanappi').addEventListener('click', e=>{
  e.preventDefault();
  if (document.querySelector('#nimi').value == '' || document.querySelector('#tieto').value == ''){
    document.querySelector('#ilmoitus').innerHTML ='täytä kentät';
    setTimeout(function(){ document.querySelector('#ilmoitus').innerHTML =''; }, 3000);
  }
  else{
    document.querySelector('#ilmoitus').innerHTML =document.querySelector('#nimi').value + ': ' +document.querySelector('#tieto').value;
  }
  });




document.querySelector('.aasi').addEventListener('click', e=>{
  e.preventDefault();
  console.log("nappi toimii");
  
if (document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<input type="checkbox" id="teht_a" checked> toimi ' ;
    
}

  else{
    document.querySelector('.boksit').children[0].innerHTML = '<input type="checkbox" id="teht_a" >html' ;
}


if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<input type="checkbox" id="teht_b" checked> toimi' ;
    
}


  else{
    document.querySelector('.boksit').children[1].innerHTML = '<input type="checkbox" id="teht_b" >css' ;
}
if (document.querySelector('#teht_c').checked){
    document.querySelector('.boksit').children[2].innerHTML = '<input type="checkbox" id="teht_c" checked> toimi' ;
    
}


  else{
    document.querySelector('.boksit').children[2].innerHTML = '<input type="checkbox" id="teht_c" >JAVASCRIPT' ;
}
if (document.querySelector('#teht_d').checked){
    document.querySelector('.boksit').children[3].innerHTML = '<input type="checkbox" id="teht_d" checked> toimi' ;
    
}


  else{
    document.querySelector('.boksit').children[3].innerHTML = '<input type="checkbox" id="teht_d" >CI/CD' ;
}


});