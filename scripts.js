// Intersection Observer for animating navbar links upon scrolling
document.addEventListener("DOMContentLoaded", function() {
    // Define 'content' as all elements with class 'content'
    const section = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('nav a');
    const options = {threshold: 0.5}

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const current = entry.target.getAttribute('id');
                navlinks.forEach((link) => {
                    link.parentElement.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.parentElement.classList.add('active');
                    }
                });
            }
        });
    }, options
    );
    section.forEach((section) => {
        observer.observe(section);
    });
});


// Close navbar when clicking on a link
document.addEventListener("DOMContentLoaded", function() {
    var navlinks = document.querySelectorAll('.menu-items li');
    const checkbox = document.querySelector('#sideMenu');
    console.log(navlinks);
    console.log(checkbox.checked)
    // Add event listener to each link in navbar to close navbar when clicked
    navlinks.forEach(function(link) {
        link.addEventListener('click', function() {
            checkbox.checked = false;
        });
    });
})

// Intersection Observer for animating content upon scrolling
document.addEventListener("DOMContentLoaded", function() {
    // Define 'content' as all elements with class 'content'
    const content = document.querySelectorAll(".content");
    // Define options for IntersectionObserver
    const options = {
        threshold: 0.5
     };
    // Define 'observer' as a new IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target)
            console.log(entry);
                });
        },
            options
    )
    content.forEach(item => {
        observer.observe(item)
    })
});