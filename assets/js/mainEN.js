function calculate(){
    let year = document.getElementById("year");
    let singleSalary = document.getElementById("singleSalary").value;
    let firstSalary = document.getElementById("firstSalary").value;
    let secondSalary = document.getElementById("secondSalary").value;
    

    if (year.value == 2020) {
        calculate2020(singleSalary, firstSalary, secondSalary)
    } else if (year.value == 2019) {
        calculate2019(singleSalary, firstSalary, secondSalary)
    } else if (year.value == 2018){
        calculate2018(singleSalary, firstSalary, secondSalary)
    }

    document.getElementById("result").innerHTML = ESt.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " €"
}
function calculate2020(singleSalary, firstSalary, secondSalary) {
    let  zvE;
    single.checked ? zvE = singleSalary : (parseInt(firstSalary) + parseInt(secondSalary)) / 2;
    if (zvE <= 9408) {
        ESt = 0;
    } else if (zvE >= 9409 && zvE <= 14532) {
        let y = (zvE - 9408) / 10000
        ESt = (972.87 * y + 1400) * y
    } else if (zvE >= 14533 && zvE <= 57051) {
        let z = (zvE - 14532) / 10000
        ESt = (212.02 * z + 2397) * z + 972.79
    } else if (zvE >= 57052 && zvE <= 270500) {
        ESt = 0.42 * zvE - 8963.74;
    } else if (zvE >= 270501) {
        ESt = 0.45 * zvE - 17078.74
    }
    single.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}

function calculate2019(singleSalary, firstSalary, secondSalary) {
    let  zvE;
    single.checked ? zvE = singleSalary : (parseInt(firstSalary) + parseInt(secondSalary)) / 2;
    if (zvE <= 9168) {
        ESt = 0;
    } else if (zvE >= 9169 && zvE <= 14254) {
        let y = (zvE - 9168) / 10000
        ESt = (980.14 * y + 1400) * y
    } else if (zvE >= 14255 && zvE <= 55960) {
        let z = (zvE - 14254) / 10000
        ESt = (216.16 * z + 2397) * z + 965.58
    } else if (zvE >= 55961 && zvE <= 265326) {
        ESt = 0.42 * zvE - 8780.90;
    } else if (zvE >= 265327) {
        ESt = 0.45 * zvE - 16740,68
    }
    single.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}
function calculate2018(singleSalary, firstSalary, secondSalary) {
    let  zvE;
    single.checked ? zvE = singleSalary : (parseInt(firstSalary) + parseInt(secondSalary)) / 2;
    if (zvE <= 9000) {
        ESt = 0;
    } else if (zvE >= 9001 && zvE <= 13996) {
        let y = (zvE - 9000) / 10000
        ESt = (997.80 * y + 1400) * y
    } else if (zvE >= 13997 && zvE <= 54949) {
        let z = (zvE - 13996) / 10000
        ESt = (220.13 * z + 2397) * z + 948.49
    } else if (zvE >= 54950 && zvE <= 260532) {
        ESt = 0.42 * zvE - 8621.75;
    } else if (zvE >= 260533) {
        ESt = 0.45 * zvE - 16437.70
    }
    single.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}

