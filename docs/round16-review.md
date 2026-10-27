# 第十六轮：统一内容轴线与全宽章节

日期：2026-10-27。本轮处理多重容器、侧栏标题、图标和页脚内缩制造的不同左起点。照片、原App、已审泰语、业务配置及JS逻辑不变，历史第十五轮报告和生成提示词不改。

**本文件记录已完成的本地实页与交互验收。** 线上发布结论以仓库外`../round16-preview/release-verification.json`中的commit、CI与实际浏览器记录为准，不以本地验收代替。

## 对标证据

重新通过原生浏览器访问[MoneyThunder](https://www.money-thunder.com/)，保存[Hero](../../round16-preview/competitors/moneythunder-hero.png)、[内容色带](../../round16-preview/competitors/moneythunder-content-band.png)和[页脚](../../round16-preview/competitors/moneythunder-footer.png)。观察到背景色带贯穿视口，内容限制在内侧共同区域；页脚大色面连续，内部按信息分组，而非每组叠加竖线和不同缩进。

本项目采用背景与内容容器分工，保留自己的主色、内容和功能。不复制竞品素材／业务承诺，也不将这次观察称为所有金融网站的通用强制规则。

## 当前代码变化

| 区域 | 原有问题 | 本轮实现 |
| --- | --- | --- |
| Hero | 外侧白边、圆角与独立宽度造成第二条轴线 | 全宽无外距／圆角；hero-copy直接带shell。原照片、遮罩、600／690px最小高保留 |
| 全局 | 背景和容器混用，章节内再内缩 | 章节背景铺满视口，内容仅一个最大1240px shell；gutter48／24／20px |
| 产品 | showcase二次40／32／20px内边与不平衡6+4列 | 整章中性背景，showcase padding0；两种Tab均6+6、顶部对齐，原240／210px设备保持 |
| 四步 | 章节之外再加内层顶线与额外顶距 | 直接用统一章节间距；原步骤与数字角色保留 |
| 公司／FAQ | 4+8标题侧栏、公司重复Logo、正文挤在右侧 | 标题在上、完整内容在下、联系操作最后；删除额外Logo，事实／FAQ完整保留 |
| 下载 | 图标推移标题，按钮单独靠右 | 标题、状态和下方CTA共用左起点，无App图标；按钮在文字下24px |
| 安全／页脚 | 安全白条割裂深色页脚，竖线与额外24px缩进 | 安全和页脚连续深青；品牌整行，然后公司／联系桌面2:1两列、手机单列；无竖线或横向额外内缩 |

主要修改：`assets/redesign.css`、`homepage.css`、`secondary.css`、`src/components/hero.html`、`src/pages/home.html`，以及重新构建的页面。以上是源码事实，不代替浏览器验收。

## 保留边界

沿用Tony Wu／Pexels16761599餐食摊照片和许可；当前两份WebP、全部原PNG、Logo、catalog、config及JS未改。上传日2023-05-10不是已核验拍摄日，照片不是客户、负债状况或代言证明；出处／SHA见[素材记录](visual-assets.md)。

四种字重、原生双Tab及键盘逻辑、等宽原App框、素行FAQ、图片maximize图标、四步、公司联系、安全内容和政策待提供状态继续保留。下载仍是preview待开放，不增加任何费用、审批、资格、牌照、渠道或效果承诺。

## 实际检查与证据

- 18组实页：home／security／privacy／terms各1440／360／375／390px，另加首页1024／760px。无横向溢出或可见破图；见[汇总](../../round16-preview/qa-summary.json)及[原始测量](../../round16-preview/responsive-checks.json)。
- 每种首页宽度检查9个章节全宽背景、23个主要左起点。共同左边界为 `L=(availableWidth-min(1240,availableWidth-2*gutter))/2`，gutter48／24／20；availableWidth排除预留的15px滚动条槽，不能把滚动条槽算成白边。
- 在4种必检宽度比较两种Tab的设备x／宽／高／圆角，240px PC／210px手机一致；见[设备测量](../../round16-preview/tab-geometry.json)。手机内容长度不同，设备y可随自然文流变化，不宣称两个面板所有位置完全一致。
- [交互记录](../../round16-preview/interactions.json)：待开放下载为0商店链接／0QR，Esc返回页尾触发器；迁移后的公司／FAQ联系仍打开0812341407；F04仅展开目标一条；步骤03显示750×1624原计划图；ArrowRight选还款并移焦；图库从2/4真实还款图打开；安全中心6条FAQ／7类骗局保留；返回恢复所选还款，新访问默认线上；360px菜单点击FAQ后关闭、锚点避开固定页头。
- 控制台warning／error为空；构建、7页静态链接／结构、JS语法检查完成。catalog、config和HOME PNG的SHA与原基线一致，照片和业务没有修改。

实际前后对照：[完整页面](../../round16-preview/full-page-before-after.png)、[手机](../../round16-preview/mobile-before-after.png)、[首屏](../../round16-preview/hero-before-after.png)、[下载至页脚](../../round16-preview/ending-before-after.png)。

## 发布记录

线上发布结论以`../round16-preview/release-verification.json`中的commit、CI及实际浏览器记录为准。此文仅记录本地验收，本地构建／截图或旧轮发布记录不能替代本轮发布证据。模拟手机视口并非实体Android验证，也不宣称完整无障碍认证。

继续复用已安装技能，本轮无新安装。历史生成提示词逐字保留，未重新采用旧概念。
