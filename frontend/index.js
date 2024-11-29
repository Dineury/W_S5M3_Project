function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
  const navCont = document.createElement('nav');
 
  links.forEach(link => {
     const a = document.createElement('a');
     a.href = link.href;
     a.textContent = link.textContent;
     a.title = link.title;

    navCont.appendChild(a);
  });
   
    
  
  
  return navCont
  }
  
  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const container = document.createElement('div');
    container.classList.add('learner-card');

  const nameP = document.createElement('p');
  nameP.textContent = learner.fullName;

    const idElement = document.createElement('p');
    idElement.textContent = `Learner ID: ${learner.id}`

   const dobP = document.createElement('p');
    dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

   const favLang = document.createElement('p');
   const favLanguage = languages.find(lang => lang.id === learner.favLanguage);
    favLang.textContent = `Favorite Language: ${favLanguage.name}`;

    [nameP, idElement, dobP, favLang].forEach(p => container.appendChild(p));

    container.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove("active")
      })
      container.classList.add('active')
    })

     return container
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
   const footer = document.createElement('footer');

   let companyInfoDiv = document.createElement('div');
   companyInfoDiv.classList.add('company-info');
   
   let companyName = document.createElement('p');
   companyName.classList.add('company-name');
   companyName.textContent = footerData.companyName
   
   let addressP = document.createElement('p');
   addressP.classList.add('address');
   addressP.textContent = footerData.address

   let emailP = document.createElement('p');
   emailP.classList.add('email');
   emailP.innerHTML =  `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}`
   
   companyInfoDiv.appendChild(companyName);
   companyInfoDiv.appendChild(addressP);
   companyInfoDiv.appendChild(emailP);
   footer.appendChild(companyInfoDiv);

   let socialMediaDiv = document.createElement('p');
   socialMediaDiv.classList.add('social-media');

    for(let platform in footerData.socialMedia){
      let socialMediaLink = document.createElement('a');
      socialMediaLink.href = footerData.socialMedia[platform]
      socialMediaLink.textContent = platform.charAt(0).toLocaleUpperCase() + platform.slice(1);
      socialMediaDiv.appendChild(socialMediaLink);
    }

    let currentYear = new Date().getFullYear();
    let copyright = document.createElement('div');
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`

    footer.appendChild(copyright);

    footer.appendChild(socialMediaDiv);
   return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

    document.addEventListener('click', evt =>{
      if(evt.target === document.querySelector('section')){
        const learners = document.querySelectorAll('.learner-card')
        learners.forEach(card => {
          card.classList.remove('active')
        })
      }
    })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
