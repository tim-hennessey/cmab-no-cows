var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set("#bg", {scale:1.3, opacity:1});
		t.set("#caption-1", {opacity:0, y:50});
		t.set("#caption-2", {opacity:0, y:50});
		t.set("#caption-3", {opacity:0, y:50});
		t.set("#cta", {opacity:0});
		t.set("#cta-over", {opacity:0});

		banner.addEventListener('mouseover', handleOver, true);
		banner.addEventListener('mouseout', handleOut, true);
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		t.delayedCall(0.1, step1);
	}

	// --------------------------------------------------------------------------------------
	function step1() {
		t.to("#bg", 1, {opacity:1, delay:0.0, ease:Cubic.easeInOut});
		t.to("#bg", 10, {scale:1, delay:0.0, ease:Linear.easeNone});
		t.to("#caption-1", 1, {opacity:1, y:0, delay:0.0, ease:Cubic.easeOut});
		t.to("#caption-2", 1, {opacity:1, y:0, delay:0.2, ease:Cubic.easeOut});
		t.to("#caption-3", 1, {opacity:1, y:0, delay:0.4, ease:Cubic.easeOut});
		t.to("#cta", 1, {opacity:1, delay:1.0, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	function handleOver() {
		// TweenLite.to("#legal", 0.2, {opacity:1, ease:Cubic.easeInOut});
		TweenLite.to("#cta-over", 0.2, {opacity:1, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	function handleOut() {
		// TweenLite.to("#legal", 0.5, {opacity:0, ease:Cubic.easeInOut});
		TweenLite.to("#cta-over", 0.5, {opacity:0, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
