const ripplePlaceholder = document.getElementById('ripplePlaceholder');
const buttonTransition = document.getElementsByClassName('transition');

Array.prototype.forEach.call(buttonTransition, function(b) {
    b.addEventListener('click', ripple)
});

function ripple(e) {
    const transitionEffect = document.createElement('div');
    transitionEffect.setAttribute('id', 'ripple');
    transitionEffect.classList.add(this.dataset.color)
    ripplePlaceholder.appendChild(transitionEffect);

    const d = Math.max(document.body.clientWidth*3);
    transitionEffect.style.width = transitionEffect.style.height = d + 'px';
    transitionEffect.style.left = e.clientX - d/2 + 'px';
    transitionEffect.style.top = e.clientY - d/2 + 'px';

}