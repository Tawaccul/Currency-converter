const valueInputNode = document.querySelector('.js-value-input');
const currencyNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput(){
    return{
        rub: Number(valueInputNode.value),
        cur: currencyNode.value
    }
}

function render(result){
   outputNode.innerHTML = result;
   console.log(result)
}

valueInputNode.addEventListener('input', function() {
    const result = convert(getInput())
    render(result);
});

currencyNode.addEventListener('change', function(){
    const result = convert(getInput())
    render(result);
} )