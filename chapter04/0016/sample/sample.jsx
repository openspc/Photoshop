﻿//  Macでキャプチャーしたスクリーンショットの透明部分を削除するapp.activeDocument.suspendHistory("透明カット", "tempFunc()");function tempFunc(){    // ヒストリーを記録しないための関数定義    if (cropTransparent() == false){        alert("透明部分が画像の半分以上あると切り抜けません");    }}// 透明部分をくり抜く関数// 戻り値がfalseなら失敗。trueなら成功function cropTransparent(){    var doc = app.activeDocument;    var ds = doc.selection;    // 横幅や縦幅を取得する。また、中央座標を計算する    var docW = parseInt(doc.width.as("px"));    var docH = parseInt(doc.height.as("px"));    var cx = docW/2;    var cy = docH/2;    // 左上と右下に前景色を1%の半透明で描画する（完全コピーを行うため）    ds.select([ [0, 0], [1, 0], [1, 1], [0, 1] ]);    ds.fill(app.foregroundColor, ColorBlendMode.NORMAL, 1);    ds.select([ [docW-1, docH-1], [docW, docH-1], [docW, docH], [docW-1, docH] ]);    ds.fill(app.foregroundColor, ColorBlendMode.NORMAL, 1);    // 透明部分を含む画像をキャプチャーし新しいチャンネルにペーストする    doc.activeLayer.copy(); // コピー    doc.channels.add(); // チャンネル追加    doc.paste();    // 新規チャンネルにペースト    var ch = doc.channels[3];    // 上からの位置を求める    for(var top=0; top<docH; top++){        ds.select([            [cx+0, top+0], [cx+1, top+0], [cx+1, top+1], [cx+0, top+1]        ]);        if (ch.histogram[0] != 1){ break; } // 透明部分がなくなったらループ終了    }    // 左からの位置を求める    for(var left=0; left<docW; left++){        ds.select([            [left+0, cy+0], [left+1, cy+0], [left+1, cy+1], [left+0, cy+1]        ]);        if (ch.histogram[0] != 1){ break; } // 透明部分がなくなったらループ終了    }    // 下からの位置を求める    for(var bottom=docH-1; bottom>0; bottom--){        ds.select([            [cx+0, bottom+0], [cx+1, bottom+0], [cx+1, bottom+1], [cx+0, bottom+1]        ]);        if (ch.histogram[0] != 1){ break; } // 透明部分がなくなったらループ終了    }    // 右からの位置を求める    for(var right=docW-1; right>0; right--){        ds.select([            [right+0, cy+0], [right+1, cy+0], [right+1, cy+1], [right+0, cy+1]        ]);        if (ch.histogram[0] != 1){ break; } // 透明部分がなくなったらループ終了    }    // 切り抜く    try{        app.activeDocument.crop([            UnitValue(left, "px"),            UnitValue(top, "px"),            UnitValue(right+1, "px"),            UnitValue(bottom+1, "px")        ]);        ch.remove();   // チャンネルを削除する        return true;    }catch(e){        // 失敗した場合は元の画像に復帰する        var desc = new ActionDescriptor();        var revertID = charIDToTypeID("Rvrt");        executeAction(revertID, desc, DialogModes.NO);        return false;    }}