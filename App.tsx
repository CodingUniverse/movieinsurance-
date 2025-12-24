
import React, { useState, useEffect } from 'react';
import { Layout, Palette, Smartphone, MessageSquareHeart, ShieldCheck, Moon, Sun, Users, ClipboardList, FileUp, FileCheck, Layers, Droplet, Type, Stamp, Ruler, ClipboardType, Compass, Loader2, Camera, Search } from 'lucide-react';
import Introduction from './sections/Introduction';
import VisualHierarchy from './sections/VisualHierarchy';
import Ergonomics from './sections/Ergonomics';
import Scenarios from './sections/Scenarios';
import EmotionalDesign from './sections/EmotionalDesign';
import PlanSelection from './sections/PlanSelection';
import PersonnelManagement from './sections/PersonnelManagement';
import ImportExperience from './sections/ImportExperience';
import ConfirmationExperience from './sections/ConfirmationExperience';
import ModalSpecification from './sections/ModalSpecification';
import ColorSpecification from './sections/ColorSpecification';
import TypographySpecification from './sections/TypographySpecification';
import IconSpecification from './sections/IconSpecification';
import DimensionsSpecification from './sections/DimensionsSpecification';
import FormSpecification from './sections/FormSpecification';
import NavigationSpecification from './sections/NavigationSpecification';
import LoadingSpecification from './sections/LoadingSpecification';
import ImageSpecification from './sections/ImageSpecification';
import SearchEmptySpecification from './sections/SearchEmptySpecification';

export enum Section {
  INTRO = 'intro',
  ERGONOMICS = 'ergonomics',
  HIERARCHY = 'hierarchy',
  COLOR = 'color',
  TYPOGRAPHY = 'typography',
  ICON = 'icon',
  DIMENSIONS = 'dimensions',
  FORM = 'form',
  IMAGE = 'image',
  NAV = 'nav',
  LOADING = 'loading',
  SEARCH = 'search',
  SELECTION = 'selection',
  IMPORT = 'import',
  PERSONNEL = 'personnel',
  CONFIRMATION = 'confirmation',
  MODAL = 'modal',
  SCENARIOS = 'scenarios',
  EMOTIONAL = 'emotional'
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-slate-900', 'text-white');
      document.body.classList.remove('bg-gray-50', 'text-slate-900');
    } else {
      document.body.classList.remove('bg-slate-900', 'text-white');
      document.body.classList.add('bg-gray-50', 'text-slate-900');
    }
  }, [isDarkMode]);

  const navItems = [
    { id: Section.INTRO, label: '哲学', icon: <ShieldCheck size={18} /> },
    { id: Section.ERGONOMICS, label: '工学', icon: <Smartphone size={18} /> },
    { id: Section.HIERARCHY, label: '按钮', icon: <Palette size={18} /> },
    { id: Section.COLOR, label: '色彩', icon: <Droplet size={18} /> },
    { id: Section.TYPOGRAPHY, label: '字体', icon: <Type size={18} /> },
    { id: Section.ICON, label: '图标', icon: <Stamp size={18} /> },
    { id: Section.DIMENSIONS, label: '尺寸', icon: <Ruler size={18} /> },
    { id: Section.FORM, label: '表单', icon: <ClipboardType size={18} /> },
    { id: Section.IMAGE, label: '图片', icon: <Camera size={18} /> },
    { id: Section.SEARCH, label: '搜索', icon: <Search size={18} /> },
    { id: Section.NAV, label: '导航', icon: <Compass size={18} /> },
    { id: Section.LOADING, label: '加载', icon: <Loader2 size={18} /> },
    { id: Section.SELECTION, label: '方案', icon: <ClipboardList size={18} /> },
    { id: Section.IMPORT, label: '导入', icon: <FileUp size={18} /> },
    { id: Section.PERSONNEL, label: '列表', icon: <Users size={18} /> },
    { id: Section.CONFIRMATION, label: '确认', icon: <FileCheck size={18} /> },
    { id: Section.MODAL, label: '弹窗', icon: <Layers size={18} /> },
    { id: Section.SCENARIOS, label: '场景', icon: <Layout size={18} /> },
    { id: Section.EMOTIONAL, label: '情感', icon: <MessageSquareHeart size={18} /> },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <header className={`sticky top-0 z-50 px-4 py-3 flex items-center justify-between border-b transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200 shadow-sm'}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0052D9] rounded-lg flex items-center justify-center text-white font-bold text-xs">SPEC</div>
          <h1 className="font-semibold text-sm md:text-base">剧组保险全景视觉规范</h1>
        </div>
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-700 text-yellow-400' : 'bg-gray-100 text-slate-600'}`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main className="flex-1 pb-28 max-w-4xl mx-auto w-full px-4 pt-6">
        {activeSection === Section.INTRO && <Introduction />}
        {activeSection === Section.ERGONOMICS && <Ergonomics />}
        {activeSection === Section.HIERARCHY && <VisualHierarchy isDarkMode={isDarkMode} />}
        {activeSection === Section.COLOR && <ColorSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.TYPOGRAPHY && <TypographySpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.ICON && <IconSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.DIMENSIONS && <DimensionsSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.FORM && <FormSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.IMAGE && <ImageSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.SEARCH && <SearchEmptySpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.NAV && <NavigationSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.LOADING && <LoadingSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.SELECTION && <PlanSelection isDarkMode={isDarkMode} />}
        {activeSection === Section.IMPORT && <ImportExperience isDarkMode={isDarkMode} />}
        {activeSection === Section.PERSONNEL && <PersonnelManagement isDarkMode={isDarkMode} />}
        {activeSection === Section.CONFIRMATION && <ConfirmationExperience isDarkMode={isDarkMode} />}
        {activeSection === Section.MODAL && <ModalSpecification isDarkMode={isDarkMode} />}
        {activeSection === Section.SCENARIOS && <Scenarios isDarkMode={isDarkMode} />}
        {activeSection === Section.EMOTIONAL && <EmotionalDesign isDarkMode={isDarkMode} />}
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 z-50 border-t transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200 shadow-lg'}`}>
        <div className="max-w-4xl mx-auto flex justify-around items-center px-1 py-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (activeSection === item.id ? (
            <button
              key={item.id}
              className="flex flex-col items-center gap-1 text-[#0052D9] min-w-[44px] px-1 py-1 bg-[#EEF4FF] rounded-xl transition-all"
            >
              {item.icon}
              <span className="text-[10px] font-bold whitespace-nowrap">{item.label}</span>
            </button>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[44px] px-1 py-1 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-500 hover:text-gray-800'}`}
            >
              {item.icon}
              <span className="text-[10px] whitespace-nowrap">{item.label}</span>
            </button>
          )))}
        </div>
        <div className="h-5 w-full md:hidden"></div>
      </nav>
    </div>
  );
};

export default App;
