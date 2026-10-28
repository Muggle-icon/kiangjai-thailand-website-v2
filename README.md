# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，V1不受影响。第二十轮按用户要求重新审查整页：对照LINE BK、Rabbit Cash和MoneyThunder的完整页面与实际字体／布局指标，检查Hero、产品阅读顺序、流程、FAQ、页脚和所有支持页的主次、密度与统一性。不是仅调整几个字号。

保留青蓝实拍Hero、宽屏双产品、紧凑Tab及一套共享深青页脚。Hero收至560／640px、额度80／64px；章节统一40／28px，图片说明及查看入口恢复14px可读尺寸。产品先给简短已审说明，移动端再看原图；费用提醒、服务范围、申请和FAQ入口成为两状态共用且始终可见的支持区。页脚增大公司／安全正文并收紧分组间距，电话与复制同行。

原Tony Wu曼谷实拍、完整App、Logo、Kanit／Noto字体文件及许可未换；移动仅CSS放大构图。业务配置和已审catalog不改，原产品长段落按既有边界拆作布局用途，不改字。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开`http://localhost:4173`。无npm依赖。编辑源组件后重新构建，提交四个根页面与`/privacy/`、`/terms/`、`/security/`路由别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 青蓝实拍Hero、响应式双产品说明／共享支持区、四步申请 |
| `src/pages/home.html` | Hero／产品／流程／FAQ主体顺序 |
| `src/components/header.html`、`footer.html` | 居中导航与一次呈现的下载／公司／联系／安全收束 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全中心和真实法律待提供状态 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、Hero、首页章节、共享页脚及支持页 |
| `assets/app.js`、`src/components/dialogs.html`、`app-gallery.html` | 宽屏／Tab模式切换、菜单、FAQ、原图、弹窗和待开放下载 |
| `scripts/build.py` | 静态构建、统一`APP_SCREENS`／`{{app-screen:…}}`原图组件 |
| `assets/campaign/`、`app/`、`brand/`、`icons/`、`fonts/` | 既有实拍、完整原App、品牌、SVG和自托管授权字体 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开配置，保持原值 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界和当前设计合同 |

## 当前状态与验收

继续`releaseStatus: preview`／noindex。下载显示真实待开放提示；不虚构商店链接、下载QR、官方身份／举报渠道或放贷牌照。图内推广、费率及示例状态仍待业务核准。

第二十轮本地浏览器记录21个页面／宽度场景，无横向溢出、破图或缺失ARIA目标；4组紧凑产品双态／Home键返回及8组弹窗几何／scroll差均0，共享support始终可见。2组FAQ键盘行位移−0.1875／0.125px，另有7条当前交互记录。静态7页、链接／重复ID、JS语法及diff检查通过，浏览器warn／error为空；已审段落精确重建及SHA断言通过。独立原分辨率截图／源码审查未见新增必修，44px联系控件已重新截图。整页截图、三站测量和[当前QA摘要](../round20-preview/qa-summary.json)在仓库外；线上发布结论以`../round20-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。不宣称物理设备测试或完整竞品视觉等同。

本轮实际使用Impeccable的layout／typeset／craft-floor参考，直接阅读后应用人工规则及浏览器QA，未运行其自动detector。Vercel Web Interface Guidelines、Anthropic frontend-design及UI UX Pro Max已安装可用，本轮未逐项执行，不将“已安装”写成“全部已验收”。未安装新技能或下载新字体。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[第二十轮整页对照审查](docs/round20-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
