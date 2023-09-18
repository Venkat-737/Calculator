
var text=document.getElementById("text1");
var ac=document.getElementById("allclear");
var del=document.getElementById("del");
var modulo=document.getElementById("modulo");
var divide=document.getElementById("divide");
var mul=document.getElementById("multiply");
var add=document.getElementById("plus");
var sub=document.getElementById("minus");
var point=document.getElementById("point");
var equal=document.getElementById("equal");
var zero=document.getElementById("zero");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");

calcinput=text.value;

one.addEventListener("click",function(event){
    calcinput=calcinput+"1";
    text.value=calcinput;
})
two.addEventListener("click",function(event){
    calcinput=calcinput+"2";
    text.value=calcinput;
})
three.addEventListener("click",function(event){
    calcinput=calcinput+"3";
    text.value=calcinput;
})
four.addEventListener("click",function(event){
    calcinput=calcinput+"4";
    text.value=calcinput;
})
five.addEventListener("click",function(event){
    calcinput=calcinput+"5";
    text.value=calcinput;
})
six.addEventListener("click",function(event){
    calcinput=calcinput+"6";
    text.value=calcinput;
})
seven.addEventListener("click",function(event){
    calcinput=calcinput+"7";
    text.value=calcinput;
})
eight.addEventListener("click",function(event){
    calcinput=calcinput+"8";
    text.value=calcinput;
})
nine.addEventListener("click",function(event){
    calcinput=calcinput+"9";
    text.value=calcinput;
})
zero.addEventListener("click",function(event){
    calcinput=calcinput+"0";
    text.value=calcinput;
})
add.addEventListener("click",function(event){
    calcinput=calcinput+"+";
    text.value=calcinput;
})
sub.addEventListener("click",function(event){
    calcinput=calcinput+"-";
    text.value=calcinput;
})
mul.addEventListener("click",function(event){
    calcinput=calcinput+"*";
    text.value=calcinput;
})
divide.addEventListener("click",function(event){
    calcinput=calcinput+"/";
    text.value=calcinput;
})
modulo.addEventListener("click",function(event){
    calcinput=calcinput+"%";
    text.value=calcinput;
})
point.addEventListener("click",function(event){
    calcinput=calcinput+".";
    text.value=calcinput;
})
del.addEventListener("click",function(event){
    calcinput=calcinput.slice(0,-1);
    text.value=calcinput;
})
ac.addEventListener("click",function(){
    calcinput='';
    text.value=calcinput;
})
equal.addEventListener("click",function(event){
    var ans=eval(calcinput);
    document.getElementById("answer").innerHTML=ans;
})

text.addEventListener("keypress",function(event){
    if (event.key=="Enter"){
        calcinput=text.value;
        result=eval(calcinput);
        document.getElementById("answer").innerHTML=result;
    }
    
})

