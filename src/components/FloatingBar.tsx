import React from 'react';
import { Phone, MessageSquare, Calculator, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingBarProps {
  onOpenCalculator: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onOpenCalculator }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 sm:hidden">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 text-center">
        {/* Call button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>전화상담</span>
        </a>

        {/* SMS button */}
        <a
          href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent('[월앤홈케어] 견적 및 상담 요청드립니다.')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white font-bold text-[11px] active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-blue-400" />
          <span>문자문의</span>
        </a>

        {/* Calculator button */}
        <button
          type="button"
          onClick={onOpenCalculator}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 text-slate-950 font-bold text-[11px] active:scale-95 transition-transform cursor-pointer"
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span>간편견적</span>
        </button>

        {/* Blog button */}
        <a
          href={COMPANY_INFO.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-[11px] active:scale-95 transition-transform"
        >
          <ExternalLink className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span>블로그</span>
        </a>
      </div>
    </div>
  );
};
