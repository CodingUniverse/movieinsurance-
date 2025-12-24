
import React, { useState } from 'react';
import { 
  ClipboardType, 
  ChevronRight, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  Code, 
  MousePointer2, 
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const FormSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [focusId, setFocusId] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [values, setValues] = useState({
    name: '张智勇',
    idCard: '32010219900101123',
    relation: '本人',
    code: ''
  });

  const handleFocus = (id: string) => setFocusId(id);
  const handleBlur = () => setFocusId(null);

  const getRowClass = (id: string, error = false) => {
    let base = "relative flex items-center min-h-[56px] transition-all px-4 ";
    if (focusId === id) base += isDarkMode ? "bg-slate-800/50" : "bg-blue-50/30";
    return base;
  };

  const getLineClass = (id: string, error = false) => {
    let base = "absolute bottom-0 left-[100px] right-0 h-[1px] transition-all duration-300 ";
    if (error) return base + "bg-red-500 h-[1.5px]";
    if (focusId === id) return base + "bg-[#0052D9] h-[1.5px]";
    return base + (isDarkMode ? "bg-slate-700" : "bg-gray-100");
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">通用表单组件规范</h2>
        <p className="text-slate-500 text-sm italic">“线性极简，极致聚焦的输入体验”</p>
      </div>

      {/* --- 1. Basic Anatomy --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 基础结构与网格 (Anatomy)</h3>
        </div>
        
        <div className={`p-0 rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="p-8 space-y-8">
            <div className="relative border-2 border-dashed border-blue-100 rounded-2xl p-2">
              <div className={getRowClass('anatomy')}>
                <div className="w-[100px] text-base text-slate-800 font-medium shrink-0">真实姓名</div>
                <div className="flex-1 text-base text-slate-400">请输入被保人姓名</div>
                <div className={getLineClass('anatomy')}></div>
                
                {/* Visual Guides */}
                <div className="absolute top-0 left-0 bottom-0 w-[100px] bg-blue-500/5 border-r border-dashed border-blue-200 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-blue-400 transform -rotate-90">Label: 100px</span>
                </div>
                <div className="absolute -bottom-6 left-[100px] right-0 flex justify-center">
                   <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Underline (Linear Style)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052D9] flex items-center justify-center shrink-0 font-bold text-xs">56</div>
                  <p className="text-xs text-slate-500">行高固定 56px，确保极致的触控容错</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052D9] flex items-center justify-center shrink-0 font-bold text-xs">100</div>
                  <p className="text-xs text-slate-500">标签固定 100px 宽，保持视觉纵向对齐</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Interactive States --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 交互状态 (States)</h3>
        </div>

        <div className={`rounded-[2.5rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="divide-y divide-gray-50">
            {/* Focus State */}
            <div className={getRowClass('state-focus')}>
              <label className="w-[100px] text-base font-medium">证件号码</label>
              <input 
                type="text" 
                className="flex-1 bg-transparent border-none outline-none text-base" 
                placeholder="请输入18位身份证号"
                onFocus={() => handleFocus('state-focus')}
                onBlur={handleBlur}
                value={values.idCard}
                onChange={(e) => setValues({...values, idCard: e.target.value})}
              />
              {values.idCard && <button className="p-1 text-slate-300"><X size={16} /></button>}
              <div className={getLineClass('state-focus')}></div>
              {focusId === 'state-focus' && (
                <div className="absolute -top-6 right-4 animate-bounce">
                  <span className="bg-[#0052D9] text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg">聚焦中</span>
                </div>
              )}
            </div>

            {/* Error State */}
            <div className="relative pt-2">
              <div className={getRowClass('state-error')}>
                <label className="w-[100px] text-base font-medium">手机号码</label>
                <input 
                  type="text" 
                  className="flex-1 bg-transparent border-none outline-none text-base text-red-600" 
                  defaultValue="1380013"
                />
                <AlertCircle size={16} className="text-red-500" />
                <div className={getLineClass('state-error', true)}></div>
              </div>
              <div className="px-[116px] py-2 flex items-center gap-1 text-red-500 animate-in slide-in-from-top-1">
                 <span className="text-[11px] font-bold italic">请输入正确的11位手机号</span>
              </div>
            </div>

            {/* Readonly/Disabled */}
            <div className="relative opacity-60 bg-gray-50/50">
              <div className={getRowClass('state-disabled')}>
                <label className="w-[100px] text-base font-medium text-slate-400">被保性别</label>
                <div className="flex-1 text-base text-slate-400">男 (根据证件号自动识别)</div>
                <div className="absolute bottom-0 left-[100px] right-0 h-[1px] border-b border-dashed border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Variants --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">3. 组件变体 (Variants)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Picker */}
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">A. 选择器 (Picker)</h4>
            <div className="relative flex items-center h-14 bg-white rounded-xl px-4 border shadow-sm">
               <span className="w-20 text-sm font-medium">保障期限</span>
               <span className="flex-1 text-sm text-[#004E92] font-bold">180天 (半年期)</span>
               <ChevronRight size={16} className="text-slate-300" />
            </div>
            <p className="mt-4 text-[10px] text-slate-400 leading-relaxed italic">
              右侧配置 16px 灰色箭头，暗示可触发 Bottom Sheet。
            </p>
          </div>

          {/* Verification Code */}
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">B. 验证码 (Verification)</h4>
            <div className="relative flex items-center h-14 bg-white rounded-xl px-4 border shadow-sm">
               <span className="w-20 text-sm font-medium">验证码</span>
               <input type="text" className="flex-1 text-sm outline-none" placeholder="6位数字" />
               <div className="w-[1px] h-4 bg-gray-100 mx-3"></div>
               <button className="text-sm font-bold text-[#004E92]">获取验证码</button>
            </div>
            <p className="mt-4 text-[10px] text-slate-400 leading-relaxed italic">
              引入竖向分割线区分输入与动作，保持视觉重心稳固。
            </p>
          </div>

          {/* Text Area */}
          <div className={`p-6 rounded-[2rem] border md:col-span-2 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">C. 长文本输入 (Text Area)</h4>
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800">健康告知补充说明</label>
                <div className="relative">
                   <textarea 
                    className="w-full min-h-[100px] bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm outline-none resize-none focus:border-blue-200 transition-colors"
                    placeholder="如被保人有特殊病史，请在此详细填写..."
                   />
                   <span className="absolute bottom-3 right-4 text-[10px] text-slate-300 font-mono">0 / 200</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Advanced UX Tips --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">高级体验优化 (Pro UX Tips)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300">
                          <MousePointer2 size={16} />
                          <h4 className="text-xs font-bold uppercase tracking-widest">全行响应</h4>
                        </div>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          整行 56px 均需作为点击热区。用户点 Label 也应激活输入框，降低单手操作压力。
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300">
                          <Smartphone size={16} />
                          <h4 className="text-xs font-bold uppercase tracking-widest">键盘避让</h4>
                        </div>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          聚焦时，当前行应自动滚动至屏幕 1/3 处。严禁键盘遮挡输入线及错误提示。
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300">
                          <ClipboardType size={16} />
                          <h4 className="text-xs font-bold uppercase tracking-widest">必填策略</h4>
                        </div>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          剧组保险绝大多数项必填。不标记红星，仅在“选填”项后标注灰色 (选填) 小字。
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* --- 5. Code Snippet --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Code className="text-[#0052D9]" size={18} />
                    <h3 className="font-bold">开发样式变量 (CSS Token)</h3>
                </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[10px] leading-relaxed text-blue-100/40 overflow-x-auto no-scrollbar">
{`/* 表单行容器 */
.form-row {
  display: flex;
  align-items: center;
  min-height: 56px;
  background: #FFFFFF;
  position: relative;
}

/* 底部线性装饰 (非全宽) */
.form-row::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 100px; /* Label 宽度对齐 */
  right: 0;
  height: 1px;
  background-color: #E5E7EB;
  transition: all 0.3s ease;
}

/* 聚焦态动效 */
.form-row.focused::after {
  background-color: #004E92;
  height: 1.5px;
}`}
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Form System v1.0
        </p>
      </footer>
    </div>
  );
};

export default FormSpecification;
