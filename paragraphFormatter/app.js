function removeExtraSpace() {
  var input = document.getElementById("inputTextArea").value;
  input = input.replace(/\n/g, "<br>").replace(/\s+/g, " ").trim();
  document.getElementById("outputTextArea").innerHTML = input;
}

function removeLines() {
  var input = document.getElementById("inputTextArea").value;
  input = input.replace(/\n/g, " ").trim();
  document.getElementById("outputTextArea").textContent = input;
}

function findWord() {
  var paragraph = document.getElementById("inputTextArea").value;
  var word = document.getElementById("find").value;
  var outputTextArea = document.getElementById("outputTextArea");
  var countElement = document.getElementById("count");

  var regex = new RegExp(word, "gi");
  var highlightedText = paragraph
    .replace(/\n/g, "<br>")
    .replace(regex, '<span class="highlight">$&</span>');

  if (word.length == 0) {
    countElement.textContent = "Insert The Word";
  } else {
    outputTextArea.innerHTML = highlightedText;
    var count = (highlightedText.match(regex) || []).length;
    countElement.textContent = "Found " + count + " occurrence(s).";
  }
}

function replaceWord() {
  const findWord = document.getElementById("find").value;
  const replaceWith = document.getElementById("replaceWith").value;
  var input = document.getElementById("inputTextArea").value;

  var regex = new RegExp(findWord, "gi");

  var result = input
    .replace(/\n/g, "<br>")
    .replace(regex, `<span class="highlight">${replaceWith}</span>`)
    .trim();

    
    if (replaceWith.length == 0) {
      document.getElementById("replaceError").textContent='Insert The New Word';
    } else {
      document.getElementById("replaceError").textContent='';
    document.getElementById("outputTextArea").innerHTML = result;
  }
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
