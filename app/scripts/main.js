/**
 * Created by Konnos on 6/24/2017.
 */
(function () {

  var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

  // Main
  initHeader();
  addListeners();

  function initHeader() {
    calculateHeightWidth();
    target = {x: 0, y: height};

    // largeHeader = document.getElementById('large-header');
    // largeHeader.style.height = height + 'px';

    canvas = document.getElementById('particle-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    var leafpath = document.getElementById("path4137");
    var l = new Path2D(leafpath.getAttribute('d'));
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fill(l);

    // create particles
    circles = [];
    for (var x = 0; x < width * 0.5; x++) {
      var c = new Circle();
      circles.push(c);
    }
    animate();
  }

  // Event handling
  function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    calculateHeightWidth();
    // largeHeader.style.height = height + 'px';
    canvas.width = width;
    canvas.height = height;
  }

  function calculateHeightWidth() {
    var largeHeader = document.getElementById("large-header");
    width = largeHeader.clientWidth;
    height = largeHeader.clientHeight;
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (var i in circles) {
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }

  // Canvas manipulation
  function Circle() {
    var _this = this;

    // constructor
    (function () {
      _this.pos = {};
      init();
      // console.log(_this);
    })();

    function init() {
      _this.pos.x = Math.random() * width;
      _this.pos.y = height + Math.random() * 100;
      _this.alpha = 0.1 + Math.random() * 0.3;
      _this.scale = 0.1 + Math.random() * 0.3;
      _this.velocity = Math.random();
    }

    this.draw = function () {
      if (_this.alpha <= 0) {
        init();
      }
      _this.pos.y -= _this.velocity;
      _this.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
      ctx.fill();
    };
  }

})();

(function () {
  (function () {
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
    coded = "jE8Lwv@tRv.tL";
    key = "gK43HIq7YTEFN6os5eVfAbBpd1xwk20cUMGlCtJzuLPrQSDmiORnXvy98ZhajW";
    shift = coded.length;
    link = "";
    for (i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) === -1) {
        ltr = coded.charAt(i);
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
        link += (key.charAt(ltr))
      }
    }
    document.getElementById("mail").setAttribute("href", "mailto:" + link);
  })();

  (function () {
    coded = "ClwAdK.ydKgyl?Mlgg";
    key = "iZTIem3LoM61fHtPRlyr4kxCEFdp7nsu2h5g9wSADWN0QBvVqK8GYcJzbUXjOa";
    shift = coded.length;
    link = "";
    for (i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) === -1) {
        ltr = coded.charAt(i);
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
        link += (key.charAt(ltr))
      }
    }
    document.getElementById("skype").setAttribute("href", "skype:" + link);
  })();
})();

