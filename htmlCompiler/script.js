function compileHtml() {
  // console.log(htmlInput);
  document.getElementById("htmlOutput").innerHTML =
    document.getElementById("htmlInput").value;
    
  document.getElementById("cssOutput").innerHTML =
    document.getElementById("cssInput").value;
    
  document.getElementById("jsOutput").innerHTML =
    document.getElementById("jsInput").value;
}
