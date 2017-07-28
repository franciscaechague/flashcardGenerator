var ClozeCard = function (fulltext,cloze) {
  this.fulltext = fulltext;
  this.cloze = cloze;
  this.partial = fulltext.replace(cloze, "...");
};

module.exports = ClozeCard;
