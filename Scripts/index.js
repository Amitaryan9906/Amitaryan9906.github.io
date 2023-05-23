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

// for github and linkedin icon
import {createContactSections} from "../components/contects.js";
let contact=document.createElement("div");
contact.innerHTML=createContactSections();



let downloadResume=document.createElement("button");
downloadResume.id="download-resume";
downloadResume.innerHTML="Download"

downloadResume.addEventListener('click',()=>{
console.log("Download");
const fileUrl = 'Resume/Amit_Kumar_ Das_Resume.pdf';
const link = document.createElement('a');
link.href = fileUrl;
link.download = 'Amit_Kumar_ Das_Resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
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


