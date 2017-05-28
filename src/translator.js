function translate(source, words) {
  const translated = words.reduce((previous, current) => {
    const replacePattern = new RegExp(current[0], 'g');
    return previous.replace(replacePattern, current[1]);
  }, source);

  return translated;
}

module.exports = translate;
