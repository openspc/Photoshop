// すべてのレイヤーセットとレイヤーの階層を保持したままファイルに書き出すvar fileObj = File.saveDialog("保存ファイル名を指定してください", "result.txt");if (fileObj != null){  // 保存先が指定された    var flag = fileObj.open("w");   // 書き込みモードで開く    if (flag){  // 書き込める状態の場合は以下の処理を行う        var list = getAllLayerInfo(app.activeDocument, [], 0); // すべてのレイヤーを取得する        for(var i=0; i<list.length; i++){            // 階層のレベルだけ全角空白を入れる            for(var j=0; j<list[i].level; j++){                fileObj.write("　");            }            if (!list[i].layer.kind){ // レイヤーセットの場合は先頭に■マークを付加する                fileObj.write("■");            }            fileObj.writeln(list[i].layer.name);  // レイヤー名を書き出す        }        fileObj.close();    // ファイルを閉じる    }else{        alert("ファイルが開けません。書き込み禁止になっていないか確認してください");    }} // すべてのレイヤー／レイヤーセットオブジェクト情報を取得する// IN : レイヤー／レイヤーセットオブジェクト, 配列オブジェクト// OUT : レイヤー／レイヤーセットオブジェクト情報を格納した配列オブジェクトfunction getAllLayerInfo(obj, ary, level){    for(var i=0; i<obj.layers.length; i++){        ary.push({            layer : obj.layers[i],  // レイヤー情報            level : level   // 階層レベル        });        if (!obj.layers[i].kind){    // レイヤーセットの場合            getAllLayerInfo(obj.layers[i], ary, level+1);        }    }    return ary; // 結果は配列で返す}