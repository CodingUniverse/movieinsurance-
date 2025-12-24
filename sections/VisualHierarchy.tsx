
import React, { useState } from 'react';
import Button from '../components/Button';
import { Lock, FileText, ChevronRight } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const VisualHierarchy: React.FC<Props> = ({ isDarkMode }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLevel4Click = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">视觉等级体系 (Visual Hierarchy)</h2>
        <p className="text-slate-500 text-sm">通过色彩权重引导用户心智，降低决策负担。</p>
      </div>

      {/* Hierarchy Levels */}
      <div className="grid grid-cols-1 gap-8">
        {/* Level 1 */}
        <div className={`p-6 rounded-2xl border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">Level 1</span>
              <h3 className="font-bold text-lg mt-1">核心行动点 (Primary Action)</h3>
            </div>
            <div className="text-xs text-slate-400">H: 56px | W: Full</div>
          </div>
          <p className="text-sm text-slate-500 mb-6 italic">“必须点击的关键路径：支付、确认、提交申请。”</p>
          <div className="flex flex-col gap-4">
            <Button 
                variant="primary" 
                size="full" 
                loading={btnLoading} 
                onClick={() => { setBtnLoading(true); setTimeout(() => setBtnLoading(false), 2000); }}
                icon={<Lock size={18} />}
            >
              确认并支付保费
            </Button>
          </div>
        </div>

        {/* Level 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <span className="px-2 py-1 bg-sky-100 text-sky-700 text-[10px] font-bold rounded uppercase">Level 2</span>
            <h3 className="font-bold mt-2 mb-4">次级行动点</h3>
            <p className="text-xs text-slate-500 mb-6">修改资料、查看明细、保存草稿。</p>
            <Button variant="secondary" size="full">保存当前进度</Button>
          </div>
          <div className={`p-6 rounded-2xl border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Level 3</span>
            <h3 className="font-bold mt-2 mb-4">辅助/幽灵按钮</h3>
            <p className="text-xs text-slate-500 mb-6">阅读须知、跳过、返回首页。</p>
            <div className="flex flex-col gap-3">
              <button className="text-[#0052D9] text-sm font-medium flex items-center justify-center gap-1 hover:underline">
                阅读《剧组人员投保须知》 <ChevronRight size={14} />
              </button>
              <Button variant="ghost" size="small">跳过</Button>
            </div>
          </div>
        </div>

        {/* Level 4: Interactive Disabled State */}
        <div className={`p-6 rounded-2xl border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="flex items-center justify-between mb-4">
             <div className="flex flex-col">
              <span className="px-2 py-1 bg-gray-100 text-gray-500 w-fit text-[10px] font-bold rounded uppercase">Level 4</span>
              <h3 className="font-bold mt-1 text-lg">智能禁用态 (Soft-Disabled)</h3>
             </div>
             <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500 animate-pulse">
                <FileText size={20} />
             </div>
          </div>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            高级交互建议：不要使用完全置灰的“死按钮”。保持 30% 透明度并允许点击，点击后通过反馈告知缺少的步骤，这对忙乱的剧组极具帮助。
          </p>
          <div className="relative">
            <Button 
                variant="primary" 
                size="full" 
                className="opacity-40"
                onClick={handleLevel4Click}
            >
              下一步
            </Button>
            
            {showToast && (
              <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-4 py-2 rounded-full shadow-lg animate-bounce whitespace-nowrap">
                请先完善被保人信息 👆
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualHierarchy;
