
import React, { useState } from 'react';
import { 
  Compass, 
  Check, 
  CloudOff, 
  Home, 
  ClipboardList, 
  User, 
  Bell, 
  ArrowRight,
  MousePointer2
} from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const NavigationSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [showStatus, setShowStatus] = useState(true);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">导航系统设计规范</h2>
        <p className="text-slate-500 text-sm italic">“掌控全局的进度引导，Q弹触感的底部交互”</p>
      </div>

      {/* --- 1. Top Stepper --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 扁平步骤条 (Flat Stepper)</h3>
        </div>
        <div className={`p-8 rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="max-w-xs mx-auto space-y-8">
            <div className="flex items-center justify-between relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 -translate-y-1/2 -z-0">
                <div className="h-full bg-[#0052D9] w-1/2"></div>
              </div>
              
              {/* Step 1: Completed */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0052D9] text-white flex items-center justify-center">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-[10px] font-bold text-slate-400">选择方案</span>
              </div>

              {/* Step 2: Active */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0052D9] text-white flex items-center justify-center ring-4 ring-blue-50 font-bold text-xs shadow-lg">
                  2
                </div>
                <span className="text-[10px] font-bold text-[#0052D9]">录入名单</span>
              </div>

              {/* Step 3: Pending */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gray-200 bg-white text-slate-300 flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <span className="text-[10px] font-bold text-slate-300">支付生效</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 text-center leading-relaxed italic">
              紧贴原生导航栏下方，利用进度预判安抚用户长路径焦虑。
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Global Status Notification --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 状态通知条 (Status Bar)</h3>
        </div>
        <div className={`p-0 rounded-[2rem] border overflow-hidden relative min-h-[160px] ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-100 border-gray-100 shadow-inner'}`}>
           {/* Mock Header */}
           <div className="h-12 bg-white flex items-center justify-center font-bold text-xs border-b">
              导航标题
           </div>
           {/* Slidable Notification */}
           {showStatus && (
             <div className="bg-[#FFFBEB] h-10 border-b border-amber-100 flex items-center justify-center gap-2 animate-in slide-in-from-top-full duration-500">
                <CloudOff size={14} className="text-amber-600" />
                <span className="text-[11px] font-bold text-amber-600">当前信号弱，已开启离线存储模式 ☁️</span>
             </div>
           )}
           <div className="p-8 text-center">
              <button 
                onClick={() => setShowStatus(!showStatus)}
                className="text-[10px] font-bold text-[#0052D9] uppercase tracking-widest underline underline-offset-4"
              >
                {showStatus ? '隐藏通知' : '显示通知演示'}
              </button>
           </div>
        </div>
      </section>

      {/* --- 3. Tab Bar --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">3. 底部标签栏 (Tab Bar)</h3>
        </div>
        <div className={`p-8 rounded-[2.5rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="max-w-xs mx-auto">
             <div className="relative h-16 bg-white border rounded-2xl flex items-center justify-around shadow-sm">
                {[
                  { id: 'home', label: '首页', icon: Home },
                  { id: 'policy', label: '保单', icon: ClipboardList },
                  { id: 'msg', label: '通知', icon: Bell },
                  { id: 'user', label: '我的', icon: User },
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 transform active:scale-90 ${
                      activeTab === tab.id ? 'text-[#0052D9]' : 'text-slate-400'
                    }`}
                  >
                    <div className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-110' : 'scale-100'}`}>
                      <tab.icon size={22} fill={activeTab === tab.id ? 'currentColor' : 'none'} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
                    </div>
                    <span className={`text-[10px] font-bold ${activeTab === tab.id ? 'opacity-100' : 'opacity-60'}`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
             </div>
             <p className="text-center mt-6 text-xs text-slate-400">
                选中态采用“填充色” + “Scale(1.1) 弹性缩放”。<br/>
                弥补扁平设计触感缺失，提供“Q弹”反馈。
             </p>
          </div>
        </div>
      </section>

      {/* --- 4. Transition & Feedback --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <MousePointer2 className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">转场与交互细节 (Micro-interactions)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-blue-300 uppercase underline underline-offset-4">卡片激活反馈</h4>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          扁平卡片在手指按下 (Active) 时，背景色应瞬时变暗至 `#F9FAFB`。视觉无深度，必借色彩告知点击已生效。
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-blue-300 uppercase underline underline-offset-4">结果页 Fade 转场</h4>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          完成支付返回首页时，使用 Fade (淡入淡出) 代替 Slide (滑入)。暗示当前任务流彻底终结，新周期开始。
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Nav System v1.0
        </p>
      </footer>
    </div>
  );
};

export default NavigationSpecification;
