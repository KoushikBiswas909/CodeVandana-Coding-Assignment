function reverseWords(sentence) {
    
    const words = sentence.split(' ');

    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });


    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    const reversedSentence = reverseWords(sentence);
    console.log('Reversed sentence:', reversedSentence);
    rl.close();
});
