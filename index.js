window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

document.querySelector('.back-to-top').addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});



function toggleVideos() {
    var videoContainer = document.getElementById("videoContainer");
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "grid";
        videoContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(30vw, 1fr))";
    } else {
        videoContainer.style.display = "none";
    }
}
