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

function replaceWord() {
  const findWord = document.getElementById("find").value;
  const replaceWith = document.getElementById("replaceWith").value;
  var input = document.getElementById("inputTextArea").value;
  var result = input.replaceAll(findWord, replaceWith).trim();
  document.getElementById("outputTextArea").value = result;

  // console.log(findWord)
}

function copyToClipboard() {
  var output = document.getElementById("outputTextArea");
  output.select();
  output.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  var copyButton = document.getElementById("copyButton");
  copyButton.innerText = "Coped!";
  setTimeout(function () {
    copyButton.innerText = "Copy Result";
  }, 2000);
}
