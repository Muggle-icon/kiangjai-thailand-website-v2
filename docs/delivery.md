# Kiangjai V2 第十四轮实现与交付边界

日期：2026-10-27。独立仓库`Muggle-icon/kiangjai-thailand-website-v2`。本轮针对人物不真实、手机样机不统一和全页排版规则混乱进行整改，保留已审内容、产品框架及功能。原V1不受影响。

当前已完成16组实页布局截图（四页×1440／360／375／390px），布局测量无横向溢出。构建、7页资源／锚点／结构检查、JS语法、设备／FAQ共享规格比对及核心交互检查已完成；本轮证据目录为仓库外`../round14-preview/`，线上发布事实以其中`release-verification.json`和线上截图为准。旧轮次测试、截图或发布成功不计作本轮结果。

## 当前实现

| 区域 | 本轮变化与保留职责 |
| --- | --- |
| 首屏 | 用可追溯的曼谷工作情境实拍替代生成小店人物；PC青蓝文字面与右侧照片，无渐变；手机标题、照片、额度、CTA依次组织；保留最高50,000泰铢和真实待开放提示 |
| 产品主行 | 完整原始HOME在左、完整已审线上办理介绍在右，范围及费用FAQ入口为辅助信息 |
| 还款行 | 镜像为文字在左、完整原还款图在右；与HOME使用同一产品组件、宽度、圆角、阴影和查看操作 |
| 四步申请 | 实际顺序编号和已审文案；只有步骤03打开匹配原贷款计划图 |
| 公司／FAQ | 同一4+8列轴线；手机单列；首页和安全页FAQ内部样式完全共享 |
| 导航／控件 | 保留居中导航与手机菜单，统一52px主按钮、44px紧凑／文本触点；锚点只有全局一份偏移 |
| 支持页／页脚 | 共用标题、正文和动作角色；政策页共同内容轴、自然高度及真实待提供状态；公司联系与安全功能保留 |

## 实施规格与文件

内容轴最大1240px；左右边距48／24／20px。页面／章节／模块字号48／40／28px，手机32／30／24px；正文16px/1.85、辅助14px、caption12px。章节间距80／48px，标题到内容32／24px。详见[设计系统](design-system.md)。

`APP_SCREENS`与`{{app-screen:…}}`由`scripts/build.py`集中生成七处产品图片实例：两张内联图、步骤03原图、图库四张。内联外框统一240px／手机210px，4px内边、28／26px角；原PNG始终完整750×1624。两个图片弹窗共用最大320px及视口高度适配公式，不各写一套样机。

主要源码为`src/components/hero.html`、`benefits.html`、`application-steps.html`、`app-gallery.html`，`scripts/build.py`及三份CSS。生成四个根页面与三个干净路由别名。完整页面保持可编辑HTML/CSS/JS，无框架迁移。

## 素材来源与事实边界

Hero为Sommart Sopon的真实摄影[Pexels35764278](https://www.pexels.com/photo/professional-working-remotely-in-bangkok-cafe-35764278/)，拍摄于曼谷，日期2022-02-19；按[Pexels许可](https://www.pexels.com/license/)使用。生产派生仅为`assets/campaign/bangkok-workday-1200.webp`（1200×800，83,408B）与`bangkok-workday-2000.webp`（2000×1333，181,664B）。照片仅缩放压缩，人物和场景没有生成式编辑。

照片是情境配图，不证明产品客户、员工、代言、公司地点、贷款效果或人物国籍／职业／财务状况。首屏保留`ภาพประกอบ`说明。第十三轮两份生成小店WebP已从生产资源撤下，历史母版与六份概念只留来源记录，不部署。详见[素材记录](visual-assets.md)与[历史提示词](generated-art-prompts.md)。

- 原Logo、全部原App PNG、已审catalog、公开config和50,000泰铢上限保持。
- 四步、7条首页FAQ、6条安全FAQ、7类骗局及公司／联系／政策入口保持。
- 图库顺序仍为HOME、还款、贷款计划、可提款状态；HOME从第1张、还款从第2张打开。
- native dialog、图库切换、Esc及焦点恢复、单开FAQ、菜单、联系弹窗和首页返回位置已点测；减少动画CSS保留。
- 不复制竞品照片、人物、奖项或业务承诺；不新增利率、审批时效、资格、牌照、商店链接、下载QR、官方渠道或客户证言。网站不接受申请或还款。

| 来源基线 | SHA256 |
| --- | --- |
| `src/content/reviewed-th.json` | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| `src/config.json` | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |
| `assets/app/home-overview.png` | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |

## 规则复用、验收与发布

GitHub成熟规则已核验并复用现有安装：Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable和UI UX Pro Max。本轮不重复安装，不以技能存在代替实际检查；来源、角色和CLI fallback见[整改记录](round14-review.md)。

当前16组布局截图、共享规格计算值、核心交互结果、PC与移动端前后比较均已产生。发布证明记录Pages工作流、线上资源版本与真实线上截图；本地构建不作为上线成功依据。模拟手机视口不等同于实体Android测试，静态检查不等于完整可访问性认证。

继续`releaseStatus: preview`和noindex；Pages只打包访客页面及资源。正式运营仍需业务确认商店／开发者身份、有效资质及核验地址、正式隐私和服务条款及日期、官方举报渠道、无冲突的官网App展示图。登记号0105567184971不是放贷牌照；原首页200,000推广、日利率和示例金额／时间仍待业务核准。App账单QR不是网站付款入口。
