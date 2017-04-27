var promjena=document.getElementById("tag").innerHTML;
var novi=promjena;
document.getElementById("tag1").innerHTML=novi;

function promjeni() {
    document.getElementById("slika").src = "resize.jpg";
}
function boja(){
    document.getElementById("tag").style.backgroundColor = "red";
}
function jedan(){
    var element=document.getElementById("divcina");
    element.style.visibility="visible";


}
function dva(){
    var element=document.getElementById("divcina");
    element.style.visibility="hidden";

}
