export default (text, word, isLink) => {
  if (word !== undefined) {
    return word
      .map(l => {
        let word = isLink ? l.page : l;
        let index = text.indexOf(word);
        return { word, index };
      })
      .filter(pl => pl.index !== -1);
  } else {
    return [];
  }
};
