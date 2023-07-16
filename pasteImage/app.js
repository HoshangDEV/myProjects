// Get the dropzone element
const dropzone = document.getElementById("dropzone");
const pasteButton = document.getElementById("pasteButton");

// Add event listener for paste button click event
pasteButton.addEventListener("click", handlePasteButton);

// Add event listener for paste event on the document
document.addEventListener("paste", handlePaste);

// Handle the paste button click event
function handlePasteButton() {
  pasteImage();
}

// Handle the paste event
function handlePaste(event) {
  pasteImage();
}

// Handle pasting the image
function pasteImage() {
  navigator.clipboard
    .read()
    .then(function (data) {
      if (data && data.length > 0) {
        data.forEach(function (item) {
          if (
            item.types.includes("image/png") ||
            item.types.includes("image/jpeg")
          ) {
            item
              .getType(
                item.types.includes("image/png") ? "image/png" : "image/jpeg"
              )
              .then(function (blob) {
                handleImage(blob);
              })
              .catch(function (error) {
                console.error("Failed to get clipboard item data: ", error);
              });
          }
        });
      }
    })
    .catch(function (error) {
      console.error("Failed to read clipboard data: ", error);
    });
}

// Handle the image
function handleImage(blob) {
  const img = new Image();

  img.onload = function () {
    // Create a span element for each image
    const span = document.createElement("span");

    // Create a button for each image
    const btn = document.createElement("button");
    btn.classList.add("downloadBtn");
    btn.innerHTML = '<i class="fa-solid fa-circle-down"></i> Download Image';
    btn.onclick = function () {
      downloadImage(img.src, "image.jpg");
    };

    // Append the image and button to the span
    span.appendChild(img);
    span.appendChild(btn);

if (dropzone.firstChild) {
  // If there are child elements, insert the new element before the first child
  dropzone.insertBefore(span, dropzone.firstChild);
} else {
  // If there are no child elements, append the new element as the first child
  dropzone.appendChild(span);
}
  };

  const reader = new FileReader();
  reader.onloadend = function () {
    img.src = reader.result;
  };
  reader.readAsDataURL(blob);
}

// Function to download the image
function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}
