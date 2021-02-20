const projectSection = document.querySelector(".projects-section");
const blogSection = document.querySelector(".blogs-section");
const resumeSection = document.querySelector(".resume-section");
const resumeModal = document.querySelector("#resumeModal");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

function projectDisplay(){
    projectSection.style.display = 'block';
    resumeSection.style.display = 'none';
    blogSection.style.display = 'none';
}

function blogDisplay(){
    projectSection.style.display = 'none';
    resumeSection.style.display = 'none';
    blogSection.style.display = 'block';
}

function displayResume(){
    projectSection.style.display = 'none';
    resumeSection.style.display = 'block';
    blogSection.style.display = 'none';
}



resumeSection.addEventListener('click', () => resumeModal.style.display = 'block')

const resumeClose = document.querySelector(".close")
    .addEventListener('click', () => resumeModal.style.display = 'none');

const projectNav = document.querySelector("#projects-side")
    .addEventListener('click', projectDisplay);

const blogNav = document.querySelector("#blog-side")
    .addEventListener('click', blogDisplay);

const resumeNav = document.querySelector("#resume-side")
    .addEventListener('click', displayResume);

next.addEventListener('click', function() {
    
    if(projectSection.style.display === 'block' || projectSection.style.display === ''){
        blogDisplay();
    }
    else if(blogSection.style.display === 'block' || blogSection.style.display === ''){
        displayResume();
    }
    else{
        projectDisplay();
    }
})

previous.addEventListener('click', function() {
    if(projectSection.style.display === 'block' || projectSection.style.display === ''){
        displayResume();
    }
    else if(resumeSection.style.display === 'block' || resumeSection.style.display === ''){
        blogDisplay();
    }
    else{
        projectDisplay();
    }
})
