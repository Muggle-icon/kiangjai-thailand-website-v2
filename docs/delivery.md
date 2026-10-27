# Kiangjai V2 第十六轮实现与交付边界

日期：2026-10-27。独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。本轮针对多层容器、不同左起点和页脚断层整改布局，保留已审内容、产品框架和安全功能。原 V1 不受影响。

第十六轮已完成18组实际布局：四页×1440／360／375／390px，加首页1024／760px，无横向溢出或可见破图。6种首页布局的9个全宽背景、23个主要左起点以及4种必检宽度的两种Tab设备规格均已测量；交互回归、7页静态检查和JS语法已完成。证据目录为仓库外`../round16-preview/`；线上发布结论以`../round16-preview/release-verification.json`中的commit、CI与实际浏览器记录为准；本文件记录本地验收。

## 当前实现

| 区域 | 本轮整改与保留职责 |
| --- | --- |
| Hero | Tony Wu 的曼谷餐食摊实拍贯穿整幅 Banner；深青可读性遮罩和可编辑文字，不再左右各半。PC 600px／手机 690px 最小高度，保留最高 50,000 泰铢和真实待开放下载 |
| 产品 | 一个双 Tab 演示区切换在线申请／还款，全部已审原文和原图保留；取消单独巨大还款 Banner，两图同框同宽 |
| 四步 | 保留完整顺序和已审原文；数字 44／32px、400 字重，移除装饰短线；只有步骤 03 查看真实贷款计划图 |
| 公司／FAQ | 标题在上、完整内容在下、联系操作最后；无4+8侧栏，FAQ和公司事实保留 |
| 导航／动作 | 当前导航用淡青底与 600 字重，移除装饰下划线；七处重复箭头删除；图片查看用 maximize 图标，不复用 FAQ 加号 |
| 全局／支持页 | 仅使用 400／500／600／700 四类字重；主要阅读正文回到正文色；共享按钮、间距、原生弹窗及真实法律待提供状态 |

首页背景均铺满视口，只有一个最大1240px shell和48／24／20px边距。Hero全宽无外白边／圆角，文字直接复用shell；产品去掉内嵌padding并采用6+6列；公司和FAQ标题置于完整内容上方；下载文字和下方CTA左对齐；安全提醒和页脚连续深青，页脚品牌整行后公司／联系两列，手机单列，无竖线或额外横向缩进。

## 文件和组件

继续静态 HTML/CSS/JS 与既有 Python builder。本轮主要布局改动位于`src/components/hero.html`、`src/pages/home.html`和三份CSS；JS、业务config、已审catalog和图片未改；四个根页面与三个 clean-route alias 需要随构建提交。

`APP_SCREENS` 与 `{{app-screen:…}}` 集中七个原图实例：两个产品 Tab、步骤 03、图库四张。内联外框 240px／手机 210px，4px 内边、28／26px 角；PNG 保持完整 750×1624。两个原图弹窗使用共同的最大 320px／高度适配公式。

新增产品 Tab 使用 native button、role tablist／tab／tabpanel、aria-selected／controls、roving tabindex 和 Left／Right／Home／End，完整内容仍在 DOM。返回安全中心时会在恢复滚动前恢复所选产品标签；普通访问仍默认线上申请。既有图库顺序 HOME／还款／贷款计划／可提款状态、Esc／方向键／焦点恢复、FAQ 单开、菜单、联系与待开放下载保留；本轮布局变化后已实际回归验证。

详细尺寸与角色见 [design-system.md](design-system.md)。

## 素材与业务边界

当前 Hero：[Tony Wu／Pexels 16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)，来源地点曼谷，上传日 2023-05-10，未核验拍摄日。按 [Pexels 许可](https://www.pexels.com/license/)使用，不暗示画中人物代言或使用 Kiangjai。两份生产图为 `bangkok-food-stand-1200.webp`（1200×800、172,856B）、`bangkok-food-stand-2200.webp`（2200×1467、433,824B）。只缩放压缩，显示裁切与遮罩均为 CSS；无生成人物修补。上一轮咖啡馆照片与生成小店不再作当前 Hero。

配图不证明人物国籍、借款需求、财务状态、客户／员工关系、贷款结果或公司地点。原 App 图内 QR 只是产品示例，不是网站支付入口。Lucide maximize-2 来自 Better Icons／Iconify，保留 ISC／相关 Feather MIT 许可记录。完整出处和历史见 [visual-assets.md](visual-assets.md) 与 [generated-art-prompts.md](generated-art-prompts.md)。

| 原有基线 | SHA256 |
| --- | --- |
| 已审 Thai catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开 config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |
| 最新原 HOME PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |

保留四步、7 条首页 FAQ、6 条安全 FAQ、7 类骗局、公司联系与政策入口。不复制竞品人物、照片、奖项或承诺；不新增利率、审批时效、资格、牌照、商店、下载 QR、官方渠道或客户证言。登记号 0105567184971 不是放贷牌照。

## 验收与正式上线前资料

本轮18组布局、两种Tab、共同左起点／全宽背景测量、设备规格、图库与步骤原图、FAQ／下载／联系／菜单／返回状态均有当前证据。构建、7页静态检查、catalog／config／HOME PNG基线与JS语法已检查；线上发布结论以`../round16-preview/release-verification.json`中的commit、CI与实际浏览器记录为准；此处记录本地验收。模拟手机视口不等于实体Android测试，静态规则不等于完整无障碍认证。

继续 `releaseStatus: preview`／noindex。正式运营仍需业务确认商店／开发者身份、有效资质和核验地址、正式隐私及服务条款／日期、官方举报渠道，以及无推广／费率冲突的 App 展示图。原首页 200,000 推广、日利率及示例金额／时间仍待核准，未提取为官网承诺。

规则来源、竞品观察、技能复用和本轮状态见 [round15-review.md](round16-review.md)。不把技能存在或构建成功作为交付已经验收的依据。
