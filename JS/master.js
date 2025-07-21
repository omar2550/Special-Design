document.querySelector(".gear-div").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".settings-box").classList.toggle("open");
  document.querySelector(".settings-box .gear").classList.toggle("fa-spin");
});

document.querySelector(".settings-content").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (
    e.target !== document.querySelector(".settings-box") &&
    e.target !== document.querySelector(".settings-content")
  ) {
    if (document.querySelector(".settings-box").classList.contains("open")) {
      document.querySelector(".settings-box").classList.remove("open");
      document.querySelector(".settings-box .gear").classList.remove("fa-spin");
    }
  }
});

if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  document
    .querySelectorAll(".colors-list li")
    .forEach((li) => li.classList.remove("active"));
  document
    .querySelector(
      `.colors-list li[data-color="${localStorage.getItem("color")}"]`
    )
    .classList.add("active");
}

document.querySelectorAll(".colors-list li").forEach((li) => {
  li.addEventListener("click", (e) => {
    document
      .querySelectorAll(".colors-list li")
      .forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
  });
});

if (localStorage.getItem("background")) {
  if (localStorage.getItem("background") === "yes") {
    document
      .querySelectorAll(".background-options span")
      .forEach((span) => span.classList.remove("active"));
    document.querySelector(`span.yes`).classList.add("active");
    document.querySelector(".landing").classList.add("active");
    document.querySelector(".landing").classList.remove("not-active");
  } else {
    document
      .querySelectorAll(".background-options span")
      .forEach((span) => span.classList.remove("active"));
    document.querySelector(`span.no`).classList.add("active");
    document.querySelector(".landing").classList.add("not-active");
    document.querySelector(".landing").classList.remove("active");
  }
}

document.querySelectorAll(".background-options span").forEach((span) => {
  span.addEventListener("click", (e) => {
    document
      .querySelectorAll(".background-options span")
      .forEach((span) => span.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      document.querySelector(".landing").classList.add("active");
      document.querySelector(".landing").classList.remove("not-active");
      localStorage.setItem("background", "yes");
    } else {
      document.querySelector(".landing").classList.remove("active");
      document.querySelector(".landing").classList.add("not-active");
      localStorage.setItem("background", "no");
    }
  });
});

let skills = document.querySelector(".skills");

window.onscroll = function () {
  if (
    window.scrollY >
    skills.offsetTop + skills.offsetHeight - window.innerHeight
  ) {
    document.querySelectorAll(".progress span").forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= document.querySelector(".about-us").offsetTop) {
    document.querySelector(".up").classList.add("show");
  } else {
    document.querySelector(".up").classList.remove("show");
  }
};

document.querySelector(".up").addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

openImages(document.querySelectorAll(".testimonials img"));
openImages(document.querySelectorAll(".gallery img"));

goToSection(document.querySelectorAll(".nav-bullets .bullet"));

if (localStorage.getItem("bullets")) {
  if (localStorage.getItem("bullets") === "yes") {
    document.querySelectorAll(".Bullets-options span").forEach((span) => {
      span.classList.remove("active");
    });
    document.querySelector(".Bullets-options .yes").classList.add("active");
    document.querySelector(".nav-bullets").style.display = "block";
  } else {
    document.querySelectorAll(".Bullets-options span").forEach((span) => {
      span.classList.remove("active");
    });
    document.querySelector(".Bullets-options .no").classList.add("active");
    document.querySelector(".nav-bullets").style.display = "none";
  }
}

document.querySelectorAll(".Bullets-options span").forEach((span) => {
  span.addEventListener("click", (e) => {
    document.querySelectorAll(".Bullets-options span").forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.bullets === "yes") {
      document.querySelector(".nav-bullets").style.display = "block";
      localStorage.setItem("bullets", "yes");
    } else {
      document.querySelector(".nav-bullets").style.display = "none";
      localStorage.setItem("bullets", "no");
    }
  });
});

if (localStorage.getItem("fixed")) {

  if (localStorage.getItem("fixed") === "yes") {

    document.querySelector("header").classList.add("fixed");
    document.querySelectorAll(".fixed-options span").forEach( span => {
      span.classList.remove("active");
    })

    document.querySelector(".fixed-options .yes").classList.add("active");
  } else {

    document.querySelector("header").classList.remove("fixed");
    document.querySelectorAll(".fixed-options span").forEach( span => {
      span.classList.remove("active");
    })

    document.querySelector(".fixed-options .no").classList.add("active");
  }
}

document.querySelectorAll(".fixed-options span").forEach( span => {

  span.addEventListener("click", (e) => {

    document.querySelectorAll(".fixed-options span").forEach( span => {
      span.classList.remove("active");
    })

    e.target.classList.add("active");

    if (e.target.dataset.fixed === "yes") {

      document.querySelector("header").classList.add("fixed");
      localStorage.setItem("fixed", "yes");
    } else {

      document.querySelector("header").classList.remove("fixed");
      localStorage.setItem("fixed", "no");
    }

  })
})

document.querySelector(".reset").addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

let menu = document.createElement("div");

menu.appendChild(document.querySelector(".links ul").cloneNode(true));

document.querySelector(".toggle").appendChild(menu);

document.querySelector(".toggle-menu").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".bars").classList.toggle("rotate");
  menu.classList.toggle("menu");
});
document.addEventListener("click", (e) => {
  if (e.target.className !== "toggle-menu" && e.target !== menu) {
    if (menu.classList.contains("menu")) {
      menu.classList.remove("menu");
      document.querySelector(".bars").classList.remove("rotate");
    }
  }
});

document.querySelector(".links").addEventListener("click", (e) => {
  e.stopPropagation();
});

goToSection(document.querySelectorAll("header a"));

document.querySelector(".date").textContent = new Date().getFullYear();

let form = document.querySelector(".contact-us form");
form.addEventListener("submit", (e) => {
  
  let userName = form.querySelector("[name='name']").value;
  let phone = form.querySelector("[name='phone']").value;
  let email = form.querySelector("[name='email']").value;
  let message = form.querySelector("[name='message']").value;

  let reName = /^[a-zA-Z\s]{3,}$/g;
  let rePhone = /^01[0-9]{9}$/g;
  let reEmail = /^[a-z]+(\d+)?@gmail.(com|org|net)/g;
  let reMessage = /^[a-zA-Z\s]/g;

  if (
    reName.test(userName) &&
    rePhone.test(phone) &&
    reEmail.test(email) &&
    reMessage.test(message)
  ) {
    alert("Form submitted successfully!");
  } else {
    e.preventDefault();
    alert("Please fill out the form correctly.");
  }
  
  
}) 

// All Functions

function goToSection(section) {
  section.forEach((go) => {
    go.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function openImages(images) {
  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      let overlay = document.createElement("div");
      overlay.className = "popup-overlay";
      document.body.appendChild(overlay);

      let popupBox = document.createElement("div");
      popupBox.className = "popup-box";
      if (img.alt) {
        let h3 = document.createElement("h3");
        h3.textContent = img.alt;
        popupBox.appendChild(h3);
      }
      let image = document.createElement("img");
      image.src = img.src;
      popupBox.appendChild(image);
      document.body.appendChild(popupBox);

      let closeButton = document.createElement("span");
      closeButton.className = "close-button";
      closeButton.textContent = "X";
      popupBox.appendChild(closeButton);

      closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popupBox);
      });
    });
  });
}
