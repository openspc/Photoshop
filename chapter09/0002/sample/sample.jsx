﻿// CMYKカラーで指定するvar color = new SolidColor();color.cmyk.cyan= 80.5;    // 赤の割合color.cmyk.magenta = 60.1;   // 緑の割合color.cmyk.yellow = 50;    // 青の割合color.cmyk.black = 12.5;    // 黒の割合// 新規のドキュメントを作成し指定した色で塗り潰すdocuments.add(320, 240, 72, "Sample", NewDocumentMode.CMYK);activeDocument.selection.selectAll();activeDocument.selection.fill(color,ColorBlendMode.NORMAL, 100, false);activeDocument.selection.deselect();