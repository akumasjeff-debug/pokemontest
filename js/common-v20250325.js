// 選單置頂
$(window).scroll(function () {
  if ($(window).scrollTop() >= 110) {
    $(".navbox").addClass("subfixed");
  } else {
    $(".navbox").removeClass("subfixed");
  }
});

// 行動裝置選單
$(".navbar-toggler").click(function () {
  $(this).toggleClass("is-open");
  $(".nav_wrap, .nav_mb").toggleClass("visible");
  $(".menuMask").toggleClass("cover-bg");
  $("body, html").toggleClass("act");
});
if ($(window).width() < 769) {
  mbMenu();
}

function mbMenu() {
  $(".nav_wrap ul li").click(function () {
    $(this).nextAll("li").removeClass("act");
    $(this).prevAll("li").removeClass("act");
    $(this).toggleClass("act");
  });
}

//小AD
// function html_ad(dataNum, divID) {
//   var html = "";
//   for (var i = 0; i < themePD[dataNum].content.length; i++) {
//     var item = themePD[dataNum].content[i];
//     html += '<a href="' + item.link + '" target="' + item.target + '" class="swiper-slide block">';
//     html += '<img src="' + item.img + '" alt=" " class=" ">';
//     html += "</a>";
//   }
//   $(divID).html(html);
// }
// html_ad(0, ".swiperTop .swiper-wrapper");

// var swiperTop = new Swiper(".swiperTop .swiper-container", {
//   effect: "fade",
//   loop: true,
//   mousewheel: false,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 2500,
//   freeMode: false,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

/* ---------------------------------------------------------------------------------------*/
// 📌 透過 ID 尋找對應的資料
function getThemeDataById(id) {
  return themePD.find((item) => item.id === id)?.content || [];
}
/* ----------------------

✅ 版頭大BN
/* #section_topBN

/* ---------------------*/

function html_00(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    html += '<a href="' + item.link + '" target="' + item.target + '">';
    html += '<figure itemtype="http://schema.org/ImageObject">';
    html += "<picture>";
    html += '<source srcset="' + item.path + item.imgL + '" media="(min-width:769px)">';
    html += '<source srcset="' + item.path + item.imgS + '" media="(min-width:320px)">';
    html += '<img alt="' + item.alt + '" src="' + item.path + item.imgS + '" class="w-full">';
    html += "</picture>";
    html += "</figure>";
    html += "</a>";
  }
  $(divID).html(html);
}
html_00("topBN", "#section_topBN");
/* ----------------------

✅去背商品類別輪播
/* #section_focus .swiperFocus   

/* ---------------------*/
function html_01(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '" class="swiper-slide text-center transition-all">';
    html += '<img alt="' + item.alt + '" src="' + item.path + item.imgL + '" class="m-auto ds">';
    html += '<div class="inline-flex items-center h-8 border-b border-pcRed">';
    html += '<img class="inline" src="img/icon/icon-ball.svg" alt="icon-ball">';
    html += '<span class="text-md xl:text-lg font-bold line-clamp-2 text-black">' + item.name + "</span>";
    html += '<img class="inline" src="img/icon/icon-ball.svg" alt="icon-ball">';
    html += "</div>";
    html += "</a>";
  }
  $(divID).html(html);
}
// 透過 ID 來載入資料
html_01("focus", "#section_focus");

//執行 Swiper
var swiperFocus = new Swiper(".swiperFocus .swiper-container", {
  effect: "slide",
  loop: true,
  mousewheel: false,
  slidesPerView: 6,
  spaceBetween: 10,
  speed: 1000,
  freeMode: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    // el: '#main_slider .swiper-pagination',
  },
  navigation: {
    // nextEl: '#main_slider .swiper-button-next',
    // prevEl: '#main_slider .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 39,
    },
  },
});

