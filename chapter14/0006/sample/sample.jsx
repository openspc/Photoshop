﻿// 最近使用したファイルの数を求めるvar fileList = app.recentFiles;var fName = "";if (fileList.length > 0){    fName = fileList[0].name;}alert(fileList.length+"\n"+fName);