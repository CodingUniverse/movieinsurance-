
import React from 'react';
import { Type, Hash, AlignCenter, TextSelect, Code, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const TypographySpecification: React.FC<Props> = ({ isDarkMode }) => {
  const typeScale = [
    { role: 'Headline 1', size: '24px', weight: '600', height: '32px', usage: '大标题、结果页状态词' },
    { role: 'Headline 2', size: '20px', weight: '500', height: '28px', usage: '模块标题、弹窗标题' },
    { role: 'Title (Card)', size: '17px', weight: '500', height: '24px', usage: '方案名称、分组标题' },
    { role: 'Body (Main)', size: '16px', weight: '400', height: '24px', usage: '表单输入内容、正文内容' },
    { role: 'Body (Sub)', size: '14px', weight: '400', height: '22px', usage: '列表次要信息、条款正文' },
    { role: 'Caption', size: '12px', weight: '400', height: '18px', usage: '辅助提示、标签、底部信息' },
    { role: 'Legal/Tiny', size: '10px', weight: '400', height: '14px', usage: '版权声明、微小状态标签' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">CrewInsure 字体规范系统</h2>
        <p className="text-slate-500 text-sm italic">“高易读性、等宽数字、原生优先”</p>
      </div>

      {/* --- 1. Font Family Stack --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 字体家族 (Font Family)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">A. 默认原生字体栈</h4>
            <p className="text-xl font-medium mb-2 antialiased">专注易读：PingFang SC / San Francisco</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              坚持使用系统原生字体栈，确保包体积最小，渲染性能最优。在 16px 以下仍能保持极佳的笔画辨识度。
            </p>
          </div>
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">B. 等宽数据录入 (Monospace)</h4>
            <div className="font-mono text-xl tracking-wider mb-2 text-[#004E92]">ID: 320102199001011234</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              身份证号、手机号、银行卡号强制使用 Menlo/Monaco 等宽字体。确保每一位数字对齐，极大地提升核对效率。
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Type Scale Table --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">2. 字号层级 (Type Scale)</h3>
        </div>
        <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b bg-slate-50/50">
                  <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">角色 (Role)</th>
                  <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">字号/行高</th>
                  <th className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[10px]">预览</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((item) => (
                  <tr key={item.role} className="border-b last:border-none border-slate-50 transition-colors hover:bg-slate-50/30">
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{item.role}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.usage}</div>
                    </td>
                    <td className="p-4 font-mono">
                      {item.size} / {item.height}
                    </td>
                    <td className="p-4">
                      <span style={{ fontSize: item.size, lineHeight: item.height, fontWeight: item.weight }}>
                        剧组保险保障
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-start gap-2 p-4 bg-amber-50 rounded-2xl border border-amber-100">
           <AlertCircle className="text-amber-500 shrink-0" size={16} />
           <p className="text-[11px] text-amber-700 leading-relaxed font-medium">
             注意：小程序表单输入框字号不得小于 16px，否则在 iOS 聚焦时会导致页面自动放大，破坏用户交互预期。
           </p>
        </div>
      </section>

      {/* --- 3. Numeric Typesetting --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
          <h3 className="font-bold text-lg">3. 数字排版规范 (Numeric Typesetting)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> 金额展示 (Currency)
            </h4>
            <div className="space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-red-600">¥</span>
                <span className="text-4xl font-bold tracking-tighter text-red-600 font-serif" style={{ fontFamily: 'Impact, sans-serif' }}>57,600</span>
                <span className="text-lg font-bold text-red-600">.00</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[9px] px-2 py-0.5 bg-red-50 text-red-600 rounded-full font-bold uppercase">千分位符</span>
                <span className="text-[9px] px-2 py-0.5 bg-red-50 text-red-600 rounded-full font-bold uppercase">小数缩小 80%</span>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 数据格式化 (Formatting)
            </h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Phone Number (3-4-4)</p>
                <p className="text-xl font-mono tracking-wider font-bold text-slate-700">138 0013 8000</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">ID Card (6-8-4)</p>
                <p className="text-xl font-mono tracking-wider font-bold text-slate-700">320102 19900101 1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CSS Snippets --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Code className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">开发样式代码片段 (Typography CSS)</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/60 overflow-x-auto no-scrollbar">
{`/* --- 全局字体变量 --- */
:root {
  --font-base: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif;
  --font-price: 'DIN Alternate', 'Roboto Condensed', 'Impact', sans-serif;
  --font-mono: 'Menlo', 'Monaco', 'Consolas', monospace;
}

/* --- 金额展示类 --- */
.price-emphasize {
  font-family: var(--font-price);
  letter-spacing: -0.5px;
  font-weight: bold;
}

/* --- 数据输入类 --- */
.data-input {
  font-family: var(--font-mono);
  letter-spacing: 1px;
}`}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* --- Checklist --- */}
      <section className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
        <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-500" />
            设计师自检清单 (Checklist)
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                '强光环境检查：12px 辅助文字在户外是否依然清晰？',
                '数字对齐：列表右侧金额是否使用了个位数对齐？',
                '生僻字适配：核心字段是否避免了使用不含生僻字的 WebFont？',
                '输入预期：手机号/身份证输入框是否自动添加了空格分隔？',
            ].map((text, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                    <span className="text-[#0052D9] font-bold shrink-0">{idx + 1}.</span>
                    {text}
                </li>
            ))}
        </ul>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Typography System v1.0
        </p>
      </footer>
    </div>
  );
};

export default TypographySpecification;
