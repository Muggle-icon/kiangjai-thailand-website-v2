# 第十四轮：摄影真实性与统一设计规则整改

日期：2026-10-27。用户反馈集中在首屏人物不真实、手机样机大小不一、全页排版不工整。本轮保留已审泰语、内容／产品框架、四步申请、安全中心、预览阶段下载提示及原生交互，整改素材与共享组件规则，不新增金融功能或承诺。

**记录状态：源码整改、来源核查、16 组实际浏览器布局检查与核心交互检查已完成。** 线上发布结果另见交付记录；本文件不把静态检查当作视觉验收。

## 问题与对应整改

| 用户指出的问题／源码审查发现 | 本轮已实施的改动 | 实际验收重点 |
| --- | --- | --- |
| 第十三轮生成的社区店铺人物缺乏可信摄影细节 | 撤下两份生成 WebP，改用 Sommart Sopon 在曼谷拍摄、有作品页及拍摄元数据的真实照片；保留配图说明，不声称其为客户 | 面部／手部／服装自然；PC 与手机裁切完整；人物只是情境，不被误作借款见证 |
| HOME 与还款图使用不同宽度，产品图样式分散 | `scripts/build.py` 建立 `APP_SCREENS` 与唯一 `app-screen` renderer；全部产品图使用同一 DOM、边框、圆角和阴影 | 同一视口两张内联设备等宽；原 PNG 750×1624 比例完整；弹窗使用统一放大规则 |
| 全页容器与内容起点不一致 | 共享 `.shell`，最大 1240px；首页产品区采用 12 列：主介绍左图右文、还款左文右图；公司／FAQ 采用 4+8 列 | 标题、正文、图片和 FAQ 是否落在共同轴线上；窄屏重排后不保留多余缩进 |
| 章节间距和同角色字号各写一套 | 共享 section／heading／group／paragraph 间距、字号与行高 token；支持页也引用相同角色 | 章节分组清晰；相同标题层级、正文、控件和说明文字保持一致 |
| 图像查看、主 CTA、FAQ 控件的形态不统一 | 一个主按钮族、44px compact／文本操作族；FAQ 在首页和安全中心共用样式；查看原图统一 `app-image-action` | 按钮高宽、文字／图标间距和 FAQ 标记的光学居中；没有局部冲突覆盖 |
| 首屏一幅合成场景承担了过多“真实用户”暗示 | PC 以自然照片＋43% 青色文字区表达工作情境；手机按标题、244px 照片、额度及 CTA 重排 | 首屏只清楚表达产品、最高额度和下一步；文字不压住脸／手，不暗示人物职业／国籍／负债情况 |

照片出处、许可、文件尺寸及内容边界见 [素材记录](visual-assets.md)。竞品仅作为 Banner 图文关系、日常情境与层级的比较依据，未搬运其图片、人物或商业主张。

## 统一规则：当前源码值

以下是 `assets/redesign.css`／`homepage.css`／`secondary.css` 中的实际配置，是本项目实施选择，不应称作某个外部规范强制要求的数值。

| 角色 | PC／宽屏 | ≤760px |
| --- | --- | --- |
| 品牌与正文色 | `--cyan:#44E0F8`；`--ink:#00384c`；`--text:#183d49` | 同左 |
| 容器 | 最大 1240px；左右 gutter 48px；≤1100px 为 24px | 左右 20px |
| 网格与章节 | `--grid-gap:24px`；`--section-space:80px`；`--heading-gap:32px` | 网格间距 20px；章节 48px；标题到内容 24px |
| 内容分组 | group 24px；paragraph 16px | 同一语义角色继续共享 |
| 页面／章节／模块／条目标题 | 48／40／28／20px | 32／30／24／18px |
| 正文／辅助／caption | 16／14／12px；正文行高 1.85 | 同字号角色；按真实泰文换行复核 |
| 主 CTA | 224px 宽；52px 高；10px 角；图标 20px；gap 12px | Hero／下载主 CTA 为内容全宽 |
| compact／文字操作 | 至少 44px 高；文字操作图标 18px | 同左 |
| Header | 88px；≤1100px 为 76px，并切换菜单 | 68px；Logo 120px |
| 内联 App 框体 | 240px 宽；4px 内边；28px 角 | 210px 宽；同 4px 内边；26px 角 |
| FAQ | 76px 最小行高；padding 20×24px；32px 标记内置 20px SVG | 72px；padding 18×16px；28px 标记内置 18px SVG |

Hero 不放 App 样机，避免与真实生活照片争夺焦点。PC `.hero-stage` 最小高度 560px；左侧为明确的品牌青色面，右侧真实照片，没有渐隐遮罩。手机按标题、244px 照片、额度和 CTA 重排；390px 检查中 CTA 顶部约 572px。照片使用 `<picture>` 切换同一母片派生。

