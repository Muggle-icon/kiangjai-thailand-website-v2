# 第十九轮：首页结构与完整品牌收束

日期：2026-10-28。用户认为上一轮仍没有成熟泰国小贷官网的层级。本轮调整实际结构、构图和信息位置；不改业务／已审原文／原图与已授权字体，不以换一张生成照片代替页面设计。

**本轮本地记录21个页面场景、4组紧凑产品、8组弹窗、2组首页FAQ键盘展开及13条交互；静态7页、链接／重复ID、JS语法及diff检查通过。** 线上发布结论以`../round19-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。以下为浏览器视口检查，不是物理设备测试或完整竞品视觉等同。

## 参考与判断

本轮实际[MoneyThunder首屏](../../round19-preview/competitors/moneythunder-hero.png)、[产品](../../round19-preview/competitors/moneythunder-products.png)、[页脚](../../round19-preview/competitors/moneythunder-footer.png)截图来自[官网](https://www.money-thunder.com/)。参考是明亮的额度／行动层级、产品图与说明的完整展示、一次说明身份和联系的收束方式；这些是所观察页面的设计选择，不是行业统一规范，也不授权复制照片、业务功能、资质或承诺。

## 已实施变化

| 上一轮的具体问题 | 当前实现 |
| --- | --- |
| 深色照片遮罩占主导，金额力度和品牌青蓝不够清楚 | 青蓝全宽Hero、深青文字，PC96px／手机72px额度；PC580px、手机700px最小构图；原实拍仅CSS放大与重新定位 |
| 宽屏还要切换才能知道第二种实际使用方式 | >1100px同时显示两张同240px完整原图及两段说明，白色章节和居中44px标题；不显示桌面Tab |
| 手机长说明后才出现产品证据 | ≤1100px保留成对稳定Tab；≤760px按Tab→210px原图→说明顺序，保持原比例 |
| 流程四个块较散、章节角色相似 | 浅灰紧凑四步，PC横连接、紧凑两列、手机纵连接；只有03使用真实贷款计划图 |
| 公司、下载、安全及页脚反复分段，结尾冗长 | 主体只留Hero／产品／流程／FAQ；下载、品牌／公司／联系、主导航、安全、政策集中至共享深青footer一次呈现，About锚点保留 |
| About迁移后导航顺序和焦点可能不合布局 | FAQ位于About前；home-only scrollspy按目标DOM排序；产品模式跨1100px时保留focused feature并将隐藏Tab焦点转至可见图片操作 |

## 真实内容与响应式合同

PC产品主网格1.1fr／1fr、gap64px，左图并列24px间隔，右两说明由一条细线分开。两正文桌面是独立region，分别由可见标题命名；≤1100px才切换为tabpanel，仍保留双IDREFS、四键、roving tabindex及preventScroll。紧凑状态文字和媒体各自intrinsic stack保留最长真实高度，inactive visibility:hidden／inert；不用固定大高度填空。

新页脚PC公司组.8fr／1.7fr／1fr、48pxgap，Logo180px／电话32px；紧凑品牌整行、下方两列；手机Logo156px／电话30px、单列32px间隔。六主导航后再呈现安全和三项政策／联系动作。原关于／地址／登记／电话／服务范围、下载待开放及安全内容仍在；改变的是其位置和阅读层级。

所有完整App仍750×1624，统一240／210px框及同原图查看器。现有四步、7首页FAQ、6安全FAQ、7类骗局、单开／弹窗／复制／返回等保留。字体来源沿用上一轮独立获取的Google Fonts OFL Kanit，Noto正文不改；照片仍Tony Wu/Pexels16761599，未生成、重拍或编辑人物，不表示真实客户／代言。见[visual-assets.md](visual-assets.md)。

## 当前验收结果

| 当前原始记录 | 实测结果 |
| --- | --- |
| [cases.json](../../../work/round19/cases.json)／21 | 首页／安全／隐私／条款各1440／390／375／360，共16；首页1024／760两组、三个clean-route alias各390三组。均无横向溢出、缺失ARIA目标或破图；1440无产品Tab、两个region／两张原图同时可见，同240px框及完整750×1624 |
| [stability.json](../../../work/round19/stability.json)／4 | 紧凑1024／390／375／360，online→repayment→键盘返回，标题／Tab／图／下一节／footer／页高／scroll所有数值差0。1440并列展示，不伪记成Tab切换测试 |
| [modals.json](../../../work/round19/modals.json)／8 | 四页各1440／360，before／open／closed所有位置及scroll数值差0，关闭后回到company触发器 |
| [disclosures.json](../../../work/round19/disclosures.json)／2 | 首页FAQ1440／360键盘展开，点击行top变化−0.1875／0.125px、行高差0，测试组单开；不扩称本轮另有安全native details位移测试 |
| [interactions.json](../../../work/round19/interactions.json)／13 | 宽屏region、两方向断点焦点、手机焦点顺序、下载、图库、About／安全选中态、返回、步骤03及双宽复制反馈 |

产品内聚焦还款媒体后跨入紧凑模式，会保留还款Tab且focused内容不inert；紧凑Tab跨回宽屏后焦点到同还款原图操作。手机Tab之后依次到原图查看按钮和对应panel。About锚点显示正确首页current，安全页面footer操作后仅security一项current。原生手机安全返回恢复F04、repayment及y=1166.5。

预览下载仍0商店／0QR；还款图库2/4、键盘3/4，步骤03原图750×1624。1440／360复制反馈前后弹窗x／y／w／h均不变。静态构建7页、链接／重复ID、JS语法与diff检查通过。

独立整页视觉复查首轮发现两项：手机品牌名断行和配图说明对比度。两项修正后已按390／360裁图复查，复查范围明确为这两项修复。当前报告／截图在`../round19-preview/`；线上状态按本轮release-verification.json另行核验，不由本地通过推定。

照片未换，字体出处未变，本轮的完成项是实际结构和构图；是否达到完整成熟度仍应据当前页面效果判断，不以功能检查宣称与竞品视觉等同。历史Round18及更早报告、生成提示词保留原文。
