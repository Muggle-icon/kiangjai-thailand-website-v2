# 第十七轮：产品、公司和页脚重新分组

日期：2026-10-27。本轮重新查看MoneyThunder实际产品、关于和页脚页面，重点整改三个区域，并将全站内容轴从1240收至1120px。已审内容、业务框架、Logo、照片和原App文件不改。

**当前本地验收已完成18组页面及17项运行记录；线上发布单独以发布记录为准。** 本地证据在仓库外`../round17-preview/`；线上发布结论以`../round17-preview/release-verification.json`中的commit、CI及实际浏览器记录为准。

## 实页比较与采用的办法

[MoneyThunder产品区](../../round17-preview/competitors/moneythunder-product.png)将主要图片与产品名称、说明、入口构成一个整体；[关于页](../../round17-preview/competitors/moneythunder-about.png)以明确的标题和内容区建立阅读重心；[页脚](../../round17-preview/competitors/moneythunder-footer.png)把品牌身份、导航、联系及政策分组，而非将所有事实逐项拉成长页。这些截图来自本轮原生浏览器访问[官网](https://www.money-thunder.com/)。

本项目采用的是信息组合和比例关系，保留自身#44E0F8及原内容。未复制竞品人物、图像、功能、宣传利益、资格、利率、审批、牌照、奖项或社交渠道，也不把本次观察说成所有官网的强制规范。

## 实际代码变化

| 区域 | 本轮实现 | 内容与功能边界 |
| --- | --- | --- |
| 共享内容轴 | `--content:1120px`；48／24／20px gutter，页头、Hero、首页与支持页同步 | 全宽章节及原Hero照片／遮罩不改 |
| 产品 | 整章品牌青蓝，左完整原App、右标题／Tab／说明／操作完整信息组；.85fr／1.15fr、gap64、最小600px | 两种用途仍由原文解释，不新增营销卖点；原图框仍240／210px |
| 字体及图注 | 产品说明20px/1.8、手机18px；图注／查看PC同行，手机堆叠 | 字重仍400／500／600／700，原图未裁切、拉伸或改字 |
| Tab及移动端 | DOM先content后media；桌面CSS将媒体置左。aria-controls每项两个ID，同步文字tabpanel和media figure | JS仅把原单ID读取扩展为按空白拆分IDREFS；原键盘、焦点和返回状态逻辑保留 |
| 公司 | 标题后，左事实、右电话／联系，1.8fr／1fr、gap64；电话36px，联系44px；章padding64px | 手机章40px、电话30px、事实后联系；原公司、号码、地址和登记号含义不变 |
| 页脚 | 左品牌176px与公司，右四个既有主导航两列18px，随后电话36px与联系；下方独立安全／政策／联系四入口 | 手机Logo156、主导航16、电话30，堆叠；未增加新业务页、渠道或公司资料 |
| 下载／安全条 | PC紧凑横排，手机堆叠；安全与页脚仍连续深青 | 待开放下载和真实安全入口保留 |

页脚主导航复用首页、产品、流程和FAQ；底部原安全、隐私、条款及联系保留，桌面横排／手机两列。信息分组更清楚是目的，不要求为了缩短高度删除服务或法律入口，也不声称页脚高度已减少。

## 配对原图与语义

原图仍由APP_SCREENS统一生成、完整750×1624；Tab改变可见状态而非删除信息。`product-panel-online product-media-online`及其repayment对应项分别由aria-controls指向。脚本逐ID切换hidden，selected／tabindex／Left／Right／Home／End和图库仍沿用原合同。

手机内容先行，不通过截断截图压缩页面；屏幕尺寸和自然高度必须分开验收。不同文案长度可使设备y位置不同，不承诺所有Tab几何位置完全相同。

## 本轮实际验收

[汇总](../../round17-preview/qa-summary.json)和[原始布局](../../round17-preview/responsive-checks.json)记录18组实际页面：home／security／privacy／terms各1440／360／375／390px，另加首页1024／760px；全部已渲染并查看[截图总览](../../round17-preview/all-pages-contact-sheet.jpg)，无横向溢出或可见破图。

- 共同容器为1120px；所有aria-controls目标均有效。4种必检宽度的[配对设备检查](../../round17-preview/tab-geometry.json)确认两状态x／宽／高一致，PC240px／手机210px，原图保持完整比例。手机y随已审文案长度自然变化，不宣称所有位置相同。
- [17项运行记录](../../round17-preview/interactions.json)：ArrowRight／Home／End／ArrowLeft均使选中Tab、文字panel、媒体和焦点匹配；下载仍0商店链接／0QR，Esc回页尾触发器；公司和页脚联系打开原公司电话；F04仅展开一条；还款图库从2/4到3/4；步骤03为原750×1624计划图。
- 安全内容为6条FAQ、7类骗局；返回时Tab／panel／media均恢复还款，新访问默认online。手机菜单跳FAQ后关闭，锚点约87.91px；页脚4项主导航可用，产品锚点88px，原3个安全／政策链接和联系操作保留。
- 控制台记录为空；构建、7页静态、JS语法和差异检查通过。catalog、config和原HOME的SHA与基线一致。

| 同一桌面状态章节高度 | 修改前 | 修改后 | 解读 |
| --- | --- | --- | --- |
| 产品 | 944.35px | 728px | 标题与说明组成一组，减少无效占高 |
| 公司 | 541.48px | 363.99px | 身份与联系分组，保留全部事实 |
| 页脚 | 542.74px | 579.79px | 新增的是4个既有主导航的呈现，分组更完整；没有变矮，不作缩短声明 |

直接查看原生截图对照：[产品](../../round17-preview/product-before-after.png)、[公司](../../round17-preview/company-before-after.png)、[页脚](../../round17-preview/footer-before-after.png)、[整页](../../round17-preview/full-page-before-after.png)、[手机](../../round17-preview/mobile-before-after.png)。上述高度仅对应这组桌面状态，不推广为所有宽度。

## 来源与发布记录

Tony Wu／Pexels16761599及许可、未核验拍摄日期、配图非客户／代言等边界不变，见[素材记录](visual-assets.md)。原App内推广／费率冲突仍待业务核准；生成提示词及历史报告原文保持，本轮无新技能安装或生成素材。

线上发布结论以`../round17-preview/release-verification.json`中的commit、CI及真实浏览器记录为准，本地截图和旧轮发布不替代该证据。以上为模拟视口检查，不等同于实体Android设备验证或完整无障碍认证。
