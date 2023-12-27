const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const result = document.getElementById('result')

const renderResult = (input, isPalindrome)=>{
    if (isPalindrome){
        result.innerHTML = `<strong>${input}</strong> is a palindrome`
    }else{
        result.innerHTML = `<strong>${input}</strong> is not palindrome`
    }
    result.classList.remove("hidden")
}

const isPalindrome = (str) => {
    const stringToCompare = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return stringToCompare === stringToCompare.split('').reverse().join('')
}

checkButton.addEventListener('click', (e)=>{
    const input = textInput.value
    if (input === "") {
        alert("Please input a value")
        return
    }
   renderResult(input, isPalindrome(input))
})