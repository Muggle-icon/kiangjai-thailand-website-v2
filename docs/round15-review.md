# 第十五轮：对标构图、章节比例与全页视觉统一

日期：2026-10-27。本轮依据用户对 MONIX／MoneyThunder 的持续对标要求，针对“生活照仍像随手贴图、字体／颜色／动作杂乱、还款区体量超过信息价值”继续整改。保留内容、产品框架、已审原文、原 App PNG 和现有安全功能。

本轮已完成四页×1440／360／375／390px的16组实页检查，并增加首页1024／760px两组，共18组；未发现横向溢出。产品切换及键盘、图片查看器、FAQ、菜单、下载、联系和安全中心返回状态已实测。证据在仓库外`../round15-preview/`，发布事实以其中release-verification.json和线上截图为准；旧轮检查不计作本轮结果。

## 对标中实际采用的观察

| 一手来源 | 本轮观察与取舍 | Kiangjai 的实施 |
| --- | --- | --- |
| [MONIX](https://www.monix.co.th/) | 开场是一幅连续生活／工作照片配强标题，下方转入公司介绍及能力；这是企业品牌站，不能当作完全相同的消费借贷产品结构 | 采用完整照片与统一的文字可读性处理，撤去左右各半的硬分割；公司规模、媒体、客户／资质等只保留我们真实具备的信息 |
| [MoneyThunder](https://www.money-thunder.com/) | 页面区分 campaign、适用说明、优势、产品、费用入口和 FAQ 等职责；并非每个区域都用一张手机撑成大 Banner | 保留完整已审内容，将在线申请与还款合并到一个双 Tab 产品演示区，流程回到紧凑顺序说明；不增加其产品、资格、计算器、利率、审批时效、奖项或用户数字 |

上述是页面观察和本项目取舍，不是所有泰国官网的普遍规则，也不是素材使用授权。竞品截图只供研究，不部署其照片或设计文件。

## 问题、改动及验收重点

| 第十四轮问题 | 第十五轮代码改动 | 需用实际页面确认 |
| --- | --- | --- |
| 首屏青蓝文字面与咖啡馆照片各占一半，人与产品的关系松散 | 换为 Tony Wu 的曼谷餐食摊实拍；照片贯穿 Banner，深青横／纵向渐隐只服务文字可读性，原生白色标题、青蓝额度与 CTA 形成同一构图 | 人物与工作环境有效，脸／手／餐食不被错误裁切；PC／手机文案均清楚 |
| 还款只有两行说明却占约一个大首屏 | 一个 `.product-showcase`、两个 native Tab，保留全部原文和原图；只有一个面板可见，不再另建大还款章节 | 两种内容都能被找到；切换时设备同宽同框，阅读和高度变化合理 |
| 产品文字、设备位置和动作重复散落 | 文字与设备在共同 12 列轴线顶部对齐；申请步骤是次级按钮，FAQ 目标是简洁文字导航；图片查看统一有边框控件 | 同类边界和顶部一致；动作主次清楚，低权重入口不围成装饰群 |
| 字重 300／550／650／750 交错，正文过灰 | 固定 body 400、UI 500、strong 600、display 700；主要业务正文回到 #183D49，辅助状态仍可用 muted | 长泰文真实换行、视觉重量和可读性；支持页与页脚不另生一套角色 |
| 到处是下划线和箭头，弹窗联系像外链 | 顶部当前项改淡青底／600；七处联系、FAQ 目标和政策返回等箭头删除；常态文字操作不一律下划线；hover/focus 反馈保留 | 仍能辨认入口；动作图标与真实行为一致，没有纯装饰箭头 |
| 图片查看加号与 FAQ 展开混用 | 三处图片入口用 Lucide maximize-2；FAQ 加号只表示展开，图库前后方向箭头保留 | 图标家族、18／20／24px角色、stroke和光学居中一致 |
| 流程数字过大、短划线增加杂讯，FAQ 卡片重复 | 流程数字 44／32px、400，移除短线；首页／安全 FAQ 改共用素行分隔 | 步骤足够明显而不抢额度焦点；FAQ 展开和聚焦状态清楚 |

## 已落实的主要规格

- 原 Logo、自托管 Noto Sans Thai 和精确 #44E0F8 保留。导航 current 使用淡青，不等同于产品 Tab：**选中产品 Tab 用精确品牌青蓝**，600 字重；未选中正文色、500。
- 共享容器最大 1240px，gutter 48／24／20px；章节 80／48px、标题间距 32／24px。PC Hero 外距 24px、16px 角、最小 600px；手机外距／角 12px、最小 690px。
- Hero 产品／定位／额度 PC 为 56／28／80px，手机 32／21／60px；字重 700／500／700。主要阅读正文 16px/1.85。
- 产品演示面 PC padding 32×40px／16px 角，两个 Tab，面板最小高 602px；手机 padding 20px／12px 角、自然高度。两张原图经同一个 renderer，内联框 240／210px，4px 内边、28／26px 角和统一阴影。
- 主动作 52px、600；紧凑及文字操作至少 44px。图片查看为独立 bordered action，联系按钮按 `data-contact` 共享次级形态。
- FAQ 素行 PC 最小 76px／16px/500，32px 标记中 20px SVG；手机 72px、28／18px 标记。产品操作和 FAQ 不共用无意义的加号。

这些数值是本项目实施选择，不应称为外部规范强制要求。完整角色和源码映射见 [design-system.md](design-system.md)。

## 原生 Tab 和现有功能

`assets/app.js` 对两枚按钮维护 `role=tab`、`aria-selected`、`aria-controls`、roving tabindex、对应 `role=tabpanel` 的 hidden 状态；源码支持 Left／Right／Home／End，面板与原文均留在 DOM。实际Left／Right／Home／End操作已验证；手机两枚Tab各127.5×72px，切换后显示相应原文和完整210px设备。仅安全中心返回的?return=1恢复所选Tab，并在滚动恢复前执行；普通访问默认线上申请。

既有下载待开放提示、图库 HOME／还款／贷款计划／可提款状态顺序、步骤 03、Esc／焦点恢复、FAQ 单开、F01／F04定向展开、菜单、联系、安全中心和政策路由保留。四步、7 条首页 FAQ、6 条安全 FAQ、7 类骗局不减少。

## 照片、图标与技能来源

当前 [Pexels 16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)由 Tony Wu 提供，地点标记曼谷，上传日 2023-05-10；没有已核验拍摄日。两份优化 WebP 为 1200×800／172,856B 和 2200×1467／433,824B。人物和场景只缩放压缩，CSS 控制裁切与遮罩，无生成人物修改。[Pexels 许可](https://www.pexels.com/license/)允许网站使用，但不允许暗示人物代言；配图不证明客户、职业／国籍／财务状态或贷款结果。上一轮咖啡馆派生与生成店铺均撤出当前生产用途。

通过 Better Icons／Iconify 获取 [Lucide maximize-2](https://icon-sets.iconify.design/lucide/maximize-2/)，本地为 `assets/icons/maximize.svg`；[Lucide 许可](https://lucide.dev/license)及本地许可证保留。没有新增图标运行依赖。

复用已安装且核验过一手来源的 [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)、[Anthropic frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)、[Impeccable](https://github.com/pbakaus/impeccable) layout／typeset／polish、[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)，无新同名安装。前两项是对应公司官方来源，后两项为社区项目，不混称官方规范。

Impeccable launcher 的 context 在本环境返回 permission denied，采用技能允许的 direct-read fallback：读取现有 PRODUCT.md／DESIGN.md 和引用规则继续；没有宣称 CLI detector 已通过。技能规则用于统一性、分组与可读性，不能覆盖用户已审泰语或真实业务边界。

## 内容基线与验收结果

Thai catalog、公开 config 和最新 HOME PNG 的 SHA256 保持原基线，详见 [visual-assets.md](visual-assets.md)。继续 preview／noindex；不新增费率、时效、资格、牌照、下载链接、官方渠道、客户证言或法律正文。原图的推广／费率冲突仍待业务核准。

本轮已保存18组布局数据和截图。所有可见文字仅使用400／500／600／700，主导航text-decoration与::after均为none。公司／FAQ轴线和章节字号四目标宽度匹配；首页与安全FAQ的font／weight／line／padding／radius／gap逐项一致。两种产品状态均为PC240px／手机210px，图库及步骤图PC286.33px、360px视口260.46px。360px FAQ加号中心偏移0px。

实测产品切换、键盘、图库及Esc焦点、步骤03、F01／F04、待开放下载0商店链接／0下载QR、联系、菜单关闭与88px锚点、安全7类骗局／6FAQ和安全中心返回后的Tab恢复。7页资源／锚点／语言／唯一ID检查及JS语法通过。截图对照和实际观测在仓库外../round15-preview/。

独立视觉复查确认人物与经营场景可辨、文案没有遮住主角；同时指出未选中标签偏弱，已加强正文色与选中色对比后验证手机可达。保留原App截图中的业务冲突为待核准事项，不用设计验收替代业务上线批准。手机视口不等于实体Android测试，也不宣称完整无障碍认证。线上版本事实见release-verification.json及live-desktop.png／live-mobile.png。
