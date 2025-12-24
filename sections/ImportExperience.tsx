
import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, MessageCircle, Download, ArrowRight, CheckCircle2, 
  AlertTriangle, Camera, Trash2, RotateCcw, Sparkles, PartyPopper
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

type Step = 'launcher' | 'parsing' | 'dashboard' | 'correction' | 'success';

const ImportExperience: React.FC<Props> = ({ isDarkMode }) => {
  const [step, setStep] = useState<Step>('launcher');
  const [progress, setProgress] = useState(0);
  const [parsingLabel, setParsingLabel] = useState('正在读取文件...');
  const [idValue, setIdValue] = useState('1101011990010188');

  useEffect(() => {
    if (step === 'parsing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('dashboard'), 800);
            return 100;
          }
          if (prev > 30 && prev < 80) setParsingLabel('正在校验格式...');
          if (prev >= 80) setParsingLabel('正在核对重复人员...');
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Visual helper for ID formatting
  const formattedId = (val: string) => {
    return val.replace(/(.{6})(.{8})(.{4})/, '$1 $2 $3').trim();
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Excel 智能导入与纠错</h2>
        <p className="text-slate-500 text-sm italic">“化繁为简，将错误转化为任务”</p>
      </div>

      <div className={`min-h-[560px] rounded-[2.5rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        
        {/* Mock Status Bar */}
        <div className="h-10 flex items-center justify-between px-8 text-[10px] font-bold opacity-30">
          <span>12:30</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2 bg-current rounded-sm"></div>
            <div className="w-3 h-3 border-2 border-current rounded-full"></div>
          </div>
        </div>

        {/* --- STEP 1: LAUNCHER --- */}
        {step === 'launcher' && (
          <div className="flex-1 p-6 flex flex-col animate-in fade-in duration-300">
            <div className="bg-blue-50 p-4 rounded-2xl flex items-center justify-between border border-blue-100 mb-8">
              <div className="flex items-start gap-3">
                <Download className="text-[#0052D9] shrink-0" size={18} />
                <div className="space-y-0.5">
                    <p className="text-xs text-[#0052D9] font-bold">标准模板</p>
                    <p className="text-[10px] text-[#0052D9]/70">下载并转发至文件传输助手</p>
                </div>
              </div>
              <button className="text-[11px] font-bold text-white bg-[#0052D9] px-3 py-1.5 rounded-lg shadow-lg">下载模板</button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-[#0052D9] transform rotate-3">
                    <FileSpreadsheet size={48} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Download size={16} />
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-bold text-lg">一键导入剧组人员</h3>
                <p className="text-xs text-slate-400">支持 .xlsx / .xls 格式</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="highlight" 
                size="full" 
                icon={<MessageCircle size={20} />}
                onClick={() => { setProgress(0); setStep('parsing'); }}
              >
                从微信聊天文件选择
              </Button>
              <Button variant="ghost" size="small" className="w-full">
                本地手机上传
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 2: PARSING --- */}
        {step === 'parsing' && (
          <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-8 animate-in zoom-in-95 duration-300">
             <div className="relative group">
                <div className="w-32 h-32 bg-[#EEF4FF] rounded-full flex items-center justify-center">
                   <FileSpreadsheet size={48} className="text-[#0052D9] animate-bounce" />
                </div>
                <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                  <circle cx="64" cy="64" r="62" fill="none" stroke="#D9E6FF" strokeWidth="4" />
                  <circle cx="64" cy="64" r="62" fill="none" stroke="#0052D9" strokeWidth="4" strokeDasharray="389" strokeDashoffset={389 - (389 * progress / 100)} strokeLinecap="round" className="transition-all duration-100" />
                </svg>
             </div>
             <div className="text-center space-y-2">
                <h3 className="font-bold text-[#0052D9] tracking-widest">{parsingLabel}</h3>
                <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0052D9] transition-all duration-100" style={{width: `${progress}%`}}></div>
                </div>
             </div>
          </div>
        )}

        {/* --- STEP 3: DASHBOARD --- */}
        {step === 'dashboard' && (
          <div className="flex-1 p-6 flex flex-col animate-in slide-in-from-right-8 duration-500">
            <h3 className="text-xl font-bold mb-6">解析完成</h3>
            
            <div className="bg-amber-50 border-2 border-amber-100 rounded-[2rem] p-6 space-y-6 relative overflow-hidden">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle size={24} />
                  <span className="font-bold text-lg">需修正 3 条异常数据</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-100">
                    <p className="text-[10px] text-amber-800 opacity-60">正常通过</p>
                    <p className="text-2xl font-bold text-amber-900 font-mono">125 <span className="text-xs">人</span></p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-100">
                    <p className="text-[10px] text-red-800 opacity-60">异常项</p>
                    <p className="text-2xl font-bold text-red-600 font-mono">3 <span className="text-xs">项</span></p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <AlertTriangle size={80} />
                </div>
            </div>

            <div className="flex-1 pt-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold">125 条正确数据</p>
                        <p className="text-[10px] text-slate-400">已自动合并至待投保库</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-6">
              <Button variant="highlight" size="full" onClick={() => setStep('correction')}>
                立即修正错误 (3)
              </Button>
              <Button variant="ghost" size="small" className="w-full" onClick={() => setStep('launcher')}>
                重新上传文件
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 4: CORRECTION --- */}
        {step === 'correction' && (
          <div className="flex-1 flex flex-col animate-in slide-in-from-bottom-8 duration-500">
             <div className="px-8 py-4 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">修正进度</span>
                    <span className="text-sm font-bold text-[#0052D9]">1 / 3 待修正</span>
                </div>
                <button onClick={() => setStep('dashboard')} className="text-slate-400 p-2"><RotateCcw size={18}/></button>
             </div>

             <div className="flex-1 p-6 space-y-6">
                <div className={`rounded-[2.5rem] p-8 shadow-2xl border-2 transition-all duration-300 relative ${
                  idValue.length === 18 ? 'border-green-500 bg-white' : 'border-red-500 bg-white'
                }`}>
                   <div className="flex justify-between items-start mb-8">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 mb-1 block">错误原因：身份证号位数不足</span>
                        <h4 className="text-2xl font-bold">陈大华</h4>
                        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-500 mt-2 inline-block">灯光师</span>
                      </div>
                      <button className="text-slate-300 hover:text-red-400 transition-colors"><Trash2 size={20}/></button>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 flex justify-between items-center">
                            身份证号码
                            <span className="text-[10px] text-slate-300">需18位字符</span>
                        </label>
                        <div className="relative group">
                          <input 
                            type="text" 
                            value={idValue} 
                            onChange={(e) => setIdValue(e.target.value.toUpperCase())}
                            className={`w-full h-16 bg-slate-50 rounded-[1.25rem] px-5 font-mono text-xl border-2 outline-none transition-all tracking-wider ${
                              idValue.length === 18 ? 'border-green-500 text-green-700' : 'border-red-500 text-red-600'
                            }`}
                            placeholder="请输入正确的证件号"
                            maxLength={18}
                          />
                          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#EEF4FF] text-[#0052D9] rounded-xl flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all">
                            <Camera size={20} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between px-2">
                            <p className={`text-[11px] font-bold ${idValue.length === 18 ? 'text-green-600' : 'text-red-500'}`}>
                                {idValue.length === 18 ? '格式校验通过' : '请核对证件最后一位'}
                            </p>
                            <span className="text-[10px] text-slate-400 font-mono">LEN: {idValue.length}/18</span>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="bg-[#EEF4FF]/50 p-4 rounded-2xl flex items-center gap-3 border border-[#D9E6FF]">
                    <Sparkles className="text-[#0052D9]" size={18} />
                    <p className="text-[10px] text-[#0052D9] font-bold leading-relaxed">
                        智能建议：检测到该人员为“灯光师”，在历史保单中匹配到类似记录，请核实。
                    </p>
                </div>
             </div>

             <div className="p-8 pt-0 sticky bottom-0 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent">
                <Button 
                  variant={idValue.length === 18 ? 'primary' : 'secondary'} 
                  size="full" 
                  disabled={idValue.length !== 18}
                  onClick={() => setStep('success')}
                  className="rounded-[1.5rem] shadow-xl"
                >
                  {idValue.length === 18 ? '完成纠错并继续' : '请先修正错误项'}
                </Button>
             </div>
          </div>
        )}

        {/* --- STEP 5: SUCCESS --- */}
        {step === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-110 duration-500">
             <div className="relative mb-8">
                <div className="w-28 h-28 bg-green-50 text-green-600 rounded-[2.5rem] flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={64} />
                </div>
                <div className="absolute -top-4 -right-4 text-amber-400 animate-bounce">
                    <PartyPopper size={32} />
                </div>
             </div>
             <h3 className="text-2xl font-bold mb-3">清洗完成！</h3>
             <p className="text-sm text-slate-500 leading-relaxed mb-12">
                所有 128 名人员均已通过核验<br/>
                你可以立即生成报价单或继续添加。
             </p>
             
             <div className="w-full space-y-4">
               <Button variant="highlight" size="full" onClick={() => setStep('launcher')}>
                 生成投保方案 (128人)
               </Button>
               <Button variant="ghost" size="small" className="w-full" onClick={() => setStep('launcher')}>
                 返回首页
               </Button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportExperience;
