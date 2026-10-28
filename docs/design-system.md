# 第二十轮整页设计系统与实现映射

日期：2026-10-28。本轮完整对照三站页面与实测指标，检查全部章节和支持页的字号角色、密度、阅读顺序及共享页脚。保留青蓝Hero／白产品／浅灰流程／FAQ／深青footer框架，业务、已审原文、原图和授权字体不改；本轮结果按当前浏览器记录，不复用旧轮数量。

## 字体、色彩和几何

正文为Noto Sans Thai16px/1.85/400；标题和UI为Kanit500／600／700。六份既有Thai／Latin WOFF2合计98,568B，OFL、unicode-range、swap和原预加载保留；出处见[visual-assets.md](visual-assets.md)。精确#44E0F8、深青#00384C、正文#183D49及其余语义颜色不变。内容轴1120px，PC／紧凑／手机边距48／24／20px。

| 角色／局部合同 | >1100px，1440重点 | ≤1100px | ≤760px手机 |
| --- | --- | --- | --- |
| Hero高度 | min560px | min560px | copy min640px |
| 产品名／定位／额度 | 56／28／80px；≤1240产品名48、定位26 | 44／24／80px | 36／21／64px |
| Hero下载 | 深青244px宽／min56px高 | 同左 | 满宽／min52px |
| 统一章节标题 | 40px；产品line-height1.3 | 40px | 28px |
| 产品说明 | Noto18px／1.8 | 18px／1.8 | 16px／1.85 |
| 产品展示 | 双图／双说明及共享support | 选中摘要／媒体，共享support | Tab→摘要→媒体→support |
| 产品Tab | 不显示 | 18px，min56px，灰托盘／深青选中 | 16px，min72px |
| 原App框 | 两张同240px | 选中框240px | 210px |
| FAQ／summary | Kanit20px，76px最小行，SVG20px／标记32px | 同左 | 18px，72px行，SVG18px／标记28px |
| 步骤编号 | 48×48px／14px角／24px字600 | 两列，无连接线 | 40×40px／12px角／22px字，纵向连接 |
| 页脚品牌／电话 | 180／32px | 品牌整行，事实／联系两列 | 132／30px，品牌定位同行，电话复制同行 |

共享按钮52px高／10px角／Kanit17px500，224px意图宽；Hero为明确的局部尺寸例外，页头44px紧凑按钮、页脚联系44px。图片查看仍用Lucide maximize-2；FAQ加号只表达展开。

## Hero：同一实拍的明亮品牌构图

整幅青蓝背景，无外边框／圆角。PC照片从27%左位进入右侧，object-position77%43%，CSSscale1.42／origin72%48%；青蓝水平渐隐与深青可编辑文字相接。手机照片inset64px0 216px、position80%42%、scale1.75／origin69%44%，纵向渐隐，上方标题、下方额度和行动。CSS亮度1.06／饱和.9；母片和两份WebP字节不改，未换人、修人或新生成场景。

## 产品：宽屏并列，紧凑标签

白色章节padding72／64／48px。PC主网格1.1fr／1fr，column-gap64px／row-gap24px、顶部对齐；左双原图24px间距跨两行，右两个说明28px标题／18px正文，其下共享support。章节标题40px居中；媒体后仅一块浅青底。图注及查看字14px，查看min44px，不再12px小字。

>1100px时JS将两个正文都设为region，aria-labelledby引用各自可见标题；两张媒体和两个正文均不hidden／inert，Tab隐藏。≤1100px启用native Tab／tabpanel、双IDREFS、roving tabindex及Left／Right／Home／End。文字、媒体各自共享grid-area:1/1，以真实最长状态保高；仅非激活产品状态display覆盖为block后visibility:hidden／pointer-events:none／inert。其他hidden组件保持原行为。

≤760px实际DOM顺序为Tab、摘要、原图、support，间距24px。摘要／费用提醒来自builder拆开同一已审长段，按既有句子边界分段并检查原文重建，catalog不改字。费用提醒、服务范围、申请和FAQ链接在共享support内，始终可见、不是Tab控制对象。跨1100px断点保留所选feature；若焦点位于某feature内部，收起时选中该feature；若展开时焦点原在即将隐藏的Tab，移至对应可见原图操作并preventScroll。不是在宽屏继续强迫用户切换两个产品。

原PNG保持完整750×1624、显式尺寸及height:auto。240／210px框、4px内边、28／26px角和统一阴影；两个原图查看器仍共用高度适配公式。仅步骤03有真实匹配图，不把其他原图伪装成四个完整操作。

## 节奏与一次收束

流程浅灰64／48px padding，PC四步横向连接，紧凑两列、手机单列连接；FAQ白色72／48px padding，PC标题居中、列表max880px，手机左对齐标题。七条原问答和单开交互保留。

删除的是首页独立公司／下载／安全块的重复位置，其内容集中至共享深青footer：下载条→品牌／公司／联系→六主导航→安全提醒→隐私／条款／联系及借贷提醒。About锚点仍是kj-about。PC公司区.8fr／1.7fr／1fr、gap40px、padding32px；≤1100品牌独占整行，其下1.5fr／1fr；手机单列24px间隔及padding。公司名24／22px、事实和安全正文16px／1.7、底部说明14px；电话与复制同行、联系44px；手机132px品牌与定位同行。底部没有第二份相同公司事实或另一张下载Banner。

页头顺序为首页／产品／步骤／FAQ／About／安全；home scrollspy只在首页运行，按目标DOM顺序比较，避免About迁至footer后选中态失序。安全当前页状态另设。其余安全中心横向目录／完整内容轴、6条FAQ、7类骗局、政策真实待提供和原生交互保留。

## 交互与验收

继承弹窗scroll／焦点恢复、52px反馈槽、FAQ／details定位、同文档别名锚点和返回状态。当前21个页面场景无溢出／破图／缺失ARIA目标；4组1024／390／375／360紧凑双态／Home返回量测差0、共享support始终可见；8组弹窗量测差0且焦点回company。2组FAQ键盘行差−0.1875／0.125px、行高0；当前另7条动作记录，不套用上一轮13条。静态7页／链接／重复ID／JS／diff及段落重建／SHA断言通过，浏览器warn／error空。独立原分辨率截图／源码审查未见新增必修，44px联系控件已重新截图。线上发布结论以`../round20-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。不宣称物理设备或完整竞品视觉等同，见[round20-review.md](round20-review.md)。

## 规则和参考的使用边界

本轮直接阅读Impeccable的layout／typeset／craft-floor后应用人工规则与浏览器QA，未运行自动detector；其他已安装Vercel／Anthropic／UI UX Pro Max本轮未逐项执行。[LINE BK](https://www.linebk.com/th/)、[Rabbit Cash](https://www.rabbitcash.co.th/)、[MoneyThunder](https://www.money-thunder.com/)的字体不同、角色和密度不同，不存在可照搬的一种大字规则。三站原始metrics和完整截图见`../round20-preview/competitors/`。MoneyThunder390为固定桌面裁图，不作手机字号参考。
