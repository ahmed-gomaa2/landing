/********************* global variables **************************/
const header = document.querySelector('.Header');
const dummy = document.querySelector('.dummy');

const stickyNav = (entries) => {
    const [entry] = entries;

    console.log(entry);

    if(!entry.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    // rootMargin: `-${navHeight + 200}px`
    rootMargin: `60px`
})

headerObserver.observe(dummy);