/* ----------------------

✅ 三個AD輪播  #section_swiperAD .swiperAD 共2組

/* ---------------------*/
function html_swiperAD(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    html +=
      '<a href="' +
      item.link +
      '" target="' +
      item.target +
      '" title="' +
      item.alt +
      '" class="shadow1 swiper-slide max-w-1/6 group transition-group text-center overflow-hidden bg-white hover:border-nintendoRed1 hover:shadow-md">';
    html += '<div class="absolute top-0 flex w-full justify-center pointer-events-none opacity-0 group-hover:opacity-100">';
    html += '<img src="img/icon/icon-item-search-y.svg" class="block">';
    html += "</div>";
    html += '<img src="' + item.path + item.imgL + '" class="block w-full h-auto">';
    html += '<div class="flex items-center justify-center h-10 mx-3 mb-2 font-bold text-md sm:text-lg md:text-xl text-black border-t border-b border-nintendoRed1 hidden">' + item.subject + "</div>";
    html += "</a>";
  }
  $(divID).html(html);
}



//  透過 ID 來載入資料
html_swiperAD("swiperAD1", "#section_swiperAD1");
html_swiperAD("swiperAD2", "#section_swiperAD2");
html_swiperAD("swiperAD3", "#section_swiperAD3");


// Swiper 初始化封裝
function initSwiperAD(containerClass) {
  new Swiper("." + containerClass + " .swiper-container", {
    effect: "slide",
    loop: true,
    centeredSlides: true,
    mousewheel: false,
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 1000,
    freeMode: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    pagination: {
      el: "." + containerClass + " .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "." + containerClass + " .swiper-button-next-small",
      prevEl: "." + containerClass + " .swiper-button-prev-small",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 8 },
      480: { slidesPerView: 1.1, spaceBetween: 8 },
      640: { slidesPerView: 1.5, spaceBetween: 10 },
      768: { slidesPerView: 1.5, spaceBetween: 10 },
      1366: { slidesPerView: 2, spaceBetween: 15 },
    },
  });
}

// 🔥 確保 Swiper 互不影響
initSwiperAD("swiperAD1");
initSwiperAD("swiperAD2");
initSwiperAD("swiperAD3");

/* ----------------------

✅ 商品輪播  #section_PD .swiperPD

----------------------*/
function html_PDslider(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    html +=
      '<a href="' +
      item.link +
      '" target="' +
      item.target +
      '" title="' +
      item.alt +
      '" class="shadow1 swiper-slide max-w-1/6 pb-2 group transition-group text-center rounded-3xl overflow-hidden bg-white border-t border-r border-b border-l hover:border-nintendoRed1 hover:shadow-md">';
    html += '<div class="absolute top-0 flex w-full justify-center pointer-events-none opacity-0 group-hover:opacity-100">';
    html += '<img src="img/icon/icon-item-search-y.svg" class="block">';
    html += "</div>";
    html += '<img src="' + item.path + item.imgL + '" class="block mb-2">';
    html += '<div class="flex items-center justify-center h-10 mx-3 mb-2 font-bold text-md sm:text-sm md:text-sm text-black border-b border-nintendoRed1">' + item.subject + "</div>";
    html += '<div class="w-auto h-10 mx-auto mb-1 line-5 text-sm sm:text-md">' + item.name + "</div>";
    html += '<div class="inline-flex items-center justify-center px-0 h-8 text-black rounded-2xl border-nintendoGray4 border mx-auto mb-0 text-sm sm:text-md" b>'+ '<img class="-mt-2 px-l ball" src="img/icon/icon-ball-l.svg">' + item.description + '<img class="-mt-3 px-r" src="img/icon/icon-ball-r.svg"></div>';
    html += "</a>";
  }
  $(divID).html(html);
}

//  透過 ID 來載入資料
html_PDslider("PD01", "#section_PD01");
html_PDslider("PD02", "#section_PD02");
html_PDslider("PD03", "#section_PD03");
html_PDslider("PDv1", "#section_PDv1"); //Video輪播下面的商品輪播1
html_PDslider("PDv2", "#section_PDv2"); //Video輪播下面的商品輪播2

