# 第十五轮设计系统与实现映射

日期：2026-10-27。以当前 CSS、组件和产品 Tab 逻辑为准；外部设计规则不能修改已审泰语或业务事实。本轮修复上一轮“整页尺寸数值相同，但章节体量、字重和动作层级仍不协调”的问题。

## 共享角色 Tokens

| 角色 | PC／宽屏 | ≤760px |
| --- | --- | --- |
| 品牌／深青／正文／辅助 | `#44E0F8`／`#00384C`／`#183D49`／`#566E76` | 同左 |
| 白／中性／淡青／分隔线 | `#FFFFFF`／`#F2F6F7`／`#E7FAFD`／`#D9E2E5` | 同左 |
| 字重 | body 400、UI 500、strong 600、display 700 | 同左；不用 300／550／650／750 零散角色 |
| 内容轴／边距 | 最大 1240px；48px gutter；≤1100px 为 24px | 20px gutter |
| 网格／章节／标题间距 | 12 列、gap 24px；章节 80px；标题到内容 32px | 单列重排、gap 20px；章节 48px；标题到内容 24px |
| 页面／章节／模块／条目标题 | 48／40／28／20px | 32／30／24／18px |
| 正文／辅助／caption | 16／14／12px，正文行高 1.85 | 同角色；实际泰文换行须复核 |
| Hero 产品／定位／额度 | 56／28／80px，字重 700／500／700 | 32／21／60px |
| 主按钮／compact | 最小 52／44px，主按钮 224px 宽、10px 角、16px/600、20px 图标 | 主要转化入口满可用宽 |
| 文字操作／图片查看 | 至少 44px 触点、14px/500、18px SVG；查看为有边框控件 | 同左 |
| 原 App 框 | 外宽 240px、4px 内边、28px 角、统一阴影 | 外宽 210px、4px 内边、26px 角 |
| FAQ | 素行分隔、最小 76px、padding 20px 0、16px/500、32px 标记内 20px SVG | 最小 72px、padding 18px 0、28／18px 标记 |

这些是本项目的实现选择，不宣称为外部规范强制数值。正文承担阅读，用 `--text`；muted 主要用于图注、服务范围和次要状态，不能把完整业务解释全部压成浅灰。

## Banner 和导航

Hero 使用 [Tony Wu／Pexels 16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/) 的曼谷餐食摊实拍，按 [Pexels 许可](https://www.pexels.com/license/)使用。上传日期 2023-05-10；未核验拍摄日。保留配图说明，不声称人物为借款人或代言人。只有缩放、压缩及 CSS 显示裁切，未修改人物和场景。

PC：外边距 24px，上距 24px，Banner 最大 1600px、最小高 600px、16px 角；一幅连续照片贯穿，深青横向渐隐支持白色可编辑文字、青蓝额度和 CTA，不再左右各半。照片 CSS 焦点 64% 45%，picture 宽 120%、左移 4%（紧凑宽度为 130%、左移 12%）。

手机：外边距／角为 12px，文案区最小高 690px；照片仍贯穿整幅 Banner，纵向深青遮罩保护顶部标题及下方额度／操作；照片焦点 64% 35%。原生文字、按钮与说明均可编辑，不使用整幅页面图片。

页头 88／76／68px 高，桌面导航独立居中。当前项用 600 字重和淡青底，不画 underline／伪元素装饰线；1100px 以下为展开菜单。锚点只由全局 header 高度＋24px 的 root scroll padding 控制。

## 一个产品演示区

`.product-showcase` 将原在线申请与还款内容放进两枚 Tab，保留全部原文和原图，不删除业务内容。PC 同区显示一组内容，文字在左、原图在右；不再为只有两行说明的还款单独铺一个比首屏更高的 Banner。

PC 演示面 padding 32×40px、16px 角，Tab 容器最大 640px，Tab 最小 52px；面板沿 12 列、文字 1–6 列／图 8–11 列，最小高 602px。手机演示面 padding 20px、12px 角，Tab 最小 72px 以容纳已审泰文，面板转单列、自然高度。选中 Tab 使用品牌主色 #44E0F8 和 600 字重；未选中为正文色／500。产品文字与设备顶部对齐，不再由垂直居中制造高低落差。

`assets/app.js` 的原生 Tab 逻辑维护 `aria-selected`、`aria-controls`、tabpanel `hidden` 和 roving tabindex；支持 Left／Right／Home／End。截图仍经 `APP_SCREENS` 和 `{{app-screen:…}}` 统一生成 `.app-device > img.app-screen`，显式 750×1624、height:auto。图库与步骤详情共用 `min(320px,calc((100dvh - 280px)*.46182266),100%)` 放大规则。

## 形状、图标和后续章节

主 CTA、次级联系按钮、文字导航、图片查看分别表达不同动作；不再每条文字都附下划线＋箭头。常态文字操作不加下划线，hover 可强调。联系、FAQ 目标和政策返回等七处重复箭头移除。图像查看改用 Lucide `maximize-2`（本地 `assets/icons/maximize.svg`），不与 FAQ 展开加号混用；实际上一页／下一页和安全页导航保留方向箭头。

四步数字 PC 44px/400、手机 32px/400，移除青蓝短划线，不与额度争夺视觉。公司和 FAQ 延续 4+8 列，手机单列；FAQ 由重复圆角卡片改为共用的素行分隔结构，标记在 hover／展开时有淡青反馈。页脚及支持页同步 400／500／600／700 字重和正文色职责。安全骗局、帮助和政策状态保留原有交互及内容职责。

## 规则与验证状态

借鉴 [MONIX](https://www.monix.co.th/) 的连续照片和开场层级，以及 [MoneyThunder](https://www.money-thunder.com/) 区分产品、说明、费用入口及帮助的结构；不宣称这些选择适用于所有官网，也不借用其业务能力、资质或素材。

复用已有 Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable layout／typeset／polish、UI UX Pro Max。没有新增同名安装；图标通过 Better Icons／Iconify 获取，许可证保留在 `assets/icons/LICENSE-Lucide.txt`。

本轮已完成四页×1440／360／375／390px的16组实页检查，并增加首页1024／760px两组，共18组；未发现横向溢出。产品切换及键盘、图片查看器、FAQ、菜单、下载、联系和安全中心返回状态已实测。证据在仓库外`../round15-preview/`，发布事实以其中release-verification.json和线上截图为准；旧轮检查不计作本轮结果。 详细结果见[round15-review.md](round15-review.md)。
