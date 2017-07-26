//(function () {
var preload=document.getElementById("preload");
var loading=1500;
var id=setInterval(frame,64);
function frame(){
  if (loading==1500){
    clearInteval(id);
    window.open("index-1.html","_self");
  } else{
    loading=loading+1;
    if(loading== 90){
      preload.style.animation="fadeout 1s ease";

    }
  }
}
})();
