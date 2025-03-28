//send email

function sendemail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_rjxhmxs", "template_cof64rn", parms).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        window.alert("Sent successfully!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }
  
  // show menu
  
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  
  showMenu("nav_toggle", "nav_menu");
  
  // ACTIVE & REMOVE ACTIVE
  const navLink = document.querySelectorAll(".nav_link");
  navLink.forEach((n) => n.classList.remove("active"));
  
  function linkAction() {
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    const navMenu = document.getElementById("nav_menu");
  
    navMenu.classList.remove("show");
  }
  
  navLink.forEach((n) => n.addEventListener("click", linkAction));