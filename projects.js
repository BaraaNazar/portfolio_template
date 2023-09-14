document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON data
  fetch('./userInfo.json')
    .then((response) => response.json())
    .then((data) => {
      // Update user's profile picture
      const userImg = document.querySelector('.userImg');
      userImg.src = data.userImg;

      // Render projects
      const projectList = document.querySelector('.my-projects');

      data.projects.forEach((project) => {
        // Create elements for each project
        const listItem = document.createElement('li');
        const projectLink = document.createElement('a');
        const projectImage = document.createElement('img');
        const projectName = document.createElement('h4');
        const projectDescription = document.createElement('p');

        // Set attributes and content for project elements
        projectLink.href = project.link;
        projectImage.src = project.image;
        projectName.textContent = project.name;
        projectDescription.textContent = project.description;

        // classes to the projects
        projectImage.setAttribute('class', 'projectImg');
        projectLink.setAttribute('class', 'projectLink link-style-none');

        // Append project elements to the project link
        projectLink.appendChild(projectImage);
        projectLink.appendChild(projectName);
        projectLink.appendChild(projectDescription);

        // Append the project link to the list item
        listItem.appendChild(projectLink);

        // Append the list item to the project list
        projectList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
});
