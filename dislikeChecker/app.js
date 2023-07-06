let type = "";

function extractYouTubeID(link) {
  let id;

  if (link.includes("youtu.be/")) {
    id = link.split("youtu.be/")[1];
    type = "Youtube Video";
  } else if (link.includes("youtube.com/watch")) {
    const searchParams = new URLSearchParams(new URL(link).search);
    id = searchParams.get("v");
    type = "Youtube Video";
  } else if (link.includes("youtube.com/shorts/")) {
    id = link.split("youtube.com/shorts/")[1].split("?")[0];
    type = "Youtube Shorts";
  } else {
    id = "empty";
  }

  return id;
}

function fetchDislikeData() {
  let noresult = document.getElementById("noresult");
  let videoLink = document.getElementById("videoLink").value;
  const apiUrl = `https://returnyoutubedislikeapi.com/votes?videoId=${extractYouTubeID(
    videoLink,
    type
  )}`;
  if (!apiUrl.includes("empty")) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        noresult.textContent = "";
        const videoType = document.getElementById("videoType");
        videoType.textContent = type;

        const videoIdElement = document.getElementById("videoId");
        videoIdElement.textContent = data.id;

        const likesElement = document.getElementById("likes");
        likesElement.textContent = formatNumber(data.likes);

        const dislikesElement = document.getElementById("dislikes");
        dislikesElement.textContent = formatNumber(data.dislikes);

        const ratingElement = document.getElementById("rating");
        ratingElement.textContent = data.rating.toFixed(2);

        const viewCountElement = document.getElementById("viewCount");
        viewCountElement.textContent = formatNumber(data.viewCount);

        const dateCreatedElement = document.getElementById("dateCreated");
        dateCreatedElement.textContent = formatDate(data.dateCreated);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    noresult.textContent = "wrong input";
  }
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Add event listener for Enter key press
document
  .getElementById("videoLink")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      fetchDislikeData();
    }
  });
