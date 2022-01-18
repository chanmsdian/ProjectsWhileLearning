let count=0;
let increment = () =>
{
     count++;
document.getElementById("result").innerHTML = count;
    
}
let decrement = () => {
    count--;
    document.getElementById("result").innerHTML = count;
    
}
let reset = () => {
    count=0;
    document.getElementById("result").innerHTML = count;
    
}