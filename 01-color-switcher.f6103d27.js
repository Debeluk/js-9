let t;document.getElementById("startButton").addEventListener("click",(function(){t||(this.disabled=!0,document.getElementById("stopButton").disabled=!1,t=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3))}));
//# sourceMappingURL=01-color-switcher.f6103d27.js.map
