!function(){var t;document.getElementById("startButton").addEventListener("click",(function(){t||(this.disabled=!0,document.getElementById("stopButton").disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3))})),document.getElementById("stopButton").addEventListener("click",(function(){clearInterval(t),document.getElementById("startButton").disabled=!1,this.disabled=!0,t=void 0}))}();
//# sourceMappingURL=01-color-switcher.1b3e9853.js.map
