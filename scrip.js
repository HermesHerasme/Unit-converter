let entrada = document.getElementById('value');
let btn_salida = document.getElementById('convertBtn');
let salida = document.getElementById('result');
let selectElement1 = document.getElementById('fromUnit'); 
let selectElement2 = document.getElementById('toUnit'); 

btn_salida.addEventListener('click', () => {
    let selectValue1 = selectElement1[selectElement1.selectedIndex].value
    let selectValue2 = selectElement2[selectElement2.selectedIndex].value
    let numeroEvaluar = entrada.value

    // Validar si la entrada está vacía
    if (isNaN(numeroEvaluar)) {
        alert('Please enter a valid number.')
        return
    }

    

// Conversión de unidades de longitud
if (selectValue1 == "mm" && selectValue2 == "cm") {
    salida.textContent = numeroEvaluar / 10 + ' cm';
} else if (selectValue1 == "mm" && selectValue2 == "m") {
    salida.textContent = numeroEvaluar / 1000 + ' m';
} else if (selectValue1 == "mm" && selectValue2 == "km") {
    salida.textContent = numeroEvaluar / 1000000 + ' km';
} else if (selectValue1 == "cm" && selectValue2 == "mm") {
    salida.textContent = numeroEvaluar * 10 + ' mm';
} else if (selectValue1 == "cm" && selectValue2 == "m") {
    salida.textContent = numeroEvaluar / 100 + ' m';
} else if (selectValue1 == "cm" && selectValue2 == "km") {
    salida.textContent = numeroEvaluar / 100000 + ' km';
} else if (selectValue1 == "m" && selectValue2 == "mm") {
    salida.textContent = numeroEvaluar * 1000 + ' mm';
} else if (selectValue1 == "m" && selectValue2 == "cm") {
    salida.textContent = numeroEvaluar * 100 + ' cm';
} else if (selectValue1 == "m" && selectValue2 == "km") {
    salida.textContent = numeroEvaluar / 1000 + ' km';
} else if (selectValue1 == "km" && selectValue2 == "mm") {
    salida.textContent = numeroEvaluar * 1000000 + ' mm';
} else if (selectValue1 == "km" && selectValue2 == "cm") {
    salida.textContent = numeroEvaluar * 100000 + ' cm';
} else if (selectValue1 == "km" && selectValue2 == "m") {
    salida.textContent = numeroEvaluar * 1000 + ' m';

// Conversión de unidades de masa
} else if (selectValue1 == "mg" && selectValue2 == "g") {
    salida.textContent = numeroEvaluar / 1000 + ' g';
} else if (selectValue1 == "mg" && selectValue2 == "kg") {
    salida.textContent = numeroEvaluar / 1000000 + ' kg';
} else if (selectValue1 == "mg" && selectValue2 == "ton") {
    salida.textContent = numeroEvaluar / 1000000000 + ' ton';
} else if (selectValue1 == "g" && selectValue2 == "mg") {
    salida.textContent = numeroEvaluar * 1000 + ' mg';
} else if (selectValue1 == "g" && selectValue2 == "kg") {
    salida.textContent = numeroEvaluar / 1000 + ' kg';
} else if (selectValue1 == "g" && selectValue2 == "ton") {
    salida.textContent = numeroEvaluar / 1000000 + ' ton';
} else if (selectValue1 == "kg" && selectValue2 == "mg") {
    salida.textContent = numeroEvaluar * 1000000 + ' mg';
} else if (selectValue1 == "kg" && selectValue2 == "g") {
    salida.textContent = numeroEvaluar * 1000 + ' g';
} else if (selectValue1 == "kg" && selectValue2 == "ton") {
    salida.textContent = numeroEvaluar / 1000 + ' ton';
} else if (selectValue1 == "ton" && selectValue2 == "mg") {
    salida.textContent = numeroEvaluar * 1000000000 + ' mg';
} else if (selectValue1 == "ton" && selectValue2 == "g") {
    salida.textContent = numeroEvaluar * 1000000 + ' g';
} else if (selectValue1 == "ton" && selectValue2 == "kg") {
    salida.textContent = numeroEvaluar * 1000 + ' kg';

// Si las unidades no son válidas
} else {
    alert('Please select valid units for conversion');
}



  
});


    

    




