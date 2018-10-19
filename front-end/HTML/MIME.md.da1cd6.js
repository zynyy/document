webpackJsonp(["front-end/HTML/MIME.md"],{HuDq:function(t,e){t.exports={content:["article",["h1","MIME \u591a\u7528\u9014\u4e92\u8054\u7f51\u90ae\u4ef6\u6269\u5c55\u7c7b\u578b"],["p","MIME \u5373 Multipurpose Internet Mail Extensions \u7f29\u5199, \u662f\u4e00\u79cd\u6807\u51c6\u5316\u7684\u65b9\u5f0f\u6765\u8868\u793a\u6587\u6863\u7684\u6027\u8d28\u548c\u683c\u5f0f\u3002\u4e92\u8054\u7f51\u53f7\u7801\u5206\u914d\u673a\u6784(IANA)\u8d1f\u8d23\u8ddf\u8e2a\u6240\u6709\u5b98\u65b9 MIME \u7c7b\u578b\u7684\u5b98\u65b9\u673a\u6784\u3002\n\u6d4f\u89c8\u5668\u901a\u5e38\u4f7f\u7528MIME\u7c7b\u578b\uff08\u800c\u4e0d\u662f\u6587\u4ef6\u6269\u5c55\u540d\uff09\u6765\u786e\u5b9a\u5982\u4f55\u5904\u7406\u6587\u6863\uff1b\u56e0\u6b64\u670d\u52a1\u5668\u8bbe\u7f6e\u6b63\u786e\u4ee5\u5c06\u6b63\u786e\u7684MIME\u7c7b\u578b\u9644\u52a0\u5230\u54cd\u5e94\u5bf9\u8c61\u7684\u5934\u90e8\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\n\u6570\u636e: 800\u591a\u79cdMIME\u7c7b\u578b\uff0c1000\u591a\u79cd\u6269\u5c55\u540d\u3002\n\u6b64\u9879\u5e94\u5c5e\u4e8e",["code","HTTP"],"\u534f\u8bae\u5185\u5bb9,\u56e0",["code",'<input type="file">'],"\u8fd9\u4e2a\u6807\u7b7e\u6240\u4ee5\u628a\u8fd9\u9879\u5185\u5bb9\u653e\u5728\u4e86",["code","HTML"],"\u91cc\u6765\u3002"],["h2","MIME \u8bed\u6cd5"],["h3","\u7ed3\u6784"],["blockquote",["p","type/subtype"]],["p","MIME \u7ed3\u6784\u662f\u7531\u7c7b\u578b\u548c\u5b50\u7c7b\u578b\u4e24\u4e2a\u5b57\u7b26\u4e32\u4e2d\u95f4\u4f7f\u7528",["code","/"],"\u5206\u9694\u7ec4\u6210\u3002\u5e76\u4e0d\u5141\u8bb8\u7a7a\u683c\u5b58\u5728\u3002type \u8868\u793a\u7c7b\u522b\u3002subtype \u8868\u793a\u7ec6\u5206\u540e\u7684\u6bcf\u4e2a\u7c7b\u578b"],["h3","\u7c7b\u522b"],["table",["thead",["tr",["th","\u7c7b\u522b"],["th","\u63cf\u8ff0"],["th","\u4f8b\u5b50"]]],["tbody",["tr",["td",["code","text"]],["td","\u8868\u660e\u6587\u4ef6\u662f\u666e\u901a\u6587\u672c"],["td",["code","text/html"]]],["tr",["td",["code","image"]],["td","\u8868\u660e\u662f\u67d0\u79cd\u56fe\u50cf"],["td",["code","image/png"]]],["tr",["td",["code","auio"]],["td","\u8868\u660e\u662f\u67d0\u79cd\u97f3\u9891\u6587\u4ef6"],["td",["code","audio/mpeg"]]],["tr",["td",["code","video"]],["td","\u8868\u660e\u662f\u67d0\u79cd\u89c6\u9891\u6587\u4ef6"],["td",["code","video/mp4"]]],["tr",["td",["code","application"]],["td","\u8868\u660e\u662f\u67d0\u79cd\u4e8c\u8fdb\u5236\u6570\u636e"],["td",["code","application/octet-stream"]]],["tr",["td",["code","multipart"]],["td","\u590d\u5408\u7c7b\u578b,\u4e5f\u5c31\u662f\u8bf4\u63d0\u4f9b\u4e86\u4e00\u79cd\u5c01\u88c5\u96f6\u4e2a\u6216\u591a\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6807\u6709\u81ea\u5df1\u7684\u7c7b\u578b,"],["td",["code","multipart/form-data"]]]]],["p","\u4ee5\u4e0a 6 \u4e2a\u7c7b\u522b\u5728 HTTP \u8bf7\u6c42\u5934(Content-Type)\u91cc\u9762\u8f83\u4e3a\u5e38\u89c1"],["h2","\u5e38\u89c1\u6269\u5c55\u5bf9\u5e94\u7684 MIME \u7c7b\u578b"],["blockquote",["p","\u6ce8\u610f\n\u5982\u679c\u4ee5\u4e0bMIME\u7c7b\u578b\u6ca1\u6709\u627e\u5230\u4f60\u60f3\u8981\u7684,\u5e76\n\u61c2\u5f97\u4f7f\u7528 node \u7684\u5305\u7ba1\u7406\u5de5\u5177 ",["code","npm install node-mime"]," \u5b89\u88c5\u8fd9\u4e2a\u5305\u3002\u4e3b\u8981\u4e24\u4e2a\u65b9\u6cd5\u67e5\u8be2\u7c7b\u578b\u548c\u6269\u5c55: ",["code","getType(\u6269\u5c55\u540d)"],"\u8fd4\u56de\u76f8\u5bf9\u5e94\u7684MIME\u7c7b\u578b, ",["code","getExtension(MIME\u7c7b\u578b)"],"\u8fd4\u56de\u76f8\u5bf9\u5e94\u7684\u6269\u5c55\u540d,\u5176\u4ed6\u65b9\u6cd5\u81ea\u5df1\u67e5\u770b\u3002\n\u5982\u679c\u6d4f\u89c8\u5668\u6709\u5b89\u88c5\u683c\u5f0f\u5316json\u63d2\u4ef6\u53ef\u4ee5\u67e5\u770b",["a",{title:null,href:"https://raw.githubusercontent.com/broofa/node-mime/master/types/standard.json",target:"_blank",rel:"noopener noreferrer"},"\u6807\u51c6\u7248"]," ",["a",{title:null,href:"https://raw.githubusercontent.com/broofa/node-mime/master/types/other.json",target:"_blank",rel:"noopener noreferrer"},"\u5176\u4ed6\u7248"],"\u5e76\u6ca1\u6709",["code","multipart"],"\u8fd9\u4e2a\u7c7b\u522b\u3002\n\u5982\u679c\u60f3\u67e5\u8be2\u76f8\u5bf9\u5e94MIME\u7c7b\u578b\u6587\u732e\u53ef\u4ee5\u5230",["a",{title:null,href:"https://www.freeformatter.com/mime-types-list.html",target:"_blank",rel:"noopener noreferrer"},"https://www.freeformatter.com/mime-types-list.html"],"\u8fdb\u884c\u67e5\u627e"]],["h3","application"],["table",["thead",["tr",["th","MIME \u7c7b\u578b"],["th","\u6587\u4ef6\u6269\u5c55\u540d"]]],["tbody",["tr",["td",["code","application/postscript"]],["td",["code",".jar"]]],["tr",["td",["code","application/vnd.android.package-archive"]],["td",["code",".apk"]]]]],["h3","text"],["table",["thead",["tr",["th","MIME \u7c7b\u578b"],["th","\u6587\u4ef6\u6269\u5c55\u540d"]]],["tbody",["tr",["td",["code","text/plain"]],["td"]]]],["h3","image"],["table",["thead",["tr",["th","MIME \u7c7b\u578b"],["th","\u6587\u4ef6\u6269\u5c55\u540d"]]],["tbody",["tr",["td",["code","image/bmp"]],["td",["code",".bmp"]]],["tr",["td",["code","image/png"]],["td",["code",".png"]]],["tr",["td",["code","image/jpeg"]],["td",["code",".jpeg"],", ",["code",".jpg"]]],["tr",["td",["code","image/gif"]],["td",["code",".gif"]]],["tr",["td",["code","image/svg+xml"]],["td",["code",".svg"]]],["tr",["td",["code","image/vnd.adobe.photoshop"]],["td",["code",".psd"]]],["tr",["td",["code","image/vnd.microsoft.icon"]],["td",["code",".ico"]]],["tr",["td",["code","image/tiff"]],["td",["code",".tiff"]]],["tr",["td",["code","image/wmf"]],["td",["code",".wmf"]]],["tr",["td",["code","image/vnd.zbrush.pcx"]],["td",["code",".pcx"]]],["tr",["td",["code","image/vnd.fpx"]],["td",["code",".fpx"]]],["tr",["td",["code","image/vnd.dxf"]],["td",["code",".dxf"]]]]],["blockquote",["p","\u540e\u7eed\u5f85\u8865\u5145"]],["h3","video"],["table",["thead",["tr",["th","MIME \u7c7b\u578b"],["th","\u6587\u4ef6\u6269\u5c55\u540d"]]],["tbody"]],["h3","audio"],["table",["thead",["tr",["th","MIME \u7c7b\u578b"],["th","\u6587\u4ef6\u6269\u5c55\u540d"]]],["tbody"]],["h3","multipart"],["p","\u8be5\u7c7b\u522b\u662f\u590d\u5408\u7c7b\u578b\u6240\u4ee5\u6ca1\u6709\u5bf9\u5e94\u7684\u6587\u4ef6\u6269\u5c55"]],footnote:"",meta:{title:"MIME\u7c7b\u578b",order:7,filename:"front-end/HTML/MIME.md"},anchor:[{title:"MIME \u591a\u7528\u9014\u4e92\u8054\u7f51\u90ae\u4ef6\u6269\u5c55\u7c7b\u578b",tag:"h1",href:"#anchor-MIME-\u591a\u7528\u9014\u4e92\u8054\u7f51\u90ae\u4ef6\u6269\u5c55\u7c7b\u578b"},{title:"MIME \u8bed\u6cd5",tag:"h2",href:"#anchor-MIME-\u8bed\u6cd5"},{title:"\u7ed3\u6784",tag:"h3",href:"#anchor-\u7ed3\u6784"},{title:"\u7c7b\u522b",tag:"h3",href:"#anchor-\u7c7b\u522b"},{title:"\u5e38\u89c1\u6269\u5c55\u5bf9\u5e94\u7684 MIME \u7c7b\u578b",tag:"h2",href:"#anchor-\u5e38\u89c1\u6269\u5c55\u5bf9\u5e94\u7684-MIME-\u7c7b\u578b"},{title:"application",tag:"h3",href:"#anchor-application"},{title:"text",tag:"h3",href:"#anchor-text"},{title:"image",tag:"h3",href:"#anchor-image"},{title:"video",tag:"h3",href:"#anchor-video"},{title:"audio",tag:"h3",href:"#anchor-audio"},{title:"multipart",tag:"h3",href:"#anchor-multipart"}]}}});