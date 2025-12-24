
import React, { useState, useEffect } from 'react';
import { Search, X, History, User, Building2, PackageOpen, Clapperboard, MonitorOff, WifiOff, Plus, MousePointer2, Code, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const SearchEmptySpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  const historyTags = ['张小明', '北京光影', '灯光组', '横店影业'];

  const results = [
    { name: '北京光影传媒有限公司', type: 'company', legal: '王大壮', code: '91110105MA...' },
    { name: '北京蓝色时代文化', type: 'company', legal: '李芳', code: '91110222...' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">搜索、空状态与插画规范</h2>
        <p className="text-slate-500 text-sm italic">“高容错检索，情感化引导，极致响应回响”</p>
      </div>

      {/* --- 1. Search Experience --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 搜索体验设计 (Search UX)</h3>
        </div>
        
        <div className={`p-8 rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="max-w-md mx-auto space-y-8">
            {/* Search Bar Demo */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">A. 搜索栏交互态</h4>
              <div className="flex items-center gap-3">
                <div className={`flex-1 flex items-center h-10 px-4 rounded-full transition-all duration-300 border-2 ${
                  isFocused 
                    ? 'bg-white border-[#004E92] shadow-lg' 
                    : isDarkMode ? 'bg-slate-700 border-transparent' : 'bg-[#F3F4F6] border-transparent'
                }`}>
                  <Search size={16} className={isFocused ? 'text-[#004E92]' : 'text-slate-400'} />
                  <input 
                    type="text" 
                    placeholder="搜索姓名 / 身份证后四位" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => !searchValue && setIsFocused(false)}
                    className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-slate-800"
                  />
                  {searchValue && (
                    <button onClick={() => setSearchValue('')} className="text-slate-300 hover:text-slate-600">
                      <X size={16} fill="currentColor" className="text-white" />
                    </button>
                  )}
                </div>
                {isFocused && (
                  <button onClick={() => {setSearchValue(''); setIsFocused(false);}} className="text-sm font-bold text-[#0052D9] animate-in fade-in slide-in-from-right-4">取消</button>
                )}
              </div>
            </div>

            {/* Smart Suggestions */}
            {!searchValue && isFocused && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <History size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">最近搜索</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {historyTags.map(tag => (
                    <span key={tag} onClick={() => setSearchValue(tag)} className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-[#F3F4F6] text-slate-600 hover:bg-[#E5E7EB]'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Result Highlighting */}
            {searchValue === '北京' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">B. 模糊匹配与高亮</h4>
                <div className="space-y-2">
                  {results.map((r, i) => (
                    <div key={i} className={`p-4 rounded-2xl border flex items-center gap-3 ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-50 shadow-sm'}`}>
                      <div className="w-10 h-10 bg-blue-50 text-[#004E92] rounded-xl flex items-center justify-center font-bold text-sm">企</div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">
                          <span className="text-[#004E92]">北京</span>
                          {r.name.replace('北京', '')}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">法人：{r.legal} | {r.code}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- 2. Empty States --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 空状态与引导 (Empty States)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* No Search Result */}
          <div className={`p-8 rounded-[2rem] border text-center flex flex-col items-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-[#EBF4FF] rounded-full flex items-center justify-center relative overflow-hidden">
                <PackageOpen size={48} className="text-[#004E92] opacity-20" />
                <Search size={32} className="text-[#004E92] absolute" />
              </div>
            </div>
            <h4 className="font-bold text-base mb-1">未找到该人员</h4>
            <p className="text-xs text-slate-400 mb-8 max-w-[180px] mx-auto leading-relaxed">
              请核对关键词，或直接手动录入人员信息。
            </p>
            <Button variant="primary" size="small" icon={<Plus size={14}/>}>手动录入信息</Button>
          </div>

          {/* Initial Null Data */}
          <div className={`p-8 rounded-[2rem] border text-center flex flex-col items-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-[#EBF4FF] rounded-full flex items-center justify-center">
                <Clapperboard size={48} className="text-[#004E92]" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full border-4 border-white"></div>
            </div>
            <h4 className="font-bold text-base mb-1">暂无投保记录</h4>
            <p className="text-xs text-slate-400 mb-8 max-w-[180px] mx-auto leading-relaxed">
              剧组开机第一步，先配一份安心保障。
            </p>
            <Button variant="highlight" size="small" className="animate-pulse">立即创建投保方案</Button>
          </div>
        </div>
      </section>

      {/* --- 3. Illustration System --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-green-500 pl-3">
          <h3 className="font-bold text-lg">3. 插画视觉规范 (Illustrations)</h3>
        </div>
        <div className={`p-10 rounded-[2.5rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '搜索无果', icon: <Search />, desc: '🔍 + 📦 纸箱' },
              { label: '列表为空', icon: <Clapperboard />, desc: '🎬 + 🪑 导演椅' },
              { label: '信号缺失', icon: <WifiOff />, desc: '📡 断开的卫星' },
              { label: '系统维护', icon: <MonitorOff />, desc: '🤖 机器人/工具' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#EBF4FF] rounded-2xl flex items-center justify-center text-[#004E92]">
                  {/* Fix TypeScript error by casting element to allow size prop in cloneElement */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-slate-800">{item.label}</p>
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-50/50 rounded-[2rem] border border-dashed border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">色彩策略</h4>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded bg-[#004E92]"></div>
                 <span className="text-[10px] font-medium">#004E92 (主体轮廓)</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded bg-[#EBF4FF]"></div>
                 <span className="text-[10px] font-medium">#EBF4FF (大面积填充)</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded bg-[#F59E0B]"></div>
                 <span className="text-[10px] font-medium">#F59E0B (细节润色)</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Micro-interactions --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-400 pl-3">
          <h3 className="font-bold text-lg">4. 微交互细节 (Micro-interactions)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className={`p-8 rounded-[2rem] border relative overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">骨架屏波浪 (Wave)</h4>
                <button 
                  onClick={() => {setShowSkeleton(true); setTimeout(() => setShowSkeleton(false), 2000);}}
                  className="text-[10px] font-bold text-[#0052D9] underline underline-offset-4"
                >
                  点击触发模拟
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-3 opacity-20">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg relative overflow-hidden">
                       {showSkeleton && <div className="absolute inset-0 skeleton-shimmer"></div>}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-1/3 bg-slate-200 rounded relative overflow-hidden">
                        {showSkeleton && <div className="absolute inset-0 skeleton-shimmer"></div>}
                      </div>
                      <div className="h-2 w-2/3 bg-slate-100 rounded relative overflow-hidden">
                        {showSkeleton && <div className="absolute inset-0 skeleton-shimmer"></div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className={`p-8 rounded-[2rem] border flex flex-col justify-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">结果高亮闪烁 (Pulse)</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50/30 rounded-2xl border border-blue-100">
                   <div className="flex items-center gap-2">
                     <User size={16} className="text-[#004E92]" />
                     <span className="text-sm font-bold">
                       <span className="text-[#004E92] animate-pulse">张三</span> 丰 (灯光助理)
                     </span>
                   </div>
                   <Button variant="primary" size="small" className="h-7 px-3">添加</Button>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  点击历史或快速筛选后，匹配词进行 1.0 -> 0.6 -> 1.0 的轻微闪烁，辅助视觉定位。
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- 5. Developer Specs --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">高级体验建议 (Pro Tips)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase underline underline-offset-4">
                          <MousePointer2 size={14} /> 自动填入回显
                        </div>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          搜索无果点击“手动录入”时，表单应自动回填搜索框中的文字。在剧组忙乱环境中，减少 1 秒重复输入就是 1 份感动。
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase underline underline-offset-4">
                          <Code size={14} /> 搜索框“呼吸”动效
                        </div>
                        <p className="text-[10px] text-blue-100/60 leading-relaxed">
                          聚焦时宽度从 90% 渐变至 85% 以容纳“取消”键。时长 250ms (ease-out)，让界面充满生机感而非机械感。
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Search & Illustration System v1.0
        </p>
      </footer>

      <style>{`
        @keyframes skeletonWave {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(150%) skewX(-45deg); }
        }
        .skeleton-shimmer {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: skeletonWave 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default SearchEmptySpecification;
