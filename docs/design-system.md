# 第十六轮设计系统与实现映射

日期：2026-10-27。以当前 CSS、组件和产品 Tab 逻辑为准；外部设计规则不能修改已审泰语或业务事实。本轮移除多层容器、标题侧栏、图标位移及额外缩进；业务、字体、照片和JS不变。

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

PC Hero全宽无外距／宽度上限／圆角，最小高600px；`.hero-copy.shell`与正文同轴。连续照片和深青可读性遮罩保留，焦点64% 45%，picture宽120%左移4%（紧凑宽度130%左移12%）。

手机Hero同样全宽无外距／圆角，最小690px；直接使用shell的20px左右边距，不二次内缩。纵向遮罩、照片焦点64% 35%和原生文字不变。

页头 88／76／68px 高，桌面导航独立居中。当前项用 600 字重和淡青底，不画 underline／伪元素装饰线；1100px 以下为展开菜单。锚点只由全局 header 高度＋24px 的 root scroll padding 控制。

## 一个产品演示区

`.product-showcase` 将原在线申请与还款内容放进两枚 Tab，保留全部原文和原图，不删除业务内容。PC 同区显示一组内容，文字在左、原图在右；不再为只有两行说明的还款单独铺一个比首屏更高的 Banner。

产品章本身为全宽中性背景，showcase padding:0，不再嵌套32／40／20px内边和圆角灰卡。面板文字1–6列、图7–12列，平衡6+6且顶部对齐，最小高602px；手机沿原shell单列自然高度。Tab仍为52／72px，选中精确#44E0F8／600，未选正文色／500。

`assets/app.js` 的原生 Tab 逻辑维护 `aria-selected`、`aria-controls`、tabpanel `hidden` 和 roving tabindex；支持 Left／Right／Home／End。截图仍经 `APP_SCREENS` 和 `{{app-screen:…}}` 统一生成 `.app-device > img.app-screen`，显式 750×1624、height:auto。图库与步骤详情共用 `min(320px,calc((100dvh - 280px)*.46182266),100%)` 放大规则。

## 形状、图标和后续章节

主 CTA、次级联系按钮、文字导航、图片查看分别表达不同动作；不再每条文字都附下划线＋箭头。常态文字操作不加下划线，hover 可强调。联系、FAQ 目标和政策返回等七处重复箭头移除。图像查看改用 Lucide `maximize-2`（本地 `assets/icons/maximize.svg`），不与 FAQ 展开加号混用；实际上一页／下一页和安全页导航保留方向箭头。

四步数字 PC 44px/400、手机 32px/400，移除青蓝短划线，不与额度争夺视觉。公司和FAQ改为标题在上、完整内容在下、联系按钮最后，删除4+8侧栏；FAQ 由重复圆角卡片改为共用的素行分隔结构，标记在 hover／展开时有淡青反馈。页脚及支持页同步 400／500／600／700 字重和正文色职责。安全骗局、帮助和政策状态保留原有交互及内容职责。

首页背景均铺满视口，只有一个最大1240px shell和48／24／20px边距。Hero全宽无外白边／圆角，文字直接复用shell；产品去掉内嵌padding并采用6+6列；公司和FAQ标题置于完整内容上方；下载文字和下方CTA左对齐；安全提醒和页脚连续深青，页脚品牌整行后公司／联系两列，手机单列，无竖线或额外横向缩进。 四步使用直接章节间距，不叠加内层顶线／额外顶距。

## 规则与验证状态

借鉴 [MONIX](https://www.monix.co.th/) 的连续照片和开场层级，以及 [MoneyThunder](https://www.money-thunder.com/) 区分产品、说明、费用入口及帮助的结构；不宣称这些选择适用于所有官网，也不借用其业务能力、资质或素材。

复用已有 Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable layout／typeset／polish、UI UX Pro Max。没有新增同名安装；图标通过 Better Icons／Iconify 获取，许可证保留在 `assets/icons/LICENSE-Lucide.txt`。

第十六轮已完成18组实际布局：四页×1440／360／375／390px，加首页1024／760px，无横向溢出或可见破图。6种首页布局的9个全宽背景、23个主要左起点以及4种必检宽度的两种Tab设备规格均已测量；交互回归、7页静态检查和JS语法已完成。证据目录为仓库外`../round16-preview/`；线上发布结论以`../round16-preview/release-verification.json`中的commit、CI与实际浏览器记录为准；本文件记录本地验收。