产品区和还款区共享 `product-row`：使用同一网格和设备大小，PC 交错构图，手机均先解释后展示原图。四步流程只使用实际顺序数字；只有步骤 03 打开匹配的 loan-plan 原图，不伪造缺失的注册或到账截图。公司和 FAQ 使用统一 4+8 列结构，移动端改为单列。

## 复用并实际应用的 GitHub 规则

没有为本轮重复安装同名 skill，也没有把“装了技能”作为设计验收。已核验的来源与现有技能如下：

| 技能／规则 | 来源性质 | 本轮适用范围 |
| --- | --- | --- |
| [Vercel web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) 及 [当前指南](https://github.com/vercel-labs/web-interface-guidelines/blob/main/README.md) | Vercel 官方；本地已有 | 明确对齐关系、光学对齐、图文重量、响应式、可见焦点、真实按钮语义和图片宽高 |
| [Anthropic frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Anthropic 官方；本地已有 | 由泰国借贷产品和真实内容决定视觉，保留品牌，避免同质化装饰和重复卡片 |
| [Impeccable](https://github.com/pbakaus/impeccable) 的 [layout](https://github.com/pbakaus/impeccable/blob/main/skill/reference/layout.md)、[typeset](https://github.com/pbakaus/impeccable/blob/main/skill/reference/typeset.md)、[polish](https://github.com/pbakaus/impeccable/blob/main/skill/reference/polish.md) | 社区项目；本地 4.7.0，核验时 GitHub 入口标记 4.8.0；本轮未更新安装 | 语义分组、共用间距和文字角色、共享组件修复、实际断点检查 |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 社区项目；本地已有 | 触控目标、16px 正文基础、语义 token、图标和同角色一致性补充 |

最新 Impeccable 以一个技能包含 layout／polish／audit 等命令；没有为了本项目再装旧的独立 normalize。当前技能覆盖了所需排版与一致性工作。

本轮 Impeccable launcher 的 `context` 命令返回 `zsh: permission denied`，执行器采用其规定的 fallback：直接读取既有 `PRODUCT.md`、`DESIGN.md`、源码以及 layout／typeset／polish 规则继续工作。不能据此声称 CLI detector 已运行或已经通过；外部规则也不覆盖已审泰语、真实业务配置与用户最新指令。

## 保留的内容与功能边界

- 已审原文 catalog、公开 config 与用户完整 HOME PNG 的 SHA256 保持原基线，详见素材记录。
- 最高额度 50,000、服务区域、公司事实、四步申请、7 条首页 FAQ、6 条安全 FAQ、7 类骗局内容和原生功能保留。
- 未增加利率、审批速度、牌照、资格、客户证言、商店地址或官方渠道；继续 preview／noindex。
- 下载仍以真实待开放提示工作；原 App 图内示例推广、费率及状态仍待业务核准，未转写为官网承诺。
- 安全中心／政策页保留既有职责，政策正文仍使用已审待提供状态。

## 实际验收

证据保存在仓库外 `../round14-preview/`，其中 `responsive-checks.json` 保留去重后的 16 组浏览器实际值，`interactions.json` 保留操作结果，PNG 为原始实页截图。

1. 首页、安全中心、隐私、条款各检查 1440／360／375／390px，16 组均无横向溢出，检查的文字和控件没有越过可视内容边界。截图检查了标题换行、分区和照片裁切。
2. 两张内联设备实际均为 PC 240×510.35px、手机 210×445.39px；padding、圆角、阴影相同，屏幕保持原比例。两类放大弹窗 PC 同为 286.33px、360px 视口同为 260.46px，原图完整展示。
3. 公司／FAQ 内容列起点四组均相同；章节标题均为 PC 40px／手机 30px；首页和安全中心 FAQ 的字号、行高、padding、gap、圆角四组逐项相同。360px FAQ 加号中心偏移为 0px。
4. 实测待开放下载（0 商店链接、0 下载 QR）、Esc 焦点恢复、图库前进及从还款图打开、仅步骤 03 详情、F01／F04 定位并单开、手机菜单关闭与锚点顶部约 88px、公司联系方式、安全中心 7 类骗局／6 FAQ 和保存首页返回位置。浏览器控制台无 error／warn。
5. Python 构建生成 4 页和 3 路由别名，7 页资源／锚点／语言／唯一 ID 检查通过，JS 语法检查通过；catalog/config/原 PNG 基线保持。

独立视觉复查曾指出手机先看到照片而延迟产品身份、两个产品区同构和 Hero 品牌色面积弱，已据此修改并重拍。当前是围绕真实内容的产品说明官网，不宣称复刻竞品的促销视觉，也不把布局检查等同于金融业务上线批准。
