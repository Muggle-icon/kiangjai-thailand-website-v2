# 第二十三轮Hero层级与当前设计系统

日期：2026-10-28。第二十三轮仅调整Hero分组和响应式对齐：PC左侧品牌标题，额度与下载／待开放提示并列，业务说明独占下方两行；手机品牌／额度／行动居中，长说明左对齐并处于深青收尾区域。照片、已审文案、字体、配置与JS未改，无新增横栏。第二十二轮产品支持条清理结果保持。

第二十一轮替代第二十轮构图：整幅摄影Hero、两条同轴产品章、白公司章／青蓝联系、两列深青收束。尺寸调整服务于新结构，不再将双机拼贴或五横条当作当前规范。

## 不变的基础

1120px共享内容轴、48／24／20px边距，#44E0F8／#00384C及原语义色保持。正文Noto Sans Thai16px／1.85／400；标题UI为Kanit500／600／700，原六WOFF2共98,568B、SIL OFL／预加载不变。原Logo、完整750×1624 App、实拍和配置未更换。

| 当前角色 | PC1440 | 手机≤760 |
| --- | --- | --- |
| Hero最小高 | 600px | 720px |
| 产品名／定位／额度 | 56／28／80px | 36／20／64px |
| Hero主操作 | 青蓝224×56px | 青蓝满宽／min52px |
| Hero待开放／业务说明 | 16px／26px | 14px／24px |
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

PC照片inset0铺满，position74%44%、scale1.38／origin76%46%，仅saturate.9；深青水平渐隐承托白标题、青蓝额度／CTA。移除原27%左位开始的照片／青蓝左面板拼接。copy共享shell，纵向48px padding。hero-conversion为320px／224px两列、gap24px、max568px；左额度，右下载和居中待开放提示。两条业务说明跨列，margin-top24px／padding-top16px及细分隔线，仍在Hero内部。

手机照片inset0 0 190px、position64%43%、scale1.75／origin71%43%；纵向渐隐保留场景窗口，在62%处达到纯深青，承托下方行动与说明。copy padding-top28px／bottom24px；品牌标题居中，hero-conversion以max360px列居中并使用auto顶部空间。标签16px／26px，金额64px与币种20px、满宽52px按钮、14px／24px待开放提示共中轴；两条14px／24px长说明分行左对齐。配图说明top300px／right20px，避开额度。全部为CSS显示处理；未改照片文件、衣服或人物，不暗示真实客户／代言。

## 产品：独立章节，稳定成组切换

宽屏>1100同时呈现两个全宽story。每条内部为左说明／右原图，同一1120px轴、1.1fr／1fr、gap80px、垂直居中；story padding40px。线上白底、还款深青底／白文，不交替左右，不共享浅青承托板。完整产品证据各归自己的信息组，而非两部手机集中拼贴。

≤1100显示max600px Tab，18px／min56px；两story同处一个内在grid区域保高，story padding32px、内部gap48px。JS仍只把两个ID写在每个Tab的aria-controls，同时同步story祖先hidden／inert；其子panel／media同步，隐藏状态仅在产品局部以visibility:hidden／pointer-events:none保留内在空间。宽屏两个panel为可见命名region，compact为tabpanel。 Tab基底CSS为grid，源码初始native hidden，显隐由JS统一管理；不再用宽屏display:none提前隐藏。原规则会在mql事件前让焦点失效，现断点先记录焦点再activate，扩展后进入可见media操作，收缩保留聚焦的还款feature；两项hiddenFocus:false已实测。

≤760产品父grid两行、row-gap24px；两story都跨1/3并用subgrid，内部display:contents，摘要占共享第一行、完整原图占共享第二行。story padding24px 20px 32px；移动两状态摘要／原图轴对齐，不靠固定大高度填空。Tab为16px／min72px，章节28px左对齐。

线上panel直接使用`copy:cdd17cff597160`完整已审段落，费用提醒随线上Tab显示；catalog不改字，builder拆分宏已移除。story后不再有共享支持条或重复步骤／F01／F04入口，还款章直接衔接四步流程。固定服务范围保留在公司联系区，页头／页尾步骤导航和完整FAQ继续承担相关入口。原图统一240／210px框、4px内边、28／26px角及同查看器，保持完整750×1624。

## 公司与品牌收束

共同footer由白公司章和深青footer-close组成。公司facts只出现一次，About锚点kj-about保留；PC1.55fr／1fr、gap64、padding64，左真实公司名／登记／地址，右青蓝contact（padding32、16px角），电话36px，复制／联系动作在下。手机堆叠、padding48／gap32，contact padding24、电话32px；联系min44／实测46px。

深青close不是五条等宽横带。PCpadding64，内部两列1.55fr／1fr、column-gap64／row-gap48：首排左App身份／下载、右六导航；次排左安全提醒、右政策／借贷提醒。App图标80px、下载标题36px、说明16px／1.7。手机一列、padding40／row-gap32，图标64／标题26、下载满宽，主导航仍两列；安全／法律文字14px为辅助层。

导航、流程和FAQ主要沿用上一轮：四步编号48／40，PC四列连接、紧凑两列、手机纵连；FAQ仍7条、880px最大宽、20／18问题和共享SVG。安全中心横向目录及完整内容轴、6FAQ／7骗局；政策真实待提供状态保留。所有路由共用新footer。

## 实施与验收边界

第二十三轮Hero截图见[round23-preview](../../round23-preview/)：1440／390／375／360／760／1024六种宽度无横向溢出；独立复查1440／1024／760／390／360五张，未见新增重叠、断行或文字遮脸。该结论仅覆盖Hero视觉范围；首页1440／390／360整页已截图检查；三组原生点击下载弹窗的scroll／几何差均0，焦点返回Hero按钮。构建、7页静态链接／ID和JS检查通过；发布结果单独记录，不构成数值对比度或全面无障碍认证。

第二十二轮历史证据见[round22-preview](../../round22-preview/)与[stability.json](../../round22-preview/stability.json)。390／375／360／760／1024共5个紧凑宽度完成online→repayment→Home：scroll、手机及下一章节位置差均0，横向溢出0。已检查1440／390／375／360首页完整截图及390还款选中态；独立复查确认当时删除与内容归位，无新增设计问题。当时构建、7页静态链接／ID及JS检查通过；线上结果记录在round22-preview/release-verification.json，不认证本轮部署。

第二十一轮的21个页面／宽度场景、4组紧凑产品、8组模态、2组FAQ键盘检查、10条动作及独立截图／源码ship判断均为历史证据，见[round21-review.md](round21-review.md)与`../../round21-preview/`；不代表本轮完成同范围重跑。第二十一轮按MoneyThunder固定方向直接实现，阅读Impeccable new-work／craft-floor，无随机概念筛选、comp生成、自动detector或新安装。金融内容不因竞品展示而成为本站已证实能力。
