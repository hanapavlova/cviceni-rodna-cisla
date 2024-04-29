// ÚKOL RODNÁ ČÍSLA
/*
const rodneCislo = prompt("Zadejte rodné číslo")

if (rodneCislo.length === 10) {
    document.body.innerHTML += "<p>Zadané rodné číslo má správně deset znaků.</p>"
} else {
    document.body.innerHTML += "<p>Uživatel zadal rodné číslo neplatné délky.</p>"
}

if (Number.isInteger(Number(rodneCislo))) {
    document.body.innerHTML += "<p>Rodné číslo je celé číslo.</p>"
} else {
    document.body.innerHTML += "<p>Rodné číslo obsahuje nepovolené znaky.</p>"
}

if (rodneCislo % 11 === 0) {
    document.body.innerHTML += "<p>Rodné číslo je dělitelné 11.</p>"
} else {
    document.body.innerHTML += "<p>Rodné číslo není dělitelné číslem 11.</p>"
}

if ((rodneCislo.length === 10) && (Number.isInteger(Number(rodneCislo))) && (rodneCislo % 11 === 0)) {
    document.body.innerHTML += "<p><strong>Zadané rodné číslo je platné.</strong></p>"
} else {
    document.body.innerHTML += "<p><strong>Uživatel zadal neplatné rodné číslo.</strong></p>"
}
*/

// ÚKOL PLATNOST JAKO FUNKCE
/*
const checkBirthID = (rodneCislo) => {

    if (!(rodneCislo.length === 10)) {
        return "invalidLength"
    } else if (!(Number.isInteger(Number(rodneCislo)))) {
        return "notANumber"
    } else if (!(rodneCislo % 11 === 0)) {
        return "failedChecksum"
    } else {
        return "ok"
    }
}
*/
//let rodneCislo = prompt("Zadejte rodné číslo")
//document.body.innerHTML += checkBirthID(rodneCislo)


//ÚKOL KONTROLA CIFER

/*
const digits = ["0","1","2","3","4","5","6","7","8","9"];

const isDigits = (cifra) => {
    if (cifra.length === 1 && digits.includes(cifra)) {
        return true
    } else {
        return false
    }
}

const logInvalidCharacters = (string) => {
    const pole = Array.from(string);
    pole.forEach((item) => {
        if (!isDigits(item)) {
            return console.log(item);
        } else {
            return
        } 
    })
}
let rodneCislo = prompt("Zadejte rodné číslo");
(logInvalidCharacters(rodneCislo))
*/

//DETAILNÍ KONTROLA CIFER
/*
const digits = ["0","1","2","3","4","5","6","7","8","9"];
const isDigits = (cifra) => {
    if (cifra.length === 1 && digits.includes(cifra)) {
        return true
    } else {
        return false
    }
}

const validateCharacters = (text) => {
    const result = [];
    const pole = Array.from(text);
    pole.forEach((item) => {
        let obj = {
            char: item,
            digit: isDigits(item)
        };
        result.push(obj);
    });
    return result; 
};


//let rodneCislo = prompt("Zadejte rodné číslo");
console.log(validateCharacters(rodneCislo))
*/


//VSTUP POMOCÍ FORMULÁŘE

// Formulář podle ID
const form = document.querySelector("#rc");

// Funkce pro ověření rodného čísla
const checkBirthID = (rodneCislo) => {

    if (!(rodneCislo.length === 10)) {
        return "invalidLength"
    } else if (!(Number.isInteger(Number(rodneCislo)))) {
        return "notANumber"
    } else if (!(rodneCislo % 11 === 0)) {
        return "failedChecksum"
    } else {
        return "ok"
    }
}

// Pole číslic - funkce pro ověření
const digits = ["0","1","2","3","4","5","6","7","8","9"];
const isDigits = (cifra) => {
    if (cifra.length === 1 && digits.includes(cifra)) {
        return true
    } else {
        return false
    }
}

// Funkce pro ověření znaků
const validateCharacters = (text) => {
    const result = [];
    const pole = Array.from(text);
    pole.forEach((item) => {
        let obj = {
            char: item,
            digit: isDigits(item)
        };
        result.push(obj);
    });
    return result; 
};


// Přidání posluchače událostí pro odeslání formuláře ("získání RČ z formuláře" musí být uvnitř události, výpisy taky, jinak by pro ně RČ nebylo definované)
form.addEventListener('submit', (event) => {
    event.preventDefault();

//Získání RČ z formuláře
let rodneCislo = form.elements['rodne-cislo'].value;

//Výpis výsledků funkcí do konzole
console.log(checkBirthID(rodneCislo))
console.log(validateCharacters(rodneCislo))

//Výpis zprávy do stránky
const elmMessage = document.querySelector("#message");
if (checkBirthID(rodneCislo) === "ok") {
    elmMessage.textContent = "✔️ V pořádku";
} else {
    elmMessage.textContent = "❌ V rodném čísle jsou chyby.";
}


//CIFRY JAKO HTML ELEMENTY:

const validace = validateCharacters(rodneCislo);
const digits = document.querySelector(".digits");       //v tomto divu chci zobrazovat znaky s barevným pozadím
digits.innerHTML = "";

validace.forEach((item) => {
    const digitElm = document.createElement("div");     //vytvoření prázdného divu
    digitElm.classList.add("digit");                    //přidání třídy
    digitElm.innerHTML = item.char;                     //přidání obsahu

    if (item.digit === true) {
        digitElm.style.backgroundColor = "#00DD00"; // přidání barvy pozadí - zelená pro číslice
    } else {
        digitElm.style.backgroundColor = "#FF8686"; // Červená pro nečíslice
    }
//tohle se opakuje, dokud nedojdou znaky

digits.appendChild(digitElm);             //přidává vyrobené divy do divu digits > pokud by to tam nebylo, ty jednotlivé divy se nikde nezobrazí

});
});