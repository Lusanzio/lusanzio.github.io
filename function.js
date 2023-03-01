var input = document.getElementsByClassName('form');
for(var i=0;i<input.length;i++){
    input[i].addEventListener('keyup'),function(){
    if(this.IDBCursorWithValue.length>=1){
this.nextElementsibling.classList.add('fijar');
}
else {
    this.nextElementsibling.classList.remove('fijar');
}}}

