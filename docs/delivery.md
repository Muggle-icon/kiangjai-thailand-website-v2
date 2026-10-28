# Kiangjai V2 第十八轮实现与交付边界

日期：2026-10-28。独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。本轮实测MoneyThunder字体族，补齐Kanit显示字体并修复Tab／展开／弹窗／同页锚点／返回状态的点击位移，保留已审内容、产品框架和安全功能。原 V1 不受影响。

第十八轮本地浏览器回归已记录21个页面／宽度场景，均无横向溢出、缺失ARIA目标或可见破图；4组产品状态切换及键盘返回的位置／滚动差为0，8组弹窗打开／关闭差为0，6组展开点击行位移不超过0.25px。14条交互记录涵盖锚点、菜单、返回状态、图库、下载、反馈和字体／隐藏状态。静态构建与发布记录另行核验；线上发布结论以`../round18-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

## 当前实现

| 区域 | 本轮整改与保留职责 |
| --- | --- |
| Hero | Tony Wu 的曼谷餐食摊实拍贯穿整幅 Banner；深青可读性遮罩和可编辑文字，不再左右各半。PC 600px／手机 690px 最小高度，保留最高 50,000 泰铢和真实待开放下载 |
| 产品 | 全青蓝背景，左原图／右完整标题+Tab+正文+操作，20／18px说明；两状态文字与媒体同步，240／210px同框 |
| 四步 | 原顺序与文案，编号改48／40px青蓝实心标记；只有步骤03查看真实贷款计划图 |
| 公司／FAQ | 公司结构和事实保留；FAQ及summary共用Kanit20／18px和SVG；展开维持点击行屏幕位置 |
| 导航／动作 | 当前导航用淡青底与 600 字重，移除装饰下划线；七处重复箭头删除；图片查看用 maximize 图标，不复用 FAQ 加号 |
| 全局／支持页 | 仅使用 400／500／600／700 四类字重；主要阅读正文回到正文色；共享按钮、间距、原生弹窗及真实法律待提供状态 |

共享内容轴收至1120px（原1240px），48／24／20px边距不变，页头、Hero和所有页面同步。产品整章改为品牌青蓝，完整原App在左，标题／Tab／正文／操作组成右侧完整信息组；手机DOM顺序为信息组后原图。公司章标题下按左事实、右电话／联系组织；页脚按左品牌／公司、右侧既有四个主导航／联系组织，法律安全入口另占全宽底栏，下载与安全条桌面横排、手机堆叠。

标题／UI改自托管Kanit500／600／700，正文原Noto保留；六份WOFF2共98,568B、附OFL，字体来源与竞品实际测量均有外部记录。产品标题／Tab固定顶部，正文和媒体各自按真实最高状态保留空间，非激活visibility:hidden+inert，避免PC标题与手机后续章节位移。弹窗反馈位52px；安全页横向目录、完整内容轴，不改内容。

## 文件和组件

继续静态 HTML/CSS/JS 与既有 Python builder。主要改动位于app.js、三份CSS、security页面、builder及新字体文件；JS增加配对状态inert、preventScroll、弹窗位置恢复、披露行补偿、同文档锚点和返回FAQ状态；业务config、catalog和图片未改；四个根页面与三个 clean-route alias 需要随构建提交。

`APP_SCREENS` 与 `{{app-screen:…}}` 集中七个原图实例：两个产品 Tab、步骤 03、图库四张。内联外框 240px／手机 210px，4px 内边、28／26px 角；PNG 保持完整 750×1624。两个原图弹窗使用共同的最大 320px／高度适配公式。

新增产品 Tab 使用 native button、role tablist／tab／tabpanel、aria-selected、双ID的aria-controls、roving tabindex 和 Left／Right／Home／End，完整内容仍在 DOM。返回安全中心时会在恢复滚动前恢复所选产品标签；普通访问仍默认线上申请。既有图库顺序 HOME／还款／贷款计划／可提款状态、Esc／方向键／焦点恢复、FAQ 单开、菜单、联系与待开放下载保留；本轮已有当前浏览器记录，详见下方验收及[round18-review.md](round18-review.md)。

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

第十八轮本地浏览器回归已记录21个页面／宽度场景，均无横向溢出、缺失ARIA目标或可见破图；4组产品状态切换及键盘返回的位置／滚动差为0，8组弹窗打开／关闭差为0，6组展开点击行位移不超过0.25px。14条交互记录涵盖锚点、菜单、返回状态、图库、下载、反馈和字体／隐藏状态。静态构建与发布记录另行核验；线上发布结论以`../round18-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

本轮是字体、层级和交互稳定性改进，照片未更换；以上功能与几何验收不等于与竞品完整视觉等同。原始记录在仓库外`../../work/round18/`，截图在`../round18-preview/`。

继续 `releaseStatus: preview`／noindex。正式运营仍需业务确认商店／开发者身份、有效资质和核验地址、正式隐私及服务条款／日期、官方举报渠道，以及无推广／费率冲突的 App 展示图。原首页 200,000 推广、日利率及示例金额／时间仍待核准，未提取为官网承诺。

规则来源、竞品观察、技能复用和本轮状态见 [round18-review.md](round18-review.md)。不把技能存在或构建成功作为交付已经验收的依据。
