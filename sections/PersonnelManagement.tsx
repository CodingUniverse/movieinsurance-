
import React, { useState } from 'react';
import { 
  FileSpreadsheet, UserPlus, AlertTriangle, CheckCircle, Search, Edit2, Trash2, 
  ArrowUpRight, Eye, EyeOff, Check, Filter, MoreHorizontal, Calendar, Trash 
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const PersonnelManagement: React.FC<Props> = ({ isDarkMode }) => {
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const personnel = [
    { id: 1, name: '李晓明', role: '导演', status: 'active', idCard: '320102199001011234' },
    { id: 2, name: '陈大华', role: '灯光师', status: 'error', idCard: '3201021992052088', errorMsg: '身份证号位数不足' },
    { id: 3, name: '王小红', role: '场务', status: 'pending', idCard: '110105198810124456' },
    { id: 4, name: '张建国', role: '摄影指导', status: 'active', idCard: '440301197503030012' },
    { id: 5, name: '苏菲', role: '化妆师', status: 'active', idCard: '31011519951212778X' },
  ];

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active': return <span className="flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded-sm"><div className="w-1 h-1 bg-green-600 rounded-full"></div>保障中</span>;
      case 'pending': return <span className="flex items-center gap-1 text-[10px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded-sm"><div className="w-1 h-1 bg-blue-600 rounded-full"></div>待生效</span>;
      case 'error': return <span className="flex items-center gap-1 text-[10px] text-red-600 font-bold bg-red-50 px-1.5 py-0.5 rounded-sm"><AlertTriangle size={8} />数据异常</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">批量人员管理规范</h2>
        <p className="text-slate-500 text-sm">“上帝视角”处理数百人名单的交互逻辑</p>
      </div>

      {/* 1. Sticky Header with Search & Filter */}
      <div className={`sticky top-[68px] z-30 -mx-4 px-4 py-3 border-b flex flex-col gap-3 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
        <div className="flex items-center justify-between gap-3">
            <div className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
                <Search size={16} className="text-slate-400" />
                <input type="text" placeholder="搜索姓名/工种/证件号..." className="bg-transparent border-none outline-none text-sm w-full" />
            </div>
            <button 
                onClick={() => setIsBatchMode(!isBatchMode)}
                className={`text-sm font-bold px-3 py-2 rounded-xl transition-all ${isBatchMode ? 'bg-[#0052D9] text-white' : 'text-[#0052D9] bg-[#EEF4FF]'}`}
            >
                {isBatchMode ? '取消选择' : '批量管理'}
            </button>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
                {id: 'all', label: '全部', count: 128},
                {id: 'active', label: '保障中', count: 120},
                {id: 'pending', label: '待生效', count: 5},
                {id: 'error', label: '异常', count: 3},
            ].map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
                        activeFilter === tab.id 
                        ? 'border-[#0052D9] bg-[#0052D9] text-white shadow-md' 
                        : isDarkMode ? 'border-slate-700 bg-slate-800 text-slate-400' : 'border-gray-100 bg-white text-slate-500'
                    }`}
                >
                    {tab.label} <span className="opacity-60">{tab.count}</span>
                </button>
            ))}
            <div className="flex-1"></div>
            <button className="p-2 text-slate-400"><Filter size={16}/></button>
        </div>
      </div>

      {/* 2. Personnel List - Block Design */}
      <div className="space-y-0.5">
        {personnel.map((p) => (
          <div 
            key={p.id} 
            onClick={() => isBatchMode && toggleSelect(p.id)}
            className={`group relative flex items-center transition-all ${isBatchMode ? 'pl-2' : ''} ${
                p.status === 'error' ? 'bg-red-50/30' : ''
            }`}
          >
            {/* Checkbox for Batch Mode */}
            {isBatchMode && (
                <div className="pr-3 animate-in slide-in-from-left-4 duration-300">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedIds.includes(p.id) ? 'bg-[#0052D9] border-[#0052D9]' : 'border-gray-300 bg-white'
                    }`}>
                        {selectedIds.includes(p.id) && <Check size={12} className="text-white" strokeWidth={4} />}
                    </div>
                </div>
            )}

            {/* Main Block Content */}
            <div className={`flex-1 flex items-center justify-between p-4 py-3 border-b transition-colors ${isDarkMode ? 'border-slate-800' : 'border-gray-50'}`}>
                {/* Left: Identity Info (70%) */}
                <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                        <span className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{p.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter ${isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-100 text-slate-500'}`}>
                            {p.role}
                        </span>
                        {p.status === 'error' && <AlertTriangle size={12} className="text-red-500" />}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        <span>{showPrivacy ? p.idCard : `${p.idCard.slice(0,6)}******${p.idCard.slice(-4)}`}</span>
                        <button onClick={(e) => { e.stopPropagation(); setShowPrivacy(!showPrivacy); }}>
                            {showPrivacy ? <EyeOff size={12}/> : <Eye size={12}/>}
                        </button>
                    </div>
                    {p.status === 'error' && (
                        <p className="text-[10px] text-red-600 font-bold">{p.errorMsg}</p>
                    )}
                </div>

                {/* Right: Status & Action (30%) */}
                <div className="flex flex-col items-end gap-1 text-right">
                    {getStatusBadge(p.status)}
                    <span className="text-[10px] text-slate-300 font-mono">12.24-01.24</span>
                    {!isBatchMode && (
                        <button className="p-1 text-slate-300 hover:text-slate-600">
                            <MoreHorizontal size={14} />
                        </button>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Empty & Error State Strategy */}
      <div className="py-12 flex flex-col items-center text-center space-y-4 opacity-40">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
            <UserPlus size={32} />
        </div>
        <p className="text-xs">向下滑动加载更多名单 (Virtual List)</p>
      </div>

      {/* 4. Batch Action Tray (Fixed Bottom) */}
      {isBatchMode && (
        <div className="fixed bottom-[74px] left-0 right-0 z-40 bg-slate-900 text-white p-4 pb-6 flex items-center justify-between animate-in slide-in-from-bottom-full duration-300 rounded-t-[2rem] shadow-2xl">
            <div className="pl-4">
                <p className="text-xs opacity-60">已选择</p>
                <p className="text-xl font-bold">{selectedIds.length} <span className="text-xs">人</span></p>
            </div>
            <div className="flex gap-4">
                <button className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                    <Calendar size={18} />
                    <span className="text-[10px]">改日期</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 transition-opacity">
                    <Trash size={18} />
                    <span className="text-[10px]">批量删除</span>
                </button>
                <div className="w-[1px] h-10 bg-white/10 mx-1"></div>
                <Button variant="highlight" size="medium" className="px-6 rounded-xl">
                    确认导出
                </Button>
            </div>
        </div>
      )}

      {/* 5. Add Entry Floating Button */}
      {!isBatchMode && (
        <div className="fixed bottom-24 right-4 z-40">
            <button className="w-14 h-14 bg-[#0052D9] text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce duration-[2000ms]">
                <UserPlus size={24} />
            </button>
        </div>
      )}

      {/* Summary Footer for Design Specs */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <h4 className="font-bold text-sm mb-3">信息块 (Block Anatomy)</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            放弃传统表格线，采用 70/30 比例。<br/>
            左侧身份要素，右侧状态胶囊。身份证号强制使用等宽字体 (Monospace) 且默认脱敏。
          </p>
        </div>
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <h4 className="font-bold text-sm mb-3">操作托盘 (Action Tray)</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            批量模式下，操作区下沉。通过高亮数量（如：批量删除 5）提供即时反馈。<br/>
            采用“深色背景”与正常列表区分，增强“管理模式”的沉浸感。
          </p>
        </div>
      </section>
    </div>
  );
};

export default PersonnelManagement;
