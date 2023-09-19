var index = 1;
var img = [
  "images/banner1.png",
  "images/banner2.png",
  "images/banner3.png",
  "images/banner4.png",
  "images/banner5.png"
];
var imgBanner = document.getElementById("banner");
setInterval("setImage()", 2000);

function setImage() {
  imgBanner.src = img[index];
  index++;
  if (index == img.length) {
    index = 0;
  }
}
//
var name1 = document.getElementById("name");
var email = document.getElementById("email");
var checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phone = document.getElementById("phone");
var text_area = document.getElementById("text-area");

function gui() {
  if (name1.value == "") {
    alert("Họ và tên không được để trống");
    name1.style.backgroundColor = "yellow";
  } else if (email.value == "") {
    alert("Email không được để trống");
    email.style.backgroundColor = "yellow";
  } else if (!checkmail.test(email.value)) {
    alert("Phải nhập đúng định dạng email");
    email.style.backgroundColor = "yellow";
  } else if (phone.value == "") {
    alert("Số điện thoại không được để trống");
    phone.style.backgroundColor = "yellow";
  } else if (phone.value < 0) {
    alert("Số điện thoại không được nhập là số âm");
    phone.style.backgroundColor = "yellow";
  } else if (isNaN(phone.value)) {
    alert("Số điện thoại không được nhập là chuỗi");
    phone.style.backgroundColor = "yellow";
  } else if (phone.value.length < 10) {
    alert("Số điện thoại phải nhập đủ 10 ký tự số");
    phone.style.backgroundColor = "yellow";
  } else if ((text_area = document.getElementById("text-area").value == "")) {
    alert("Nội dung không được để trống");
    text_area = document.getElementById("text-area").style.backgroundColor =
      "yellow";
  } else {
    alert("Gửi thành công");
    name1.style.backgroundColor = "white";
    email.style.backgroundColor = "white";
    phone.style.backgroundColor = "white";
    tp.style.backgroundColor = "white";
    text_area = document.getElementById("text-area").style.backgroundColor =
      "white";
  }
}

function nhapLai() {
  name1.value = "";
  email.value = "";
  phone.value = "";
  text_area = document.getElementById("text-area").value = "";
}
