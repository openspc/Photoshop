﻿// αチャンネルを選択範囲にするvar aCh = app.activeDocument.channels[3];    // 4番目のチャンネルapp.activeDocument.selection.load(aCh, SelectionType.REPLACE, true);