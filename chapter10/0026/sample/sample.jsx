﻿// 選択範囲があるかどうか調べるtry{    app.activeDocument.selection.bounds;    alert("選択範囲があります");}catch(e){    alert("選択範囲はありません");}