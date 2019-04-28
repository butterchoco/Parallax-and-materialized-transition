const section = document.getElementsByTagName('section')[0];
const buttonTransition = document.getElementsByClassName('transition');

Array.prototype.forEach.call(buttonTransition, function(b) {
    b.addEventListener('click', ripple)
});

function ripple(e) {
    const transitionEffect = document.createElement('div');
    transitionEffect.setAttribute('id', 'ripple');
    transitionEffect.classList.add(this.dataset.transition)
    section.appendChild(transitionEffect);

    const d = Math.max(section.clientWidth);
    console.log(d);
    transitionEffect.style.width = transitionEffect.style.height = d*2 + 'px';
    transitionEffect.style.left = e.clientX - d  + 'px';
    transitionEffect.style.top = e.clientY - d + 'px';

}