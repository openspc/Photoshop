﻿// テキストの内容にテキストレイヤーの名前をあわせるvar list = getAllLayer(app.activeDocument, []);for(var i=0; i<list.length; i++){    if (list[i].kind == LayerKind.TEXT){        list[i].name = list[i].textItem.contents;    // 内容をそのまま名前にする    }}// レイヤーセットを除くすべてのレイヤーオブジェクトを取得する// IN : レイヤーオブジェクト, 配列オブジェクト// OUT : レイヤーオブジェクトを格納した配列オブジェクトfunction getAllLayer(obj, ary){    for(var i=0; i<obj.layers.length; i++){        if (obj.layers[i].kind){    // レイヤーセット以外の場合            ary.push(obj.layers[i]);        }else{  // レイヤーセットなので再帰            getAllLayer(obj.layers[i], ary);        }    }    return ary; // 結果は配列で返す}