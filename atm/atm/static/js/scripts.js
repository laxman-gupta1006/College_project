/*-----------------------------PIN--------------------------------- */

// function randomiseArray(start, end){
//     if(start >= end){
//         return;
//     }
//     var arr = Array(end - start + 1).fill().map((__, index) => start + index);
//     var res = [];
//     arrLength = arr.length
//     for (let i = start; i <= arrLength; ++i) {
//         if(arr.length === 1){
//             res.push(arr[0]);
//             break;
//         }
//         const random = Math.floor(Math.random() * arr.length);
//         res.push(arr[random]);
//         arr.splice(random, 1);
//     }
//     return res;
// }

// var keyboard_pin = (()=>{
//     const buttons_pin = document.getElementsByClassName('keypad__button_num');
//     const PINInputs = document.getElementsByClassName('PINPassword__input');
//     const submit_NUMPIN = document.getElementsByClassName("keypad__button_submit")[0];
//     const del_NUMPIN = document.getElementsByClassName("keypad__button_del")[0];



//     for(button of buttons_pin){
//         button.addEventListener('click', takePIN);
//     }
//     submit_NUMPIN.addEventListener('click', submitPIN);
//     del_NUMPIN.addEventListener('click', delPIN);



//     var PIN = [];
//     PINInputs[0].focus();
//     function takePIN(button){
//         if(PIN.length <= 3){
//             var inp = button.target.innerHTML;
//             PIN.push(inp);
//             PINInputs[PIN.length - 1].value = inp;
//             if(PIN.length <= 3){
//                 PINInputs[PIN.length].focus();
//             }else{
//                 submit_NUMPIN.removeAttribute('disabled');
//             }
//         }
//     }
//     function submitPIN(){
//     }
//     function delPIN(){
//         if(PIN.length > 0){
//             PIN.splice(PIN.length-1, 1);
//             PINInputs[PIN.length].value = '';
//             PINInputs[PIN.length].focus();

//             if(PIN.length < 4){
//                 submit_NUMPIN.setAttribute('disabled', true);
//             }
//         }
//     }



//     function randomise_pin(){
//          const newSequence = randomiseArray(0,9);

//          newSequence.forEach((num, index) => {
//             buttons_pin[index].id = "num_"+num;
//             buttons_pin[index].innerHTML = num;
//          });
//     };


//     return{
//         randomise_pin : randomise_pin
//     }
// })();

// window.onload = keyboard_pin.randomise_pin;

/*----------------------------------------------------------------------*/

/*-------------------------color---------------------------*/

var colorAuthentication = (() => {
    const buttons = document.getElementsByClassName('keypad__button_num');
    const colorIputs = document.getElementsByClassName('colorPassword__input');
    const submit_PIN = document.getElementsByClassName("keypad__button_submit")[0];
    const del_PIN = document.getElementsByClassName("keypad__button_del")[0];
    const actualColorSequence = fetchColorSequence();
    const allColors = fetchColors();
    var PIN = [];

    for(button of buttons){
        button.addEventListener('click', inputColorPIN);
    }
    submit_PIN.addEventListener('click', submitColorPIN);
    del_PIN.addEventListener('click', delColorPIN);
    colorIputs[0].focus();


    function inputColorPIN(button){
        if(PIN.length <= 3){
            var inp = button.target.getAttribute('data-color-value');
            PIN.push(inp);
            console.log(inp);
            colorIputs[PIN.length - 1].style.backgroundColor = inp;
            if(PIN.length <= 3){
                colorIputs[PIN.length].focus();
            }else{
                submit_PIN.removeAttribute('disabled');
            }
        }
    }

    function submitColorPIN() {

    }
    function delColorPIN(){
        if(PIN.length > 0){
            PIN.splice(PIN.length-1, 1);
            colorIputs[PIN.length].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            colorIputs[PIN.length].focus();

            if(PIN.length < 4){
                submit_PIN.setAttribute('disabled', true);
            }
        }
    }




    function fetchColors(){

        return {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgoldenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgreen": "#006400",
            "darkgrey": "#a9a9a9",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkslategrey": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dimgrey": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "goldenrod": "#daa520",
            "gold": "#ffd700",
            "gray": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "grey": "#808080",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred": "#cd5c5c",
            "indigo": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavenderblush": "#fff0f5",
            "lavender": "#e6e6fa",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgray": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightgrey": "#d3d3d3",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightslategrey": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370db",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#db7093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "rebeccapurple": "#663399",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "slategrey": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
          };
    };


    function fetchColorSequence(){

        return ['steelblue', 'sienna', 'rebeccapurple', 'lightsalmon'];
    }



    function filteredRnadomColors() {
        let tempColors = allColors;
        let result = actualColorSequence;
        actualColorSequence.forEach(color => {
            delete tempColors[color];
        });

        for(let i = 0; i < 6; ++i){
            const keys = Object.keys(tempColors);
            var ran = keys[Math.floor(Math.random() * keys.length)];
            result.push(ran);
            delete tempColors[ran];
        }

        return result;
    }

    function randomise_color(){
        const randomColorSequence = filteredRnadomColors();
        randomColorSequence.forEach((color, index) => {
            buttons[index].setAttribute('data-color-value', color);
            document.querySelector(':root').style.setProperty("--color_"+index, color);
        });
   };



    return{
        randomise_color : randomise_color,
    }

})();

window.onload = colorAuthentication.randomise_color;