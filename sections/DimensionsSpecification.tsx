
import React from 'react';
import { Ruler, Maximize, Smartphone, Layers, Code, CheckCircle2, Info } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const DimensionsSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const spacingTokens = [
    { name: 'Space-XS', size: '4px', usage: '元素紧凑排列' },
    { name: 'Space-SM', size: '8px', usage: '关联性强的内容' },
    { name: 'Space-MD', size: '12px', usage: '组件内部间距' },
    { name: 'Space-LG', size: '16px', usage: '全局页面边距' },
    { name: 'Space-XL', size: '24px', usage: '模块间分割' },
    { name: 'Space-2XL', size: '32px', usage: '大段落/悬浮内距' },
  ];

  const radiusTokens = [
    { name: 'Radius-SM', size: '4px', usage: '小标签/气泡' },
    { name: 'Radius-MD', size: '8px', usage: '输入框/内嵌容器' },
    { name: 'Radius-LG', size: '12px', usage: '主按钮/小卡片' },
    { name: 'Radius-XL', size: '16px', usage: '内容卡片/弹窗' },
    { name: 'Radius-2XL', size: '24px', usage: '底部弹窗顶部' },
    { name: 'Radius-Full', size: '999px', usage: '胶囊按钮/头像' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">CrewInsure 尺寸与布局规范</h2>
        <p className="text-slate-500 text-sm italic">“8点网格系统、极致触控高度、纸张层级感”</p>
      </div>

      {/* --- 1. Spacing System --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 间距系统 (Spacing)</h3>
        </div>
        <div className={`p-8 rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="space-y-8">
            {spacingTokens.map((token, idx) => (
              <div key={token.name} className="flex items-center group">
                <div className="w-24 shrink-0">
                  <p className="text-xs font-bold text-slate-800">{token.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{token.size}</p>
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div 
                    className="bg-blue-100 border border-blue-200 h-6 transition-all group-hover:bg-blue-200" 
                    style={{ width: token.size }}
                  ></div>
                  <span className="text-[10px] text-slate-500 italic">{token.usage}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-3">
            <Info size={16} className="text-[#0052D9] mt-0.5" />
            <p className="text-[11px] text-[#0052D9] leading-relaxed">
              **页面全局边距 (Page Margin)** 统一为 **16px**。在剧组繁忙环境下的表单录入场景，16px 能在小屏设备上最大化信息显示区域，同时保持呼吸感。
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Component Heights --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 组件高度规范 (Heights)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
              <div className="space-y-1 mb-6">
                <h4 className="font-bold text-sm">超大主按钮 (Large)</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">H: 56px</p>
              </div>
              <div className="relative">
                <Button variant="primary" size="full" className="rounded-xl h-[56px]">确认并支付</Button>
                <div className="absolute -left-3 top-0 bottom-0 w-1 border-y border-l border-red-400"></div>
                <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[9px] font-bold text-red-500 transform -rotate-90">56px</span>
              </div>
           </div>
           <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
              <div className="space-y-1 mb-6">
                <h4 className="font-bold text-sm">标准输入框 (Default)</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">H: 52px</p>
              </div>
              <div className="relative">
                <div className="w-full h-[52px] bg-slate-50 border-2 border-slate-100 rounded-xl px-4 flex items-center text-slate-400 text-sm">
                   请输入证件号码
                </div>
                <div className="absolute -left-3 top-0 bottom-0 w-1 border-y border-l border-amber-400"></div>
                <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[9px] font-bold text-amber-500 transform -rotate-90">52px</span>
              </div>
           </div>
        </div>
      </section>

      {/* --- 3. Corner Radius --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">3. 圆角规范 (Corner Radius)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {radiusTokens.map(r => (
            <div key={r.name} className={`p-6 rounded-3xl border flex flex-col items-center gap-4 transition-all hover:-translate-y-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
               <div className="w-16 h-16 bg-[#0052D9] shadow-lg shadow-blue-500/20" style={{ borderRadius: r.size }}></div>
               <div className="text-center">
                  <p className="text-xs font-bold">{r.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono mb-1">{r.size}</p>
                  <p className="text-[9px] text-blue-500 font-bold uppercase tracking-tighter">{r.usage}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. Z-Index & Safe Area --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-400 pl-3">
          <h3 className="font-bold text-lg">4. 层级与安全区适配</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Z-Index Illustration */}
           <div className={`p-8 rounded-[2.5rem] border relative overflow-hidden flex flex-col items-center min-h-[300px] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h4 className="absolute top-6 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Elevation Levels</h4>
              <div className="relative w-full h-full flex flex-col items-center justify-center -space-y-16 mt-8">
                 <div className="w-48 h-24 bg-slate-100 border border-slate-200 rounded-xl transform -skew-x-12 translate-x-4 shadow-sm flex items-end p-2 text-[8px] font-bold text-slate-400">Level 0: Page</div>
                 <div className="w-48 h-24 bg-white border border-slate-100 rounded-xl transform -skew-x-12 -translate-x-4 shadow-xl z-10 flex items-end p-2 text-[8px] font-bold text-slate-600">Level 1: Card</div>
                 <div className="w-48 h-24 bg-[#0052D9] rounded-xl transform -skew-x-12 translate-x-4 shadow-2xl z-20 flex items-end p-2 text-[8px] font-bold text-white/50">Level 2: Sticky Bar</div>
              </div>
           </div>

           {/* Safe Area Illustration */}
           <div className={`p-8 rounded-[2.5rem] border relative overflow-hidden flex flex-col items-center justify-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <div className="w-48 h-80 bg-slate-900 rounded-[2.5rem] p-2 border-[4px] border-slate-800 shadow-2xl relative">
                  {/* Home Indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"></div>
                  {/* Safe Area Box */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-red-500/20 border-t border-red-500/30 flex items-center justify-center">
                      <span className="text-[8px] text-red-500 font-bold uppercase tracking-tighter">Safe Area Inset</span>
                  </div>
                  {/* Content Mock */}
                  <div className="absolute bottom-10 left-0 right-0 h-12 bg-white flex items-center px-4 justify-between">
                     <div className="w-12 h-2 bg-slate-100 rounded"></div>
                     <div className="w-16 h-6 bg-[#0052D9] rounded-md"></div>
                  </div>
              </div>
              <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed max-w-[240px]">
                底部悬浮按钮必须适配 iPhone `env(safe-area-inset-bottom)`。背景色需向下延伸至底部边缘，严禁留白。
              </p>
           </div>
        </div>
      </section>

      {/* --- 5. Developer CSS --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Code className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">开发尺寸变量表 (Global CSS)</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/40 overflow-x-auto no-scrollbar">
{`page {
  /* --- 间距 Spacing --- */
  --space-lg: 16px;  /* 全局页边距 */
  --space-xl: 24px;

  /* --- 圆角 Radius --- */
  --radius-lg: 12px; /* 主按钮 */
  --radius-xl: 16px; /* 卡片 */
  --radius-2xl: 20px; /* 底部弹窗 */

  /* --- 组件高度 Heights --- */
  --height-btn-lg: 56px;
  --height-input: 52px;
  --height-list-item: 72px;

  /* --- 阴影 Shadows --- */
  --shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  --shadow-float: 0 8px 20px 0 rgba(0, 78, 146, 0.2);
}`}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Layout System v1.0
        </p>
      </footer>
    </div>
  );
};

export default DimensionsSpecification;
