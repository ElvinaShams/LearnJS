function aclean(words) {
    let anagrams = new Map();
    
    for (let word of words) {
      
      let key = word.toLowerCase()
        .split('')
        .sort()
        .join('');
      
      anagrams.set(key, word);
    }
    
    return Array.from(anagrams.values());
  }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );