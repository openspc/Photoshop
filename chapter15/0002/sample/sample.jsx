﻿// ガイドの方向別に総数を求めるvar g = app.activeDocument.guides;var countW = 0; // 横方向のガイド数var countH = 0; // 縦方向のガイド数for(var i=0; i<g.length; i++){    // 水平方向のガイドかどうか調べる    if (g[i].direction == Direction.HORIZONTAL){        countW = countW + 1;    }    // 垂直方向のガイドかどうか調べる    if (g[i].direction == Direction.VERTICAL){        countH = countH + 1;    }}alert("横方向に "+countW+"個、縦方向に"+countH+"個あります");