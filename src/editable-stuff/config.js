// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#23A6D5, #c515e8, #ff9b11, #E73C7E, #ff7f7f, #c4bb39",
  firstName: "Nirmal",
  middleName: "",
  lastName: "Kumar ",
  message: "| Engineer | Programmer | Embedded Developer | Youtuber |",
  
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/NirmalKnock",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nirmalknock",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nirmalknock/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nirmalkumar21/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Nirmalknock",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Nirmal_kumar_DP.png"),
  imageSize: 375,
  message:
    "My name is Nirmal Kumar. I’m a graduate of 2021 from the Global Institute Of Engineering & Technology at Vellore with a degree in Electronics and Communication Engineering. I'm most passionate about Embedded Systems and Electronics, and my goal is to pursue this passion within the field of Embedded software engineering. In my free time, I like to work on projects that solve real issues.",
  resume: "https://drive.google.com/file/d/1OKotqYgWDa3Lc-O3Apvd4yPYU_vYEBG9/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "NirmalKnock", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["Embedded-projects"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Embedded C", value: 90 },
    { name: "C/C++", value: 85 },
    { name: "Python", value: 75 },
    { name: "Git", value: 70 },
    { name: "Arduino", value: 85 },
    { name: "Arm Cortex M4", value: 75 },
    { name: "STM32F4 ", value: 80 },
    { name: "Debugging", value: 80 },
    { name: "PCB Design",value:70 },
    { name: "Communication Protocols(SPI, I2C, UART)",value:90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Embedded Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nirmalknock@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Electronics Engineer - Intern, Neur Industries Pvt Ltd',// Here Add Company Name
      companylogo: require('../assets/img/Neur.jfif'),
      date: 'October 2020 – January 2021',
    },
    {
      role: 'Embedded Software Trainee, National Small Industries Corporation',
      companylogo: require('../assets/img/nsic.png'),
      date: 'November 2018 – December 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
