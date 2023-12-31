var swiper = new Swiper(".main-visual", {
  loop : true,
  effect : 'fade',
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable : true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var swiper = new Swiper(".product-slide", {
  slidesPerView: 4,
  spaceBetween : 20,
});

var swiper = new Swiper(".brand-slide", {});

var swiper = new Swiper(".popular-slide", {
  slidesPerView: 4,
  spaceBetween : 20,
});
var swiper = new Swiper(".style-slide", {
  slidesPerView: 6,
  spaceBetween : 20,
  navigation: {
    prevEl: ".style-slide .btn.prev",
    nextEl: ".style-slide .btn.next",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  }
});


$(function(){
  // shop-card - json jquery
  fetch("/js/data.json")//json파일 읽어오기
  .then((response) => response.json())//읽어온 데이터를 json으로 변환
  .then((json) => {
    data = json.cardList01;//json에 있는 items만 받아오기
    let html = '';
    data.forEach(element => {//foreach 배열의 개수만큼 반복문을 돌려라
    html+=
    `
    <li>
      <a href="#">
      <div class="thumb" category-item="${element.id}"><img src="${element.src}" alt="${element.title}"></div>
      <p class="thumb-desc">${element.title}</p>
      </a>
    </li>
    `
    });
    $('.card-list.list01').html(html)//화면에 출력
  });
  // brand - json jquery
  fetch("/js/data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.cardList02;
    let html = '';
    data.forEach(element => {
    html+=
    `
    <li>
      <a href="#">
      <div class="thumb" brand-item="${element.id}"><img src="${element.src}" alt="${element.title}"></div>
      <p class="thumb-desc">${element.title}</p>
      </a>
    </li>
    `
    });
    $('.card-list.list02').html(html)//화면에 출력
  });

  // 더보기 - #new-product
  $("#new-product .prd-wrap").slice(0, 1).show(); // 초기갯수
  $("#new-product .btn-more").click(function(e){ // 클릭시 more
    e.preventDefault();
    $("#new-product .prd-wrap:hidden").slice(0, 1).show(); // 클릭시 more 갯수 지정
    if($("#new-product .prd-wrap:hidden").length == 0){ // 컨텐츠 남아있는지 확인
      alert("상품 목록이 더 이상 없습니다."); // 컨텐츠 없을시 alert 창 띄우기
      $("#new-product .btn-more").hide();
    }
  });

  // 더보기 - #popular-pd
  $("#popular-pd .prd-wrap").slice(0, 1).show(); // 초기갯수
  $("#popular-pd .btn-more").click(function(e){ // 클릭시 more
    e.preventDefault();
    $("#popular-pd .prd-wrap:hidden").slice(0, 1).show(); // 클릭시 more 갯수 지정
    if($("#popular-pd .prd-wrap:hidden").length == 0){ // 컨텐츠 남아있는지 확인
      alert("상품 목록이 더 이상 없습니다."); // 컨텐츠 없을시 alert 창 띄우기
      $("#popular-pd .btn-more").hide();
    }
  });
})

// json -js
// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {

//   if(xhttp.readyState == 4 && xhttp.status == 200){
//     jsonfunc(this.responseText);
//   }
// }
// xhttp.open("GET","/js/data.json", true);
// xhttp.send();

// function jsonfunc( jsonText ) {
//   let arrTitle = new Array();//새로운 array객체를 생성할 때
//   let arrId = new Array();
//   let arrSrc = new Array();

//   let json = JSON.parse(jsonText);

//   for(i=0; i<json.length; i++){ // 값 전체 가져오는법
//     arrTitle[i] = json[i].title;
//     arrId[i] = json[i].id;
//     arrSrc[i] = json[i].src;
//   }
//   let array = document.getElementById('array');

//   for(i=0; i<arrTitle.length; i++){
//     let ul = document.createElement("ul");

//     let li1 = document.createElement("li");
//     li1.appendChild(document.createTextNode(arrTitle[i] + ""));

//     let li2 = document.createElement("li");
//     li2.appendChild(document.createTextNode(arrId[i] + ""));

//     let li3 = document.createElement("li");
//     li3.appendChild(document.createTextNode(arrSrc[i]+ ""));

//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);

//     array.appendChild(ul);
//   }
// }
