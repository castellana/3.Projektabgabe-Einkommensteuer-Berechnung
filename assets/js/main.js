function berechnen() {
    let jahr = document.getElementById("jahr")
    let einkomSingle = document.getElementById("einkomSingle").value;
    let einkPerson1 = document.getElementById("einkPerson1").value;
    let einkPerson2 = document.getElementById("einkPerson2").value;
    
    if (jahr.value == 2020) {
        berechnen2020(einkomSingle,einkPerson1,einkPerson2)
    } else if (jahr.value == 2019) {
        berechnen2019(einkomSingle,einkPerson1,einkPerson2)
    } else if (jahr.value == 2018) {
        berechnen2018(einkomSingle,einkPerson1,einkPerson2)
    }
    
    document.getElementById("ergebnis").innerHTML = ESt.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " €"
    // document.getElementById("einkomSingle").innerHTML = "0";
}

function berechnen2020(einkomSingle,einkPerson1,einkPerson2) {
    let zvE;
    grundtarif.checked ? zvE = einkomSingle : zvE = (parseInt(einkPerson1) + parseInt(einkPerson2)) / 2
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
    grundtarif.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}

function berechnen2019(einkomSingle,einkPerson1,einkPerson2) {
    let zvE;
    grundtarif.checked ? zvE = einkomSingle: zvE = (parseInt(einkPerson1) + parseInt(einkPerson2)) / 2
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
    grundtarif.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}
function berechnen2018(einkomSingle,einkPerson1,einkPerson2) {
    let zvE;
    grundtarif.checked ? zvE = einkomSingle : zvE = (parseInt(einkPerson1) + parseInt(einkPerson2)) / 2
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
    grundtarif.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}
