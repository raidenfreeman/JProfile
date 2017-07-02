/**
 * Created by Konnos on 6/24/2017.
 */
(function () {

  var width, height, canvas, ctx, circles, target, animateHeader = true;

  // Main
  //initHeader();
  //addListeners();

  function initHeader() {
    calculateHeightWidth();
    target = {x: 0, y: height};

    // largeHeader = document.getElementById('large-header');
    // largeHeader.style.height = height + 'px';

    canvas = document.getElementById('particle-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    //var leafpath = document.getElementById("path4137");
    //var l = new Path2D(leafpath.getAttribute('d'));
    //ctx.fillStyle = 'rgba(255,255,255,0.05)';
    //ctx.fill(l);

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
    //
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

/*!
 Waypoints - 4.0.1
 Copyright © 2011-2016 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
 */
!function () {
  "use strict";
  function t(n) {
    if (!n)throw new Error("No options passed to Waypoint constructor");
    if (!n.element)throw new Error("No element option passed to Waypoint constructor");
    if (!n.handler)throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }

  var e = 0, i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function () {
    return this.enabled = !1, this
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function () {
    return this.group.next(this)
  }, t.prototype.previous = function () {
    return this.group.previous(this)
  }, t.invokeAll = function (t) {
    var e = [];
    for (var n in i)e.push(i[n]);
    for (var o = 0, r = e.length; r > o; o++)e[o][t]()
  }, t.destroyAll = function () {
    t.invokeAll("destroy")
  }, t.disableAll = function () {
    t.invokeAll("disable")
  }, t.enableAll = function () {
    t.Context.refreshAll();
    for (var e in i)i[e].enabled = !0;
    return this
  }, t.refreshAll = function () {
    t.Context.refreshAll()
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight()
    }, "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(), function () {
  "use strict";
  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }

  var i = 0, n = {}, o = window.Waypoint, r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1
    }

    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
    })
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }

    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
    })
  }, e.prototype.handleResize = function () {
    o.Context.refreshAll()
  }, e.prototype.handleScroll = function () {
    var t = {}, e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      }, vertical: {newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up"}
    };
    for (var i in e) {
      var n = e[i], o = n.newScroll > n.oldScroll, r = o ? n.forward : n.backward;
      for (var s in this.waypoints[i]) {
        var l = this.waypoints[i][s];
        if (null !== l.triggerPoint) {
          var a = n.oldScroll < l.triggerPoint, h = n.newScroll >= l.triggerPoint, p = a && h, u = !a && !h;
          (p || u) && (l.queueTrigger(r), t[l.group.id] = l.group)
        }
      }
    }
    for (var d in t)t[d].flushTriggers();
    this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function () {
    var t = [];
    for (var e in this.waypoints)for (var i in this.waypoints[e])t.push(this.waypoints[e][i]);
    for (var n = 0, o = t.length; o > n; n++)t[n].destroy()
  }, e.prototype.refresh = function () {
    var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var r in t) {
      var s = t[r];
      for (var l in this.waypoints[r]) {
        var a, h, p, u, d, f = this.waypoints[r][l], c = f.options.offset, w = f.triggerPoint, y = 0, g = null == w;
        f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]), "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c), f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))), a = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(y + a - c), h = w < s.oldScroll, p = f.triggerPoint >= s.oldScroll, u = h && p, d = !h && !p, !g && u ? (f.queueTrigger(s.backward), n[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward), n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n[f.group.id] = f.group)
      }
    }
    return o.requestAnimationFrame(function () {
      for (var t in n)n[t].flushTriggers()
    }), this
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function () {
    for (var t in n)n[t].refresh()
  }, e.findByElement = function (t) {
    return n[t.waypointContextKey]
  }, window.onload = function () {
    r && r(), e.refreshAll()
  }, o.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e)
  }, o.Context = e
}(), function () {
  "use strict";
  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
  }

  var n = {vertical: {}, horizontal: {}}, o = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {up: [], down: [], left: [], right: []}
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var n = this.triggerQueues[i], o = "up" === i || "left" === i;
      n.sort(o ? e : t);
      for (var r = 0, s = n.length; s > r; r += 1) {
        var l = n[r];
        (l.options.continuous || r === n.length - 1) && l.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints), n = i === this.waypoints.length - 1;
    return n ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function (t) {
    var e = o.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function () {
    return this.waypoints[0]
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function (t) {
    return n[t.axis][t.name] || new i(t)
  }, o.Group = i
}(), function () {
  "use strict";
  function t(t) {
    return t === t.window
  }

  function e(e) {
    return t(e) ? e : e.defaultView
  }

  function i(t) {
    this.element = t, this.handlers = {}
  }

  var n = window.Waypoint;
  i.prototype.innerHeight = function () {
    var e = t(this.element);
    return e ? this.element.innerHeight : this.element.clientHeight
  }, i.prototype.innerWidth = function () {
    var e = t(this.element);
    return e ? this.element.innerWidth : this.element.clientWidth
  }, i.prototype.off = function (t, e) {
    function i(t, e, i) {
      for (var n = 0, o = e.length - 1; o > n; n++) {
        var r = e[n];
        i && i !== r || t.removeEventListener(r)
      }
    }

    var n = t.split("."), o = n[0], r = n[1], s = this.element;
    if (r && this.handlers[r] && o) i(s, this.handlers[r][o], e), this.handlers[r][o] = []; else if (o)for (var l in this.handlers)i(s, this.handlers[l][o] || [], e), this.handlers[l][o] = []; else if (r && this.handlers[r]) {
      for (var a in this.handlers[r])i(s, this.handlers[r][a], e);
      this.handlers[r] = {}
    }
  }, i.prototype.offset = function () {
    if (!this.element.ownerDocument)return null;
    var t = this.element.ownerDocument.documentElement, i = e(this.element.ownerDocument), n = {top: 0, left: 0};
    return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
      top: n.top + i.pageYOffset - t.clientTop,
      left: n.left + i.pageXOffset - t.clientLeft
    }
  }, i.prototype.on = function (t, e) {
    var i = t.split("."), n = i[0], o = i[1] || "__default", r = this.handlers[o] = this.handlers[o] || {},
      s = r[n] = r[n] || [];
    s.push(e), this.element.addEventListener(n, e)
  }, i.prototype.outerHeight = function (e) {
    var i, n = this.innerHeight();
    return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n
  }, i.prototype.outerWidth = function (e) {
    var i, n = this.innerWidth();
    return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n
  }, i.prototype.scrollLeft = function () {
    var t = e(this.element);
    return t ? t.pageXOffset : this.element.scrollLeft
  }, i.prototype.scrollTop = function () {
    var t = e(this.element);
    return t ? t.pageYOffset : this.element.scrollTop
  }, i.extend = function () {
    function t(t, e) {
      if ("object" == typeof t && "object" == typeof e)for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
      return t
    }

    for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++)t(e[0], e[i]);
    return e[0]
  }, i.inArray = function (t, e, i) {
    return null == e ? -1 : e.indexOf(t, i)
  }, i.isEmptyObject = function (t) {
    for (var e in t)return !1;
    return !0
  }, n.adapters.push({name: "noframework", Adapter: i}), n.Adapter = i
}();

(function () {

  var w1 = document.getElementById('awards');
  w1.innerHTML = "";
  var w2 = document.getElementById('articles')
  w2.innerHTML = "";

  var waypoint = new Waypoint({
    element: document.getElementById('awards'),
    handler: function () {
      animateElement(1500, w1); //TODO: UNCOMMENT THIS LINE
      animateElement(1500, w2); //TODO: UNCOMMENT THIS LINE
      // console.log("hellol");
      this.destroy();
    },
    offset: '80%'
  });

  function animateText(duration, timing, draw) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      var progress = timing(timeFraction);

      draw(progress); // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  function animateElement(duration, element) {
    var valueToReach = element.getAttribute("animate-value");
    animateText(duration, function (timeFraction) {
        //return Math.pow(timeFraction, 2);
        var value = 1 - Math.pow(1 - timeFraction, 4);
        return value > 0 ? value : 0;
      }, function (progress) {
        element.innerHTML = Math.round(progress * valueToReach);
      }
    );
  }


})();
