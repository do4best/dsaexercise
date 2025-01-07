function wordFrequency(str){
    const words = str.toLowerCase().split(/\W+/);
    const wordFrequency = new Map();

    for(const word of words){
        if(word === " ") continue;
        if(wordFrequency.has(word)){
            wordFrequency.set(word,wordFrequency.get(word) + 1);

        }else{
            wordFrequency.set(word,1)
        }
    }
    return wordFrequency
}
function phoneDirectory(phoneNumbers){
    const directory = new Map();
    for(const entry of phoneNumbers){
    const [name,phoneNumber] = entry.split(':')
    directory.set(name,phoneNumber)}
    return directory;
}

const details=[
    'Meer Afzal:0320-4522701',
    'Faisal Siddiqu: 0320-9992999'
]

console.log(wordFrequency("life of dog and life of cat is not the same"))
let result = phoneDirectory(details)
console.log(result)