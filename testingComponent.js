function closeWindow() {
    ZaloPay.ready(() => {
      ZaloPay.closeWindow();
    });
}

function setToolbarColor() {
    ZaloPay.ready(() => {
      ZaloPay.setToolbarColor({
          startcolor: "#FCF54C",
          centercolor: "#FCF54C",
          endcolor: "#FCF54C"
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
    ZaloPay.payOrder({
        zptranstoken: "1907180001255453Z0083L",
        appid: 3
    }, onPaymentResult);
}

function onPaymentResult(result) {
   alert('onPaymentResult');
}
