const rates = {
    usd: 0.014 ,
    eur: 0.013 ,
};


function convert({rub, cur}){
    if (!rates[cur]){
        return null;
    }

    return rub * rates[cur]
}