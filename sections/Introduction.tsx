
import React from 'react';
import { ShieldCheck, Zap, AlertCircle } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="text-center py-6">
        <h2 className="text-3xl font-bold text-[#0052D9] mb-4">核心设计哲学</h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
          针对剧组极端环境，按钮不再是简单的交互入口，而是业务流转的“安全闸门”。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: '信任 (Trust)',
            desc: '通过稳重的深海蓝与明确的反馈，消除保险业务自带的心理隔阂。',
            icon: <ShieldCheck className="text-blue-600" />,
            color: 'bg-blue-50 border-blue-100'
          },
          {
            title: '高效 (Efficiency)',
            desc: '针对单手操作、户外强光等极端场景，确保核心路径零阻碍。',
            icon: <Zap className="text-amber-500" />,
            color: 'bg-amber-50 border-amber-100'
          },
          {
            title: '防误触 (Prevention)',
            desc: '保险契约严谨，通过触觉与视觉双重确认，规避操作风险。',
            icon: <AlertCircle className="text-rose-500" />,
            color: 'bg-rose-50 border-rose-100'
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border ${item.color} flex flex-col items-center text-center space-y-4`}>
            <div className="p-3 bg-white rounded-xl shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0052D9] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-200/50">
        <div className="relative z-10 space-y-4">
          <h3 className="text-xl font-bold italic opacity-90">"Design for the shoot, not for the desk."</h3>
          <p className="opacity-80 text-sm md:text-base leading-relaxed">
            剧组人员可能正处在：<br/>
            - 凌晨三点的荒野（夜间昏暗）<br/>
            - 正午的沙漠影棚（强光致盲）<br/>
            - 一手对讲机，一手手机（单手交互）<br/>
            <strong className="text-white opacity-100 mt-2 block">我们的按钮，必须足够醒目、足够大、足够可靠。</strong>
          </p>
        </div>
        <div className="absolute top-[-20px] right-[-20px] w-48 h-48 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-[-10px] left-[20%] w-24 h-24 bg-white opacity-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default Introduction;
