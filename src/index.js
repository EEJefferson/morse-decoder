const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let edge = '';
    for (let i = 0; i < expr.length; i += 10) {
        const part = expr.substring(i, i + 10);
        let semi = '';
        if (part === "**********") {
            edge += ' ';
        } else {
            for (let j = 0; j < part.length; j += 2) {
                if (part.substring(j, j + 2) !== "00" && part.substring(j, j + 2) === "10") {
                    semi += ".";
                } else if (part.substring(j, j + 2) !== "00" && part.substring(j, j + 2) === "11") {
                    semi += "-";
                }
            }
            result += semi;
            if (MORSE_TABLE[result]) {
                edge += MORSE_TABLE[result];
                result = '';
            }
        }
    }
    return edge;
}

module.exports = {
    decode
};
