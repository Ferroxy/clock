// Challenge 1 : Your age in days...

function age_jrs() {
    var ann_naiss = prompt("En quelle année vous êtes né(e)?");
    var nbr_jrs = (2019 - ann_naiss) * 365;
    var h1 = document.createElement('h1');
    var txt_rep = document.createTextNode("Vous avez " + nbr_jrs + " jours d'âge !");
    h1.setAttribute('id', 'nbr_jrs');
    h1.appendChild(txt_rep);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('nbr_jrs').remove();
}

// Challenge 2 : Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "./images/engrenage.gif";
    div.appendChild(image);
}

// Challenge 4 : Change the Color of All Buttons
var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = []
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 3; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');

    }
}

function buttonsGreen() {
    for (let i = 3; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');

    }
}

function buttonColorReset() {
    for (let i = 3; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (let i = 3; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

var specform = {
    "lig-1": {
        "desig": "Surf. total des semelles en m2",
        "coef": 17
    },
    "lig-2": {
        "desig": "Long. des poutres de redress. en ml",
        "coef": 6.1
    },
    "lig-3": {
        "desig": "Cad. + Etr. (Long. des poutres de redress. en ml)",
        "coef": 17
    },
    "lig-4": {
        "desig": "Long. totale des av-poteaux en ml",
        "coef": 17.6
    },
    "lig-5": {
        "desig": "Cad. - (Long.totale des av-poteaux en ml)",
        "coef": 20
    },
    "lig-6": {
        "desig": "Long. totale  des Long.ines  en ml",
        "coef": 6.1
    },
    "lig-7": {
        "desig": "Cad. + Etr. (Long.des Long.ines-en ml)",
        "coef": 15
    },
    "lig-8": {
        "desig": "Long. totale des poteaux en ml",
        "coef": 11
    },
    "lig-9": {
        "desig": "Cad. (Long.totale des poteaux en ml)",
        "coef": 18
    },
    "lig-10": {
        "desig": "Long. totale des poutres en ml",
        "coef": 6.1
    },
    "lig-11": {
        "desig": "Cad. + Etr (Long.totale des poutres en ml)",
        "coef": 17
    },
    "lig-12": {
        "desig": "Long. totale des chainages  en ml",
        "coef": 6.1
    },
    "lig-13": {
        "desig": "Cad. + Etr (Long.totale des chainages en ml)",
        "coef": 17
    },
    "lig-14": {
        "desig": "Long. totale des poutrelles en ml",
        "coef": 4.05
    },
    "lig-15": {
        "desig": "Etr. (Long. totale des poutrelles en ml)",
        "coef": 3.85
    },
    "lig-16": {
        "desig": "Surf. totale des d.pleines en m² / fer princip-",
        "coef": 14
    },
    "lig-17": {
        "desig": "Surf. totale des d. pleines en m² / fer réparti.",
        "coef": 14
    },
    "lig-18": {
        "desig": "Long. escalier en ml / fer princip.",
        "coef": 7
    },
    "lig-19": {
        "desig": "Long. escalier en ml / fer réparti.",
        "coef": 6
    },
    "lig-20": {
        "desig": "Acrotère en m²",
        "coef": 12
    },
}

let diametre = ["Diamètre", "diam 06", "diam 08", "diam 10", "diam 12", "diam 14", "diam 16", "diam 20"]
let pdiv = document.getElementById("form-acier");



let fonct = "calcul(this)";

for (i = 1; i < 21; i++) {
    let ldiv = document.createElement("div");
    let frm = document.createElement('form');
    let lbldsg = document.createElement("label");
    lbldsg.textContent = specform["lig-" + i + ""]["desig"]
    let inptqte = document.createElement("input")
    inptqte.id = "qte_"+i;
    inptqte.ondragleave = fonct;
    let  optdiam= document.createElement("select")
    optdiam.name = "selec_"+i;
    optdiam.id = "opt_"+i;
    optdiam.onchange = fonct;
    // optdiam.onselect = calcul(this);
    for (j=0; j < 8; j++) {
        let optd = document.createElement("option");    
        optd.value = j;
        optd.textContent = diametre[j];
        optdiam.appendChild(optd);
    }
    let lblqte = document.createElement("label")
    lblqte.id = "qtt_"+i;
    lblqte.textContent = "000.00";
    frm.id = "frm-" + i;
    frm.appendChild(lbldsg);
    frm.appendChild(inptqte);
    frm.appendChild(optdiam);
    frm.appendChild(lblqte);
    ldiv.appendChild(frm);
    pdiv.appendChild(ldiv)
}

function calcul(elmnt) {
    console.log(elmnt.value);
}