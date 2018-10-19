webpackJsonp(["front-end/HTML/elements/forms/select/index.md"],{bEYq:function(n,s){n.exports={content:["article",["h1",["code","select"]," \u5143\u7d20\u6807\u7b7e"],["p","\u662f\u4e00\u79cd\u8868\u5355\u63a7\u4ef6\uff0c\u53ef\u521b\u5efa\u9009\u9879\u83dc\u5355,\u4f9b\u7528\u6237\u9009\u62e9"],["h2","\u7528\u6cd5"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span><span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  \u5b50\u5143\u7d20\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>'},["code","<select name=''>\n  \u5b50\u5143\u7d20\n</select>"]],["h2","\u5b50\u5143\u7d20\u6807\u7b7e"],["ol",["li",["p","forms: ",["code","<optgroup>"],"\u3001",["code","<option>"]]],["li",["p","scrpting: ",["code","<script>"],"\u3001",["code","<template>"]]]],["h2","\u5c5e\u6027"],["ul",["li",["p",["a",{title:null,href:"/front-end/HTML/attribute#anchor-\u5168\u5c40\u5c5e\u6027"},"\u5168\u5c40\u5c5e\u6027"]]],["li",["p","\u79c1\u6709\u5c5e\u6027\u5982\u4e0b:"]]],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u503c"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td",["code","autofocus"]],["td"],["td"]],["tr",["td",["code","disabled"]],["td"],["td"]],["tr",["td",["code","form"]],["td"],["td"]],["tr",["td",["code","multiple"]],["td"],["td"]],["tr",["td",["code","name"]],["td"],["td"]],["tr",["td",["code","required"]],["td"],["td"]],["tr",["td",["code","size"]],["td"],["td"]]]],["h2","CSS \u9ed8\u8ba4\u6837\u5f0f"],["pre",{lang:"css",highlighted:'<span class="token selector">select<span class="token pseudo-class">:not(:-internal-list-box)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> visible <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">select </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token number">400</span> <span class="token number">13.3333</span>px Arial<span class="token punctuation">;</span>\n  <span class="token property">text-rendering</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">text-indent</span><span class="token punctuation">:</span> <span class="token number">0</span>px<span class="token punctuation">;</span>\n  <span class="token property">text-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span>em<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token number">1</span>px<span class="token punctuation">;</span>\n  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">0</span>px<span class="token punctuation">;</span>\n  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">169</span>, <span class="token number">169</span>, <span class="token number">169</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-image</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>\n  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">word-spacing</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>\n  <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n  <span class="token property">-webkit-rtl-ordering</span><span class="token punctuation">:</span> logical<span class="token punctuation">;</span>\n  <span class="token property">appearance</span><span class="token punctuation">:</span> menulist<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","select:not(:-internal-list-box) {\n  overflow: visible !important;\n}\n\nselect {\n  display: inline-block;\n  color: black;\n  font: 400 13.3333px Arial;\n  text-rendering: auto;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  align-items: center;\n  margin: 0em;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 0px;\n  border-color: rgb(169, 169, 169);\n  border-image: initial;\n  white-space: pre;\n  letter-spacing: normal;\n  word-spacing: normal;\n  cursor: default;\n  writing-mode: horizontal-tb !important;\n  box-sizing: border-box;\n  -webkit-rtl-ordering: logical;\n  appearance: menulist;\n}"]],["h2","ARIA \u65e0\u969c\u788d\u9605\u8bfb"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u9690\u5f0f\u89d2\u8272"],["th","\u53ef\u80fd\u5b58\u5728\u89d2\u8272\u3001\u7279\u5f81\u3001\u72b6\u6001"]]],["tbody",["tr",["td","\u6ca1\u6709",["code","multiple"],"\u5c5e\u6027\u4e14 \u5c5e\u6027",["code","size"],"\u7684\u503c\u5927\u4e8e1"],["td",["code","role='combobox'"]],["td","Roles: \u4efb\u4f55\u89d2\u8272\u3002 ",["br"]," aria-*: \u5168\u5c40\u5c5e\u6027\u4ee5\u53ca\u89d2\u8272\u6240\u5bf9\u5e94\u7684\u79c1\u6709\u5c5e\u6027"]],["tr",["td","\u5177\u6709",["code","multiple"],"\u5c5e\u6027\u4e14 \u5c5e\u6027",["code","size"],"\u7684\u503c\u5927\u4e8e1"],["td",["code","role='listbox'"]],["td","Roles: \u4efb\u4f55\u89d2\u8272\u3002 ",["br"]," aria-*: \u5168\u5c40\u5c5e\u6027\u4ee5\u53ca\u89d2\u8272\u6240\u5bf9\u5e94\u7684\u79c1\u6709\u5c5e\u6027"]]]]],footnote:"",meta:{title:"<select>",category:"element",type:"sec-forms",anchor:"the-select-element",order:5,filename:"front-end/HTML/elements/forms/select/index.md"},anchor:[{title:"select \u5143\u7d20\u6807\u7b7e",tag:"h1",href:"#anchor-select-\u5143\u7d20\u6807\u7b7e"},{title:"\u7528\u6cd5",tag:"h2",href:"#anchor-\u7528\u6cd5"},{title:"\u5b50\u5143\u7d20\u6807\u7b7e",tag:"h2",href:"#anchor-\u5b50\u5143\u7d20\u6807\u7b7e"},{title:"\u5c5e\u6027",tag:"h2",href:"#anchor-\u5c5e\u6027"},{title:"CSS \u9ed8\u8ba4\u6837\u5f0f",tag:"h2",href:"#anchor-CSS-\u9ed8\u8ba4\u6837\u5f0f"},{title:"ARIA \u65e0\u969c\u788d\u9605\u8bfb",tag:"h2",href:"#anchor-ARIA-\u65e0\u969c\u788d\u9605\u8bfb"}]}}});