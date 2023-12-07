var billElement = document.getElementById("bill");
billElement.value = "";
var billValue = 0;
var peopleElement = document.getElementById("people");
peopleElement.value = "";
var peopleValue = 0;
var tipResult = document.getElementById("tipResult");
var totalResult = document.getElementById("totalResult");
var tipButtons = document.getElementsByClassName("tipButton");
var customTipElement = document.getElementById("customTip");
customTipElement.value = "";
customTipValue = 0;
var resetButton = document.getElementById("resetButton");
var tipValue = 0;

// Funcion para que actualice valor de la cuenta
billElement.addEventListener("keyup", function(){
    billValue = billElement.value
    // console.log(billValue)
    if(billValue.includes("-")){
        alert("You can´t use negative values")
        billElement.value = "";
    }
    else{
        updateTotal()
    }
});

// Funcion para que actualice valor de las personas
peopleElement.addEventListener("keyup", function(){
    peopleValue = peopleElement.value
    // console.log(peopleValue)
    if(peopleValue.includes("-")){
        alert("You can´t use negative values")
        peopleElement.value = "";
    }
    else{
        updateTotal()
    }
});

// Funcion para que restaure las variables
resetButton.addEventListener("click", function(){
    billElement.value = ""
    peopleElement.value = ""
    totalResult.innerHTML = "0.00"
    tipResult.innerHTML = "0.00"
});

// Funcion para obtener el valor de la propina
for (let i = 0; i < tipButtons.length; i++){
    tipButtons[i].addEventListener("click", function(){
        // console.log(this.value)
        for (let j = 0; j < tipButtons.length; j++){
            tipButtons[j].classList.remove("activeButton")
        }
        this.classList.add("activeButton");
        tipValue = this.value
        updateTotal()
    })
}

// Funcion para actualizar el valor personalizado de una propina
customTipElement.addEventListener("keyup", function(){
    customTipValue = customTipElement.value
    tipButtons[5].value = customTipValue
    // console.log(tipButtons[5].value)
    tipValue = tipButtons[5].value

    if(tipValue.includes("-")){
        alert("You can´t use negative values")
        tipButtons[5].value = "";
    }
    else{
        updateTotal()
    }
});

// Funcion para que actualice valor del total
function updateTotal(){
    if(billValue == "" || peopleValue == ""){
        totalResult.innerHTML = "0.00"
        tipResult.innerHTML = "0.00"
    }
    else if(!tipValue){
        totalResult.innerHTML = "0.00"
        tipResult.innerHTML = "0.00"
    }
    else{
        let tip = (billValue * tipValue) / 100
        tipResult.innerHTML = (tip / peopleValue).toFixed(2)
        console.log(tipResult.innerHTML)

        let result = (billValue / peopleValue) + (tip / peopleValue)
        totalResult.innerHTML = result.toFixed(2)
        
        console.log(totalResult.innerHTML)
    }
}
