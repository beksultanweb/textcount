let textArea = document.getElementById('text'),
    wordNum = document.querySelector('.word'),
    charNum = document.getElementsByClassName('character')[0],
    countDiv = document.querySelector('.count'),
    text,
    wordLength = 0

textArea.addEventListener('input', function(e) {
    text = e.target.value
    charNum.innerHTML = text.length
    word = text.split(' ')
    if(word.length > 0) {
        for(let i=0; i<word.length; i++) {
            console.log(word[i].length);
            if(word[i].length > 0) {
                wordNum.innerHTML = word.length
            }
            else {
                wordNum.innerHTML = word.length - 1
                break
            }
        }
    }
    countDiv.innerHTML = counter(text)
})

function counter(str) {
    let sum = 0, first, res = ''
    for(let i=0; i<str.length; i++) {
        if(!res.includes(str[i])) first = str[i]
        else continue
        for(let j=0; j<str.length; j++) {
            if(first === str[j]) {
                sum ++
            }
        }
        res += first + sum
        sum = 0
    }
    return res
}

// input: abcbb ccacba
// output: a3b4c4
