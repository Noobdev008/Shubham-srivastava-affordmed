function minPrefix(selectedWord, setOfWords) {
    let minPrefixYet = selectedWord[0];
    let minimum = "";
    setOfWords.forEach((word) => {
      if (word[0] === selectedWord[0] && selectedWord !== word) {
        minimum = word[0];
        for (var i = 1; i < selectedWord.length; i++) {
          if (selectedWord[i] === word[i]) {
            minimum = minimum + selectedWord[i];
          } else {
            minimum = minimum + selectedWord[i];
            break;
          }
        }
        if (minimum.length > minPrefixYet.length) {
          minPrefixYet = minimum;
        }
      }
    });
    return minPrefixYet;
  }
  
  module.exports = minPrefix;
  