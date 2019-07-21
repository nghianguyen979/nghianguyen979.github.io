function closeWindow() {
    ZaloPay.ready(() => {
      ZaloPay.closeWindow();
    });
}

function setToolbarColor() {
    ZaloPay.ready(() => {
      ZaloPay.setToolbarColor({
          backgroundcolor: "#FFFFFF",
          titlecolor: "#17202A",
      });
    });
}

function showDialog() {
    ZaloPay.ready(() => {
      ZaloPay.showDialog({
          title: "Thông báo",
          message: "Welcome to our sample testing",
          positivebutton: "Đã hiểu",
          negativebutton: "Bỏ qua"
      });
    });
}

function showLoading() {
    ZaloPay.ready(() => {
      ZaloPay.showLoading();
    });
}

function hideLoading() {
    ZaloPay.ready(() => {
      ZaloPay.hideLoading();
    });
}

function payOrder() {
   ZaloPay.ready(() => {
    ZaloPay.payOrder({
        zptranstoken: "1907180001255453Z0083L",
        appid: 3
    }, onPaymentResult);
  }
}
function onPaymentResult(result) {
   alert('[onPaymentResult] => Callback from app to app payment flow');
}

function paymentCallback() {
   ZaloPay.ready(() => {
    ZaloPay.paymentCallback({
        returncode: 1,
        returnmessage: "Thanh toán thành công!",
        zptranstoken, "1907210001255453Z0083L"
    });
  }
}

function forgotPass() {
  ZaloPay.ready(() => {
    ZaloPay.forgotPassword();   
  }
}

var fallbackToStore = function() {
  window.location.replace('market://details?id=vn.com.vng.zalopay');
};
var openApp = function() {
  window.location.replace('launhzlp://');
};
var triggerAppOpen = function() {
  openApp();
  setTimeout(fallbackToStore, 250);
};
