document.addEventListener('keydown', function(event) {
     const cube = document.getElementById('cube');
     if (event.key === 'ArrowLeft') {
         cube.style.transform += ' rotateY(-90deg)';
     } else if (event.key === 'ArrowRight') {
         cube.style.transform += ' rotateY(90deg)';
     } else if (event.key === 'ArrowUp') {
         cube.style.transform += ' rotateX(90deg)';
     } else if (event.key === 'ArrowDown') {
         cube.style.transform += ' rotateX(-90deg)';
     }
 });
