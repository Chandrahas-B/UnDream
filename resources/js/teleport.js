/* global AFRAME, THREE */

var prevAst = null

// AFRAME.registerComponent('x-button-listener', {
//   init: function () {
//     var el = this.el;
//     el.addEventListener('xbuttondown', function (evt) {
//       el.setAttribute('visible', !el.getAttribute('visible'));
//       console.log("X button")
//     });
//   }
// });

AFRAME.registerComponent('teleport', {

  init () {
    this.el.addEventListener('click', this.click.bind(this));
    // disable right-click context menu

    window.addEventListener('contextmenu', event => event.preventDefault());
  },

  click (event) {
    console.log("Clicked!");
    console.log(this.el);
    var coor = this.el.getAttribute("position")
    console.log(this.el.getAttribute("position").x)
    // localStorage.setItem('id',coor);
    
    var curAst =this.el.getAttribute("id")
    console.log(prevAst + " " + curAst)

    if( prevAst == curAst)
    {
        // console.log(window.location.href)
        var url =  window.location.href
        console.log("Redirect mian!")
        var newUrl = url.substring(0,url.lastIndexOf('/'))+"/basic.html"
        localStorage.setItem('id',curAst)
        console.log(newUrl)
        console.log(document.getElementById(curAst))
        // window.location.href = newUrl;
        final_loading(curAst);
        console.log(curAst)
        console.log(localStorage.getItem('id',curAst))
    }
    else  
    {
        prevAst = curAst
    }
    
    var cam = document.getElementById("rig")
    cam.setAttribute("animation",'property:position; to:'+coor.x+" "+(coor.y-1)+" "+(coor.z+2)+";"+" dur:1000;")


    console.log(cam.getAttribute("rotation"))
    // cam.setAttribute("rotation",{x:0,y:0,z:0})


    // const mouseEvent = event.detail.mouseEvent;

    // if (!mouseEvent) return;

    // if (mouseEvent.button === 0) {
    //   this.r = 1 - this.r;
    // } else if (mouseEvent.button === 1) {
    //   this.g = 1 - this.g;
    // } else if (mouseEvent.button === 2) {
    //   this.b = 1 - this.b;
    // }

    // const color = new THREE.Color(this.r, this.g, this.b);
    // this.el.setAttribute('color', `#${color.getHexString()}`);
  }
});
