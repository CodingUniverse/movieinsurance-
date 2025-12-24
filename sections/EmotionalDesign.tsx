
import React, { useState } from 'react';
import Button from '../components/Button';
import { Shield, RotateCcw, Fingerprint, Zap } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const EmotionalDesign: React.FC<Props> = ({ isDarkMode }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUndo, setShowUndo] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setShowUndo(true);
      setTimeout(() => setShowUndo(false), 4000);
    }, 800);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">高级情感交互 (Emotional Micro-UX)</h2>
        
        {/* Haptic & Sound Simulation */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 mb-4">
                <Fingerprint className="text-blue-500" />
                <h3 className="font-bold">触觉反馈 (Haptic Logic)</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">
                利用 `wx.vibrateShort()` 在户外嘈杂、视线不清的环境下通过物理震动确认动作完成。
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-gray-200 text-center">
                <Button variant="primary" size="medium" icon={<Zap size={18}/>}>点击模拟震动反馈</Button>
                <p className="text-[10px] text-gray-400 mt-2">（移动端调用 Taptic Engine 接口）</p>
            </div>
        </div>

        {/* Undo Pattern */}
        <div className={`p-6 rounded-2xl border overflow-hidden relative ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 mb-4">
                <RotateCcw className="text-orange-500" />
                <h3 className="font-bold">容错性与“撤回”设计</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">剧组人员手指常被对讲机、器材占用，手滑概率极高。关键列表删除应提供 3-5 秒撤销浮层。</p>
            
            <div className="space-y-2">
                {!showUndo ? (
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <span className="text-sm">灯光组 - 张建国 (138****9900)</span>
                    <Button variant="ghost" size="small" onClick={handleDelete} loading={isDeleting}>删除</Button>
                   </div>
                ) : (
                    <div className="flex items-center justify-between p-3 bg-slate-900 text-white rounded-lg shadow-xl animate-in slide-in-from-right-full">
                        <span className="text-xs">人员已移除</span>
                        <button 
                            onClick={() => setShowUndo(false)}
                            className="flex items-center gap-1 text-blue-400 text-xs font-bold"
                        >
                            <RotateCcw size={12} /> 立即撤销
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Trust Indicators */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 mb-4">
                <Shield className="text-green-600" />
                <h3 className="font-bold">价格敏感区的“冷静期”</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">支付按钮不再孤单，通过安全锁图标与文案共建信任环境。</p>
            
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                    <Shield size={12} className="text-green-500" />
                    <span>PICC承保 · 支付全程受保</span>
                </div>
                <Button variant="primary" size="full">
                    确认支付并投保
                </Button>
            </div>
        </div>
      </section>

      <footer className="text-center pb-12">
        <p className="text-slate-400 text-xs">
          © 剧组保险投保小程序视觉设计规范 2024<br/>
          Designed for Cinema Professionals
        </p>
      </footer>
    </div>
  );
};

export default EmotionalDesign;
