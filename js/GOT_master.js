(() => {
	console.log('fired');

	//  variable stack
	// grab the shields at the bttom of the pge
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox	= document.querySelector('.lightBox'),
			video = document.querySelector('video');

	function showLightbox() {
		lightBox.classList.add('show-lightBox');
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightBox');
		// rewind the video to the beginning
		// also pause it
		video.currentTime = 0;
		video.pause();
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();