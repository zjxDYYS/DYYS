webpackJsonp([3],{"0yF9":function(i,e){},Bmst:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"Program5",components:{ProgramCode5:t("Y5HE").a},data:function(){return{isShowProgram:!0}},methods:{showProgram:function(){this.isShowProgram=!0},handleClose:function(i){this.$confirm("确认关闭？").then(function(e){i()}).catch(function(i){})},close:function(){var i=this.$refs.dialogItem;console.log(i)},closThis:function(){this.$router.push({name:"Programme"})}}},s={render:function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.isShowProgram?t("div",{staticClass:"program-back",on:{mousemove:function(i){i.preventDefault()},touchmove:function(i){i.preventDefault()}}},[t("div",{staticClass:"program-showLog "},[t("ProgramCode5"),i._v(" "),t("div",{staticClass:"program-title"},[t("div",{staticClass:"program-close",on:{click:function(e){i.closThis()},touchstart:function(e){i.closThis()}}},[i._v("×")])])],1)]):i._e()},staticRenderFns:[]};var r=t("VU/8")(o,s,!1,function(i){t("0yF9"),t("Uuls")},"data-v-091e7052",null);e.default=r.exports},Uuls:function(i,e){},Y5HE:function(i,e,t){"use strict";var o={"灯光3":{name:"灯光3",type:"DirectionalLight",param:{hex:16777215,intensity:1.8},shadow:{bias:0,darkness:.5,cameraFar:1e3,cameraTop:60,cameraLeft:-150,cameraNear:0,castShadow:0,cameraRight:150,cameraBottom:-100,cameraVisible:1,shadowMapWidth:8192,shadowMapHeight:8192},isHelper:!1,position:{x:0,y:1,z:284}},"灯光2":{name:"灯光2",type:"DirectionalLight",param:{hex:16777215,intensity:2},shadow:{bias:0,darkness:.5,cameraFar:1e3,cameraTop:60,cameraLeft:-150,cameraNear:0,castShadow:0,cameraRight:150,cameraBottom:-100,cameraVisible:1,shadowMapWidth:8192,shadowMapHeight:8192},isHelper:!1,position:{x:0,y:-84,z:1}},"灯光1":{name:"灯光1",type:"DirectionalLight",param:{hex:16777215,intensity:2},shadow:{bias:0,darkness:.5,cameraFar:1e3,cameraTop:60,cameraLeft:-150,cameraNear:0,castShadow:0,cameraRight:150,cameraBottom:-100,cameraVisible:1,shadowMapWidth:8192,shadowMapHeight:8192},isHelper:!1,position:{x:-7,y:528,z:-2}},isDefault:!0,type:"fullShow"},s={imgPath:"../../static/model/envMap/",imgName:["1_l","1_r","1_u","1_d","1_f","1_b"],format:"jpg"},r={1:{map:"./static/model/program5/1map.jpg",roughnessMap:"./static/model/program5/1roughness.jpg",normalMap:"./static/model/program5/1normal.jpg"}},h={name:"ProgramCode5",components:{LoadProgress:t("0Ivq").a},data:function(){return{clientWidth:"300",clientHeight:"300",camera:null,scene:null,lights:o,renderer:null,OrbitControls:null,ambientLight:null,pointLight:null,spotLight:null,OBJLoader:null,MTLLoader:null,object:null,DRACOLoader:null,GLTFLoader:null,wordSize:1,DRACOLoaderPath:"./static/plugins/gltf/",GLTFLoaderPath:"./static/model/program4/Bee.glb",textures:r,envImg:s,defMaterial:null,wordGroup:null,zhao:null,jia:null,xuan:null,jian:null,li:null}},methods:{init:function(){console.log("ProgramCode1初始化init");this.$refs;this.container=document.getElementById("container"),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(60,this.clientWidth/this.clientHeight,.01,1e3),this.camera.position.set(0,2,30),this.ambientLight=new THREE.AmbientLight(16777215,.6),this.scene.add(this.ambientLight),this.$lights.init(this.scene,this.lights),this.OrbitControls=new THREE.OrbitControls(this.camera,this.container),this.OrbitControls.enablePan=!1,this.initgrid(),this.initDefMat(),this.word(),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(11584985),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.renderer.setSize(this.clientWidth,this.clientHeight),this.renderer.gammaFactor=2,this.renderer.gammaInput=!0,this.renderer.gammaOutput=!0,this.renderer.localClippingEnabled=!1,this.renderer.toneMappingExposure=1,this.renderer.toneMappingWhitePoint=1,this.container.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.OrbitControls.update(),this.renderer.render(this.scene,this.camera)},windowResize:function(){this.camera.updateProjectionMatrix(),this.camera.aspect=this.clientWidth/this.clientHeight,this.renderer.setSize(this.clientWidth,this.clientHeight)},initgrid:function(){var i=new THREE.GridHelper(80,30,4146765,8290176);this.scene.add(i)},initDefMat:function(){var i={type:"MeshStandardMaterial",name:"标准材质(MeshStandardMaterial)",color:"#ffffff",map:"../../static/model/program5/1-map.jpg",alphaMap:void 0,repeat:{x:1,y:1},offset:{x:0,y:0},roughness:1,roughnessMap:"../../static/model/program5/1-roughness.jpg",metalness:.2,metalnessMap:void 0,lightMap:void 0,lightMapIntensity:1,aoMap:void 0,aoMapIntensity:1,emissive:"#000000",emissiveIntensity:1,emissiveMap:void 0,bumpMap:void 0,bumpScale:1,normalMap:"../../static/model/program5/1-normal.jpg",normalScale:1,displacementMap:void 0,displacementScale:1,displacementBias:0,envMap:void 0,envMapIntensity:1};this.defMaterial=this.$material.getMtl(i)},changeColor:function(i,e){console.log("更改花色：花色"+e);var t=this;i.children.forEach(function(i,o,s){var r=i;(r.type="Mesh")&&(t.$material.changeMaterial(r.material,"map",t.textures[e].map,{x:.5,y:.5}),t.$material.changeMaterial(r.material,"roughnessMap",t.textures[e].roughnessMap,{x:.5,y:.5}),t.$material.changeMaterial(r.material,"normalMap",t.textures[e].normalMap,{x:.5,y:.5}))})},word:function(){this.wordGroup=new THREE.Group,this.zhao=this.Zhao(),this.jia=this.Jia(),this.xuan=this.Xuan(),this.jian=this.Jian(),this.li=this.Li(),this.changeColor(this.zhao,1),this.changeColor(this.jia,1),this.changeColor(this.xuan,1),this.changeColor(this.jian,1),this.changeColor(this.li,1),this.wordGroup.add(this.zhao),this.wordGroup.add(this.jia),this.wordGroup.add(this.xuan),this.wordGroup.add(this.jian),this.wordGroup.add(this.li),this.scene.add(this.wordGroup)},Zhao:function(){var i=new THREE.Group,e=this.defMaterial.clone(),t=new THREE.Mesh(new THREE.BoxGeometry(3*this.wordSize,1*this.wordSize,1*this.wordSize),e);t.position.set(0*this.wordSize,-.5*this.wordSize,0*this.wordSize),i.add(t);var o=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,8*this.wordSize,1*this.wordSize),e);o.position.set(0*this.wordSize,-2.5*this.wordSize,0*this.wordSize),i.add(o);var s=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);s.position.set(0*this.wordSize,-2.5*this.wordSize,0*this.wordSize),i.add(s);var r=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);r.position.set(1*this.wordSize,-4.5*this.wordSize,0*this.wordSize),i.add(r);var h=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,3*this.wordSize,1*this.wordSize),e);h.position.set(-2*this.wordSize,-6*this.wordSize,0*this.wordSize),h.rotation.set(0,0,-.1*Math.PI),i.add(h);var d=new THREE.Mesh(new THREE.BoxGeometry(8*this.wordSize,1*this.wordSize,1*this.wordSize),e);d.position.set(2*this.wordSize,-6.5*this.wordSize,0*this.wordSize),d.rotation.set(0,0,-.025*Math.PI),i.add(d);var n=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,6*this.wordSize,1*this.wordSize),e);n.position.set(3.5*this.wordSize,-2.5*this.wordSize,0*this.wordSize),n.rotation.set(0,0,.1*Math.PI),i.add(n);var a=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,6*this.wordSize,1*this.wordSize),e);return a.position.set(3.5*this.wordSize,-2.5*this.wordSize,0*this.wordSize),a.rotation.set(0,0,-.1*Math.PI),i.add(a),i.position.set(-13*this.wordSize,10*this.wordSize,0*this.wordSize),i},Jia:function(){var i=new THREE.Group,e=this.defMaterial.clone(),t=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);t.position.set(0*this.wordSize,.5*this.wordSize,0*this.wordSize),i.add(t);var o=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,6*this.wordSize,1*this.wordSize),e);o.position.set(1.5*this.wordSize,-2*this.wordSize,0*this.wordSize),i.add(o);var s=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,1*this.wordSize,1*this.wordSize),e);s.position.set(1*this.wordSize,-5*this.wordSize,0*this.wordSize),s.rotation.set(0,0,-.025*Math.PI),i.add(s);var r=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,8*this.wordSize,1*this.wordSize),e);r.position.set(-1*this.wordSize,-2*this.wordSize,0*this.wordSize),r.rotation.set(0,0,-.025*Math.PI),i.add(r);var h=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,5*this.wordSize,1*this.wordSize),e);h.position.set(3.5*this.wordSize,-1.5*this.wordSize,0*this.wordSize),i.add(h);var d=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,5*this.wordSize,1*this.wordSize),e);d.position.set(5.5*this.wordSize,-1.5*this.wordSize,0*this.wordSize),i.add(d);var n=new THREE.Mesh(new THREE.BoxGeometry(3*this.wordSize,1*this.wordSize,1*this.wordSize),e);n.position.set(4.5*this.wordSize,.5*this.wordSize,0*this.wordSize),i.add(n);var a=new THREE.Mesh(new THREE.BoxGeometry(3*this.wordSize,1*this.wordSize,1*this.wordSize),e);return a.position.set(4.5*this.wordSize,-4.5*this.wordSize,0*this.wordSize),i.add(a),i.position.set(-3*this.wordSize,9*this.wordSize,0*this.wordSize),i},Xuan:function(){var i=new THREE.Group,e=this.defMaterial.clone(),t=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);t.position.set(0*this.wordSize,.05*this.wordSize,0*this.wordSize),i.add(t);var o=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);o.position.set(.5*this.wordSize,-1.5*this.wordSize,0*this.wordSize),i.add(o);var s=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);s.position.set(.5*this.wordSize,-3.5*this.wordSize,0*this.wordSize),i.add(s);var r=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,5*this.wordSize,1*this.wordSize),e);r.position.set(2*this.wordSize,-5.5*this.wordSize,0*this.wordSize),i.add(r);var h=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,1*this.wordSize,1*this.wordSize),e);h.position.set(1.5*this.wordSize,-8*this.wordSize,0*this.wordSize),h.rotation.set(0,0,-.025*Math.PI),i.add(h);var d=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,7*this.wordSize,1*this.wordSize),e);d.position.set(-.25*this.wordSize,-5.5*this.wordSize,0*this.wordSize),d.rotation.set(0,0,-.025*Math.PI),i.add(d);var n=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,2.5*this.wordSize,1*this.wordSize),e);n.position.set(3.4*this.wordSize,-.45*this.wordSize,0*this.wordSize),n.rotation.set(0,0,-.025*Math.PI),i.add(n);var a=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);a.position.set(5.5*this.wordSize,-.45*this.wordSize,0*this.wordSize),i.add(a);var w=new THREE.Mesh(new THREE.BoxGeometry(3*this.wordSize,1*this.wordSize,1*this.wordSize),e);w.position.set(5.25*this.wordSize,-2.5*this.wordSize,0*this.wordSize),i.add(w);var S=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,2*this.wordSize,1*this.wordSize),e);S.position.set(7*this.wordSize,-3*this.wordSize,0*this.wordSize),S.rotation.set(0,0,-.025*Math.PI),i.add(S);var z=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,5*this.wordSize,1*this.wordSize),e);z.position.set(5.25*this.wordSize,-5.5*this.wordSize,0*this.wordSize),i.add(z);var E=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);E.position.set(6*this.wordSize,-5.5*this.wordSize,0*this.wordSize),i.add(E);var m=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,3*this.wordSize,1*this.wordSize),e);m.position.set(3.5*this.wordSize,-7.5*this.wordSize,0*this.wordSize),m.rotation.set(0,0,-.025*Math.PI),i.add(m);var l=new THREE.Mesh(new THREE.BoxGeometry(5*this.wordSize,1*this.wordSize,1*this.wordSize),e);return l.position.set(6*this.wordSize,-8*this.wordSize,0*this.wordSize),l.rotation.set(0,0,-.025*Math.PI),i.add(l),i.position.set(8*this.wordSize,11.25*this.wordSize,0*this.wordSize),i},Jian:function(){var i=new THREE.Group,e=this.defMaterial.clone(),t=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,2*this.wordSize,1*this.wordSize),e);t.position.set(0*this.wordSize,0*this.wordSize,0*this.wordSize),t.rotation.set(0,0,-.025*Math.PI),i.add(t);var o=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,.9*this.wordSize,1*this.wordSize),e);o.position.set(1.5*this.wordSize,0*this.wordSize,0*this.wordSize),i.add(o);var s=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);s.position.set(1.05*this.wordSize,-1*this.wordSize,0*this.wordSize),s.rotation.set(0,0,.25*Math.PI),i.add(s);var r=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,2*this.wordSize,1*this.wordSize),e);r.position.set(4*this.wordSize,0*this.wordSize,0*this.wordSize),r.rotation.set(0,0,-.025*Math.PI),i.add(r);var h=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,.9*this.wordSize,1*this.wordSize),e);h.position.set(5.5*this.wordSize,0*this.wordSize,0*this.wordSize),i.add(h);var d=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);d.position.set(5.05*this.wordSize,-1*this.wordSize,0*this.wordSize),d.rotation.set(0,0,.25*Math.PI),i.add(d);var n=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,1*this.wordSize,1*this.wordSize),e);n.position.set(1.05*this.wordSize,-2.5*this.wordSize,0*this.wordSize),n.rotation.set(0,0,.25*Math.PI),i.add(n);var a=new THREE.Mesh(new THREE.BoxGeometry(.9*this.wordSize,6*this.wordSize,1*this.wordSize),e);a.position.set(0*this.wordSize,-6*this.wordSize,0*this.wordSize),i.add(a);var w=new THREE.Mesh(new THREE.BoxGeometry(4.25*this.wordSize,.8*this.wordSize,1*this.wordSize),e);w.position.set(4.25*this.wordSize,-2.5*this.wordSize,0*this.wordSize),i.add(w);var S=new THREE.Mesh(new THREE.BoxGeometry(.9*this.wordSize,6.5*this.wordSize,1*this.wordSize),e);S.position.set(5.95*this.wordSize,-6*this.wordSize,0*this.wordSize),i.add(S);var z=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,.8*this.wordSize,1*this.wordSize),e);z.position.set(5.45*this.wordSize,-8.95*this.wordSize,0*this.wordSize),z.rotation.set(0,0,-.1*Math.PI),i.add(z);var E=new THREE.Mesh(new THREE.BoxGeometry(2.5*this.wordSize,.8*this.wordSize,1*this.wordSize),e);E.position.set(3*this.wordSize,-4*this.wordSize,0*this.wordSize),i.add(E);var m=new THREE.Mesh(new THREE.BoxGeometry(2.5*this.wordSize,.8*this.wordSize,1*this.wordSize),e);m.position.set(3*this.wordSize,-6*this.wordSize,0*this.wordSize),i.add(m);var l=new THREE.Mesh(new THREE.BoxGeometry(2.5*this.wordSize,.8*this.wordSize,1*this.wordSize),e);l.position.set(3*this.wordSize,-8*this.wordSize,0*this.wordSize),i.add(l);var c=new THREE.Mesh(new THREE.BoxGeometry(.9*this.wordSize,5*this.wordSize,1*this.wordSize),e);c.position.set(2*this.wordSize,-6*this.wordSize,0*this.wordSize),i.add(c);var p=new THREE.Mesh(new THREE.BoxGeometry(.9*this.wordSize,5*this.wordSize,1*this.wordSize),e);return p.position.set(4*this.wordSize,-6*this.wordSize,0*this.wordSize),i.add(p),i.position.set(-10*this.wordSize,-2*this.wordSize,0*this.wordSize),i},Li:function(){var i=new THREE.Group,e=this.defMaterial.clone(),t=new THREE.Mesh(new THREE.BoxGeometry(4*this.wordSize,1*this.wordSize,1*this.wordSize),e);t.position.set(0*this.wordSize,.5*this.wordSize,0*this.wordSize),i.add(t);var o=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,6*this.wordSize,1*this.wordSize),e);o.position.set(1.5*this.wordSize,-2*this.wordSize,0*this.wordSize),i.add(o);var s=new THREE.Mesh(new THREE.BoxGeometry(2*this.wordSize,1*this.wordSize,1*this.wordSize),e);s.position.set(1*this.wordSize,-5*this.wordSize,0*this.wordSize),s.rotation.set(0,0,-.025*Math.PI),i.add(s);var r=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,8*this.wordSize,1*this.wordSize),e);r.position.set(-1*this.wordSize,-1.25*this.wordSize,0*this.wordSize),r.rotation.set(0,0,-.025*Math.PI),i.add(r);var h=new THREE.Mesh(new THREE.BoxGeometry(6*this.wordSize,1*this.wordSize,1*this.wordSize),e);h.position.set(-.25*this.wordSize,2.5*this.wordSize,0*this.wordSize),i.add(h);var d=new THREE.Mesh(new THREE.BoxGeometry(1*this.wordSize,9*this.wordSize,1*this.wordSize),e);return d.position.set(-3*this.wordSize,-1.5*this.wordSize,0*this.wordSize),d.rotation.set(0,0,-.025*Math.PI),i.add(d),i.position.set(7.5*this.wordSize,-4.5*this.wordSize,0*this.wordSize),i}},mounted:function(){console.log("ProgramCode1初始化mounted");var i=this;this.clientWidth=""+document.documentElement.clientWidth,this.clientHeight=""+document.documentElement.clientHeight,window.onresize=function(){return i.clientWidth=""+document.documentElement.clientWidth,void(i.clientHeight=""+document.documentElement.clientHeight)},this.init(),this.animate()},watch:{clientWidth:function(i){if(!this.timerWidth){this.clientWidth=i,this.timerWidth=!0;var e=this;setTimeout(function(){e.windowResize(),e.timerWidth=!1},400)}},clientHeight:function(i){if(!this.timerHeight){this.clientHeight=i,this.timerHeight=!0;var e=this;setTimeout(function(){e.windowResize(),e.timerHeight=!1},400)}}}},d={render:function(){var i=this.$createElement,e=this._self._c||i;return e("div",{attrs:{id:"container"}},[e("LoadProgress",{ref:"loadingProgress"})],1)},staticRenderFns:[]};var n=t("VU/8")(h,d,!1,function(i){t("ZLaw")},"data-v-4250f697",null);e.a=n.exports},ZLaw:function(i,e){}});
//# sourceMappingURL=3.12e077cbc447a81dedf3.js.map