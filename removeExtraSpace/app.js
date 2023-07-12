function removeExtraSpace() {
  var input = document.getElementById("inputTextArea").value;
  var result = input.replace(/\s+/g, " ").trim();
  document.getElementById("outputTextArea").value = result;
}

function removeLines() {
  var input = document.getElementById("inputTextArea").value;
  var result = input.replace(/\n/g, " ").trim();
  document.getElementById("outputTextArea").value = result;
}

function highlightWord() {
  var paragraph = document.getElementById("inputTextArea").value;
  var word = document.getElementById("find").value;
  var highlightedParagraph = document.getElementById("outputTextArea");
  var countElement = document.getElementById("count");

  var regex = new RegExp(word, "gi");
  var highlightedText = paragraph.replace(
    regex,
    '<span class="highlight">$&</span>'
  );

  highlightedParagraph.innerHTML = highlightedText;

  var count = (highlightedText.match(regex) || []).length;
  countElement.textContent = "Found " + count + " occurrence(s).";
}

function replaceWord() {
  const findWord = document.getElementById("find").value;
  const replaceWith = document.getElementById("replaceWith").value;
  var input = document.getElementById("inputTextArea").value;

  // Create a regular expression with the 'gi' flags for case-insensitive and global matching
  var regex = new RegExp(findWord, "gi");

  // Use the regular expression to replace all occurrences of the word and apply highlighting
  var result = input
    .replace(regex, `<span class="highlight">${replaceWith}</span>`)
    .trim();

  document.getElementById("outputTextArea").innerHTML = result;
}




function copyToClipboard() {
  var output = document.getElementById("outputTextArea");
  var range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");

  var copyButton = document.getElementById("copyButton");
  copyButton.innerText = "Copied!";
  setTimeout(function () {
    copyButton.innerText = "Copy Result";
  }, 2000);
}
