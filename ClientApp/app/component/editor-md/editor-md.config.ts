export class EditorMdConfig {
    public width: any = "100%";
    public height: any = 400;
    public path = '/assets/editor.md/lib/';
    public theme = "light";
    public previewTheme = "light";
    public editorTheme: string;
    public markdown: string;
    public codeFold = true;
    //public syncScrolling = false,
    public saveHTMLToTextarea = true;    // 保存 HTML 到 Textarea
    public searchReplace = true;
    //watch = false,                // 关闭实时预览
    public htmlDecode = "style,script,iframe|on*";            // 开启 HTML 标签解析，为了安全性，默认不开启    
    //public toolbar  = false,             //关闭工具栏
    //public previewCodeHighlight = false, // 关闭预览 HTML 的代码块高亮，默认开启
    public emoji = true;
    public taskList = true;
    public tocm = true;         // Using [TOCM]
    public tex = true;                   // 开启科学公式TeX语言支持，默认关闭
    public flowChart = true;             // 开启流程图支持，默认关闭
    public sequenceDiagram = true;       // 开启时序/序列图支持，默认关闭,
    //public dialogLockScreen = false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
    //public dialogShowMask = false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
    //public dialogDraggable = false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
    //public dialogMaskOpacity = 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
    //public dialogMaskBgColor = "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
    public imageUpload = true;
    public imageFormats = ["jpg", "jpeg", "gif", "png", "bmp", "webp"];
    public imageUploadURL = "./php/upload.php";
}