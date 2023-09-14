import userInfo from './userInfo.json' assert { type: 'json' };

let userName = document.querySelector('.userName');
let userJob = document.querySelector('.userJob');
let userBio = document.querySelector('.userBio');
let userImg = document.querySelector('.userImg');
let githubLink = document.querySelector('.github');
let linkedinLink = document.querySelector('.linkedin');
let projectNameElements = document.querySelectorAll('.projectName');
let projectDescriptionElements = document.querySelectorAll(
  '.projectDescription'
);
let projectLinkElements = document.querySelectorAll('.projectLink');
let projectImgElements = document.querySelectorAll('.projectImg');

let blogNameElements = document.querySelectorAll('.blogName');
let blogDescriptionElements = document.querySelectorAll('.blogDescription');
let blogLinkElements = document.querySelectorAll('.blogLink');
let blogImgElements = document.querySelectorAll('.blogImg');

userName.textContent = userInfo.name;
userJob.textContent = userInfo.job;
userBio.textContent = userInfo.bio;
userImg.src = userInfo.userImg;
githubLink.href = userInfo.github;
linkedinLink.href = userInfo.linkedIn;

projectNameElements.forEach((e, i) => {
  if (i < userInfo.projects.length) {
    e.textContent = userInfo.projects[i].name;
  }
});

projectDescriptionElements.forEach((e, i) => {
  if (i < userInfo.projects.length) {
    e.textContent = userInfo.projects[i].description;
  }
});

projectLinkElements.forEach((e, i) => {
  if (i < userInfo.projects.length) {
    e.setAttribute('href', userInfo.projects[i].link);
  }
});
projectImgElements.forEach((e, i) => {
  if (i < userInfo.projects.length) {
    e.src = userInfo.projects[i].image;
    // e.setAttribute('src', userInfo.projects[i].image);
  }
});

blogNameElements.forEach((e, i) => {
  if (i < userInfo.blogs.length) {
    e.textContent = userInfo.blogs[i].name;
  }
});
blogDescriptionElements.forEach((e, i) => {
  if (i < userInfo.blogs.length) {
    e.textContent = userInfo.blogs[i].description;
  }
});

blogLinkElements.forEach((e, i) => {
  if (i < userInfo.blogs.length) {
    e.setAttribute('href', userInfo.blogs[i].link);
  }
});
blogImgElements.forEach((e, i) => {
  if (i < userInfo.blogs.length) {
    e.src = userInfo.blogs[i].image;
    // e.setAttribute('src', userInfo.blogs[i].image);
  }
});
