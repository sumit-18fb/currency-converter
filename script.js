const basic_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelector(".dropdown select")
const dropdowns = document.querySelector(".dropdown select")

for (let select of dropdowns) {
    for (currCode in countryList) {
        console.log(code, countryList[code]);
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "To" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);

    }

    
    select.addEventListner("change",(evt)=>{
        updateFlag(evt.target)
    });
}

const updateFlag = (element) =>{
    console.log();
    
}