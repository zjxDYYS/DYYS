webpackJsonp([5],{BR61:function(t,e){},I5ci:function(t,e){},L9TY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"ProgramCode1",data:function(){return{clientWidth:"300",clientHeight:"600",camera:null,scene:null,light:null,renderer:null,OrbitControls:null,mesh:null}},methods:{init:function(){console.log("ProgramCode1初始化init");var t=document.getElementById("container");this.camera=new THREE.PerspectiveCamera(70,t.clientWidth/t.clientHeight,.01,10),this.camera.position.z=1,this.OrbitControls=new THREE.OrbitControls(this.camera),this.OrbitControls.enablePan=!1,this.scene=new THREE.Scene;var e=new THREE.BoxGeometry(.2,.2,.2),i=new THREE.MeshNormalMaterial;this.mesh=new THREE.Mesh(e,i),this.scene.add(this.mesh),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(12043212),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)},windowResize:function(){this.camera.aspect=this.clientWidth/this.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.clientWidth,this.clientHeight),this.OrbitControls.update()}},mounted:function(){console.log("ProgramCode1初始化mounted");var t=this;window.onresize=function(){return t.clientWidth=""+document.documentElement.clientWidth,void(t.clientHeight=""+document.documentElement.clientHeight)},this.init(),this.animate()},watch:{clientWidth:function(t){if(!this.timerWidth){this.clientWidth=t,this.timerWidth=!0;var e=this;setTimeout(function(){e.windowResize(),e.timerWidth=!1},400)}},clientHeight:function(t){if(!this.timerHeight){this.clientHeight=t,this.timerHeight=!0;var e=this;setTimeout(function(){e.windowResize(),e.timerHeight=!1},400)}}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"container"}})},staticRenderFns:[]};var s={name:"Program1",props:["visible"],components:{ProgramCode1:i("VU/8")(n,r,!1,function(t){i("Rhrh")},"data-v-d199031c",null).exports},data:function(){return{isShowProgram:this.visible}},methods:{closThis:function(){this.$router.push({name:"Programme"})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowProgram?i("div",{staticClass:"back",on:{mousemove:function(t){t.preventDefault()},touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"showLog"},[i("ProgramCode1"),t._v(" "),i("div",{staticClass:"title"},[i("div",{staticClass:"close",on:{click:function(e){t.closThis()},touchstart:function(e){t.closThis()}}},[t._v("×")]),t._v("\n      产品选择\n    ")])],1)]):t._e()},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("I5ci"),i("BR61")},"data-v-67583e69",null);e.default=a.exports},Rhrh:function(t,e){}});
//# sourceMappingURL=5.07a784370b93ae5a89e9.js.map