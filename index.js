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

const linkedin = document.querySelector("#linked")
    .addEventListener('click', () => location.href = "https://www.linkedin.com/in/erik-nielsen-18bb43205");

const git = document.querySelector("#git")
    .addEventListener('click', () => location.href = "https://github.com/erikn775?tab=projects")

const projectTitle1 = document.querySelector("#project-1")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Github')){
            location.href = "https://github.com/erikn775/rails_project"
        }
});

const projectTitle2 = document.querySelector("#project-2")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Matching Game')){
            location.href = "https://erikn775.github.io/matching_game_frontend/"
        }
});

const projectTitle3 = document.querySelector("#project-3")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Github')){
            location.href = "https://github.com/erikn775"
        }
});

const projectTitle4 = document.querySelector("#project-4")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Github')){
            location.href = "https://github.com/erikn775"
        }
});

const projectTitle5 = document.querySelector("#project-5")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Github')){
            location.href = "https://github.com/erikn775"
        }
});

const projectTitle6 = document.querySelector("#project-6")
    .addEventListener('click', function(){
        if (window.confirm('Redirecting to Github')){
            location.href = "https://github.com/erikn775"
        }
});