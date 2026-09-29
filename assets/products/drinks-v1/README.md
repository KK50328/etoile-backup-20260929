# 飲品商品圖上架紀錄

完成日期：2026-09-16。使用內建 image_gen 生成四張 AI 商品示意圖，並以 sips 匯出 1000、580、250 像素 JPEG。不是實際商品攝影。

各圖片保存於本目錄：`latte.png`、`earl.png`、`yuzu.png`、`cocoa.png`；每款另有 `{名稱}-1000.jpg`、`{名稱}-580.jpg`、`{名稱}-250.jpg`。

## 上架結果

| 商品 | 商品編號 | 放大／大／小圖檔案編號 |
|---|---|---|
| 星芒經典拿鐵 | P0099100011100 | 51553／51554／51555 |
| 伯爵茶歐蕾 | P0099100011101 | 51558／51559／51560 |
| 柚香氣泡飲 | P0099100011102 | 51563／51564／51565 |
| 法式濃可可 | P0099100011103 | 51568／51569／51570 |

網站圖片路徑規則：`https://umart.uch.edu.tw/website/uploads_product/website_991/{商品編號}_{類型}_{檔案編號}.jpeg`。類型 3＝放大圖、1＝大圖、2＝小圖。

四款後台均顯示「已修改商品附加檔」。首頁四款飲品圖片已改為網站內部放大圖，驗證 naturalWidth=1000 且 complete=true。

原有 24 款甜點 P0099100011036–P0099100011059 均已有三種主圖及四張附圖，本次未覆蓋。飲品本次上傳三種主圖，未新增附圖。

## 完整生成提示詞

### latte

Use case: product-mockup. Generate ONE square photorealistic ecommerce product image for 星芒經典拿鐵, a classic cafe latte. One ivory ceramic cup and saucer with delicate star-shaped latte art, fully visible centered, elegant French patisserie, warm ivory seamless background and pale marble tabletop, soft natural window light, realistic coffee and milk foam, polished understated catalog photography. No text, logos, watermark, collage, people or extra drinks. AI product illustration, not a photograph of actual inventory.

### earl

Use case: product-mockup. Generate ONE square photorealistic ecommerce product image for 伯爵茶歐蕾, an Earl Grey tea latte: one ivory ceramic cup and saucer with silky pale milk foam, a few bergamot and tea leaves beside the cup. Fully visible centered, elegant French patisserie, warm ivory seamless background and pale marble tabletop, soft natural window light, realistic natural drink textures, polished understated catalog photography. No text, logos, watermark, collage, people or extra drinks. AI product illustration, not a photograph of actual inventory.

### yuzu

Use case: product-mockup. Generate ONE square photorealistic ecommerce product image for 柚香氣泡飲, sparkling yuzu drink: one clear tall elegant glass of golden citrus soda with ice, tiny bubbles and a curl of yuzu peel. Fully visible centered, elegant French patisserie, warm ivory seamless background and pale marble tabletop, soft natural window light, realistic natural drink textures, polished understated catalog photography. No text, logos, watermark, collage, people or extra drinks. AI product illustration, not a photograph of actual inventory.

### cocoa

Use case: product-mockup. Generate ONE square photorealistic ecommerce product image for 法式濃可可, rich French hot chocolate: one small ivory porcelain cup and saucer holding dark thick hot chocolate with a few subtle sea salt flakes. Fully visible centered, elegant French patisserie, warm ivory seamless background and pale marble tabletop, soft natural window light, realistic natural drink textures, polished understated catalog photography. No text, logos, watermark, collage, people or extra drinks. AI product illustration, not a photograph of actual inventory.
