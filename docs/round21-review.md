# 第二十一轮：重做构图，不再包装旧版

日期：2026-10-28。上一轮以字号、间距和局部通过数字描述“视觉合格”过于笼统，不能回答用户对整体构图的否定。本轮按用户固定MoneyThunder方向重做四个关键区域，并由未继承设计推理的审查者重新检查截图／源码。内容、产品框架与文件级素材保留。

[本轮方向合同](../../../work/round21/direction.md)明确为现有静态代码直接实现。当前最终记录21个响应式场景、4组产品、8组模态、2组FAQ键盘和10条动作；所有当前浏览器测试已完成，线上发布另行核验。线上结论以`../round21-preview/release-verification.json`中的commit、CI与实际浏览器记录为准，不把尚未发布写成已上线。

## 新参考与四区域对照

这次实际重新读取[MoneyThunder官网](https://www.money-thunder.com/)的[干净PC整页1425×8163](../../round21-preview/competitors/moneythunder-1440.png)及[区域实测](../../round21-preview/competitors/regions.json)。参考来自1440px浏览器视口，截图可用宽1425px；当前hero自动轮播到推荐活动，不声称这就是其固定借贷首屏。这里只使用PC构图证据，没有新的有效MoneyThunder手机样本。

| 区域 | 新参考的实际层级／构图 | Kiangjai本轮具体实现及边界 |
| --- | --- | --- |
| Hero | 约525px活动画面将文字、人像、主利益点组成一个完整campaign；不是左侧纯色面板和右侧照片临时拼接 | 一张真实工作场景铺满600pxPC／680px手机，以深青可读性渐隐统一画面；白定位、青蓝额度／CTA。保留原曼谷实拍，不复制推荐活动、演员或促销承诺 |
| 产品 | 两条独立全宽产品带约510／519px，各有自己的产品名／解释和大图，深浅转换让产品分清 | 两条同轴story均左说明／右一张完整App，线上白、还款深青。删除双机拼贴／共享浅青板；保持240px完整原图会比竞品产品带更高，不能裁图假装同等高度，也不沿用其左右交替 |
| 公司 | 新整页没有直接对应的独立公司章；真实身份／联系等信息主要在末端多列组织 | 按本项目真实资料建白公司章，左名／登记／地址、右单一青蓝联系区，About不失效、事实只一次；不杜撰竞品公司章或用资质装饰制造可信度 |
| Footer | 约518px下载campaign之后是约859px品牌footer，主行动和公司／导航／联系有明确层级 | 共用footer内分白公司章和深青close；close首排App身份／下载左、六导航右，次排安全／政策辅助。替代五条满宽等权横带；不复制其奖项、商店、社交或经营资格 |

同尺度比对可见[Hero](../../../work/round21/reviewer/compare-hero.png)、[产品](../../../work/round21/reviewer/compare-products.png)、[公司／close](../../../work/round21/reviewer/compare-close.png)。比对用于说明结构差异，不声称两品牌必须相同，也不把页面中看到的金融主张认定为本站业务事实。

## 源码合同与移动布局

Hero原图桌面inset0、position74%44%、scale1.38／origin76%46%，白字与青蓝80px额度／244×56操作；手机照片0 0 170px、position64%43%、scale1.75／origin71%43%，配图说明top300px，64px额度／满宽操作。两份WebP字节未变，未修人物或新生成生活场景。

每条产品story内为1120px轴、1.1fr／1fr、gap80px，copy左／App右、不走交替zigzag；宽屏两个region与两图均可见。≤1100两个story内在叠放，Tab仍控制相同两个ID，JS另同步story祖先hidden／inert，不能只换图留下底色。≤760父grid两共享行＋story subgrid，让摘要行与完整原图行在两状态对齐。support在story外，两状态都可见。真实750×1624图统一240／210px框，只有03打开匹配贷款计划图。

白公司章位于共享footer，PC facts／contact为1.55fr／1fr、gap64、padding64；联系块青蓝、32px内边／16px角。手机一列、padding48、联系内边24。联系合同min44px，当前计算高度46px。深青close两列相同轴，原App图标80／64px；不为填充而增加人物、勋章或渠道。

## 新独立审查的实际范围

[finish-review.md](../../../work/round21/reviewer/finish-review.md)的disposition为ship，但限定为所给PC／默认移动截图及源码的视觉完成度。审查者看完整1425×4663与375×4798当前页面、原投诉／基线、原分辨率Hero／两产品／流程FAQ／公司close裁图，再对照干净Money PC；未发现所给截图范围内新增实质视觉必修。它认为完整240px原图解释了产品带比竞品更宽松的比例，并明确Money的定制campaign素材密度仍更强。

该审查没有操作浏览器，也没验证手机还款选中态、所有模态、焦点／滚动、联系、中间断点、数值对比度、实机或公开部署。不能把此ship写成全站所有体验“视觉合格”；浏览器QA与发布须另有当前证据。

## QA发现的焦点问题与修复

宽屏原有`.product-tabs{display:none}`会在matchMedia change处理前先由CSS隐藏聚焦Tab，浏览器已把焦点移走；随后读取activeElement无法知道应恢复哪个操作。现在Tab基础CSS为grid，源码初始native hidden，显示权由JS统一管理；断点处理先捕获focus再activate／hidden。测试确认扩展后焦点进入product-media-online可见操作、hiddenFocus:false；收缩时聚焦还款媒体会选中repayment、hiddenFocus:false。未改变页面外观，但修复了真实键盘路径。

所有canonical截图和21场景矩阵在该修复后重新生成，不把修复前截图当作最终证据。

## 最终本地浏览器记录

| 当前原始记录 | 结果 |
| --- | --- |
| [cases.json](../../../work/round21/cases.json)／21 | 四canonical页面×1440／390／375／360共16；首页1024／760共2；三clean aliases各390共3。无溢出／破图／缺失ARIA目标，内容轴1120／边距48／24／20，联系min44／实际46 |
| [stability.json](../../../work/round21/stability.json)／4 | 1024／390／375／360，online→repayment→Home，scroll／phone／next／footer／pageheight数值差0；选中story祖先hidden／inert与panel／media同步，support保留 |
| [modals.json](../../../work/round21/modals.json)／8 | 四页各1440／360，before／open／closed几何与scroll差0，焦点恢复company |
| [disclosures.json](../../../work/round21/disclosures.json)／2 | F02键盘展开1440／360，点击行top差−0.1875／0.125px，行高不变 |
| [interactions.json](../../../work/round21/interactions.json)／10 | 9条动作／状态记录及1条安全返回；详情如下 |

预览0商店／0QR；HOME原图750×1624、下一张还款2/4；步骤03仍loan-plan。菜单可开，新的About定位top约88.19px、菜单关闭且current正确；公司电话0812341407和泰语复制提示正确。两方向断点焦点测试见上；安全返回精确保留F02、repayment及scroll4066.5。

静态7页、链接／锚点／重复ID、JS语法／diff通过；业务数据、字体、App和照片hash不变；浏览器warn／error0。当前没有遗留浏览器测试待完成，发布仍以release-verification.json的commit／CI／实际线上记录为准。

原独立审查的ship范围仍按其报告，不将后来的运行测试冒充其亲自操作。手机还款选中态的额外独立截图结论以外部后续verdict为准，不能回填为原报告已覆盖。浏览器视口不是物理设备认证，也不构成完整竞品视觉等同。

本轮实际直接阅读Impeccable new-work／craft-floor，按明确方向以代码实现；无seed concept lottery、comp生成、自动detector或新技能／字体／素材安装。原Kanit／Noto的SIL OFL、照片许可及原图边界见[visual-assets.md](visual-assets.md)。不宣称物理设备认证、完整竞品视觉等同或未核准的利率／审批／牌照／渠道。历史Round20及更早报告、生成提示词均保留原文。


追加的窄范围复查已检查最终1440／390／360截图和还款手机选中态：照片与App均完整绘制，深色还款章、查看操作及共享support可读，结论ship，仅限这些视觉项；浏览器与发布数据仍以各自记录为准。
