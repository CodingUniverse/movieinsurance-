
import React from 'react';
import { MousePointer2, Smartphone } from 'lucide-react';

const Ergonomics: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="text-[#0052D9]" />
          <h2 className="text-2xl font-bold">拇指热区原则 (The Thumb Zone)</h2>
        </div>
        <p className="text-slate-500 mb-8 leading-relaxed">
          针对 Max/Ultra 等大屏手机，核心操作必须下沉至底部，确保拇指可及性。
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Mock Phone View */}
          <div className="relative w-[300px] h-[600px] bg-slate-800 rounded-[3rem] p-3 border-[8px] border-slate-700 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              {/* Hot zone visualization */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 via-blue-50/10 to-transparent"></div>
              
              {/* Content area */}
              <div className="p-4 space-y-3">
                <div className="h-4 w-32 bg-gray-100 rounded"></div>
                <div className="h-24 w-full bg-gray-50 rounded-xl"></div>
                <div className="h-4 w-24 bg-gray-100 rounded"></div>
                <div className="h-20 w-full bg-gray-50 rounded-xl"></div>
              </div>

              {/* Thumb reachable area overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-blue-500/10 rounded-t-[50%] border-t border-blue-500/30 flex items-start justify-center pt-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 animate-ping absolute"></div>
                  <MousePointer2 className="text-blue-600 relative z-10" />
                  <span className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-tighter">Safe Touch Zone</span>
                </div>
              </div>

              {/* Sticky Bottom Bar Mock */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t p-3 flex gap-2 items-center">
                <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-gray-400">预估保费</span>
                    <span className="text-blue-600 font-bold">¥5,280.00</span>
                </div>
                <div className="bg-[#0052D9] h-11 w-32 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  立即投保
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">1. 底部悬浮策略 (Sticky)</h4>
              <p className="text-sm text-slate-500">“提交”、“支付”等强行动点，必须固定在底部 15% 的高频操作区。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">2. 触控热区外扩</h4>
              <p className="text-sm text-slate-500">视觉高度 48px，但响应区域 60px。针对颠簸环境下的精确度补偿。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">3. 全宽 vs 左右分布</h4>
              <p className="text-sm text-slate-500">单一流程使用 100% 宽度按钮；复合场景采用 4:6 分布，将业务权重引导至右手区。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ergonomics;
