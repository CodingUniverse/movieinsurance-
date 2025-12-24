
import React from 'react';
import { 
  Clapperboard, 
  Camera, 
  Users, 
  Shield, 
  FileText, 
  HeartPulse, 
  Search, 
  Trash2, 
  Edit3, 
  X, 
  ChevronLeft, 
  ChevronRight,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Grid,
  Box,
  Code
} from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const IconSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const iconGroups = [
    {
      title: '通用 UI 类 (System)',
      icons: [
        { name: '返回', component: <ChevronLeft size={24} /> },
        { name: '关闭', component: <X size={24} /> },
        { name: '搜索', component: <Search size={24} /> },
        { name: '删除', component: <Trash2 size={24} /> },
        { name: '更多', component: <MoreHorizontal size={24} /> },
        { name: '编辑', component: <Edit3 size={24} /> },
      ]
    },
    {
      title: '剧组业务类 (Cinema)',
      icons: [
        { name: '剧组/首页', component: <Clapperboard size={24} /> },
        { name: '器材险', component: <Camera size={24} /> },
        { name: '人员名单', component: <Users size={24} /> },
        { name: 'OCR识别', component: <Box size={24} /> },
      ]
    },
    {
      title: '保险金融类 (Insurance)',
      icons: [
        { name: '安全保障', component: <Shield size={24} /> },
        { name: '我的契约', component: <FileText size={24} /> },
        { name: '协助理赔', component: <HeartPulse size={24} /> },
        { name: '帮助中心', component: <HelpCircle size={24} /> },
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">CrewInsure 图标设计规范</h2>
        <p className="text-slate-500 text-sm italic">“2px 描边、像素级对齐、高对比度隐喻”</p>
      </div>

      {/* --- 1. Grid & Construction --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 基础网格与构造 (Grid)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col items-center justify-center space-y-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="relative w-48 h-48 border border-blue-100 bg-blue-50/20 rounded-lg flex items-center justify-center">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0052D9 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
              <div className="absolute inset-4 border border-dashed border-blue-200 flex items-center justify-center">
                <span className="absolute -top-4 text-[8px] font-bold text-blue-300 uppercase">Live Area (20px)</span>
              </div>
              <div className="relative z-10 p-4 bg-white rounded-xl shadow-lg border border-blue-100">
                <Shield size={64} strokeWidth={2} className="text-[#0052D9]" />
              </div>
              <div className="absolute -bottom-6 flex gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Artboard: 24px</span>
                <span>Stroke: 2px</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-6 text-center leading-relaxed">
              所有图标基于 24x24px 绘制，统一使用 2px 圆头描边。确保在户外强光下具备极佳的边缘辨识度。
            </p>
          </div>

          <div className="space-y-4">
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
              <h4 className="font-bold text-sm mb-3">转角与端点 (Caps & Joins)</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <ChevronRight size={32} strokeWidth={2.5} className="text-[#0052D9]" />
                   </div>
                   <span className="text-[10px] text-slate-400">Round Join</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MoreHorizontal size={32} strokeWidth={2.5} className="text-[#0052D9]" />
                   </div>
                   <span className="text-[10px] text-slate-400">Round Cap</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                遵循“亲和力”原则，统一使用圆头端点。转角圆润，呼应 UI 全局圆角基因。
              </p>
            </div>
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
              <h4 className="font-bold text-sm mb-3">风格体系</h4>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 border-2 border-slate-200 rounded flex items-center justify-center">
                      <Clapperboard size={20} strokeWidth={2} className="text-slate-400" />
                   </div>
                   <span className="text-[10px] font-bold">线性 (Outline)</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 bg-[#0052D9] rounded flex items-center justify-center">
                      <Clapperboard size={20} fill="white" className="text-[#0052D9]" />
                   </div>
                   <span className="text-[10px] font-bold">面性 (Filled)</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                线性用于默认态，面性用于选中或重要反馈态。双风格体系形成清晰的交互层次。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Size System --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 尺寸层级 (Size System)</h3>
        </div>
        <div className={`p-8 rounded-[2.5rem] border overflow-x-auto no-scrollbar ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="flex items-end justify-around min-w-[500px]">
             {[
               { size: 16, label: 'Small', usage: '随文、标签' },
               { size: 24, label: 'Medium', usage: '标准、导航' },
               { size: 32, label: 'Large', usage: '宫格、入口' },
               { size: 48, label: 'Display', usage: '结果页、空态' },
             ].map(s => (
               <div key={s.label} className="flex flex-col items-center gap-4 group">
                  <div className="flex items-center justify-center border border-dashed border-slate-200 p-2 rounded-lg transition-all group-hover:scale-110">
                    <Shield size={s.size} className="text-[#0052D9]" strokeWidth={2} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-800">{s.label}</p>
                    <p className="text-[10px] text-slate-400">{s.size}px</p>
                    <p className="text-[9px] text-blue-500 font-bold mt-1 uppercase tracking-tighter">{s.usage}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. Key Metaphors --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">3. 核心业务图标库 (Metaphors)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {iconGroups.map((group) => (
            <div key={group.title} className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-6 border-b pb-2">{group.title}</h4>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {group.icons.map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0052D9] transition-all hover:bg-[#EEF4FF] hover:-translate-y-1 cursor-pointer">
                      {icon.component}
                    </div>
                    <span className="text-[11px] font-medium text-slate-600">{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. Interactive Feedback --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-400 pl-3">
          <h3 className="font-bold text-lg">4. 交互反馈与色彩</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="space-y-1">
              <h4 className="text-sm font-bold">选中态反馈</h4>
              <p className="text-[10px] text-slate-400 italic">变色 + 面性填充</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <Users size={24} className="text-slate-300" />
                <span className="text-[9px] text-slate-400">Default</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="p-2 bg-[#EEF4FF] rounded-lg">
                  <Users size={24} className="text-[#0052D9]" fill="currentColor" />
                </div>
                <span className="text-[9px] text-[#0052D9] font-bold">Active</span>
              </div>
            </div>
          </div>
          <div className={`p-6 rounded-2xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="space-y-1">
              <h4 className="text-sm font-bold">状态反馈 (Alerts)</h4>
              <p className="text-[10px] text-slate-400 italic">语义色呼应</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center">
                <HelpCircle size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Developer Notes --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Code className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">资产交付与开发建议 (Handover)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">1</div>
                       <p className="text-xs text-blue-100/60 leading-relaxed">
                         **首选 SVG 格式**：体积小、无限缩放，且可通过 CSS 控制颜色属性（改变 `fill` 或 `stroke`）。
                       </p>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">2</div>
                       <p className="text-xs text-blue-100/60 leading-relaxed">
                         **轮廓化路径**：交付前必须将描边转为路径，并移除 SVG 内的固定颜色代码，统一由 CSS 控制。
                       </p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/40 overflow-x-auto no-scrollbar">
{`/* 统一图标变色控制 */
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.icon--active {
  stroke: #0052D9;
  fill: #0052D9; /* 面性模式使用 fill */
}`}
                  </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Icon System v1.0
        </p>
      </footer>
    </div>
  );
};

export default IconSpecification;