// 初始化 Swiper
function initSwiper(containerClass) {
  new Swiper("." + containerClass + " .swiper-container", {
    effect: "slide",
    loop: true,
    mousewheel: false,
    slidesPerView: 6,
    spaceBetween: 26,
    speed: 1000,
    freeMode: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "." + containerClass + " .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "." + containerClass + " .swiper-button-next-small",
      prevEl: "." + containerClass + " .swiper-button-prev-small",
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 8 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1366: { slidesPerView: 5, spaceBetween: 15 },
    },
  });
}

// 啟動 Swiper
initSwiper("swiperPD01");
initSwiper("swiperPD02");
initSwiper("swiperPD03");
initSwiper("swiperPDv1");
initSwiper("swiperPDv2");

/* ----------------------

✅ 版身廣告大BANNER
/* #section_BN .banner 

   ---------------------*/
function html_BN(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    // 加入 <a> 標籤包住圖片，並加上 link 和 target
    html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '">';
    html += "<picture>";
    html += '<source srcset="' + item.path + item.imgL + '" media="(min-width:769px)">';
    html += '<source srcset="' + item.path + item.imgS + '" media="(min-width:320px)">';
    html += '<img alt="' + item.alt + '" src="' + item.path + item.imgS + '" class="w-full">';
    html += "</picture>";
    html += "</a>"; // 結束 <a> 標籤
  }
  $(divID).html(html);
}

// 透過 ID 來載入資料
html_BN("BN1", "#section_BN1");
html_BN("BN2", "#section_BN2");

/* ----------------------

✅ Youtube影片輪播 （一頁兩個）
/* #section_SV1 .swiperVideo1  

 ---------------------*/
function html_SV(dataId, divID) {
  var content = getThemeDataById(dataId);
  var length = Math.ceil(content.length / 2); // 2 欄
  var html = "";
  for (var i = 0; i < length; i++) {
    html += '<li class="swiper-slide grid grid-cols-2 gap-2 md:gap-4 lg:gap-8">';
    for (var j = 0 + i * 2; j < 2 + i * 2; j++) {
      var item = content[j];
      if (item) {
        html += '<a data-fancybox href="' + item.link + '" title="' + item.alt + '" class="videoplay relative transition-all">';
        html += '<figure itemtype="http://schema.org/ImageObject" class="shadow1">';
        html += "<picture>";
        html += '<source srcset="' + item.path + item.imgL + '" media="(min-width:769px)">';
        html += '<source srcset="' + item.path + item.imgS + '" media="(min-width:320px)">';
        html += '<img alt="' + item.alt + '" src="' + item.path + item.imgS + '" class="w-full">';
        html += "</picture>";
        html += "</figure>";
        html += '<div class="flex items-start py-2">';
        html += '<img src="img/icon/icon-plus.svg" alt="icon-plus" class="inline mr-1">';
        html += '<span class="font-bold text-black" style="font-size:15px">' + item.name + "</span>";
        html += "</div>";
        html += "</a>";
      }
    }
    html += "</li>";
  }
  $(divID).html(html);
}

//  透過 ID 來載入資料
html_SV("SV1", "#section_SV1");
html_SV("SV2", "#section_SV2");

//  Swiper 初始化封裝
function initSwiperVideo(containerClass) {
  new Swiper("." + containerClass + " .swiper-container", {
    effect: "slide",
    fadeEffect: { crossFade: true },
    direction: "horizontal",
    loop: true,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1500,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // allowTouchMove: false,
    pagination: {
      el: "." + containerClass + " .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
      nextEl: "." + containerClass + " .swiper-button-next",
      prevEl: "." + containerClass + " .swiper-button-prev",
    },
  });
}

//  確保 Swiper 互不影響
initSwiperVideo("swiperVideo1");
initSwiperVideo("swiperVideo2");

/* ----------------------

✅ footer banner廣告
/* #section_footBN .banner4 

 ---------------------*/
