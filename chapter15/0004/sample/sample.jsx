﻿// ガイドを追加するvar docW = activeDocument.width.value;  // ドキュメントの横幅を取得するvar docH = activeDocument.height.value;  // ドキュメントの縦幅を取得するfor(var x=0; x<docW; x+=50){    activeDocument.guides.add(Direction.VERTICAL, x);}for(var y=0; y<docH; y+=50){    activeDocument.guides.add(Direction.HORIZONTAL, UnitValue(y, "mm"));}