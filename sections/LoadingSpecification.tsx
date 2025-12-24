
import React, { useState, useEffect } from 'react';
import { 
  Loader2, 
  WifiOff, 
  Archive, 
  ArrowRight, 
  AlertCircle, 
  Clapperboard,
  RotateCcw,
  Plus
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const LoadingSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [loadingStep, setLoadingStep] = useState(0);
  const loadingMessages = [
    '正在上传人员数据...',
    '正在校验身份证格式...',
    '正在生成核保单...',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">加载与反馈规范</h2>
        <p className="text-slate-500 text-sm italic">“骨架屏感官加速，智能文案透明化焦虑”</p>
      </div>

      {/* --- 1. Skeleton Screen --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 骨架屏 (Skeleton Screen)</h3>
        </div>
        <div className={`p-8 rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="max-w-xs mx-auto space-y-4">
             {/* Skeleton Card */}
             <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-50 relative overflow-hidden">
                <div className="flex justify-between mb-4">
                   <div className="h-4 w-24 bg-gray-200 rounded shimmer"></div>
                   <div className="h-4 w-12 bg-gray-100 rounded shimmer"></div>
                </div>
                <div className="h-12 w-full bg-gray-100 rounded-xl mb-3 shimmer"></div>
                <div className="flex gap-2">
                   <div className="h-3 w-16 bg-gray-50 rounded shimmer"></div>
                   <div className="h-3 w-16 bg-gray-50 rounded shimmer"></div>
                </div>
                {/* Shimmer Effect Definition in CSS */}
             </div>
             <p className="text-xs text-slate-500 text-center leading-relaxed pt-2">
                灰度色块圆角必须与真实组件 100% 呼应。<br/>
                配合 45° Shimmer 扫光，营造“数据即将到达”的心理暗示。
             </p>
          </div>
        </div>
      </section>

      {/* --- 2. Process HUD --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 过程加载 (Process HUD)</h3>
        </div>
        <div className="flex justify-center">
           <div className={`w-64 bg-slate-900/90 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col items-center gap-6 shadow-2xl`}>
                <Loader2 className="text-white animate-spin" size={48} strokeWidth={3} />
                <div className="text-center h-12 flex flex-col items-center justify-center">
                    <p className="text-white font-bold text-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-1" key={loadingStep}>
                      {loadingMessages[loadingStep]}
                    </p>
                    <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-2 font-black">Contract Processing</p>
                </div>
           </div>
        </div>
        <p className="text-xs text-slate-500 text-center max-w-sm mx-auto">
          拒绝单一“加载中”。针对耗时操作，轮播业务关键步骤，让制片人看到“系统正在卖力工作”。
        </p>
      </section>

      {/* --- 3. Empty & Failure States --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-400 pl-3">
          <h3 className="font-bold text-lg">3. 异常与空状态 (Failure & Empty)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Network Failure */}
            <div className={`p-8 rounded-[2rem] border text-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                    <WifiOff size={40} />
                </div>
                <h4 className="font-bold text-base mb-2">信号好像不太好</h4>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                  别担心，刚才编辑的内容已暂存。<br/>请移步到信号较好的地方重试。
                </p>
                <Button variant="secondary" size="small" icon={<RotateCcw size={14}/>}>刷新试试</Button>
            </div>

            {/* Empty List */}
            <div className={`p-8 rounded-[2rem] border text-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-300">
                    <Clapperboard size={40} />
                </div>
                <h4 className="font-bold text-base mb-2">剧组尚未配置保障</h4>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                  点击下方按钮，立即开启第一笔投保方案。
                </p>
                <Button variant="primary" size="small" icon={<Plus size={14}/>}>新建投保方案</Button>
            </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <AlertCircle className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">工程实现避坑 (Engineering Tips)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-[10px] font-bold">!</div>
                    <p className="text-[11px] text-blue-100/60 leading-relaxed">
                      **0.2s 阈值原则**：如果接口能在 200ms 内返回数据，严禁展示 Loading。闪烁的加载框会造成“卡顿”的心理错觉。
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-[10px] font-bold">!</div>
                    <p className="text-[11px] text-blue-100/60 leading-relaxed">
                      **防连击处理**：支付与提交按钮在点击后必须立即进入 Loading + Disabled 状态，防止由于信号差导致用户重复点击扣费。
                    </p>
                  </div>
                </div>
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Feedback System v1.0
        </p>
      </footer>

      {/* Inline Global Styles for Shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(150%) skewX(-45deg); }
        }
        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpecification;
