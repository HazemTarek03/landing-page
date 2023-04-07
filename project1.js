const navBar = document.getElementById("navBar");
const sections = document.querySelectorAll("section");

// loop over sections to make links.

sections.forEach(section => {
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const list = document.createElement("li");
    const anchorTag = document.createElement("a");

 //add href, title and class attributes to links and text content too.

    anchorTag.href = `#${sectionId}`;
    anchorTag.textContent = sectionTitle;
    anchorTag.classList.add("Links");

    

 // add smooth scroll to links.

   anchorTag.addEventListener("click", scroll => {
      scroll.preventDefault();
      section.scrollIntoView({
         behavior: "smooth"
      })
   })
   list.appendChild(anchorTag);
   navBar.appendChild(list);
   // fragment.appendChild(list);
   // navBar.appendChild(fragment);
});

// Making the sections' anchor active .

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add("your-active-class");
         const link = entry.target.querySelector('a');
      // if the section title = the section's anchor text content then make the links active.
         if (link.textContent === entry.target.dataset.nav) {
            link.classList.add("active-link");
         } else {
            link.classList.remove("active-link");
         }
      } else {
         entry.target.classList.remove("your-active-class");
      }
   });
}, {
   footMargin: '0px',
   threshold: 0.75,
});

// now the sections and the anchors tags are active 
// now we set an Event listener 
window.addEventListener("scroll", evt =>{
   sections.forEach(section => {
      observer.observe(section);
   })
});


// we need to set CSS
const links = document.querySelectorAll('a');
links.forEach(link => {
   link.style.cssText = `
   display:inline-block;
   color:#4949E8;
   font-size:1.5em;
   text-decoration: none;
   `;
});

