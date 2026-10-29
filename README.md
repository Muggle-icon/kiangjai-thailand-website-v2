# เคียงใจ Thailand website V2

第二十六轮仅修正产品标题层级与截图入口：章节40px／600，功能28px／500，正文18px；首个产品说明与App顶部对齐，章节至内容32px，标题至正文16px。移动端仍由Tab命名功能，不重复显示H3。移除步骤03的截图按钮及独立弹窗，完整四步文案保留；贷款计划图仍在产品图库第3张。产品图按钮明确写明查看哪张图片。首屏、压缩素材、业务配置及已审catalog保持。详见[本轮检查](docs/round26-review.md)与[前后截图](../round26-preview/)。

2026-10-29：已通过TinyPNG压缩8张实际加载图片，合计1.28MB→595KB（减少53.52%），保持当前设计／尺寸／透明背景；图片引用加入内容哈希以更新缓存。详见[图片压缩记录](docs/image-compression.md)。

第二十四轮按用户要求恢复第二十二轮（`e0cc8ff`）首屏构图，撤回第二十三轮的额度／下载并列、移动居中和说明分区。本轮仅降低辅助文字权重：即将开放提示仍在244px按钮同宽区内居中，14px／22px、`rgba(231,250,253,.78)`；审批与到账两句保留在Hero内、靠近额度和操作，13px／22px、`rgba(231,250,253,.72)`，上距PC20px／手机16px。已审泰语不变，无新条带或分隔线。PC600px／手机680px、原照片及其余页面沿用。

第二十二轮仅清理产品章后的孤立支持条：删除该条，将费用提醒恢复到已审线上申请完整段落，服务范围只在公司联系区保留固定展示；移除重复的步骤／F01／F04快捷入口，原页头／页尾步骤导航、四步正文和完整FAQ保持。其余沿用第二十一轮结构。

泰国小贷产品官网，独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，V1不受影响。第二十一轮按用户指定的MoneyThunder重新做结构：整幅真实生活场景Hero；两个独立同轴产品章节；白色公司事实章与青蓝联系区；两列深青品牌收束。明确替代第二十轮双手机拼贴、青蓝拼接首屏与多条等权页脚，不是继续修饰字号。

首屏保留一张原曼谷实拍，深青可读性遮罩、白色定位和青蓝50,000额度／下载入口。宽屏每个产品各自“左说明／右完整App”，线上申请白底、还款深青底；紧凑模式保留稳定成对Tab，移动摘要先于原图，费用提醒随线上段落显示；还款后直接衔接四步流程。公司信息独立白章只出现一次；About入口保留。

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
| `src/components/hero.html`、`benefits.html` | 整幅实拍Hero、独立产品story及完整已审线上段落 |
| `src/components/footer.html` | 白公司章／青蓝联系与深青双列close，所有页面共用 |
| `src/components/header.html`、`application-steps.html`、`src/pages/home.html` | 原导航、四步及FAQ框架 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、整幅Hero、产品story／移动subgrid及支持页／footer |
| `assets/app.js` | 成对Tab及story祖先hidden／inert同步，原导航／弹窗／FAQ／原图交互 |
| `scripts/build.py` | 静态构建与统一`APP_SCREENS`图片组件；已移除产品段落拆分宏 |
| `assets/app/`、`campaign/`、`brand/`、`icons/`、`fonts/` | 原始App／实拍／品牌／SVG及自托管授权字体 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文及公开配置，保持原值 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 当前产品边界与设计合同 |

## 证据和边界

第二十四轮本地Hero截图见[round24-preview](../round24-preview/)，覆盖1440／390／375／360px；检查恢复构图、辅助文字及横向溢出。独立窄范围复查读取1440／390／360px截图，确认提示低于标题／额度／按钮且仍可读。其他交互、构建和线上发布结果由主流程单独记录，本段不预先声明通过。第二十三轮审查文档保留为历史，不再代表当前首屏。

第二十二轮历史浏览器证据见[round22-preview](../round22-preview/)及[stability.json](../round22-preview/stability.json)：390／375／360／760／1024共5个紧凑宽度的online→repayment→Home切换中，scroll、手机及下一章节位置差均0，横向溢出0。已检查1440／390／375／360首页完整截图及390还款选中态；独立复查确认本次删除与内容归位，无新增设计问题。构建、7页静态链接／ID及JS检查通过；线上结果单独记录在round22-preview/release-verification.json，不复用上一轮完整21场景计数。

第二十一轮历史记录为21个页面／宽度场景、4组紧凑产品、8组模态、2组FAQ键盘展开及10条动作；其截图／独立审查和发布证据保存在`../round21-preview/`与[历史审查](docs/round21-review.md)。这些计数与ship判断不代表第二十二轮已完成同范围重跑。

第二十一轮QA修复了宽屏CSS提前隐藏Tab使焦点丢失的问题：Tab基础布局为grid，初始native hidden与JS统一管理显隐，断点先捕获焦点再更新；两方向聚焦路径均已实测。

第二十一轮按明确的MoneyThunder方向直接以代码实现；实际阅读Impeccable new-work／craft-floor参考，未做随机概念筛选、comp生成或自动detector。既有其他技能只作为可用安装，不表示本轮逐项执行。没有物理设备认证或完整竞品视觉等同结论。

继续`releaseStatus: preview`／noindex及真实下载待开放提示，不虚构商店／下载QR／官方身份／举报或牌照。正式法律正文和图内推广／费率／示例仍待业务核准。

详见[第二十一轮历史结构与审查证据](docs/round21-review.md)、[交付](docs/delivery.md)、[设计系统](docs/design-system.md)、[素材来源](docs/visual-assets.md)。旧轮报告和[生成历史](docs/generated-art-prompts.md)保留原文。
