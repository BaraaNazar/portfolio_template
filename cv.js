// Load the JSON data
fetch('./userInfo.json')
  .then((response) => response.json())
  .then((data) => {
    // Get elements to update
    const cvLink = document.querySelector('.cv-link');

    // Update user's profile picture
    const userImg = document.querySelector('.userImg');
    userImg.src = data.userImg;

    // contact links
    let githubLink = document.querySelector('.github');
    let linkedinLink = document.querySelector('.linkedin');
    githubLink.href = data.github;
    linkedinLink.href = data.linkedIn;

    // Update the iframe source and link
    cvLink.href = data.cv.href;
  })
  .catch((error) => {
    console.error('Error loading JSON:', error);
  });
