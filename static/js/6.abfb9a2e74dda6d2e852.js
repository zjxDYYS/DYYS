webpackJsonp([6],{"9piN":function(t,i){},Fy8r:function(t,i){},Mtrt:function(t,i){},TE8j:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={name:"ProgramCode2",components:{LoadProgress:e("0Ivq").a},data:function(){return{clientWidth:"300",clientHeight:"600",camera:null,scene:null,light:null,renderer:null,OrbitControls:null,ambientLight:null,pointLight:null,directionalLight:null,spotLight:null,OBJLoader:null,MTLLoader:null,object:null,loadObj:"./static/model/program2/xinhuxing.obj",loadMtl:"./static/model/program2/xinhuxing.mtl"}},methods:{init:function(){var t=this;console.log("ProgramCode1初始化init");var i=this,e=document.getElementById("container");this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(60,e.clientWidth/e.clientHeight,.01,1e3),this.camera.position.set(0,20,50),this.ambientLight=new THREE.AmbientLight(16777215,.8),this.scene.add(this.ambientLight),this.pointLight=new THREE.PointLight(16777215,.2),this.camera.add(this.pointLight),this.directionalLight=new THREE.DirectionalLight(16777215,.5),this.directionalLight.position.set(0,50,65),this.directionalLight.castShadow=!0,this.directionalLight.castShadow=!0,this.directionalLight.shadow.camera.near=1,this.directionalLight.shadow.camera.far=100,this.directionalLight.shadow.camera.left=-50,this.directionalLight.shadow.camera.right=50,this.directionalLight.shadow.camera.top=50,this.directionalLight.shadow.camera.bottom=-50,this.directionalLight.shadow.mapSize.width=1024,this.directionalLight.shadow.mapSize.height=1024,this.scene.add(this.directionalLight),this.OrbitControls=new THREE.OrbitControls(this.camera),this.OrbitControls.enablePan=!1,this.OrbitControls.enableZoom=!1,this.OrbitControls.maxAzimuthAngle=.4,this.OrbitControls.maxPolarAngle=1.5,this.OrbitControls.minAzimuthAngle=-.2,this.OrbitControls.minPolarAngle=1.1,this.MTLLoader=new THREE.MTLLoader,this.OBJLoader=new THREE.OBJLoader,this.$refs.loadingProgress._data.showLoadingSign=!0,this.MTLLoader.load(this.loadMtl,function(e){e.preload(),t.OBJLoader.setMaterials(e),t.OBJLoader.load(t.loadObj,function(e){e.scale.set(.01,.01,.01),i.object=e,i.object.children.forEach(function(t){t.receiveShadow=!0,t.castShadow=!0}),i.object.receiveShadow=!0,i.object.castShadow=!0,t.scene.add(i.object),i.$refs.loadingProgress._data.showLoadingSign=!1})},function(t){i.$refs.loadingProgress.onProgress(t)},function(t){console.error(t)}),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(7920881),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)},windowResize:function(){this.camera.aspect=this.clientWidth/this.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.clientWidth,this.clientHeight),this.OrbitControls.update()}},mounted:function(){console.log("ProgramCode1初始化mounted");var t=this;window.onresize=function(){return t.clientWidth=""+document.documentElement.clientWidth,void(t.clientHeight=""+document.documentElement.clientHeight)},this.init(),this.animate()},watch:{clientWidth:function(t){if(!this.timerWidth){this.clientWidth=t,this.timerWidth=!0;var i=this;setTimeout(function(){i.windowResize(),i.timerWidth=!1},400)}},clientHeight:function(t){if(!this.timerHeight){this.clientHeight=t,this.timerHeight=!0;var i=this;setTimeout(function(){i.windowResize(),i.timerHeight=!1},400)}}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"container"}},[i("LoadProgress",{ref:"loadingProgress"})],1)},staticRenderFns:[]};var r={name:"Program2",components:{ProgramCode2:e("VU/8")(n,o,!1,function(t){e("Mtrt")},"data-v-d7451e36",null).exports},data:function(){return{isShowProgram:!0}},methods:{showProgram:function(){this.isShowProgram=!0},handleClose:function(t){this.$confirm("确认关闭？").then(function(i){t()}).catch(function(t){})},closThis:function(){this.$router.push({name:"Programme"})}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.isShowProgram?e("div",{staticClass:"program-back",on:{mousemove:function(t){t.preventDefault()},touchmove:function(t){t.preventDefault()}}},[e("div",{staticClass:"program-showLog "},[e("ProgramCode2"),t._v(" "),e("div",{staticClass:"program-title"},[e("div",{staticClass:"program-close",on:{click:function(i){t.closThis()},touchstart:function(i){t.closThis()}}},[t._v("×")])])],1)]):t._e()},staticRenderFns:[]};var s=e("VU/8")(r,a,!1,function(t){e("9piN"),e("Fy8r")},"data-v-1bb57e00",null);i.default=s.exports}});
//# sourceMappingURL=6.abfb9a2e74dda6d2e852.js.map