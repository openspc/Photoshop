﻿// PNG形式で保存するvar fileObj = new File("~/Desktop/sample.png");var pngOpt = new PNGSaveOptions();pngOpt.compression = 5; // 圧縮5pngOpt.interlaced = false;  // インターレースなしactiveDocument.saveAs(fileObj, pngOpt, true, Extension.LOWERCASE);