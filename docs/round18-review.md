# 第十八轮：泰文字体与点击位置稳定性

日期：2026-10-28。用户指出全页点击会跳动，视觉也未接近泰国目标竞品。本轮以实际DOM字体和原生浏览器位移记录定位原因，修改显示字体、Tab几何、展开／弹窗／锚点／返回状态及安全页排版。业务、原文、Logo、照片和完整App不改。

**本地浏览器回归已完成21个页面／宽度场景、4组产品稳定性、8组弹窗、6组展开及14条交互记录。** 静态构建和发布记录另行核验；线上发布结论以`../round18-preview/release-verification.json`中的commit、CI及实际浏览器记录为准。本轮完成字体、层级和交互改进，照片未变，不据此宣称已与竞品完整视觉等同。

## 竞品依据与字体实施

[MoneyThunder实际字体测量](../../round18-preview/competitors/moneythunder-type-metrics.json)显示font-family含orig_kanit_semibold／medium／regular。Wix将各字重包装成不同family，部分computed font-weight仍是400，不能据此误说所有文字均为Regular；这次结论来自实际font-family，不是看图猜字体。

本项目从Google Fonts单独获取Kanit500／600／700的Thai和Latin六份WOFF2，合计98,568B，保留SIL OFL1.1；[源地址／SHA](../../round18-preview/kanit-font-sources.json)均有记录，文件大小与SHA已核对。不拷贝竞品Wix字体、照片、宣传或业务主张。

正文保留Noto Sans Thai，Kanit负责标题和UI；Hero产品64／36px、产品章标题48／32px、FAQ及native summary20／18px。步骤与安全编号改为48／40px青蓝标记。手机不是PC等比缩放；页面／章节角色分别36／32px。

## 跳动原因与已实施修复

| 可重复的问题／风险 | 当前实现 |
| --- | --- |
| PC产品短文导致右侧居中组变高低 | showcase改顶部对齐，不再根据内容长度垂直居中标题／Tab |
| 手机Tab切换使原图、下一节及页脚整体上移 | 两个文字状态叠一格、两个媒体状态叠另一格，保留真实最高内容空间；取消display:none式收缩 |
| 隐藏内容占位后可能误聚焦 | 仅产品隐藏状态使用visibility:hidden／pointer-events:none，JS同时设inert；普通图库／FAQ的hidden逻辑不受此布局例外影响 |
| 键盘移焦触发浏览器自动滚动 | Tab和菜单返回焦点使用preventScroll |
| 弹窗打开／关闭或复制反馈改变位置 | 记录并恢复scrollX／Y；关闭恢复原触发器；52px反馈位为空时保留几何 |
| 单开FAQ关闭上方答案后点击行漂移 | 记录可见点击行top，状态变更后按差量补偿；html关闭浏览器overflow-anchor，避免双重补偿 |
| 同一文档/index.html别名链接刷新 | 同源文档路径归一后对hash执行原生锚点滚动，保留正常跨页 |
| 安全页返回时只恢复scroll，不恢复此前FAQ高度 | JSON存储y和展开FAQ，返回先恢复答案再位置；兼容原数字存储，产品选中态保持 |

[修复前原始量测](../../round18-preview/before-jump-measurements.json)：1440px切换时标题及Tab向下139.5px；390px原图与下一节向上约288.2px。最终4组1440／390／375／360px记录中，两个产品状态及键盘返回的标题、Tab、原图、下一章、页脚、页高和scroll量测差均为0。非激活文字／媒体保持不可见，inert另有运行记录确认。

这些修复保留原文和真实截图，不靠硬写大高度、裁掉产品或删除内容掩盖变化。惯常锚点导航仍会按用户点击移动到目标，不能把预期导航也表述为“页面完全不滚动”。

## 安全页与统一交互

安全中心不再左侧目录挤压右侧正文，改为完整1120px内容轴上方横向章节导航，手机两列。现有6条FAQ、7类骗局及帮助内容保留；native details／FAQ均使用同一20／18px显示文字和实际SVG加减标记，提醒编号与申请步骤对应。

主色#44E0F8、原品牌、公司资料、待开放下载、preview／noindex和待提供政策保留。不新增利率、审批、资质、渠道或承诺；字体／交互调整不授权改写已审内容。素材及许可见[visual-assets.md](visual-assets.md)。

## 本地浏览器验收

原始记录来自仓库外本轮工作目录，均为当前实现的实际浏览器量测：

| 记录 | 结果 |
| --- | --- |
| [cases.json](../../../work/round18/cases.json)／21个场景 | 首页、安全、隐私、条款各1440／390／375／360px共16；三条clean-route alias各390px；首页1024／760px。全部scrollWidth不超过client宽度、缺失ARIA目标0、可见破图0；正文Noto、标题Kanit |
| [stability.json](../../../work/round18/stability.json)／4组 | 四个要求宽度下，online→repayment→键盘返回：标题、Tab、原图、下一章、页脚、页高及滚动的数值差均0；外框保持PC240px／手机210px |
| [modals.json](../../../work/round18/modals.json)／8组 | 四页各1440／360px：打开／关闭弹窗前后几何与scroll差0，焦点返回footer触发器 |
| [disclosures.json](../../../work/round18/disclosures.json)／6组 | 首页FAQ及安全页FAQ／native details，各1440／360px；点击行屏幕top变化为−0.25至0.125px，属亚像素取整范围；点击行高差0，测试组均仅1项展开 |
| [interactions.json](../../../work/round18/interactions.json)／14条 | 见下述实际状态 |

同页锚点和品牌返回保留所选repayment、不刷新；clean-route章节与popstate选中正确。手机导航后菜单关闭，FAQ目标top约87.99px；Escape关闭菜单、焦点回menu-toggle，scroll不变。安全页返回同时恢复F04、repayment及y=2152.5；skip-link跳过页头到主要内容操作。预览下载仍0商店链接／0QR；真实还款图库键盘2/4→3/4，步骤03原图750×1624。桌面及手机复制反馈前后弹窗x／y／w／h均不变。字体加载实测Kanit与Noto均可用，非激活产品文字／媒体均visibility:hidden且inert。

静态构建、JS语法及发布结论另行核验；本文件只记录上述本地浏览器结果，线上结论以`../round18-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。功能正确和位置稳定不替代完整视觉质量判断，也不表示当前实拍与竞品素材达到同样表现。

历史报告与生成提示词不改，本轮无新增技能安装或生成式人物编辑。
