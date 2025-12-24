
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Check, Crown } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const PlanSelection: React.FC<Props> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    { id: 0, name: '基础款方案', price: 80, tag: '经济实用', limit: '50万', recommended: false },
    { id: 1, name: '标准保障方案', price: 120, tag: '剧组热选', limit: '80万', recommended: true },
    { id: 2, name: '尊享版方案', price: 180, tag: '全面覆盖', limit: '100万', recommended: false },
  ];

  const detailRows = [
    { label: '死亡/伤残赔偿', value: '100%保额', help: '按伤残等级比例赔付' },
    { label: '医疗费用限额', value: '10%保额', help: '包含住院与门诊' },
    { label: '住院津贴', value: '150元/天', help: '免赔3天，单次最长90天' },
    { label: '猝死责任', value: '扩展承保', help: '扩展24小时猝死责任' },
    { label: '误工费', value: '100元/天', help: '需提供医生开具的假条' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">方案展示页规范 (Selection Page)</h2>
        <p className="text-slate-500 text-sm">卡片流布局 + 智能折叠 + 即时结算栏</p>
      </div>

      {/* 1. Top Filter / Tab Switcher */}
      <div className={`flex p-1 rounded-xl sticky top-[68px] z-30 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
        {['雇主责任险', '团体意外险'].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === idx 
                ? 'bg-[#0052D9] text-white shadow-sm scale-[1.02]' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2. Card Stream */}
      <div className="space-y-4">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
              selectedPlan === plan.id 
                ? 'border-[#0052D9] bg-white shadow-xl shadow-blue-100/50' 
                : isDarkMode ? 'border-transparent bg-slate-800' : 'border-transparent bg-white shadow-sm'
            }`}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <div className="absolute top-0 left-0 bg-gradient-to-r from-orange-400 to-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-br-xl flex items-center gap-1 z-10">
                <Crown size={10} /> 剧组热选
              </div>
            )}

            {/* Selection Tick */}
            {selectedPlan === plan.id && (
               <div className="absolute top-0 right-0 w-8 h-8 bg-[#0052D9] flex items-center justify-center rounded-bl-xl">
                  <Check size={16} className="text-white" />
               </div>
            )}

            {/* Card Content - Decision Layer */}
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{plan.name}</h3>
                  <div className="flex gap-2">
                    <span className="bg-[#EBF4FF] text-[#0052D9] text-[10px] px-2 py-0.5 rounded font-medium">含猝死责任</span>
                    <span className="bg-[#EBF4FF] text-[#0052D9] text-[10px] px-2 py-0.5 rounded font-medium">24小时生效</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#FF4D4F] font-bold text-2xl">
                    <span className="text-sm">¥</span>{plan.price}
                  </div>
                  <div className="text-[10px] text-slate-400">/人/工期</div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-y-2 border-t pt-4 border-dashed border-gray-100">
                <div className="flex justify-between items-center pr-4">
                  <span className="text-xs text-slate-400">死亡伤残限额</span>
                  <span className="text-xs font-bold text-slate-700">{plan.limit}</span>
                </div>
                <div className="flex justify-between items-center pl-4 border-l border-gray-100">
                  <span className="text-xs text-slate-400">医疗费用</span>
                  <span className="text-xs font-bold text-slate-700">8万元</span>
                </div>
              </div>
            </div>

            {/* Accordion Expand Trigger */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpandedPlan(expandedPlan === plan.id ? null : plan.id);
              }}
              className={`w-full py-2 flex items-center justify-center gap-1 text-[11px] font-medium transition-colors border-t ${
                isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-400' : 'bg-slate-50 border-gray-50 text-slate-500'
              }`}
            >
              {expandedPlan === plan.id ? (
                <>收起保障详情 <ChevronUp size={12}/></>
              ) : (
                <>查看完整保障明细 <ChevronDown size={12}/></>
              )}
            </button>

            {/* Detail Content (Accordion Body) */}
            {expandedPlan === plan.id && (
              <div className={`p-4 animate-in slide-in-from-top-2 duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <div className="space-y-1">
                  {detailRows.map((row, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center p-2 rounded-lg text-xs ${
                        idx % 2 === 0 ? (isDarkMode ? 'bg-slate-800' : 'bg-[#F9FAFB]') : ''
                      }`}
                    >
                      <div className="flex items-center gap-1 text-slate-500">
                        {row.label}
                        <HelpCircle size={12} className="text-slate-300" />
                      </div>
                      <div className="font-medium text-slate-700">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Sticky Footer Component */}
      <div className={`fixed bottom-[74px] left-0 right-0 z-40 border-t p-4 flex items-center justify-between animate-in slide-in-from-bottom-full duration-500 ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]'
      }`}>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400">已选：{plans[selectedPlan].name}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-slate-400">预估保费</span>
            <span className="text-[#FF4D4F] font-bold text-xl">¥{(plans[selectedPlan].price * 45).toLocaleString()}</span>
            <span className="text-[10px] text-slate-400">(45人)</span>
          </div>
        </div>
        <Button variant="primary" size="medium" className="px-10 rounded-xl shadow-blue-500/20">
          填写人员名单
        </Button>
      </div>
    </div>
  );
};

export default PlanSelection;
