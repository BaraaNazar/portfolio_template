// Load the JSON data
fetch('./userInfo.json')
  .then((response) => response.json())
  .then((data) => {
    // Get elements to update
    const cvLink = document.querySelector('.cv-link');

    // Update user's profile picture
    const userImg = document.querySelector('.userImg');
    userImg.src = data.userImg;

    // Update the iframe source and link
    cvLink.href = data.cv.href;
  })
  .catch((error) => {
    console.error('Error loading JSON:', error);
  });
