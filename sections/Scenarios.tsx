
import React, { useState } from 'react';
import Button from '../components/Button';
import { X, CheckCircle2, AlertCircle, Trash2, Ticket, ArrowRight } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const Scenarios: React.FC<Props> = ({ isDarkMode }) => {
  const [modalType, setModalType] = useState<'danger' | 'confirm' | 'invite' | null>(null);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-2 h-8 bg-[#0052D9] rounded-full"></div>
            业务场景按钮策略
        </h2>
        
        {/* Scenario: Invitation Code Popup Entry */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg">邀请码与入驻</h3>
                    <p className="text-sm text-slate-500">针对新用户的引导性交互弹窗</p>
                </div>
                <Button variant="highlight" size="small" onClick={() => setModalType('invite')}>演示弹窗</Button>
            </div>
        </div>

        {/* Scenario 1: Form Step */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h3 className="font-bold text-lg mb-4">1. 进度导向型按钮 (Step-wise)</h3>
            <p className="text-sm text-slate-500 mb-6">针对漫长的器材清单录入，按钮需承载“进度预期”。</p>
            <Button variant="primary" size="full">
                下一步 (3/5)
            </Button>
        </div>

        {/* Scenario 2: Modals */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h3 className="font-bold text-lg mb-4">2. 弹窗交互博弈 (Modal Logic)</h3>
            <p className="text-sm text-slate-500 mb-6">危险操作 vs 业务挽留。主操作在右，破坏性操作在左。</p>
            <div className="flex gap-4 flex-wrap">
                <Button variant="tertiary" onClick={() => setModalType('confirm')}>二次确认演示</Button>
                <Button variant="danger" icon={<Trash2 size={16}/>} onClick={() => setModalType('danger')}>危险操作演示</Button>
            </div>
        </div>

        {/* Scenario 3: Result Page Buttons */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h3 className="font-bold text-lg mb-4">3. 结果页建设性反馈</h3>
            <div className="flex flex-col items-center py-6 text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle size={32} />
                </div>
                <h4 className="font-bold mb-2">投保核保未通过</h4>
                <p className="text-xs text-slate-400 mb-6">因器材总价值超出额度，请调整清单或联系专员</p>
                <div className="flex flex-col w-full gap-3">
                    <Button variant="primary" size="full">修改器材清单</Button>
                    <Button variant="secondary" size="full">咨询人工客服</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Modal Overlays Mock */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`w-full max-w-sm rounded-[2rem] relative shadow-2xl animate-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            
            {/* Close Button (X) */}
            <button 
              onClick={() => setModalType(null)}
              className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-gray-100 text-slate-400'}`}
            >
              <X size={20} />
            </button>

            <div className="p-8 pt-10">
                {modalType === 'invite' ? (
                  /* Invitation Code Specific Layout */
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-50 text-[#0052D9] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                        <Ticket size={32} />
                    </div>
                    <h3 className="text-xl font-bold">加入剧组保障</h3>
                    <p className="text-sm text-slate-500 mt-2 mb-8">
                        您的剧组正在等您。<br/>输入由制片方提供的 6 位邀请码。
                    </p>
                    
                    {/* Mock Input Field */}
                    <div className="w-full flex justify-between mb-8 px-4">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className={`w-8 h-10 border-b-2 flex items-center justify-center font-bold text-lg ${isDarkMode ? 'border-slate-600 text-white' : 'border-gray-200 text-slate-800'}`}>
                                {i === 1 ? 'A' : ''}
                                {i === 1 && <div className="w-0.5 h-6 bg-blue-500 animate-pulse ml-0.5"></div>}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col w-full gap-3">
                        <Button variant="highlight" size="full" icon={<ArrowRight size={18} />}>
                            立即加入剧组
                        </Button>
                        <Button variant="ghost" size="small" onClick={() => setModalType(null)}>
                            暂不加入，先去首页看看
                        </Button>
                    </div>
                  </div>
                ) : (
                  /* Standard Modal Layouts */
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${modalType === 'danger' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                        {modalType === 'danger' ? <Trash2 /> : <CheckCircle2 />}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{modalType === 'danger' ? '确认删除人员？' : '确认支付保费'}</h3>
                        <p className="text-sm text-slate-500 mt-2">
                            {modalType === 'danger' ? '删除后将无法恢复，该人员将失去保险保障。' : '您正在为“流浪地球2”剧组支付 ¥12,500.00'}
                        </p>
                    </div>
                    <div className="flex gap-3 mt-8 w-full">
                        <Button variant="secondary" size="full" onClick={() => setModalType(null)}>
                            {modalType === 'danger' ? '先不删' : '返回修改'}
                        </Button>
                        <Button 
                          variant={modalType === 'danger' ? 'danger' : 'primary'} 
                          size="full" 
                          onClick={() => setModalType(null)}
                        >
                            {modalType === 'danger' ? '确认删除' : '确认并支付'}
                        </Button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scenarios;