function html_footBN(dataId, divID) {
  var data = getThemeDataById(dataId); // Use the correct function to get the data
  if (!data || data.length === 0) {
    console.error("找不到 ID: " + dataId);
    return;
  }

  var html = "";
  for (var i = 0; i < data.length; i++) {
    // Ensure you are looping over the data properly
    var item = data[i];
    html += '<div class="bg">';
    html += '<img alt="' + item.alt + '" src="' + item.path + item.imgL + '" class="block w-full h-full object-cover">';
    html += "</div>";
    html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '" class="absolute top-0 left-0 z-auto flex items-center justify-center w-full h-full">';
    html += '<div class="link inline-flex items-center h-10">';
    html += '<span class="text-white">' + item.title + "</span>";
    html += "</div>";
    html += "</a>";
  }
  $(divID).html(html); // Inject HTML into the given div
}

// 透過 ID 來載入資料
html_footBN("footerBanner", "#section_footBN");

/* ----------------------

✅ 商店訊息輪播  #section_swiperStore .swiperStore
共1組

/* ---------------------*/
function html_swiperStore(dataId, divID) {
  var content = getThemeDataById(dataId);
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var item = content[i];
    html +=
      '<a href="' +
      item.link +
      '" target="' +
      item.target +
      '" title="' +
      item.alt +
      '" class="swiper-slide max-w-1/6 group transition-group text-center overflow-hidden bg-white hover:border-nintendoRed1 hover:shadow-md">';
    html += '<div class="absolute top-0 flex w-full justify-center pointer-events-none opacity-0 group-hover:opacity-100">';
    html += "</div>";
    html += '<img src="' + item.path + item.imgL + '" class="block w-full">';
    html += '<div class="flex items-center justify-center h-10 mx-3 mb-2 font-bold text-md sm:text-lg md:text-xl text-black border-t border-b border-nintendoRed1 hidden">' + item.subject + "</div>";
    html += "</a>";
  }
  $(divID).html(html);
}

// 透過 ID 來載入資料
html_swiperStore("Store", "#section_swiperStore");

// Swiper 初始化封裝
function initSwiperStore(containerClass) {
  new Swiper("." + containerClass + ".swiperStore .swiper-container", {
    effect: "slide",
    loop: false,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    freeMode: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "." + containerClass + ".swiperStore .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "." + containerClass + ".swiperStore .swiper-button-next-small",
      prevEl: "." + containerClass + ".swiperStore .swiper-button-prev-small",
    },
  });
}

$(function(){

  // 偵聽a click
  $(".go2store a").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#area"+id).offset().top;

      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸無動畫效果
        //$body.scrollTop(target_top);

      // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

  })
})


// 確保 Swiper 互不影響
initSwiperStore("swiperStore");

/* ----------------------

/* .youtubevideo 16:9 滿寬    

/* ---------------------*/

// function html_04(dataNum, divID) {
//   var html = "";
//   for (var i = 0; i < themePD[dataNum].content.length; i++) {
//     var item = themePD[dataNum].content[i];
//     html += '<div class="aspect-w-16 aspect-h-9">';
//     html += '<div class="youtube-video" id="youtube-video-full" data-video-id="' + item.videoid + '" width="100%" height="100%"></div>';
//     // html += '<iframe src="https://www.youtube.com/embed/'+ item.videoid +'?controls=1&autoplay=1&mute=1&loop=1&playlist='+ item.videoid +'" title="'+ item.title +'" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//     html += "</div>";
//   }
//   $(divID).html(html);
// }

// html_04(4, "#section_04");

// // Load the IFrame Player API code asynchronously.
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var playlist_id = "";
// // playlist_id = themePD[4].content[0].videoid;
// playlist_id = document.getElementById("youtube-video-full").getAttribute("data-video-id");

// function onYouTubeIframeAPIReady() {
//   $(".youtube-video").inViewAutoplay({
//     quality: "2160p",
//     enablejsapi: 1,
//     playsinline: 1,
//     start: 2,
//     mute: 1,
//     autoplay: 0,
//     loop: 1,
//     fs: 1,
//     controls: 1,
//     autohide: 1,
//     cc_load_policty: 0,
//     iv_load_policy: 3,
//     showinfo: 0,
//     modestbranding: 1,
//     rel: 0,
//     playlist: playlist_id,
//   });
// }
