// class Search {
//   constructor() {
//     this.searchInput = document.getElementById("search-input");
//     this.searchForm = document.querySelector(".search-form");
//     this.searchForm.addEventListener("submit", this.handleSearch.bind(this));
//   }

//   handleSearch(event) {
//     event.preventDefault();
//     const searchText = this.searchInput.value.toLowerCase();

//     const projects = document.querySelectorAll(".project");
//     projects.forEach((project) => {
//       const projectTitle = project.querySelector("h3").textContent.toLowerCase();
//       if (projectTitle.includes(searchText)) {
//         project.style.display = "block";
//       } else {
//         project.style.display = "none";
//       }
//     });
//   }
// }

class Search {
  constructor() {
    this.searchForm = document.querySelector('.search-form');
    this.searchInput = document.querySelector('#search-input');
    this.searchForm.addEventListener('submit', this.search.bind(this));
  }

  search(event) {
    event.preventDefault();
    const searchTerm = this.searchInput.value.toLowerCase();

    switch (searchTerm) {
      case 'project':
      case 'projecten':
        window.location.href = '/projecten.html';
        break;
      case 'cv':
      case 'CV':
        window.location.href = './img/Uday-Singh-CV.png';
        break;
      case 'contact':
        case 'contacten':
        window.location.href = '/contact.html';
        break;
      default:
        window.location.reload();
        break;
    }
  }
}

const search = new Search();


function scrollToProjects() {
  const projectsElement = document.querySelector(".projects");
  projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToContact() {
  const contactElement = document.querySelector(".contact__form");
  contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
}


function toggleFlip(card) {
  card.classList.toggle('hover');
}


class TypedAnimation {
  constructor(elementId, texts) {
    this.textElement = document.getElementById(elementId);
    this.texts = texts;
    this.index = 0;
    this.isFinished = false;
    this.onCompleteCallback = null;
  }

  typeText(text, callback) {
    const length = text.length;
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i === length) {
        clearInterval(typingInterval);
        callback();
      }

      this.textElement.textContent += text.charAt(i);
      i++;
    }, 90);
  }

  typeNextText() {
    if (this.index === this.texts.length) {
      this.isFinished = true;
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
      return;
    }

    const text = this.texts[this.index];
    this.textElement.textContent = '';
    this.typeText(text, () => {
      setTimeout(() => {
        this.index++;
        this.typeNextText();
      }, 300);
    });
  }

  startAnimation() {
    this.typeNextText();
  }

  onAnimationComplete(callback) {
    this.onCompleteCallback = callback;
  }
}

const typedAnimation = new TypedAnimation('text', [
  "Hallo ik ben Uday,",
  "Ik ben een ambitieuze softwareontwikkelaar.",
  "Mijn droom is om mijn eigen techbedrijf te starten."
]);

typedAnimation.startAnimation();


  
//cursor
// const cursor = document
//     .querySelector(".custom-cursor");
  
// Adding the animations when the
// mouse button is clicked
  
// window.addEventListener("mousedown", (event) => {
//     if (!cursor.classList.contains("click")) {
//         cursor.classList.add("click");
  
//         setTimeout(() => {
//             cursor.classList.remove("click");
//         }, 800);
//     }
// });
  
// Getting the position of the cursor
// window.addEventListener("mousemove", (event) => {
//     let x = event.pageX - cursor.offsetWidth / 2,
//         y = event.pageY - cursor.offsetHeight / 2;
  
//     cursor.style.left = `${x}px`;
//     cursor.style.top = `${y}px`;
// });


const rootElement = document.querySelector(":root");
const darkMode = document.getElementById('js--darkmode');


darkMode.checked = false;

darkMode.onchange = function () {

}

function myFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
  }