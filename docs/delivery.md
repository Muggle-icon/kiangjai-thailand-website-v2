# Kiangjai V2 第二十二轮产品章清理

日期：2026-10-28。第二十二轮仅删除还款章后的孤立支持条：恢复`copy:cdd17cff597160`完整线上段落及费用提醒，移除builder拆分宏与无用样式；固定服务范围只保留在公司联系区。重复步骤／F01／F04快捷入口移除，页头／页尾步骤导航、四步正文及完整FAQ不变。业务config、catalog、照片、字体与App不改。

独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，不影响原V1。第二十一轮重做上一版结构：从青蓝拼接首屏／双机拼贴／多横带收尾，改为整幅实拍／两条产品story／独立公司章／两列品牌close。已审业务和产品框架保留。

## 当前页面与源文件

| 区域 | 当前实现与职责 |
| --- | --- |
| Hero | 原生活工作实拍铺满、深青遮罩、白定位、青蓝50,000额度／CTA；PC600／手机680px，无新人物素材 |
| 产品 | 宽屏白线上／深青还款两独立全宽story，均左说明／右完整App；compact成组Tab与story祖先同步隐藏，移动subgrid对齐摘要／原图 |
| 公司 | 共同footer内独立白事实章，青蓝联系块，真实登记／地址一次呈现，About保留 |
| Close | 深青两列，App身份／下载左、导航右，安全／政策辅助在下；不恢复五条同级横带 |
| 其他 | 原导航／四步／FAQ主要保留，安全与政策路由共用新footer，维持原生功能 |

主要文件：`src/components/hero.html`、`benefits.html`、`footer.html`及三份CSS；app.js增加story祖先与panel／media的同步hidden／inert。保持静态HTML/CSS/JS和原Python builder，无JSX／框架迁移。四根页与三clean-route aliases一同构建。业务config、catalog、字体／照片／App文件未改。

原图仍由`APP_SCREENS`／`{{app-screen:…}}`统一输出完整750×1624、240／210px框、4px内边、28／26px角及共同放大查看器。只有步骤03打开匹配贷款计划图。产品章后无共享支持条；线上完整段落保留费用提醒，联系区保留固定服务范围。

## 交互和布局合同

>1100两个story同时可见，panel为region；≤1100成对native tabs，仍双IDREFS和四键／roving tabindex，JS另同步整个story祖先，避免底色与内容脱离。手机父grid两行配合story subgrid，摘要在上、原图在下，两状态共享内在轨道几何。线上费用提醒随线上Tab显示；还款章后直接进入流程。

保留原弹窗scroll／焦点恢复、52px反馈槽、FAQ／details点击行定位、同文档锚点、返回FAQ／产品／scroll、菜单与图库。第二十一轮模态／动作与断点焦点结果仅作历史记录，不作为本轮重跑计数。其QA发现并修复Tab宽屏CSS提前隐藏导致焦点丢失：基底grid／源码native hidden，JS在断点先捕获focus再统一显隐；展开焦点在online媒体、收缩保留聚焦还款，均hiddenFocus:false。精确视觉／控件尺寸见[design-system.md](design-system.md)。

## 素材和真实业务

仍用[Tony Wu／Pexels16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)曼谷来源实拍，上传2023-05-10、拍摄日未核验，[Pexels许可](https://www.pexels.com/license/)保留。生产1200×800／172,856B和2200×1467／433,824B WebP未改；只改CSS铺满／裁切／遮罩。人物不表示客户、借款需要、财务状况、国籍或代言。原App图标用于close身份，不生成新硬件或人像。

Kanit六WOFF2仍98,568B及SIL OFL；Noto正文、SVG来源／许可不变，无新技能／字体／素材安装。详见[visual-assets.md](visual-assets.md)。

| 不变基线 | SHA256 |
| --- | --- |
| 已审Thai catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |
| 原HOME PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |
| 原还款PNG | `fcd9e6b8c2534a3c3af87769366a6c471ad2b15054f4fd248854cfcb4d8ce0bf` |

保留4步骤／7首页FAQ／6安全FAQ／7骗局。公司登记0105567184971不是放贷牌照；不新增利率／审批／资格／商店／下载QR／官方渠道。截图内200,000推广、日利率及示例状态仍待业务核准，不提取为官网承诺。preview／noindex与下载／法律正文真实待开放状态保持。

## 当前证据与发布

第二十二轮当前浏览器证明见[round22-preview](../../round22-preview/)与[stability.json](../../round22-preview/stability.json)：390／375／360／760／1024共5个紧凑宽度的online→repayment→Home中，scroll、手机与下一章节位置差均0，横向溢出0。已检查1440／390／375／360首页完整截图及390还款选中态；独立复查确认本次删除与内容归位，无新增设计问题。构建、7页静态链接／ID及JS检查通过；线上结果单独记录在round22-preview/release-verification.json，不复用上一轮完整21场景计数。

第二十一轮历史记录为21个页面／宽度场景、4组紧凑产品、8组模态、2组FAQ键盘检查和10条动作，其独立ship判断只覆盖当时所给截图／源码范围。历史证据见[round21-review.md](round21-review.md)及`../../round21-preview/`；这些结果不认证本次修改。不能以旧轮通过、技能已安装或本地构建推定当前实现已发布。MoneyThunder仍只作PC结构参考，其自动轮播不构成固定首屏或有效手机样本。

第二十一轮实际阅读Impeccable new-work／craft-floor并按固定方向直接实现；无seed concept筛选／comp生成／自动detector。正式运营仍需商店／开发者身份、有效资质核验、已审法律正文／日期、官方举报渠道和无推广／费率冲突的App展示图。详见[round21-review.md](round21-review.md)，历史报告原文保留。
