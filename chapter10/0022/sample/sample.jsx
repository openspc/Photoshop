﻿// 選択範囲をコピーするvar docObj1 = app.activeDocument;docObj1.selection.copy();    // 通常のコピー// 新規ドキュメントを作成しペーストするvar docObj2 = app.documents.add();docObj2.paste();app.activeDocument = docObj1;    // アクティブドキュメントとして設定docObj1.selection.copy(true);    // 結合部分をコピー// 新規ドキュメントを作成しペーストするvar docObj3 = app.documents.add();docObj3.paste();