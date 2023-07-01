function fetchDislikeData() {
  var videoLink = document.getElementById("videoLink").value;
  var videoId = extractVideoId(videoLink);

  if (videoId) {
    var url = "https://returnyoutubedislikeapi.com/votes?videoId=" + videoId;

    $.ajax({
      url: url,
      dataType: "json",
      success: function (data) {
        var resultDiv = document.getElementById("result");
        var html = "<h2>Video Data</h2>";
        html += "<p><strong>ID:</strong> " + data.id + "</p>";
        html += "<p><strong>Likes:</strong> " + data.likes + "</p>";
        html += "<p><strong>Dislikes:</strong> " + data.dislikes + "</p>";
        html += "<p><strong>View Count:</strong> " + data.viewCount + "</p>";
        html += "<p><strong>Date Created:</strong> " + data.dateCreated + "</p>";
        html += "<p><strong>Rating:</strong> " + data.rating + "</p>";

        resultDiv.innerHTML = html;
      },
      error: function () {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML =
          "<p>Error retrieving dislike data. Please try again later.</p>";
      },
    });
  } else {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
      "<p>Invalid YouTube video link. Please enter a valid link.</p>";
  }
}

function extractVideoId(url) {
  var videoId = null;
  var match = url.match(/youtu\.be\/([^?]+)/i);

  if (match && match[1]) {
    videoId = match[1];
  } else {
    match = url.match(/youtube\.com\/watch\?v=([^&]+)/i);
    if (match && match[1]) {
      videoId = match[1];
    }
  }

  return videoId;
}