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
        zptranstoken: "KSJBDBUDBUKKKKK",
        appid: 3
    });
}
