# 第十七轮设计系统与实现映射

日期：2026-10-27。基于当前源码记录产品、公司与页脚的实际调整。业务及素材不变，JS只扩展Tab对配对文字／图片节点的同步显隐；旧轮几何和测试结果不作为当前结论。

## 共享角色 Tokens

| 角色 | PC／宽屏 | ≤760px |
| --- | --- | --- |
| 品牌／深青／正文／辅助 | `#44E0F8`／`#00384C`／`#183D49`／`#566E76` | 同左 |
| 白／中性／淡青／分隔线 | `#FFFFFF`／`#F2F6F7`／`#E7FAFD`／`#D9E2E5` | 同左 |
| 字重 | body 400、UI 500、strong 600、display 700 | 同左；不用 300／550／650／750 零散角色 |
| 内容轴／边距 | 最大 1120px；48px gutter；≤1100px 为 24px | 20px gutter |
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

## 一个配对产品演示区

整章背景使用精确#44E0F8；`.product-showcase`为0.85fr／1.15fr两列、gap64px、最小600px，原App媒体在左，标题、Tab、说明及操作为右侧`.product-content`完整信息组。DOM先content后media，≤760px自然形成标题／Tab／正文／操作→完整原图的顺序。

Tab宽520px且max-width:100%，white底；选中深青／白字600，未选正文色500，最小52px／手机72px。产品说明20px/1.8、手机18px/1.8；产品／公司章上下64px、手机40px。图注与查看按钮PC同行，手机堆叠。App仍240／210px、4px边、28／26px角，不裁切原750×1624PNG。

每个Tab的aria-controls包含两个ID（文字tabpanel和配对media figure）；`assets/app.js`按空白拆分IDREFS并逐个切换hidden，保持文字／图同步。原aria-selected、roving tabindex、Left／Right／Home／End与返回时选中态逻辑保留；本轮已实际验证配对同步、四个键盘键和返回状态。图库和步骤详情继续使用相同renderer及统一放大公式。

## 形状、图标和后续章节

主 CTA、次级联系按钮、文字导航、图片查看分别表达不同动作；不再每条文字都附下划线＋箭头。常态文字操作不加下划线，hover 可强调。联系、FAQ 目标和政策返回等七处重复箭头移除。图像查看改用 Lucide `maximize-2`（本地 `assets/icons/maximize.svg`），不与 FAQ 展开加号混用；实际上一页／下一页和安全页导航保留方向箭头。

四步数字 PC 44px/400、手机 32px/400，移除青蓝短划线，不与额度争夺视觉。公司标题仍在上，下面分为1.8fr事实／1fr联系两列，64px gap，右侧32px内边与细分隔线；电话36px／手机30px，联系按钮44px。手机按事实→联系自然堆叠；FAQ维持标题上方、内容及联系操作随后；FAQ 由重复圆角卡片改为共用的素行分隔结构，标记在 hover／展开时有淡青反馈。页脚及支持页同步 400／500／600／700 字重和正文色职责。安全骗局、帮助和政策状态保留原有交互及内容职责。

共享内容轴收至1120px（原1240px），48／24／20px边距不变，页头、Hero和所有页面同步。产品整章改为品牌青蓝，完整原App在左，标题／Tab／正文／操作组成右侧完整信息组；手机DOM顺序为信息组后原图。公司章标题下按左事实、右电话／联系组织；页脚按左品牌／公司、右侧既有四个主导航／联系组织，法律安全入口另占全宽底栏，下载与安全条桌面横排、手机堆叠。

页脚左右1.25fr／1fr、gap80px；Logo176px／手机156px、定位18／16px、公司名20px、电话36／30px。右列顶部为原首页／产品／流程／FAQ四项，两列18px／手机16px；下方公司联系。安全／隐私／条款／联系四个既有入口回到全宽底栏，PC横排、手机两列，未加业务栏目或渠道。底部责任说明14px。桌面下载／安全条横排，手机恢复堆叠，安全至页脚仍连续深青。

## 规则与验证状态

借鉴 [MONIX](https://www.monix.co.th/) 的连续照片和开场层级，以及 [MoneyThunder](https://www.money-thunder.com/) 区分产品、说明、费用入口及帮助的结构；不宣称这些选择适用于所有官网，也不借用其业务能力、资质或素材。

复用已有 Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable layout／typeset／polish、UI UX Pro Max。没有新增同名安装；图标通过 Better Icons／Iconify 获取，许可证保留在 `assets/icons/LICENSE-Lucide.txt`。

第十七轮已完成18组实际页面（四页×1440／360／375／390px，另加首页1024／760px），无横向溢出或可见破图；4组配对设备规格、所有aria-controls目标及17项运行记录已检查，7页静态检查、JS语法和差异检查通过。catalog／config／原HOME的SHA保持基线。当前证据在`../round17-preview/`；线上发布结论以`../round17-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。
