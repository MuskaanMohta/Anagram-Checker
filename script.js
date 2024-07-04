let button = document.getElementById("button")
button.addEventListener("click",()=>{
    let word1 = document.getElementById("word1").value.toLowerCase();
    let word2 = document.getElementById("word2").value.toLowerCase();

    //Remove spaces and punctuation from the words
    let w1 = word1.replace(/[^\w]/g, "")
    let w2 = word2.replace(/[^\w]/g, "")

    //Check if length of both the words are same
    if(w1.length!=w2.length){
        result.textContent = "Not an Anagram"
        return;
    }

    //Count letter occurrence in the 1st word
    let c1 = {}
    for(const char of w1){
        c1[char] = (c1[char]||0) + 1
    }
       //Count letter occurrence in the 2nd word
    let c2 = {}
    for(const char of w2){
        c2[char] = (c2[char]||0) + 1
    }
    
    //Compare letter counts
    for(const char in c1){
        if(c1[char]!=c2[char]){
            result.textContent = "Not an Anagram"
            result.classList.remove("success")
            result.classList.add("error")
            return;
        }
    }

    //If all letter counts are same it is an anagram
    document.getElementById("result").textContent = "It is an Anagram"
    result.classList.add("success")
    result.classList.remove("error")
})