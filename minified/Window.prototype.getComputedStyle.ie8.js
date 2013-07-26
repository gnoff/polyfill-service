!function(){function getComputedStylePixel(element,property,fontSize){var value=element.currentStyle[property].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],size=value[1],suffix=value[2],rootSize;fontSize=!fontSize?fontSize:/%|em/.test(suffix)&&element.parentElement?getComputedStylePixel(element.parentElement,"fontSize",null):16;rootSize=property=="fontSize"?fontSize:/width/i.test(property)?element.clientWidth:element.clientHeight;return suffix=="%"?size/100*rootSize:suffix=="cm"?size*.3937*96:suffix=="em"?size*fontSize:suffix=="in"?size*96:suffix=="mm"?size*.3937*96/10:suffix=="pc"?size*12*96/72:suffix=="pt"?size*96/72:size}function setShortStyleProperty(style,property){var borderSuffix=property=="border"?"Width":"",t=property+"Top"+borderSuffix,r=property+"Right"+borderSuffix,b=property+"Bottom"+borderSuffix,l=property+"Left"+borderSuffix;style[property]=(style[t]==style[r]&&style[t]==style[b]&&style[t]==style[l]?[style[t]]:style[t]==style[b]&&style[l]==style[r]?[style[t],style[r]]:style[l]==style[r]?[style[t],style[r],style[b]]:[style[t],style[r],style[b],style[l]]).join(" ")}function CSSStyleDeclaration(element){var style=this,currentStyle=element.currentStyle,fontSize=getComputedStylePixel(element,"fontSize"),unCamelCase=function(match){return"-"+match.toLowerCase()},property;for(property in currentStyle){Array.prototype.push.call(style,property=="styleFloat"?"float":property.replace(/[A-Z]/,unCamelCase));if(property=="width"){style[property]=element.offsetWidth+"px"}else if(property=="height"){style[property]=element.offsetHeight+"px"}else if(property=="styleFloat"){style.float=currentStyle[property]}else if(/margin.|padding.|border.+W/.test(property)&&style[property]!="auto"){style[property]=Math.round(getComputedStylePixel(element,property,fontSize))+"px"}else{style[property]=currentStyle[property]}}setShortStyleProperty(style,"margin");setShortStyleProperty(style,"padding");setShortStyleProperty(style,"border");style.fontSize=Math.round(fontSize)+"px"}CSSStyleDeclaration.prototype={constructor:CSSStyleDeclaration,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(property){return this[property.replace(/-\w/g,function(match){return match[1].toUpperCase()})]},item:function(index){return this[index]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}};window.getComputedStyle=Window.prototype.getComputedStyle=function(element){return new CSSStyleDeclaration(element)}}();