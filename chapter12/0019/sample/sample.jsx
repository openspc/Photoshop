﻿// 選択されているテキストレイヤーに現在の日付を入れるvar dateObj = new Date();   // 現在の日付を取得するvar Y = dateObj.getFullYear();  // 西暦４桁年を読み出すvar M = dateObj.getMonth()+1; // 月を詠み出す。実際より1少ない値になるので1を足すvar D = dateObj.getDate();  // 日を読み出すvar text = Y+"年"+M+"月"+D+"日";   // 表示する日付を生成app.activeDocument.activeLayer.textItem.contents = text;