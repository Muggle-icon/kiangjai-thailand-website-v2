# 第十九轮设计系统与实现映射

日期：2026-10-28。本轮将首页重组为青蓝Hero、白色产品、浅灰流程、FAQ及一套深青收束页脚。业务、已审原文、原图和授权字体不改；本轮验收结果使用当前浏览器记录，不复用旧轮数量。

## 字体、色彩和几何

正文为Noto Sans Thai16px/1.85/400；标题和UI为Kanit500／600／700。六份既有Thai／Latin WOFF2合计98,568B，OFL、unicode-range、swap和原预加载保留；出处见[visual-assets.md](visual-assets.md)。精确#44E0F8、深青#00384C、正文#183D49及其余语义颜色不变。内容轴1120px，PC／紧凑／手机边距48／24／20px。

| 角色／局部合同 | >1100px，1440重点 | ≤1100px | ≤760px手机 |
| --- | --- | --- | --- |
| Hero高度 | min580px | min580px | copy min700px |
| 产品名／定位／额度 | 56／28／96px；≤1240产品名48、定位26 | 44／24／88px | 36／21／72px |
| Hero下载 | 深青244px宽／min56px高 | 同左 | 满宽／min52px |
| 产品章标题 | 居中44px／1.3 | 40px | 32px |
| 产品说明 | Noto18px／1.8 | 18px／1.8 | 16px／1.85 |
| 产品展示 | 两张原图、两段完整说明同时可见 | 选中Tab文字／媒体配对 | Tab→媒体→正文 |
| 产品Tab | 不显示 | 18px，min56px，灰托盘／深青选中 | 16px，min72px |
| 原App框 | 两张同240px | 选中框240px | 210px |
| FAQ／summary | Kanit20px，76px最小行，SVG20px／标记32px | 同左 | 18px，72px行，SVG18px／标记28px |
| 步骤编号 | 48×48px／14px角／24px字600 | 两列，无连接线 | 40×40px／12px角／22px字，纵向连接 |
| 页脚品牌／电话 | 180／32px | 品牌整行，事实／联系两列 | 156／30px，单列 |

共享按钮52px高／10px角／Kanit17px500，224px意图宽；Hero为明确的局部尺寸例外，页头44px紧凑按钮、页脚联系40px。图片查看仍用Lucide maximize-2；FAQ加号只表达展开。

## Hero：同一实拍的明亮品牌构图

整幅青蓝背景，无外边框／圆角。PC照片从27%左位进入右侧，object-position77%43%，CSSscale1.42／origin72%48%；青蓝水平渐隐与深青可编辑文字相接。手机照片inset64px0 240px、position80%42%、scale1.12／origin75%43%，纵向渐隐，上方标题、下方额度和行动。CSS亮度1.06／饱和.9；母片和两份WebP字节不改，未换人、修人或新生成场景。

## 产品：宽屏并列，紧凑标签

白色章节padding72／64／48px。PC主网格1.1fr／1fr，gap64px，左侧两张原图24px间距，右侧两个说明28px标题、18px正文，中间一条分隔线；章节标题独立居中。媒体后方仅一块浅青底承托原图。

>1100px时JS将两个正文都设为region，aria-labelledby引用各自可见标题；两张媒体和两个正文均不hidden／inert，Tab隐藏。≤1100px启用native Tab／tabpanel、双IDREFS、roving tabindex及Left／Right／Home／End。文字、媒体各自共享grid-area:1/1，以真实最长状态保高；仅非激活产品状态display覆盖为block后visibility:hidden／pointer-events:none／inert。其他hidden组件保持原行为。

≤760px实际DOM顺序为Tab、原图、正文，间距24px。跨1100px断点保留所选feature；若焦点位于某feature内部，收起时选中该feature；若展开时焦点原在即将隐藏的Tab，移至对应可见原图操作并preventScroll。不是在宽屏继续强迫用户切换两个产品。

原PNG保持完整750×1624、显式尺寸及height:auto。240／210px框、4px内边、28／26px角和统一阴影；两个原图查看器仍共用高度适配公式。仅步骤03有真实匹配图，不把其他原图伪装成四个完整操作。

## 节奏与一次收束

流程浅灰64／48px padding，PC四步横向连接，紧凑两列、手机单列连接；FAQ白色72／48px padding，PC标题居中、列表max880px，手机左对齐标题。七条原问答和单开交互保留。

删除的是首页独立公司／下载／安全块的重复位置，其内容集中至共享深青footer：下载条→品牌／公司／联系→六主导航→安全提醒→隐私／条款／联系及借贷提醒。About锚点仍是kj-about。PC公司区.8fr／1.7fr／1fr、gap48px；≤1100品牌独占整行，其下1.5fr／1fr；手机单列32px间隔。底部没有第二份相同公司事实或另一张下载Banner。

页头顺序为首页／产品／步骤／FAQ／About／安全；home scrollspy只在首页运行，按目标DOM顺序比较，避免About迁至footer后选中态失序。安全当前页状态另设。其余安全中心横向目录／完整内容轴、6条FAQ、7类骗局、政策真实待提供和原生交互保留。

## 交互与验收

继承弹窗scroll／焦点恢复、52px反馈槽、FAQ／details定位、同文档别名锚点和返回状态。当前实测21页面场景无溢出／缺失ARIA目标／破图；1440双图／双region均可见、同240px且Tab隐藏。1024／390／375／360四组紧凑双态／键盘返回所有量测差0；8组弹窗差0且恢复company焦点。两组首页FAQ键盘点击行位移−0.1875／0.125px、行高差0；13条交互确认断点焦点、移动Tab→原图操作→panel、预览0商店／0QR、导航返回、原图与反馈。静态7页／链接／重复ID、JS语法及diff检查通过。独立整页视觉复查的两项移动问题已修改并在390／360裁图复查；不据浏览器视口检查宣称物理设备测试或完整竞品视觉等同。线上发布结论以`../round19-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。具体整改见[round19-review.md](round19-review.md)。
