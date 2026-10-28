# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，V1不受影响。第二十一轮按用户指定的MoneyThunder重新做结构：整幅真实生活场景Hero；两个独立同轴产品章节；白色公司事实章与青蓝联系区；两列深青品牌收束。明确替代第二十轮双手机拼贴、青蓝拼接首屏与多条等权页脚，不是继续修饰字号。

首屏保留一张原曼谷实拍，深青可读性遮罩、白色定位和青蓝50,000额度／下载入口。宽屏每个产品各自“左说明／右完整App”，线上申请白底、还款深青底；紧凑模式保留稳定成对Tab，移动摘要先于原图，费用／服务范围／申请／FAQ支持始终可见。公司信息独立白章只出现一次；About入口保留。

业务配置、已审Thai catalog、完整App、照片／Logo及授权Kanit／Noto文件不改。无新生成照片、技能或字体安装。继续原静态HTML/CSS/JS和Python组件构建，无JSX或框架迁移。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开`http://localhost:4173`。修改源组件后重新构建，提交四个根页面及`/privacy/`、`/terms/`、`/security/`别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html` | 整幅实拍Hero、独立产品story及共享支持 |
| `src/components/footer.html` | 白公司章／青蓝联系与深青双列close，所有页面共用 |
| `src/components/header.html`、`application-steps.html`、`src/pages/home.html` | 原导航、四步及FAQ框架 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、整幅Hero、产品story／移动subgrid及支持页／footer |
| `assets/app.js` | 成对Tab及story祖先hidden／inert同步，原导航／弹窗／FAQ／原图交互 |
| `scripts/build.py` | 静态构建、原已审段落分组与统一`APP_SCREENS`图片组件 |
| `assets/app/`、`campaign/`、`brand/`、`icons/`、`fonts/` | 原始App／实拍／品牌／SVG及自托管授权字体 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文及公开配置，保持原值 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 当前产品边界与设计合同 |

## 证据和边界

第二十一轮本地最终记录21个页面／宽度场景、4组紧凑产品、8组模态、2组FAQ键盘展开及10条动作。无溢出／破图／缺失ARIA目标；产品和模态所测几何／scroll差均0，模态焦点回company；数据／字体／原图／照片SHA保持，静态7页／链接锚点／重复ID／JS／diff通过，浏览器warn／error为空。全部21场景及canonical截图在断点焦点修复后重跑／重截。新的独立审查在所给PC／默认移动截图和源码范围作出ship判断；它没有操作浏览器、验证全部交互或发布，不能简写成全站“视觉合格”。截图／MoneyThunder新PC参考在仓库外`../round21-preview/`；线上发布结论以`../round21-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

QA还修复了宽屏CSS提前隐藏Tab使焦点丢失的问题：Tab基础布局为grid，初始native hidden与JS统一管理显隐，断点先捕获焦点再更新；两方向聚焦路径均已实测。

本轮按明确的MoneyThunder方向直接以代码实现；实际阅读Impeccable new-work／craft-floor参考，未做随机概念筛选、comp生成或自动detector。既有其他技能只作为可用安装，不表示本轮逐项执行。没有物理设备认证或完整竞品视觉等同结论。

继续`releaseStatus: preview`／noindex及真实下载待开放提示，不虚构商店／下载QR／官方身份／举报或牌照。正式法律正文和图内推广／费率／示例仍待业务核准。

详见[本轮结构与审查证据](docs/round21-review.md)、[交付](docs/delivery.md)、[设计系统](docs/design-system.md)、[素材来源](docs/visual-assets.md)。旧轮报告和[生成历史](docs/generated-art-prompts.md)保留原文。


追加的窄范围复查已检查最终1440／390／360截图和还款手机选中态：照片与App均完整绘制，深色还款章、查看操作及共享support可读，结论ship，仅限这些视觉项；浏览器与发布数据仍以各自记录为准。
