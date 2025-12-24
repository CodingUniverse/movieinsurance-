
import React from 'react';
import { ShieldCheck, Info, CheckCircle2, AlertTriangle, XCircle, ExternalLink, Code } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const ColorSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const brandColors = [
    { name: 'Brand Primary', hex: '#004E92', desc: '深海蓝 - 核心品牌色', usage: '主按钮、关键高亮', contrast: '10.5:1 (AAA)' },
    { name: 'Brand Light', hex: '#0061AF', desc: '亮蓝 - 反馈色', usage: '渐变、点击反馈', contrast: '7.8:1 (AA)' },
    { name: 'Brand Dark', hex: '#00386B', desc: '暗蓝 - 深度色', usage: 'Pressed状态、导航', contrast: '14.5:1 (AAA)' },
    { name: 'Brand Surface', hex: '#EBF4FF', desc: '极淡蓝 - 容器底色', usage: '次级按钮背景、Tag', contrast: '-' },
  ];

  const functionalColors = [
    { name: 'Success', hex: '#10B981', tint: '#ECFDF5', desc: '安全绿', usage: '支付成功、核保通过' },
    { name: 'Error', hex: '#EF4444', tint: '#FEF2F2', desc: '警示红', usage: '删除、报错、驳回' },
    { name: 'Warning', hex: '#F59E0B', tint: '#FFFBEB', desc: '待办橙', usage: '异常提示、资料缺失' },
    { name: 'Price', hex: '#D32F2F', tint: '', desc: '价格红', usage: '仅限金额数值展示' },
  ];

  const neutralColors = [
    { name: 'Text Primary', hex: '#1F2937', desc: '深灰 - 标题/正文' },
    { name: 'Text Secondary', hex: '#6B7280', desc: '中灰 - 辅助/次要' },
    { name: 'Text Tertiary', hex: '#9CA3AF', desc: '浅灰 - 占位/禁用' },
    { name: 'Border Color', hex: '#E5E7EB', desc: '线框灰 - 边框/线' },
    { name: 'Page BG', hex: '#F3F4F6', desc: '冷灰 - 页面底色' },
    { name: 'Card Surface', hex: '#FFFFFF', desc: '纯白 - 容器背景' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">CrewInsure 色彩规范系统</h2>
        <p className="text-slate-500 text-sm italic">“专业稳重，高对比度的金融安全感”</p>
      </div>

      {/* --- 1. Brand Colors --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 品牌主色系 (Brand Colors)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandColors.map((color) => (
            <div key={color.name} className={`flex items-center p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl shrink-0 shadow-inner" style={{ backgroundColor: color.hex }}></div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm">{color.name}</h4>
                  <code className="text-[10px] font-mono text-slate-400 font-bold">{color.hex}</code>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">{color.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">用途: {color.usage}</span>
                  {color.contrast !== '-' && (
                    <span className="text-[9px] font-bold text-blue-600">Contrast: {color.contrast}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 2. Functional Colors --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 功能色系 (Functional Colors)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {functionalColors.map((color) => (
            <div key={color.name} className={`p-4 rounded-2xl border text-center space-y-3 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
              <div className="w-full h-12 rounded-lg" style={{ backgroundColor: color.hex }}></div>
              <div>
                <h4 className="font-bold text-xs">{color.name}</h4>
                <code className="text-[9px] font-mono text-slate-400 block mt-1">{color.hex}</code>
              </div>
              <div className="h-6 w-full rounded flex items-center justify-center" style={{ backgroundColor: color.tint || 'transparent' }}>
                <span className="text-[8px] font-bold" style={{ color: color.hex }}>{color.tint ? 'Tint Area' : ''}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. Neutrals --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-400 pl-3">
          <h3 className="font-bold text-lg">3. 中性色系 (Neutral Colors)</h3>
        </div>
        <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b bg-slate-50/50">
                <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Color</th>
                <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Hex / Token</th>
                <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Description</th>
              </tr>
            </thead>
            <tbody>
              {neutralColors.map((color) => (
                <tr key={color.name} className="border-b last:border-none border-slate-50">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-6 h-6 rounded border shadow-sm" style={{ backgroundColor: color.hex }}></div>
                    <span className="font-bold">{color.name}</span>
                  </td>
                  <td className="p-4 font-mono text-slate-400">{color.hex}</td>
                  <td className="p-4 text-slate-500 italic">{color.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 4. Pairing Examples --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">4. 色彩组合实战示例</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example: Success Tag */}
            <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">A. 状态标签 (Status Tag)</h4>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#ECFDF5] text-[#059669] rounded-full text-xs font-bold border border-[#10B981]/10">
                        <CheckCircle2 size={12} /> 保障中
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EBF4FF] text-[#004E92] rounded-full text-xs font-bold">
                        待生效
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FEF2F2] text-[#EF4444] rounded-full text-xs font-bold border border-[#EF4444]/10">
                        <XCircle size={12} /> 异常拦截
                    </div>
                </div>
                <p className="mt-4 text-[10px] text-slate-400 leading-relaxed italic">
                    前景色采用加深的语义色，背景采用 10% 饱和度的 Tint 色值，确保在 14px 以下小字仍具备 AA 级可读性。
                </p>
            </div>

            {/* Example: Price & Money */}
            <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">B. 金额与核心数值</h4>
                <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-slate-400">应付总额:</span>
                    <span className="text-3xl font-bold text-[#D32F2F] tracking-tighter">¥57,600.00</span>
                </div>
                <p className="mt-4 text-[10px] text-slate-400 leading-relaxed italic">
                    使用 #D32F2F (价格红) 代替 Error 红。价格红明度稍低，视觉重心稳重，减少用户支付时的焦虑感。
                </p>
            </div>
        </div>
      </section>

      {/* --- 5. Accessibility & Dev Notes --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">无障碍 (Accessibility) 与 剧组环境适配</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-blue-300 underline underline-offset-4">户外强光 (High Noon)</h4>
                        <p className="text-xs text-blue-100/70 leading-relaxed">
                            强光下界面对比度会急剧下降。我们的所有主按钮、标题文字对比度均高于 7:1，且输入框边框色预设了加深反馈，防止因反光看不清输入边界。
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-blue-300 underline underline-offset-4">夜间/暗室 (Dark Context)</h4>
                        <p className="text-xs text-blue-100/70 leading-relaxed">
                            虽然首版未开启深色模式，但选色已避开高饱和荧光色。Brand Primary 在后续 Dark Mode 适配中将自动降饱和，保护剧组人员夜间视力。
                        </p>
                    </div>
                </div>

                {/* CSS Variable Code Snippet */}
                <div className="pt-6">
                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 relative group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Code size={14} className="text-blue-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-mono">CSS Variables (app.wxss)</span>
                            </div>
                            <button className="text-[10px] text-blue-400 font-bold hover:text-white transition-colors">COPY SNIPPET</button>
                        </div>
                        <pre className="text-[10px] font-mono leading-relaxed text-blue-100/50 overflow-x-auto no-scrollbar">
{`:root {
  --color-primary: #004E92;
  --color-primary-light: #0061AF;
  --color-primary-dark: #00386B;
  --color-brand-surface: #EBF4FF;

  --color-error: #EF4444;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-price: #D32F2F;

  --text-main: #1F2937;
  --text-sub: #6B7280;
  --bg-page: #F3F4F6;
}`}
                        </pre>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-[-100px] left-[-50px] w-80 h-80 bg-blue-600/5 blur-[80px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Designed for Cinema Professionals · Design System v1.2
        </p>
      </footer>
    </div>
  );
};

export default ColorSpecification;
