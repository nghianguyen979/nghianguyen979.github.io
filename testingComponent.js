function closeWindow() {
  ZaloPay.ready(() => {
    closeWindow();
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
  });
}

function takePhoto() {
  alert('call takePhoto');
  ZaloPay.ready(() => {
    ZaloPay.openCamera({
      cameraselector: 1
    }, onCameraResult);
  });
}


function openPinAuth() {
  alert('call openPinAuth');
  ZaloPay.ready(() => {
    ZaloPay.openPinAuthentication(onPinAuthResult);
  });
}

function triggerSavingOTPConfig() {
  let jsonString = `
  {"algorithm":2,"digits":6,"period":30,"secret_key":"HRPSSAEXEUAAKSFURUMKDI5RUGMPHZGO","smart_otp_id":"d269496b-3d1c-43bc-8195-b6b0b3d2cf7e"}
  `;
  
  alert('call triggerSavingOTPConfig');
  alert(jsonString);
  
  ZaloPay.ready(() => {
    ZaloPay.saveSmartOtpConfig(
      {
        config: jsonString,
        userId: '230406000004269'
      },
      onSavingSmartOTPResult);
  });
}

function onSavingSmartOTPResult(result) {
   if ('undefined' !== result.error && result.error == 1) {
     
      alert('Success');
   } else {
      alert('Failed => Message' + result.errorMessage);
   }
}

function onPinAuthResult(result) {
   if ('undefined' !== result.error && result.error == 1) {
     
      alert('Success => HashPin: ' + result.data.hashdata);
   } else {
      alert('Failed => Message' + result.errorMessage);
   }
}

function onCameraResult(result) {
  alert('onCameraResult');
}

function onPaymentResult(result) {
  alert('[onPaymentResult] => Callback from app to app payment flow');
}

function checkInstallZaloPay() {
  ZaloPay.ready(() => {
    ZaloPay.checkInstallZaloPay(function (result) {
      if ('undefined' !== result.data.hasInstalled) {
        alert('[checkInstallZaloPay] =>' + result.data.hasInstalled);
      } else {
        alert('[checkInstallZaloPay] => No result found');
      }

    });
  });
}

function getZPDKCommon() {
  ZaloPay.ready(() => {
    ZaloPay.getZPDKCommon(function (result) {
      var userInfo;
      if ('undefined' !== result.data.platform) {
        userInfo = userInfo + result.data.platform + '\n';
      }
      if ('undefined' !== result.data.deviceid) {
        userInfo = userInfo + result.data.deviceid + '\n';
      }
      if ('undefined' !== result.data.appversion) {
        userInfo = userInfo + result.data.appversion + '\n';
      }
      if ('undefined' !== result.data.osver) {
        userInfo = userInfo + result.data.osver + '\n';
      }
      if ('undefined' !== result.data.devicemodel) {
        userInfo = userInfo + result.data.devicemodel + '\n';
      }
      alert('[UserInfo] =>' + userInfo);
    });
  });
}

function paymentCallback() {
  ZaloPay.ready(() => {
    ZaloPay.paymentCallback({
      returncode: 1,
      returnmessage: "Thanh toán thành công!",
      zptranstoken: "1907210001255453Z0083L"
    });
  });
}

function forgotPass() {
  ZaloPay.ready(() => {
    ZaloPay.forgotPassword();
  });
}

function launchDeeplinkFromUMScope() {
  ZaloPayUM.ready(() => {
    ZaloPayUM.launchDeeplink({
      url : "zalopay://launch/app/1314?source_tracking=home_more"
    }, onDeeplinkResult);
  });
}

function onDeeplinkResult() {
  alert('onDeeplink Called!');
}

function hideCancelButtonInToolbar() {
  ZaloPay.ready(() => {
    ZaloPay.setCancelButtonVisibility({
      isshow: false
    });
  });
}

function showCancelButtonInToolbar() {
  ZaloPay.ready(() => {
    ZaloPay.setCancelButtonVisibility({
      isshow: true
    });
  });
}

function redirectToStore() {
  ZaloPay.ready(() => {
    ZaloPay.navigateToStore();
  });
}

function openZaloPayApp() {
  ZaloPay.ready(() => {
    ZaloPay.launchZaloPayApp();
  });
}

var fallbackToStore = function () {
  window.location.replace('market://details?id=vn.com.vng.zalopay');
};
var openApp = function () {
  window.location.replace('launchzlpapp://');
};

function triggerAppOpen() {
  alert('triggerAppOpen');
  // window.location = "https://go.zalopay.vn/f/launch";
  // Instead of using the actual URL scheme, use 'intent://' for better UX
  window.location = 'intent://go.zalopay.vn/f/launch#Intent;package=vn.com.vng.zalopay.sb1;scheme=https;launchFlags=268435456;end;';
}
