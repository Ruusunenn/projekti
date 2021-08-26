

document.querySelector('.aasi').addEventListener('click', e=>{
  e.preventDefault();
  console.log("nappi toimii");
  
if (document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked> toimi </li>' ;
    
}

  else{
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type=checkbox" id="teht_a" >html</li>' ;
}


if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked> toimi </li>' ;
    
}


  else{
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type=checkbox" id="teht_b" >html</li>' ;
}

});