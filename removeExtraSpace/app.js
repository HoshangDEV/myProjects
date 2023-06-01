function processInput() {
  var input = document.getElementById("inputTextArea").value;
  var result = input.replace(/\s+/g, " ").trim();
  document.getElementById("outputTextArea").value = result;
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
