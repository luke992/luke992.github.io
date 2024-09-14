
// stripeCircle = prepositions = 1
// square = the = 2
// triangle = verbs = 3
// star = descriptors = 4
// parallel = nouns = 5
// arrow = possessive = 6
// circle = wh- = 7
// diamond = proper nouns = 8


const square = '\u25A1';
const circle = '\u25CF';
const star = '\u2605';
const arrow = '\u27A4';
const diamond = '\u29EB';
const triangle = '\u25B3';
const parallel = '\u25B1';
const stripeCircle = '\u25CD';

const messageArray = ["What is the biggest country in the world?",
                    `Who ${triangle} ${square} smartest person you know?`,
                    `${circle} ${triangle} your favorite city?`,
                    `${square} capital ${stripeCircle} France ${triangle} ${circle}?`,
                    `${circle} ${triangle} ${square} ${star} ${parallel} ${stripeCircle} ${square} ${parallel}?`,
                    `2 ${star} ${parallel} ${triangle} ${triangle} ${stripeCircle} ${circle}?`,
                    `7 3 ${square} ${star} ${star} ${parallel}. 3 8?`,
                    "1 5, 7 3 2 4 4 5?",
                    "4 0 9 1 2 8 2?",
                    "0000 1001 0001 0010 0000 1000 0101?",
                    "Some punchline"
]



const manualArray = [`${square} to left of ${triangle}: include ${star} in your response. Else: use ${square} as your 3rd word.`,
                     `${circle} is first word: your response cannot have more words than the message.`,
                     `${triangle} to right of ${circle}: include ${stripeCircle}.`,
                     `${stripeCircle} not first or last: respond with only symbols, using ${square} first.
                      ${circle} at end: include 2 ${triangle}.`,
                      `Only symbols: respond with the same symbols in a different order, excluding ${circle}, 
                       and such that no two identical symbls are adjacent.`,
                      `One digit: follow above rules and include two digits that sum to the one digit.`,
                      `>1 digit: respond with all symbols and digits 1-9 not used in the message.`,
                      `Only digits: replace each digit with the ones place of itself + 5.`,
                      `Starts with 0, 4, 8, or 9: ignore other instructions 
                       and replace each digit with its 4-bit binary encoding.`,
                      `Binary: swap all 0s and 1s.`




]

function sendMessage(level) {

}