
import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  PenTool, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Share2, 
  FileText, 
  X,
  RotateCcw,
  Zap,
  Info,
  Shield,
  Layout
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ConfirmationExperience: React.FC<Props> = ({ isDarkMode }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  const termsContentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setIsScrolledToBottom(true);
    }
  };

  const handleSign = () => {
    setIsSigned(true);
    setShowSignatureModal(false);
    // Simulate haptic
    if ('vibrate' in navigator) navigator.vibrate(20);
  };

  const handlePay = () => {
    if (!isSigned) {
        // Trigger shake effect via CSS if implemented, or alert
        return;
    }
    if (!hasReadTerms) {
        setShowTermsModal(true);
        return;
    }
    setIsPaid(true);
    if ('vibrate' in navigator) navigator.vibrate([10, 30, 10]);
  };

  if (isPaid) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-500 min-h-[600px]">
            <div className="relative mb-8">
                <div className="w-32 h-32 bg-green-50 text-green-600 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                    <CheckCircle2 size={72} strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-green-500/5 animate-pulse"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2.5 shadow-xl border border-green-100">
                    <ShieldCheck className="text-[#0052D9]" size={28} />
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">投保成功！保障已即刻生效</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-12 max-w-xs mx-auto">
                您的电子保单已生成，并同步发送至制片人邮箱。<br/>
                剧组 128 位老师已处于全面保障中。
            </p>
            
            <div className="w-full space-y-4 max-w-sm px-4">
              <Button variant="highlight" size="full" icon={<Download size={18}/>}>查看并下载电子保单</Button>
              <Button variant="secondary" size="full" icon={<Share2 size={18}/>} className="border border-blue-100">
                生成邀功海报发群
              </Button>
              <div className="pt-4 flex items-center justify-center gap-4 text-slate-400">
                <button className="text-xs hover:text-slate-600 underline">下载人员名单</button>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <button className="text-xs hover:text-slate-600 underline" onClick={() => setIsPaid(false)}>返回首页</button>
              </div>
            </div>
        </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">数字化投保确认单</h2>
        <p className="text-slate-500 text-sm">“严肃的契约仪式，极致的支付路径”</p>
      </div>

      {/* --- Ticket Body (Visual Metaphor) --- */}
      <div className="relative max-w-sm mx-auto px-4">
        {/* Pending Watermark Seal */}
        <div className="absolute top-12 right-6 z-10 pointer-events-none opacity-[0.08] transform rotate-[15deg] select-none">
            <div className="border-[6px] border-red-600 rounded-[2rem] p-4 flex flex-col items-center">
                <span className="text-red-600 font-black text-4xl tracking-[0.8rem] uppercase mb-1">待支付</span>
                <div className="h-[2px] w-full bg-red-600 mb-1"></div>
                <span className="text-red-600 text-[10px] font-bold tracking-widest">INSURANCE CONTRACT</span>
            </div>
        </div>

        <div className={`ticket-zigzag rounded-t-3xl overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            {/* 1. Header Area */}
            <div className="p-8 border-b border-dashed border-gray-100">
                <div className="flex items-center gap-2 text-[#0052D9] mb-3">
                    <Shield size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Official Insurance Quote</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 leading-tight">雇主责任险投保确认单</h3>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">NO. CREW-2024-08992311</p>
            </div>

            {/* 2. Breakdown Section (The "Receipt" Part) */}
            <div className="p-8 space-y-5">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">保障剧组</span>
                        <span className="text-xs font-bold text-slate-700">《流浪地球3》制片组</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">投保方案</span>
                        <span className="text-xs font-bold text-slate-700">标准版 (80万保额)</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <span className="text-xs text-slate-400">保障周期</span>
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-700">2023.10.01 - 2024.01.01</p>
                            <p className="text-[10px] text-slate-300">共计 92 天</p>
                        </div>
                    </div>
                </div>

                <div className="py-5 border-t border-b border-dashed border-gray-100 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">单人保费价格</span>
                        <span className="text-xs font-mono text-slate-600">¥150.00 / 人 / 期</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">被保总人数</span>
                        <span className="text-xs font-mono text-slate-600">128 人</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2">
                        <span className="text-xs font-bold text-slate-800">保费计算公式</span>
                        <span className="text-[10px] font-mono text-slate-400">150 × 128 = 57,600</span>
                    </div>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                    <span className="text-sm font-bold text-slate-800">应付总金额</span>
                    <span className="text-3xl font-bold text-[#FF4D4F] font-mono tracking-tighter">¥57,600.00</span>
                </div>
            </div>

            {/* 3. Special Clauses (The "Small Print") */}
            <div className={`mx-8 mb-8 p-5 rounded-2xl text-[10px] leading-[1.7] ${isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                <div className="flex items-center gap-1.5 mb-2 text-slate-700">
                    <Info size={12} />
                    <span className="font-bold">特别约定与告知 (Clauses)：</span>
                </div>
                <ul className="space-y-1.5 list-none">
                    <li className="relative pl-3">
                        <div className="absolute left-0 top-1.5 w-1 h-1 bg-slate-300 rounded-full"></div>
                        含猝死保障：扩展承保由于过度劳累导致的24小时内猝死责任。
                    </li>
                    <li className="relative pl-3">
                        <div className="absolute left-0 top-1.5 w-1 h-1 bg-slate-300 rounded-full"></div>
                        高空作业：涵盖摄影、灯光组在 5 米以上持证高空作业风险。
                    </li>
                    <li className="relative pl-3">
                        <div className="absolute left-0 top-1.5 w-1 h-1 bg-slate-300 rounded-full"></div>
                        生效时间：支付完成后，将于次日 00:00 正式生效。
                    </li>
                </ul>
            </div>

            {/* 4. Signature Placeholder (The Interactive Ritual) */}
            <div className="px-8 pb-10">
                <div 
                    onClick={() => setShowSignatureModal(true)}
                    className={`h-36 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all relative overflow-hidden group cursor-pointer ${
                        isSigned 
                        ? 'border-[#0052D9]/20 bg-[#0052D9]/5' 
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                    } ${!isSigned && !hasReadTerms ? 'animate-pulse' : ''}`}
                >
                    {isSigned ? (
                        <div className="flex flex-col items-center animate-in zoom-in-95 duration-500">
                            <span className="signature-text">张智勇</span>
                            <div className="flex items-center gap-1.5 mt-2">
                                <CheckCircle2 size={10} className="text-green-500" />
                                <span className="text-[8px] text-green-600 font-bold uppercase tracking-widest">Digital E-Signature Verified</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-300 mb-3 group-hover:scale-110 transition-transform">
                                <PenTool size={24} />
                            </div>
                            <span className="text-xs text-slate-400 font-bold">点击此处完成手写签名</span>
                            <span className="text-[9px] text-slate-300 mt-1">需制片人/负责人签字画押</span>
                        </>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* --- Terms & Payment Control --- */}
      <div className="max-w-sm mx-auto px-8 space-y-6 pt-4">
        <div className="flex items-start gap-3">
            <button 
                onClick={() => setHasReadTerms(!hasReadTerms)}
                className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    hasReadTerms ? 'bg-[#0052D9] border-[#0052D9] shadow-md' : 'bg-white border-gray-200'
                }`}
            >
                {hasReadTerms && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
            </button>
            <p className="text-[11px] text-slate-400 leading-relaxed">
                我已阅读并完全知晓 <button onClick={() => setShowTermsModal(true)} className="text-[#0052D9] font-bold underline hover:text-blue-700">《保险条款》</button> 及 <button onClick={() => setShowTermsModal(true)} className="text-[#0052D9] font-bold underline hover:text-blue-700">《投保须知》</button> 中的免责条款、理赔流程等关键信息。
            </p>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex-1">
                <Button 
                    variant="highlight" 
                    size="full" 
                    disabled={!isSigned || !hasReadTerms}
                    className={`rounded-2xl transition-all ${!isSigned || !hasReadTerms ? 'grayscale' : 'shadow-xl'}`}
                    onClick={handlePay}
                    icon={<Zap size={18} fill="currentColor" />}
                >
                    确认签名并支付
                </Button>
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="flex items-center gap-1.5 text-[9px] font-bold">
                <ShieldCheck size={14} className="text-green-500" />
                <span>PICC人保财险承保 · 支付过程受法律保障</span>
            </div>
            <div className="w-16 h-0.5 bg-slate-200 rounded-full"></div>
        </div>
      </div>

      {/* --- FULLSCREEN LANDSCAPE SIGNATURE MODAL --- */}
      {showSignatureModal && (
        <div className="fixed inset-0 z-[100] bg-white animate-in slide-in-from-bottom-full duration-500 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
                <div className="flex flex-col">
                    <span className="text-sm font-bold">手写签名确认</span>
                    <span className="text-[10px] text-slate-400">请保持签名端正，确保法律效力</span>
                </div>
                <button onClick={() => setShowSignatureModal(false)} className="p-2 bg-slate-100 rounded-full">
                    <X size={20}/>
                </button>
            </div>
            
            {/* Signature Area (Mocking horizontal canvas) */}
            <div className="flex-1 relative bg-slate-50 p-6 flex items-center justify-center">
                <div className="w-full h-full max-w-3xl bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-inner relative flex items-center justify-center overflow-hidden">
                    {/* Guidance Line */}
                    <div className="absolute bottom-[30%] left-10 right-10 border-b border-slate-100 flex items-end">
                        <span className="text-6xl text-slate-50 font-black mb-4 select-none">X</span>
                    </div>
                    {/* Placeholder content for visualization */}
                    <div className="signature-text opacity-10 blur-[0.5px] scale-[2] pointer-events-none">张智勇</div>
                    
                    <div className="absolute top-6 left-6 flex items-center gap-2 text-[10px] text-slate-300 uppercase font-bold tracking-widest">
                        <PenTool size={12} /> Handwriting Canvas
                    </div>
                </div>
            </div>

            <div className="p-8 grid grid-cols-2 gap-4">
                <Button variant="secondary" size="full" className="rounded-2xl" onClick={() => {}}>
                    清除重写
                </Button>
                <Button variant="primary" size="full" className="rounded-2xl" onClick={handleSign}>
                    确认使用该签名
                </Button>
            </div>
        </div>
      )}

      {/* --- RITUAL TERMS MODAL --- */}
      {showTermsModal && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-end justify-center px-4 pb-4 animate-in fade-in duration-300">
            <div className={`w-full max-w-lg h-[85vh] rounded-[2.5rem] flex flex-col animate-in slide-in-from-bottom-full duration-500 shadow-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="p-6 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FileText className="text-[#0052D9]" />
                        <h3 className="font-bold">重要条款阅读</h3>
                    </div>
                    <button onClick={() => setShowTermsModal(false)} className="p-2 bg-slate-50 rounded-full"><X size={20}/></button>
                </div>
                
                <div 
                    ref={termsContentRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar"
                >
                    <section className="space-y-3">
                        <h4 className="font-bold text-sm">一、保障范围与限额</h4>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                    </section>
                    <section className="space-y-3">
                        <h4 className="font-bold text-sm">二、责任免除事项</h4>
                        <div className="p-4 bg-red-50/30 rounded-xl border border-red-50">
                            <p className="text-[10px] text-red-600 leading-relaxed font-medium">
                                注意：本保险不承保违法犯罪行为、醉酒驾驶以及未佩戴安全防护装备下的违规操作导致的人身伤害。
                            </p>
                        </div>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-4 w-4/5 bg-slate-50 rounded"></div>
                    </section>
                    <section className="space-y-3">
                        <h4 className="font-bold text-sm">三、理赔须知</h4>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-4 w-3/4 bg-slate-50 rounded"></div>
                        <div className="h-40 w-full bg-slate-50 rounded-2xl"></div>
                    </section>
                    
                    <div className="py-8 flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolledToBottom ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-300'}`}>
                            <CheckCircle2 size={24} />
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            {isScrolledToBottom ? '已阅读至底部' : '请向上滑动阅读完整条款'}
                        </p>
                    </div>
                </div>

                <div className="p-8 border-t bg-slate-50/50 rounded-b-[2.5rem]">
                    <Button 
                        variant="primary" 
                        size="full" 
                        disabled={!isScrolledToBottom}
                        className={`rounded-2xl ${!isScrolledToBottom ? 'opacity-40' : 'shadow-xl'}`}
                        onClick={() => {
                            setHasReadTerms(true);
                            setShowTermsModal(false);
                        }}
                    >
                        确认已阅读并同意
                    </Button>
                </div>
            </div>
        </div>
      )}

      {/* --- Design Specs Explanation --- */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <Layout className="text-[#0052D9]" size={18} />
            <h4 className="font-bold text-sm">数字化票据 (Digital Receipt)</h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            采用拟物化长票据设计。顶部平整、底部锯齿、带有阴影深度，强化“法律确认单”的独立感与严肃性。<br/>
            配有水印状态章，增加视觉真实度。
          </p>
        </div>
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <PenTool className="text-[#0052D9]" size={18} />
            <h4 className="font-bold text-sm">契约仪式 (E-Sign Ritual)</h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            必须通过“手写签名”与“条款强读”两个核心交互才能解锁支付。<br/>
            将用户刚才的真实手写签名回显到单据上，大幅提升契约感，降低支付跳出率。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConfirmationExperience;
