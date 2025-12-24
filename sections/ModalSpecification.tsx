
import React, { useState, useRef, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  X, 
  Trash2, 
  ArrowRight, 
  FileText, 
  HelpCircle, 
  RotateCcw,
  Loader2,
  Bell
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

type ModalType = 'danger' | 'legal' | 'edit' | 'error' | 'success-toast' | 'loading-hud' | null;

const ModalSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [legalRead, setLegalRead] = useState(false);
  const [loadingText, setLoadingText] = useState('正在提交订单...');
  const legalContentRef = useRef<HTMLDivElement>(null);

  // Loading text cycle
  useEffect(() => {
    if (activeModal === 'loading-hud') {
      const texts = ['正在提交订单...', '正在生成电子契约...', '即将完成...'];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setLoadingText(texts[i]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [activeModal]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setLegalRead(true);
    }
  };

  const closeModals = () => {
    setActiveModal(null);
    setLegalRead(false);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">弹窗与模态交互规范</h2>
        <p className="text-slate-500 text-sm">“化繁为简，让决策在视线中心聚焦”</p>
      </div>

      {/* --- Demo Trigger Area --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 text-red-500 mb-2">
                <AlertTriangle size={18} />
                <h4 className="font-bold text-sm">Level 1: 强阻断中央弹窗</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">用于极高权重的决策，如删除人员、异常报错拦截等。</p>
            <div className="flex gap-2">
                <Button variant="danger" size="small" className="flex-1" onClick={() => setActiveModal('danger')}>危险操作</Button>
                <Button variant="tertiary" size="small" className="flex-1" onClick={() => setActiveModal('error')}>业务异常</Button>
            </div>
        </div>

        <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 text-[#0052D9] mb-2">
                <FileText size={18} />
                <h4 className="font-bold text-sm">Level 2: 任务流底部弹窗</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">用于上下文延伸，如选择器、长文本阅读、表单内嵌修改。</p>
            <div className="flex gap-2">
                <Button variant="secondary" size="small" className="flex-1" onClick={() => setActiveModal('legal')}>条款阅读</Button>
                <Button variant="secondary" size="small" className="flex-1" onClick={() => setActiveModal('edit')}>上下文修改</Button>
            </div>
        </div>

        <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 md:col-span-2 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 text-green-600 mb-2">
                <Bell size={18} />
                <h4 className="font-bold text-sm">Level 3: 轻反馈提示 (Toasts)</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">用完即走，不打断主流程的操作结果反馈。</p>
            <div className="flex gap-2">
                <Button variant="ghost" size="small" className="flex-1 bg-gray-50" onClick={() => setActiveModal('success-toast')}>成功提示</Button>
                <Button variant="ghost" size="small" className="flex-1 bg-gray-50" onClick={() => setActiveModal('loading-hud')}>加载状态 (HUD)</Button>
            </div>
        </div>
      </section>

      {/* --- MODAL RENDERING LOGIC --- */}
      
      {/* Level 1: Danger Modal */}
      {activeModal === 'danger' && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className={`w-full max-w-sm rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner">
                        <Trash2 size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">确认移除该人员？</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            移除后，张大伟（1101...）将不再享受保险保障。此操作不可撤销。
                        </p>
                    </div>
                    <div className="flex gap-3 pt-6 w-full">
                        <Button variant="secondary" size="full" className="rounded-2xl" onClick={closeModals}>先不删</Button>
                        <Button variant="danger" size="full" className="rounded-2xl bg-red-50 border-none text-red-500 font-bold" onClick={closeModals}>确认移除</Button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Level 1: Helpful Error Modal */}
      {activeModal === 'error' && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className={`w-full max-w-sm rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-blue-50 text-[#0052D9] rounded-[2rem] flex items-center justify-center mx-auto mb-6 relative">
                        <RotateCcw size={40} />
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                            <HelpCircle size={16} fill="#0052D9" className="text-white" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold">有 3 条数据需要修正</h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed px-2">
                        我们在解析您的名单时发现了少量格式问题，修正后即可正常投保。
                    </p>
                    <div className="mt-8 space-y-3">
                        <Button variant="highlight" size="full" className="rounded-2xl" onClick={closeModals}>立即去修正</Button>
                        <button onClick={closeModals} className="text-xs text-slate-400 font-bold hover:text-slate-600 transition-colors">联系在线专员协助</button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Level 2: Legal Bottom Sheet */}
      {activeModal === 'legal' && (
        <div className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm flex items-end justify-center px-4 pb-4 animate-in fade-in duration-300">
            <div className={`w-full max-w-lg h-[85vh] rounded-[2rem] flex flex-col animate-in slide-in-from-bottom-full duration-500 shadow-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="p-6 border-b flex items-center justify-between">
                    <h3 className="font-bold">保险条款与告知</h3>
                    <button onClick={closeModals} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
                </div>
                <div 
                    ref={legalContentRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar"
                >
                    <div className="space-y-4">
                        <div className="h-6 w-1/3 bg-slate-100 rounded animate-pulse"></div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            为了保障您的合法权益，请在确认支付前务必仔细阅读以下全部内容。
                            剧组保险具有特定的行业生效逻辑与免责声明，请特别关注高空作业及猝死扩展条款。
                        </p>
                        <div className="h-40 w-full bg-slate-50 rounded-2xl border border-slate-100"></div>
                        <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-32 w-full bg-slate-50 rounded-2xl border border-slate-100"></div>
                        <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-48 w-full bg-slate-50 rounded-2xl border border-slate-100"></div>
                        <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-widest pt-8">
                            {legalRead ? "已读到底部" : "请滑动到底部以解锁"}
                        </p>
                    </div>
                </div>
                <div className="p-8 border-t bg-slate-50/50 rounded-b-[2rem]">
                    <Button 
                        variant="primary" 
                        size="full" 
                        disabled={!legalRead}
                        className={`rounded-2xl shadow-xl transition-all ${!legalRead ? 'opacity-40 grayscale' : 'animate-bounce'}`}
                        onClick={closeModals}
                    >
                        我已阅读并知晓相关风险
                    </Button>
                </div>
            </div>
        </div>
      )}

      {/* Level 2: Edit Contextual Bottom Sheet */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-300">
            <div className={`w-full max-w-lg h-[50vh] rounded-t-[2.5rem] flex flex-col animate-in slide-in-from-bottom-full duration-300 shadow-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                {/* Drag Handle */}
                <div className="w-full h-8 flex items-center justify-center cursor-pointer" onClick={closeModals}>
                    <div className="w-10 h-1 bg-slate-200 rounded-full"></div>
                </div>
                
                <div className="px-6 pb-6 flex items-center justify-between border-b">
                    <button onClick={closeModals} className="text-sm font-medium text-slate-400">取消</button>
                    <h3 className="font-bold">修改保障起止日期</h3>
                    <button onClick={closeModals} className="text-sm font-bold text-[#0052D9]">确定</button>
                </div>
                
                <div className="flex-1 p-8 flex flex-col gap-6">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">生效起始日期</label>
                        <div className="h-12 w-full bg-slate-100 rounded-xl flex items-center px-4 justify-between">
                            <span className="text-sm font-bold">2023-10-01</span>
                            <ChevronRight size={16} className="text-slate-300" />
                        </div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                        <HelpCircle size={18} className="text-amber-500 shrink-0" />
                        <p className="text-[10px] text-amber-700 leading-relaxed font-medium">
                            延后生效日期将导致保费重新核算，差额多退少补。请确认剧组实际进场工期。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Level 3: Success Toast */}
      {activeModal === 'success-toast' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none p-6">
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in zoom-in-90 fade-in duration-200">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center animate-bounce duration-1000">
                    <CheckCircle2 size={40} />
                </div>
                <span className="font-bold text-slate-800">保存成功</span>
                {/* Auto close effect */}
                {setTimeout(closeModals, 1500) && null}
            </div>
        </div>
      )}

      {/* Level 3: Loading HUD */}
      {activeModal === 'loading-hud' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/20 backdrop-blur-[2px] p-6">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col items-center gap-6 shadow-2xl animate-in fade-in duration-300">
                <Loader2 className="text-white animate-spin" size={48} strokeWidth={3} />
                <div className="text-center">
                    <p className="text-white font-bold text-base transition-all duration-300">{loadingText}</p>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] mt-2 font-black">Contract Generating</p>
                </div>
                {/* Simulation for user - button to manually close */}
                <button onClick={closeModals} className="absolute bottom-4 text-[9px] text-white/20 underline">点击模拟完成</button>
            </div>
        </div>
      )}

      {/* --- DESIGN PRINCIPLES SUMMARY --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`p-8 rounded-[2rem] border-2 border-dashed ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
            <h4 className="font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0052D9] rounded-full"></div>
                场景化动效规范
            </h4>
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 uppercase">中央弹窗 (Center In)</p>
                    <p className="text-[10px] text-slate-400">zoom-in-95 + duration-200 + spring-back</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 uppercase">底部抽屉 (Slide Up)</p>
                    <p className="text-[10px] text-slate-400">slide-in-from-bottom-full + duration-300 + ease-out</p>
                </div>
            </div>
        </div>
        
        <div className={`p-8 rounded-[2rem] border-2 border-dashed ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
            <h4 className="font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0052D9] rounded-full"></div>
                工程实现要点
            </h4>
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 uppercase">滚动穿透拦截</p>
                    <p className="text-[10px] text-slate-400">背景页 overflow: hidden 或 catchtouchmove</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 uppercase">层级 Z-Index 策略</p>
                    <p className="text-[10px] text-slate-400">Overlay: 900 | Content: 901 | Toast: 1000</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ModalSpecification;

// Temporary helper for ChevronRight as it wasn't imported initially
const ChevronRight = ({ size, className }: { size: number, className: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m9 18 6-6-6-6"/>
    </svg>
);
