# Kiangjai V2 第二十轮整页审查与交付边界

日期：2026-10-28。独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，V1不受影响。第二十轮响应用户的整页审查要求，完整对照LINE BK、Rabbit Cash、MoneyThunder，按实际字体／密度证据调整Hero比例、产品先后与共享支持、统一章节角色以及页脚事实可读性；不是仅做字号patch。业务／原文／真实App及素材文件不改。

第二十轮本地浏览器记录21个页面／宽度场景，无横向溢出、破图或缺失ARIA目标；4组紧凑产品双态／Home键返回及8组弹窗几何／scroll差均0，共享support始终可见。2组FAQ键盘行位移−0.1875／0.125px，另有7条当前交互记录。静态7页、链接／重复ID、JS语法及diff检查通过，浏览器warn／error为空；已审段落精确重建及SHA断言通过。当前完整截图／测量及[QA摘要](../../round20-preview/qa-summary.json)在`../round20-preview/`；线上发布结论以`../round20-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

## 当前页面和组件

| 区域 | 当前职责及实现 |
| --- | --- |
| Hero | 明亮#44E0F8全宽构图、深青文字、PC80／手机64px额度；同一曼谷实拍CSS放大1.42／1.75，PC560／手机640px最小高度，明确待开放下载 |
| 产品 | 白色居中章标题；>1100px左侧两张240px原App并列、右侧两个完整说明；≤1100px稳定成对Tab，≤760px为Tab→摘要→210px媒体→共享support |
| 四步 | 原四步与步骤03真实贷款计划图，48／40px编号，PC连接／紧凑两列／手机纵向连接 |
| FAQ | 原7条、统一40／28px章节、PC880px列表、手机左对齐标题，单开和点击行定位保留 |
| 共享页脚 | 下载、品牌／公司／联系、6主导航、安全及政策集中一次；About锚点保留；事实／安全正文16px、公司名24／22px，分组间距收紧，电话复制同行 |
| 安全／政策 | 原内容轴与现有功能不改；共用新页脚，法律正文仍真实待提供 |

PC共享轴1120px及48／24／20px边距不变。Kanit标题／UI、Noto正文和400／500／600／700字重角色保留。Hero为明确的局部行动尺寸244×56px，手机满宽52px；共用按钮52px／10px角，页头44px，页脚联系44px。详情见[design-system.md](design-system.md)。

继续静态HTML/CSS/JS及Python builder。当前主要修改benefits／footer组件、三份CSS及builder分段；原header／home／app.js行为框架保留；生成四个根页面与三个clean-route aliases需一同构建提交。未改catalog、业务config或图片／字体文件。`APP_SCREENS`／`{{app-screen:…}}`继续统一七处真实原图实例。

## 响应式和交互合同

宽屏>1100px显示两个region和两个完整媒体；紧凑模式才有Tab／tabpanel与双aria-controls IDREFS、roving tabindex及四键操作。compact两正文／两媒体各叠一格，非激活不可见且inert但保留最长真实内容高度。移动DOM顺序为Tab／摘要／媒体／support。摘要和费用提醒从同一已审段落按既有边界拆分，builder检查重建和边界，不改catalog文字；共享support含费用提醒／服务范围／申请及FAQ链接，两种状态始终可用。跨断点保留当前／被聚焦feature，必要时从隐藏Tab移焦对应可见图片查看按钮。

页头顺序FAQ在About前；首页scrollspy仅在home运行、按真实DOM位置排序，安全页单独标记。继承弹窗位置／焦点恢复、52px复制反馈槽、FAQ与details点击行定位、同文档别名锚点不重载，以及返回FAQ／产品／scroll状态。当前4组紧凑双态／Home返回记录确认共享support不hidden／inert；其余当前交互和测量见下方本轮结果，不扩称未记录路径。

## 素材与业务边界

当前Hero仍为[Tony Wu／Pexels16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)，来源地点曼谷，上传日2023-05-10，拍摄日未核验；[Pexels许可](https://www.pexels.com/license/)记录保留。两生产WebP仍1200×800／172,856B和2200×1467／433,824B。本轮桌面照片构图不换，手机CSS放大1.75／origin69%44%及640px构图变化；未生成或修改人物场景，不暗示客户／代言、国籍或财务状态。

Kanit六份OFL WOFF2仍98,568B，与原Noto共同自托管；没有再下载竞品文件。图标／字体／原图出处见[visual-assets.md](visual-assets.md)，生成实验只保留[历史记录](generated-art-prompts.md)。

| 保留基线 | SHA256 |
| --- | --- |
| 已审Thai catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |
| 最新原HOME PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |

保留四步、7条首页FAQ、6条安全FAQ、7类骗局、联系与政策入口。不新增利率、审批、资格、牌照、商店、下载QR、官方渠道或证言；公司登记0105567184971不是放贷牌照。图内200,000推广、日利率及示例金额／时效不提取为官网承诺。

## 验收与正式上线资料

第二十轮当前记录为21／4／8／2／7，详见[round20-review.md](round20-review.md)。独立原分辨率截图及源码审查未见新增必修，最新44px联系控件已在canonical页面重新截图。PC页脚854.7→763.1px，390页脚1465.7→1393.6px，同时事实文字更大；390产品因摘要优先和可读图注由1139→1205px，不以压短为唯一目标。浏览器视口不等于物理设备或完整竞品视觉等同；线上结论按round20发布记录。

本轮实际直接阅读Impeccable layout／typeset／craft-floor，人工应用规则并进行浏览器QA；未运行其自动detector。已有Vercel Web Interface Guidelines、Anthropic frontend-design、UI UX Pro Max仅安装可用，本轮未逐项执行。无新技能安装或新字体下载。三站原始数据与判断见[round20-review.md](round20-review.md)。

继续`releaseStatus: preview`／noindex。正式运营仍需业务确认商店／开发者身份、有效资质及核验地址、正式隐私与条款／日期、官方举报渠道，以及无推广／费率冲突的App展示图。详见[round20-review.md](round20-review.md)。
