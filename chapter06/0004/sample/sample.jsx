﻿// レイヤーセットを追加するvar lsObj = app.activeDocument.layerSets.add();lsObj.name = "パーツ部分";var textLayerSetObj = app.activeDocument.layerSets["テキスト"];var newLayerSet = textLayerSetObj.layerSets.add();newLayerSet.name = "サブタイトル";