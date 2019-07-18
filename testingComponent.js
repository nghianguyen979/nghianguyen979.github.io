function closeWindow() {
    ZaloPay.ready(() => {
      ZaloPay.closeWindow();
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

function payOrder(caption, content) {
    ZaloPay.payOrder({
        zptranstoken: "1907180001255453Z0083L",
        appid: 3
    }, onPaymentResult);
}

function onPaymentResult(result) {
   alert('onPaymentResult');
}
