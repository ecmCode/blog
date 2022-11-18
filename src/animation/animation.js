import anime from 'animejs/lib/anime.es.js';

const animate = (e) => {
    
    const timeline = anime.timeline(
      {
        easing: 'easeInOutSine',
        direction: 'alternate',
      }
    )

    timeline.add({
      targets: e.target,
      scale:1.2,
      duration:500
    })
    timeline.add({
      targets: document.getElementById('target'),
      translateX:-150,
      duration:500
    })
    timeline.add({
        targets: document.getElementById('target'),
        translateX:100,
        duration:1000,
      })
    
    timeline.restart()
}

export default animate