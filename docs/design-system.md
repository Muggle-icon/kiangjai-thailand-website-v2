# 第二十一轮结构设计系统与实现映射

日期：2026-10-28。本轮替代第二十轮构图：整幅摄影Hero、两条同轴产品章、白公司章／青蓝联系、两列深青收束。尺寸调整服务于新结构，不再将双机拼贴或五横条当作当前规范。

## 不变的基础

1120px共享内容轴、48／24／20px边距，#44E0F8／#00384C及原语义色保持。正文Noto Sans Thai16px／1.85／400；标题UI为Kanit500／600／700，原六WOFF2共98,568B、SIL OFL／预加载不变。原Logo、完整750×1624 App、实拍和配置未更换。

| 当前角色 | PC1440 | 手机≤760 |
| --- | --- | --- |
| Hero最小高 | 600px | 680px |
| 产品名／定位／额度 | 56／28／80px | 36／21／64px |
| Hero主操作 | 青蓝244×56px | 青蓝满宽／min52px |
| 通用章节／产品story标题 | 40px／40px | 章节28px；story标题由Tab命名 |
| 产品正文／图注 | 18px／1.85；14px／24px | 16px／1.85；图注同角色 |
| 原App框 | 每条story一张同240px | 210px |
| 公司章标题／公司名 | 36／24px | 28／22px |
| 联系电话 | 36px | 32px |
| 联系按钮 | min44px，当前实测46px | 同合同 |
| 深青close图标／标题 | 原App图标80px／36px | 64px／26px |
| FAQ问题／最小行 | 20px／76px | 18px／72px |

通用主按钮52px／10px角／Kanit17px500，224px意图宽；Hero明确覆盖为青蓝而不是通过class名称推断深色。查看大图仍14px／44px／Lucide maximize；FAQ加号只表示展开。

## Hero：一张完整生活场景

PC照片inset0铺满，position74%44%、scale1.38／origin76%46%，仅saturate.9；深青水平渐隐承托白标题、青蓝额度／CTA。移除原27%左位开始的照片／青蓝左面板拼接。copy共享shell，纵向48px padding。

手机照片inset0 0 170px、position64%43%、scale1.75／origin71%43%；纵向深青渐隐划清标题、真实工作主体和下方行动。copy padding28px，配图说明top300px／right20px，避开额度。全部为CSS显示处理；未改照片文件、衣服或人物，不暗示真实客户／代言。

## 产品：独立章节，稳定成组切换

宽屏>1100同时呈现两个全宽story。每条内部为左说明／右原图，同一1120px轴、1.1fr／1fr、gap80px、垂直居中；story padding40px。线上白底、还款深青底／白文，不交替左右，不共享浅青承托板。完整产品证据各归自己的信息组，而非两部手机集中拼贴。

≤1100显示max600px Tab，18px／min56px；两story同处一个内在grid区域保高，story padding32px、内部gap48px。JS仍只把两个ID写在每个Tab的aria-controls，同时同步story祖先hidden／inert；其子panel／media同步，隐藏状态仅在产品局部以visibility:hidden／pointer-events:none保留内在空间。宽屏两个panel为可见命名region，compact为tabpanel。 Tab基底CSS为grid，源码初始native hidden，显隐由JS统一管理；不再用宽屏display:none提前隐藏。原规则会在mql事件前让焦点失效，现断点先记录焦点再activate，扩展后进入可见media操作，收缩保留聚焦的还款feature；两项hiddenFocus:false已实测。

≤760产品父grid两行、row-gap24px；两story都跨1/3并用subgrid，内部display:contents，摘要占共享第一行、完整原图占共享第二行。story padding24px 20px 32px；移动两状态摘要／原图轴对齐，不靠固定大高度填空。Tab为16px／min72px，章节28px左对齐。

费用提醒／服务范围／步骤和FAQ支持始终在story外可见：PC1.4fr／1fr、gap64／padding32px；手机一列、gap20／padding24px。原已审段落按原句边界拆摘要／提醒，catalog不改字，builder保留重建检查。原图统一240／210px框、4px内边、28／26px角及同查看器，保持完整750×1624。

## 公司与品牌收束

共同footer由白公司章和深青footer-close组成。公司facts只出现一次，About锚点kj-about保留；PC1.55fr／1fr、gap64、padding64，左真实公司名／登记／地址，右青蓝contact（padding32、16px角），电话36px，复制／联系动作在下。手机堆叠、padding48／gap32，contact padding24、电话32px；联系min44／实测46px。

深青close不是五条等宽横带。PCpadding64，内部两列1.55fr／1fr、column-gap64／row-gap48：首排左App身份／下载、右六导航；次排左安全提醒、右政策／借贷提醒。App图标80px、下载标题36px、说明16px／1.7。手机一列、padding40／row-gap32，图标64／标题26、下载满宽，主导航仍两列；安全／法律文字14px为辅助层。

导航、流程和FAQ主要沿用上一轮：四步编号48／40，PC四列连接、紧凑两列、手机纵连；FAQ仍7条、880px最大宽、20／18问题和共享SVG。安全中心横向目录及完整内容轴、6FAQ／7骗局；政策真实待提供状态保留。所有路由共用新footer。

## 实施与验收边界

本轮按用户固定的MoneyThunder方向直接写代码，实际阅读Impeccable new-work／craft-floor，无随机概念筛选、comp生成、自动detector或新安装。第二十一轮本地最终记录21个页面／宽度场景、4组紧凑产品、8组模态、2组FAQ键盘展开及10条动作。无溢出／破图／缺失ARIA目标；产品和模态所测几何／scroll差均0，模态焦点回company；数据／字体／原图／照片SHA保持，静态7页／链接锚点／重复ID／JS／diff通过，浏览器warn／error为空。4组产品覆盖1024／390／375／360，online→repayment→Home；2组F02键盘行差−0.1875／0.125px且行高0。断点焦点修复后21场景和canonical截图已全部重跑／重截，联系min44／实测46。新的独立ship判断仅覆盖所给PC／默认移动截图和源码，不代表浏览器交互、数值对比度、实机或线上均通过。

当前证据见[round21-review.md](round21-review.md)；线上结论以`../round21-preview/release-verification.json`中的commit、CI和实际浏览器记录为准。金融内容不因竞品展示而变成本站已证实能力。


追加的窄范围复查已检查最终1440／390／360截图和还款手机选中态：照片与App均完整绘制，深色还款章、查看操作及共享support可读，结论ship，仅限这些视觉项；浏览器与发布数据仍以各自记录为准。
