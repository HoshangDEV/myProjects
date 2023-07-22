const dropzone = document.getElementById("dropzone");
const pasteButton = document.getElementById("pasteButton");

pasteButton.addEventListener("click", handlePasteButton);
document.addEventListener("paste", handlePaste);

function handlePasteButton() {
  pasteImage();
}

function handlePaste(event) {
  pasteImage();
}

function pasteImage() {
  navigator.clipboard
    .read()
    .then(function (data) {
      if (data && data.length > 0) {
        data.forEach(function (item) {
          if (
            item.types.includes("image/png") ||
            item.types.includes("image/jpeg") ||
            item.types.includes("image/gif") ||
            item.types.includes("image/bmp") ||
            item.types.includes("image/tiff") ||
            item.types.includes("image/svg+xml") ||
            item.types.includes("image/webp") ||
            item.types.includes("image/x-icon") ||
            item.types.includes("image/heic") ||
            item.types.includes("image/heif") ||
            item.types.includes("image/raw")
          ) {
            item
              .getType(
                item.types.includes("image/png")
                  ? "image/png"
                  : item.types.includes("image/jpeg")
                  ? "image/jpeg"
                  : item.types.includes("image/gif")
                  ? "image/gif"
                  : item.types.includes("image/bmp")
                  ? "image/bmp"
                  : item.types.includes("image/tiff")
                  ? "image/tiff"
                  : item.types.includes("image/svg+xml")
                  ? "image/svg+xml"
                  : item.types.includes("image/webp")
                  ? "image/webp"
                  : item.types.includes("image/x-icon")
                  ? "image/x-icon"
                  : item.types.includes("image/heic")
                  ? "image/heic"
                  : item.types.includes("image/heif")
                  ? "image/heif"
                  : item.types.includes("image/raw")
                  ? "image/raw"
                  : ""
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

function handleImage(blob) {
  const img = new Image();

  img.onload = function () {
    // Create a span element for each image
    const span = document.createElement("span");

    // Create a label for the resolution
    const resolutionLabel = document.createElement("p");
    resolutionLabel.innerHTML = `Resolution: ${img.width}x${img.height}`;

    // Create a button for each image
    const btn = document.createElement("button");
    btn.classList.add("downloadBtn");
    btn.innerHTML = '<i class="fa-solid fa-circle-down"></i> Download Image';
    btn.onclick = function () {
      downloadImage(img.src, "image.png"); // Download as PNG
    };

    // Create a button to remove the span from the dropzone
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Remove';
    removeBtn.onclick = function () {
      dropzone.removeChild(span);
    };

    // Append the image, resolution label, buttons to the span
    span.appendChild(img);
    span.appendChild(resolutionLabel);
    span.appendChild(btn);
    span.appendChild(removeBtn);

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


function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}
