# 第四轮视觉素材记录

生成日期：2026-10-26。工具：内置 ImageGen；未调用fallback CLI或外部API key。场景仅用于品牌生活插图，不是实际客户肖像、见证或合作门店。

## 网站使用的文件

- `assets/images/cafe-life-v4.jpg`：1448×1086，JPG回退。
- `assets/images/cafe-life-v4-800.webp`：800×600，移动/普通密度。
- `assets/images/cafe-life-v4-1440.webp`：1440×1080，较宽/高密度。
- 原生HTML picture负责响应式照片；手机边框、页面背景、文字与按钮都是HTML/CSS，真实App截图是独立图片。未将整张生成稿作为网站。
- 使用用户原有Logo、贷款计划和还款图；`home-current.png`、`withdrawal-current.png`为本次用户补发的750×1624原图，只在产品示例图库中呈现。

## 场景最终生成提示词

以首屏概念图为构图参考，单独生成以下照片。生成概念中的品牌招牌和未经确认的文案均未进入网站。

```text
Use case: photorealistic-natural. Create a STANDALONE PRODUCTION PHOTOGRAPH for the right-side hero window of a Thai lending app website. Reference image is a website design CONCEPT only; isolate and recreate the café-life scene with the same daytime lighting and composition, not the website UI. Output landscape 4:3, richly detailed, natural photography. Thai woman small café owner around30, warm beige cotton blouse, practical indigo apron, real unretouched skin, tied-up hair, on RIGHT 60% of frame. She looks down at a phone held naturally in BOTH hands and reads it with a calm small smile, never looks at camera and never advertises phone to camera. Both hands anatomically natural. Neighborhood Bangkok café, modest clean wooden shelves and brewing equipment, daylight from left, leafy view outside. Foreground counter across bottom, LEFT 30% relatively quiet clear counter/soft background so a native website product screen can be composed there later. No second large device, no mockups, no superimposed text, no financial claims, no logos, no brand signs, no watermark, no readable chalkboard text. Remove the hanging Kiangjai-like brand sign visible in reference; this is an illustrative everyday-life scene, not an endorsed customer or official branded store. Avoid luxury marble palaces, cheap neon, staged cheering, coins, money, stock-photo thumbs-up. White neutral daylight with gentle natural warmth; NO teal/cyan overlay, NO gradients. The production website will add its cyan field and exact real app screenshot with code separately; photograph only.
```

## 实施校核

完整App图片未重绘、未改业务数字；照片仅进行格式转换和响应式缩放，裁切由CSS object-fit控制。用户截图中未经核准的推广额度、异常日利率和时效没有转为官网文字承诺。正式运营仍需替换为核准的公开展示图。
