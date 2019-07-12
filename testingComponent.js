function closeWindow() {
    ZaloPay.ready(() => {
      ZaloPay.closeWindow();
    });
}

function showDialog() {
    ZaloPay.ready(() => {
      ZaloPay.showDialog();
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
