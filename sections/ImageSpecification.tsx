
import React, { useState } from 'react';
import { Camera, X, Loader2, AlertCircle, Maximize2, CheckCircle2, Trash2, RotateCcw, Code, Smartphone } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ImageSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [uploading, setUploading] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [showUndo, setShowUndo] = useState(false);

  const mockImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1542204172-658a09bc026f?auto=format&fit=crop&w=200&h=200', status: 'done' },
    { id: 2, url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&h=200', status: 'error' },
  ];

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => setUploading(false), 2000);
  };

  const handleDelete = () => {
    setShowUndo(true);
    setTimeout(() => setShowUndo(false), 4000);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">图片上传与查看器规范</h2>
        <p className="text-slate-500 text-sm italic">“九宫格极简布局，单图独立进度，OCR 智能引导”</p>
      </div>

      {/* --- 1. The Trigger --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#004E92] pl-3">
          <h3 className="font-bold text-lg">1. 上传触点 (The Trigger)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard Grid Item */}
          <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">A. 标准九宫格触点</h4>
            <div className="flex gap-4">
              <div 
                onClick={handleUpload}
                className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <Camera size={20} className="text-slate-300" />
                <span className="text-[10px] text-slate-400 font-bold">上传图片</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-500 leading-relaxed italic">
              80x80px 黄金触控区，虚线描边提示可交互，去掉了厚重的按钮感。
            </p>
          </div>

          {/* OCR Variant */}
          <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">B. OCR 专用引导触点</h4>
            <div className="relative w-full max-w-[200px] h-[126px] rounded-2xl border-2 border-dashed border-blue-100 bg-blue-50/20 flex flex-col items-center justify-center overflow-hidden group">
               {/* Identity Silhouette */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                 <div className="w-16 h-20 border-4 border-blue-900 rounded-full translate-y-4"></div>
               </div>
               <Camera size={24} className="text-blue-300 mb-2 relative z-10" />
               <span className="text-[11px] text-blue-500 font-bold relative z-10">点击拍摄人像面</span>
            </div>
            <p className="mt-4 text-[11px] text-slate-500 leading-relaxed italic">
              1.58:1 模拟证件比例，配合内部剪影轮廓，引导用户准确取景。
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Uploading State --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg">2. 独立进度与反馈 (Uploading)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Item 1: Uploading */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
             <img src="https://images.unsplash.com/photo-1542204172-658a09bc026f?auto=format&fit=crop&w=200&h=200" className="w-full h-full object-cover grayscale opacity-30" />
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-1">
                <Loader2 size={16} className="text-white animate-spin" />
                <span className="text-[8px] text-white font-bold">60%</span>
             </div>
          </div>
          {/* Item 2: Error */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-red-50 border border-red-100 flex flex-col items-center justify-center gap-1">
             <div className="absolute inset-0 bg-red-500/10"></div>
             <AlertCircle size={20} className="text-red-500" />
             <span className="text-[8px] text-red-600 font-bold">点击重试</span>
          </div>
          {/* Item 3: Success with Watermark */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-green-100 group">
             <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&h=200" className="w-full h-full object-cover" />
             {/* Privacy Watermark */}
             <div className="absolute bottom-0 left-0 right-0 py-0.5 bg-black/30 backdrop-blur-sm">
                <p className="text-[7px] text-white text-center font-bold tracking-tighter uppercase whitespace-nowrap overflow-hidden">仅供投保使用 FOR INSURANCE ONLY</p>
             </div>
             {/* Delete Trigger */}
             <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <X size={10} />
             </button>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
          <CheckCircle2 size={16} className="text-blue-500 mt-0.5" />
          <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
             **单图独立进度**：拒绝全屏 Loading。在剧组弱网环境下，允许用户并行操作其他表单，将“上传过程”静默处理，识别成功后通过闪烁反馈。
          </p>
        </div>
      </section>

      {/* --- 3. Fullscreen Viewer --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-slate-800 pl-3">
          <h3 className="font-bold text-lg">3. 全屏查看器 (Lightbox)</h3>
        </div>
        
        <div className="relative group overflow-hidden rounded-[2.5rem] border-8 border-slate-900 bg-black aspect-video flex items-center justify-center shadow-2xl">
           <img 
            src="https://images.unsplash.com/photo-1542204172-658a09bc026f?auto=format&fit=crop&w=800" 
            className="max-h-full object-contain opacity-80" 
           />
           
           {/* Header Overlay */}
           <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent flex justify-between items-center">
              <span className="text-white text-xs font-bold font-mono">1 / 5</span>
              <button className="text-white p-2 bg-white/10 rounded-full"><X size={18} /></button>
           </div>

           {/* Blurry Warning */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-amber-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl animate-pulse">
                 <AlertCircle size={14} />
                 <span className="text-[10px] font-bold">照片似有模糊，建议重新拍摄</span>
              </div>
           </div>

           {/* Bottom Action Bar */}
           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-center">
              <button className="flex flex-col items-center gap-2 text-white/60 hover:text-red-400 transition-colors" onClick={handleDelete}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Trash2 size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">删除图片</span>
              </button>
           </div>
        </div>

        {/* Undo Pattern Notification */}
        {showUndo && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs animate-in slide-in-from-bottom-full duration-300">
             <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between border border-white/10">
                <span className="text-xs font-medium">已成功移除一张照片</span>
                <button className="text-blue-400 text-xs font-bold flex items-center gap-1">
                  <RotateCcw size={12} /> 撤销
                </button>
             </div>
          </div>
        )}
      </section>

      {/* --- 4. Engineering & CSS Specs --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Code className="text-blue-400" size={24} />
                    <h3 className="text-lg font-bold">开发资产交付规范 (Asset Handover)</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/40 overflow-x-auto no-scrollbar">
{`/* --- 缩略图隐私水印 --- */
.thumb-watermark {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(2px);
  padding: 2px 0;
  text-align: center;
  font-size: 8px;
  color: white;
  pointer-events: none;
}

/* --- OCR 闪烁成功反馈 --- */
@keyframes ocr-success {
  0% { background: transparent; }
  50% { background: rgba(16, 185, 129, 0.1); }
  100% { background: transparent; }
}

.ocr-field--updated {
  animation: ocr-success 1.5s ease-out;
}`}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Image System v1.0
        </p>
      </footer>
    </div>
  );
};

export default ImageSpecification;
