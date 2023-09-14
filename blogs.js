document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON data
  fetch('./userInfo.json')
    .then((response) => response.json())
    .then((data) => {
      // Update user's profile picture
      const userImg = document.querySelector('.userImg');
      userImg.src = data.userImg;

      // contact links
      let githubLink = document.querySelector('.github');
      let linkedinLink = document.querySelector('.linkedin');
      githubLink.href = data.github;
      linkedinLink.href = data.linkedIn;

      // Render blogs
      const blogList = document.querySelector('.my-blogs');

      data.blogs.forEach((blog) => {
        // Create elements for each blog
        const listItem = document.createElement('li');
        const blogLink = document.createElement('a');
        const blogImage = document.createElement('img');
        const blogName = document.createElement('h4');
        const blogDescription = document.createElement('p');

        // Set attributes and content for blog elements
        blogLink.href = blog.link;
        blogImage.src = blog.image;
        blogName.textContent = blog.name;
        blogDescription.textContent = blog.description;

        // Add classes to the blog elements
        blogImage.setAttribute('class', 'projectImg');
        blogLink.setAttribute('class', 'projectLink link-style-none');

        // Append blog elements to the blog link
        blogLink.appendChild(blogImage);
        blogLink.appendChild(blogName);
        blogLink.appendChild(blogDescription);

        // Append the blog link to the list item
        listItem.appendChild(blogLink);

        // Append the list item to the blog list
        blogList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
});
