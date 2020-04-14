 exports.NamesWithEmailSplit = function (names) {
 if (names === undefined || names === null)
      return '';

 let message='';
 let arrName=new Array();


 if (names.indexOf('\n')>0){
   // contains newline as split, remove semicolon if exisit
    names = names.replace(';','')
  
  } else if(names.indexOf(';')>0){
    names = names.replace(';','\n')
  }
  arrName = names.split('\n');
  if (arrName.length > 1){
  	 for (var i = 0; i < arrName.length; i++) {
  		  arrName.push(getEmailTo(arrName[i]) + '<br />');
  		  }
  }
  else {
    arrName[0] = getEmailTo(arrName[0]) + '<br />';;
  }


  return arrName;
}
function getEmailTo(nameEmail){
    let name = nameEmail.split(',');
      if (name.length==2){
         return '<a href = "mailto:' + name[1].trim() + '">'+ name[0] + '</a>'; 
      } else {
        return nameEmail;
      }
}
