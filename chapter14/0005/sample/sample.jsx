// カメラRAWファイルを開くvar fileObj = File.openDialog("カメラRAWファイルを選択してください");if (fileObj != null){    var rawOpt = new CameraRAWOpenOptions();    rawOpt.bitsPerChannel = BitsPerChannelType.SIXTEEN; // 16ビット    rawOpt.blueHue = 20;    // 青の色相の値    rawOpt.blueSaturation = -50;    // 青の彩度の値    rawOpt.brightness = 10;    // 輝度    rawOpt.contrast = 80;   // コントラスト    rawOpt.whiteBalance = WhiteBalanceType.AUTO;    // ホワイトバランスは自動    open(fileObj, rawOpt);}