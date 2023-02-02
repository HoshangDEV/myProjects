var downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', function () {
  html2canvas(document.querySelector('.thum'), {
    width: 770,
    height: 550
  }).then(function (canvas) {
    var link = document.createElement('a');
    link.download = 'image.jpg';
    link.href = canvas.toDataURL('image/jpeg', 1).replace('image/jpeg', 'image/octet-stream');
    link.click();
  });

});

///

const thumUploadInput = document.getElementById("thum-upload-input");
const logUploadInput = document.getElementById("log-upload-input");
const bigImage = document.getElementById("big-image");
const channelLogo = document.getElementById("channel-logo");

thumUploadInput.addEventListener("change", function () {
  const file = thumUploadInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    bigImage.src = reader.result;
  });

  reader.readAsDataURL(file);
});

logUploadInput.addEventListener("change", function () {
  const file = logUploadInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    channelLogo.src = reader.result;
  });

  reader.readAsDataURL(file);
});