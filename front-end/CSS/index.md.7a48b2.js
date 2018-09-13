webpackJsonp(["front-end/CSS/index.md"],{SlZr:function(t,e){t.exports={content:["article",["h1","CSS \u4ecb\u7ecd"],["p","CSS \u5373 Cascading Style Sheets \u7684\u7f29\u5199\uff0c\u5c42\u53e0\u6837\u5f0f\u8868\u662f\u4e00\u79cd\u5411Web\u6587\u6863\u6dfb\u52a0\u6837\u5f0f\u7684\u673a\u5236\u3002CSS\u4e0d\u4ec5\u53ef\u4ee5\u9759\u6001\u5730\u4fee\u9970\u7f51\u9875\uff0c\u8fd8\u53ef\u4ee5\u914d\u5408\u5404\u79cd\u811a\u672c\u8bed\u8a00\u52a8\u6001\u5730\u5bf9\u7f51\u9875\u5404\u5143\u7d20\u8fdb\u884c\u683c\u5f0f\u5316\u3002CSS \u80fd\u591f\u5bf9\u7f51\u9875\u4e2d\u5143\u7d20\u4f4d\u7f6e\u7684\u6392\u7248\u8fdb\u884c\u50cf\u7d20\u7ea7\u7cbe\u786e\u63a7\u5236\uff0c\u652f\u6301\u51e0\u4e4e\u6240\u6709\u7684\u5b57\u4f53\u5b57\u53f7\u6837\u5f0f\uff0c\u62e5\u6709\u5bf9\u7f51\u9875\u5bf9\u8c61\u548c\u6a21\u578b\u6837\u5f0f\u7f16\u8f91\u7684\u80fd\u529b\u3002"],["h2","CSS \u8bed\u6cd5"],["p","\u4e3b\u8981\u4e24\u4e2a\u90e8\u5206\u6784\u6210: \u9009\u62e9\u5668, \u4ee5\u53ca\u4e00\u6761\u6216\u591a\u6761\u5c5e\u6027\u58f0\u660e,\u5c5e\u6027\u58f0\u660e\u4f7f\u7528\u82b1(\u5927)\u62ec\u53f7({ })\u5305\u7740,\u8fd9\u6837\u7684\u7ed3\u6784\u79f0\u4e3a\u58f0\u660e\u5757\u3002"],["p","\u6bcf\u6761\u5c5e\u6027\u58f0\u660e\u6709\u4e00\u4e2a\u7279\u5f81(property)\u548c\u4e00\u4e2a\u503c(value)\u7ec4\u6210\u7528\u5192\u53f7(:)\u533a\u5206\u3002\u4e00\u6761\u5c5e\u6027\u58f0\u660e\u7ed3\u675f\u5206\u53f7(;)\u9694\u5f00\u3002 \u4e3a\u4e86\u66f4\u597d\u7684\u9605\u8bfb\u4e00\u822c\u4e00\u6761\u5c5e\u6027\u58f0\u660e\u7528\u4e00\u884c,\u503c\u524d\u9762\u7a7a\u4e00\u683c"],["pre",{lang:"css",highlighted:'<span class="token selector">selectors </span><span class="token punctuation">{</span>\n  <span class="token property">property</span><span class="token punctuation">:</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","selectors {\n  property: value;\n}"]],["h2","CSS \u7528\u6cd5"],["ol",["li",["p","\u53ef\u4ee5\u5199\u5728\u6269\u5c55\u540d\u4e3a .css \u7684\u6587\u4ef6\u4e2d\u3002\u7136\u540e\u7528 HTML \u7684 ",["code","<link>"]," \u6807\u7b7e\u5f15\u5165\u3002\u79f0\u4e3a\u5916\u90e8\u6837\u5f0f"]],["li",["p","\u4e5f\u53ef\u4ee5\u5199\u5728 HTML \u7684 ",["code","<style>"]," \u6807\u7b7e\u5185\u3002\u79f0\u4e3a\u5d4c\u5165\u5f0f\u6837\u5f0f"]],["li",["p","\u8fd8\u53ef\u4ee5\u5199\u5728 HTML \u5143\u7d20\u5c5e\u6027 ",["code","style"]," \u4e0a\u3002\u79f0\u4e3a\u884c\u5185\u6837\u5f0f,\u5219\u4e0d\u662f\u4f7f\u7528\u58f0\u660e\u5757\u800c\u662f\u76f4\u63a5\u7279\u5f81\u548c\u503c"]]],["h2","CSS \u7279\u6027"],["ol",["li",["p","\u7ee7\u627f\u6027: \u662f\u6307\u5305\u5728\u5185\u90e8\u7684\u6807\u7b7e\u5c06\u62e5\u6709\u5916\u90e8\u6807\u7b7e\u7684\u6837\u5f0f\u6027,\u5373\u5b50\u5143\u7d20\u53ef\u4ee5\u7ee7\u627f\u7236\u7ea7\u5143\u7d20\u7684\u6837\u5f0f\u5c5e\u6027"]],["li",["p","\u5c42\u53e0\u6027: \u662f\u6307\u5f53\u591a\u4e2a\u9009\u62e9\u5668\u540c\u65f6\u914d\u7f6e\u540c\u4e00\u5143\u7d20\u7684\u540c\u4e00\u5c5e\u6027\u65f6\u5c31\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u4f9d\u636e\u5c42\u53e0\u89c4\u5219(\u6743\u91cd\u5373 CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7)\u6765\u5904\u7406\u51b2\u7a81\uff0c\u9009\u62e9\u5e94\u7528\u6743\u91cd\u9ad8\u7684CSS\u9009\u62e9\u5668\u6240\u6307\u5b9a\u7684\u5c5e\u6027\u3002\u5982\u679c\u4f18\u5148\u7ea7\u4e00\u6837\u5219\u91c7\u7528\u5c31\u8fd1\u539f\u5219, \u884c\u5185>\u5d4c\u5165>\u5916\u90e8\u3002\u5982\u679c\u5c5e\u6027\u503c\u540e\u9762\u52a0\u4e86",["code","!important"],"\u6807\u8bb0\u5219\u65e0\u89c6\u6743\u91cd\u4ece\u800c\u9009\u62e9\u8be5\u5c5e\u6027\u3002\u5982\u679c\u90fd\u52a0\u4e86\u6807\u8bb0\u8bf7\u53c2\u8003\u5c31\u8fd1\u539f\u5219\u3002"]]],["h2","CSS \u7edf\u8ba1\u6570\u636e"],["ol",["li",["p","\u7279\u5f81(property): \u5927\u7ea6\u4e8c\u767e\u591a\u6761,\u5927\u7ea6\u5212\u5206\u4e3a40\u4e2a\u6a21\u5757\u3002"]],["li",["p","@-rules: 27\u4e2a"]],["li",["p","\u9009\u62e9\u5668: 38\u4e2a(\u7248\u672c3)\u3002"]],["li",["p","\u5355\u4f4d: 27\u4e2a"]],["li",["p","\u51fd\u6570: 52\u4e2a"]]],["h2","CSS \u53d1\u5c55\u5386\u53f2"],["table",["thead",["tr",["th","\u7248\u672c"],["th","\u53d1\u5e03\u65f6\u95f4"],["th","\u5185\u5bb9"]]],["tbody",["tr",["td","CSS1.0"],["td","1996\u5e7411\u6708"],["td"]],["tr",["td","CSS2.0"],["td","1998\u5e745\u6708"],["td"]],["tr",["td","CSS3.0"],["td","\u5236\u5b9a1999\u5e74"],["td","\u8be5\u7248\u672c\u662f\u4ee5 CSS2\u6a21\u5757\u4e3a\u57fa\u7840, \u4ee5 CSS2.1\u89c4\u8303\u4e3a\u6838\u5fc3\u3002\u6bcf\u4e2a\u6a21\u5757\u589e\u3001\u6362\u529f\u80fd"]],["tr",["td","CSS4.0"],["td"],["td","CSS4.0\u6ca1\u6709\u8fd9\u4e2a\u7ea7\u522b\u53ea\u6709\u72ec\u7acb\u7684\u6a21\u5757\u53ef\u4ee5\u8fbe\u52304.0\u751a\u81f3\u66f4\u9ad8\u7ea7\u522b"]]]],["p",["a",{title:null,href:"https://www.w3.org/Style/CSS/Overview.en.html",target:"_blank",rel:"noopener noreferrer"},"https://www.w3.org/Style/CSS/Overview.en.html"]]],footnote:"",meta:{title:"CSS\u4ecb\u7ecd",order:1,filename:"front-end/CSS/index.md"},anchor:[{title:"CSS \u4ecb\u7ecd",tag:"h1",href:"#anchor-CSS-\u4ecb\u7ecd"},{title:"CSS \u8bed\u6cd5",tag:"h2",href:"#anchor-CSS-\u8bed\u6cd5"},{title:"CSS \u7528\u6cd5",tag:"h2",href:"#anchor-CSS-\u7528\u6cd5"},{title:"CSS \u7279\u6027",tag:"h2",href:"#anchor-CSS-\u7279\u6027"},{title:"CSS \u7edf\u8ba1\u6570\u636e",tag:"h2",href:"#anchor-CSS-\u7edf\u8ba1\u6570\u636e"},{title:"CSS \u53d1\u5c55\u5386\u53f2",tag:"h2",href:"#anchor-CSS-\u53d1\u5c55\u5386\u53f2"}]}}});