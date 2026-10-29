# 图片压缩记录（2026-10-29）

按用户指定，使用 [TinyPNG](https://tinypng.com/) 网页压缩8张实际加载的照片、App截图和品牌PNG。未开启格式转换，保持原尺寸、完整截图比例和品牌透明背景。当前首屏继续第二十四轮构图／提示样式，所有CSS、JS、已审Thai catalog、config及字体未改。

8张资产合计 **1,279,257 → 594,573 bytes**，减少 **684,684 bytes（53.52%）**。PC Hero433,824→291,612B；手机Hero172,856→122,560B；四张App截图分别减少65.85%～75.94%。合计含PC／手机版本，不代表同一用户同时请求两张Hero，也没有据此推算加载秒数。

| 图片 | 原bytes | 压缩后bytes | 减少 | 保持尺寸 |
| --- | ---: | ---: | ---: | --- |
| `assets/campaign/bangkok-food-stand-2200.webp` | 433,824 | 291,612 | 32.78% | 2200×1467 |
| `assets/campaign/bangkok-food-stand-1200.webp` | 172,856 | 122,560 | 29.1% | 1200×800 |
| `assets/app/withdrawal-current.png` | 279,163 | 67,157 | 75.94% | 750×1624 |
| `assets/app/home-overview.png` | 221,409 | 58,190 | 73.72% | 750×1624 |
| `assets/app/loan-plan.png` | 80,479 | 27,485 | 65.85% | 750×1624 |
| `assets/app/repayment.png` | 67,746 | 21,116 | 68.83% | 750×1624 |
| `assets/brand/app-icon.png` | 15,519 | 3,922 | 74.73% | 240×240 |
| `assets/brand/logo-master.png` | 8,261 | 2,531 | 69.36% | 368×128 |

PNG使用TinyPNG调色压缩，品牌透明边缘保留；原图仍可从Git历史恢复，工作备份在仓库外。独立检查原分辨率泰文／数字、Logo透明边和照片对照，未见明显画质问题。原文件不是逐字节不变，本记录替代此前交付中未压缩图片的SHA基线。

构建器按图片自身内容SHA256前12位写入图片URL。src、srcset、favicon与Hero preload共享同一函数；根页生成后再处理clean-route相对路径。CSS／JS版本算法与业务逻辑保持。去掉新增图片查询参数后，7个生成HTML与上一版逐字一致。

只优化实际使用的8张图片；5张历史未引用图片未做清理，不影响实际页面加载。本轮证据在仓库外`../../round25-compression/`，包含TinyPNG结果截图、原站下载的压缩包、前后大小与SHA清单、画质对照、页面截图及发布核验。
