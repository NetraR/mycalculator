let input=document.getElementById("inputtext");

let calculate=(num)=>{
    //particular inputbox in calculator
    input.value=input.value+num;
}
//arrow function --- A special function
//to handle some exceptions we are using try and
//to throw an error we used catch
let result=()=>{
    try{
        
        input.value=eval(input.value);//eval is inbuild function
    }
    catch(err){
        alert("enter the valid input");
    }
}
//to clear the data
function clr(){
    input.value="";//clear the input field
}
//to delete the data
function del(){
    input.value=input.value.slice(0,-1);//we are going to delete last one number at a time(-1 indext--last index)
    
}