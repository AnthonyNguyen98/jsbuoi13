// Bài tập 1 tính tiền lương nhân viên
document.getElementById("btnSalary").onclick = function () {
  var donGiaLuong = document.getElementById("inputNum1").value * 1;
  var soNgayLam = document.getElementById("inputNum2").value * 1;
  var luong = donGiaLuong * soNgayLam;
  document.getElementById("txtSalary").innerHTML = luong;
};

// Bài tập 2 tính số trung bình
document.getElementById("btnTB").onclick = function () {
  var so1 = document.getElementById("num1").value * 1;
  var so2 = document.getElementById("num2").value * 1;
  var so3 = document.getElementById("num3").value * 1;
  var so4 = document.getElementById("num4").value * 1;
  var so5 = document.getElementById("num5").value * 1;
  var soTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("txtTB").innerHTML = soTrungBinh;
};

// Bài tập 3 Quy đổi tiền
document.getElementById("btnCurrency").onclick = function () {
  var tyGia = 23500;
  var soTien = document.getElementById("usd").value * 1;
  var thanhTien = tyGia * soTien;
  const options2 = { style: "currency", currency: "VND" };
  const numberFormat2 = new Intl.NumberFormat("vn-VN", options2);
  document.getElementById("txtCurrency").innerHTML =
    numberFormat2.format(thanhTien);
};

// Bài tập 4 Tính chu vi và diện tích hình chữ nhật
document.getElementById("btnCal").onclick = function () {
  var chieuDai = document.getElementById("width").value * 1;
  var chieuRong = document.getElementById("height").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("txtCal").innerHTML =
    " Chu vi Hình chữ nhật là " +
    chuVi +
    " - Diện tích Hình chữ nhật là " +
    dienTich;
};

// Bài tập 5 Tính tổng ký số
document.getElementById("btnSum").onclick = function () {
  var soN = document.getElementById("number").value * 1;
  var soD = Math.floor(soN / 10);
  // console.log(soD);
  var soC = soN % 10;
  // console.log(soC);
  var tong = soD + soC;
  document.getElementById("txtSum").innerHTML = tong;
};
