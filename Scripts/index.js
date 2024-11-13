// For Navbar

import {navbar} from '../components/navbar.js';
document.getElementById("nav-menu").innerHTML =navbar();

// // ------------------------------------------------------------------------

let aboutMe=document.querySelector("#about");
// .... About Section........
let aboutSection=document.createElement("div");

let hello= document.createElement("h2");
hello.innerHTML="Hello I'm";

let name= document.createElement("h2");
name.innerHTML="Amit Kumar Das";

let intro= document.createElement("h2");
intro.innerHTML="I'm a software development engineer in test (SDET)";
intro.className="animation-text";


// for github and linkedin icon
import {createContactSections} from "../components/contects.js";
let contact=document.createElement("div");
contact.innerHTML=createContactSections();



let downloadResume = document.createElement("button");
downloadResume.id = "download-resume";
downloadResume.innerHTML = `<i class="fas fa-download fa-bounce"></i> Resume`;
downloadResume.style.borderRadius = "10px";
downloadResume.style.transition = "all 0.3s ease";
downloadResume.style.width = "120px";



downloadResume.addEventListener("mouseenter", () => {
    downloadResume.style.boxShadow = " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
    downloadResume.style.width="130px"
  });
  
  downloadResume.addEventListener("mouseleave", () => {
    downloadResume.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
    downloadResume.style.width="120px"
  });

downloadResume.addEventListener('click',()=>{
console.log("Download");
const fileUrl = 'resume/Amit_Das_Resume.pdf';
const link = document.createElement('a');
link.href = fileUrl;
link.download = 'Amit_Das_Resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

alert("Your resume is downloading!");
});




aboutSection.append(hello,name,intro,contact,downloadResume);
//  About me
import { AboutMe } from '../components/About.js';
document.getElementById("profile").innerHTML=AboutMe();
// -----Profile picture-----------------

let profilePicture=document.createElement("div");
let picture=document.createElement("img");
picture.src="iconAndImages/pic.png";
profilePicture.append(picture);

let msg=document.createElement("p");
msg.innerHTML="HI THIS IS AMIT FULLSTACK WEB DEVELOPER"

aboutMe.append(aboutSection,profilePicture);


// -------------------- Github Calendar--------------------------------------------------
import {calendar} from '../components/githubCalender.js'

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    var element = document.getElementById('GithubCalendar');
    if (element) {
        // Perform operations on the element
        element.innerHTML = 'Updated content';
    }
});

// ------------------- Skills section----------------------------------------------------

let skillsSection=document.getElementById("skills");
import {skillList} from '../components/skills.js';

skillsSection.innerHTML=skillList();

// -------------------- Project section --------------------------------------------------------

let projectSection=document.getElementById("projects");

import {projects} from '../components/projects.js';

projectSection.innerHTML=projects();

// --------------------- Footer -------------------------------------------------------------

import {footer} from '../components/footer.js';
document.getElementById("footer").innerHTML=footer();

document.addEventListener('DOMContentLoaded', function() {
    var copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var number = this.getAttribute('data-number');
            copyToClipboard(number);
        });
    });

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(function() {
                    alert('Copied to clipboard: ' + text);
                })
                .catch(function(error) {
                    console.error('Failed to copy text: ', error);
                });
        } else {
            fallbackCopyToClipboard(text);
        }
    }

    function fallbackCopyToClipboard(text) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var message = successful ? 'Copied to clipboard: ' + text : 'Copying text failed.';
            alert(message);
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }

        document.body.removeChild(textArea);
    }
});


