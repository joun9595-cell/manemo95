import React, { useState } from 'react';
import { Phone, MessageSquare, ExternalLink, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCalculator, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-blue-600/90 text-white font-medium px-2 py-0.5 rounded-sm text-[11px]">
              <MapPin className="w-3 h-3" />
              출장 범위
            </span>
            <span className="text-slate-200">
              서울 · 경기 · 인천 수도권 당일/예약 출장 및 전국 서비스
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">대표: {COMPANY_INFO.ceo}</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              상담 문의 {COMPANY_INFO.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-blue-600 shadow-sm flex items-center justify-center shrink-0 border border-slate-200/50 group-hover:ring-2 group-hover:ring-blue-500 transition-all">
            <img 
              src="/thumbnail.jpg" 
              alt="월앤홈케어 로고" 
              className="w-full h-full object-cover scale-125"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] font-semibold text-blue-600 border border-blue-200 bg-blue-50 px-1.5 py-0.5 rounded-sm">
                WALL & HOME
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              냉매충전 · 입주청소 · 벽걸이TV · 가전케어
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-blue-600 transition-colors">
            서비스 안내
          </a>
          <button
            onClick={onOpenCalculator}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            간편 견적계산
          </button>
          <a href="#process" className="hover:text-blue-600 transition-colors">
            시공 절차
          </a>
          <a href="#company-info" className="hover:text-blue-600 transition-colors">
            회사 및 계좌안내
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">
            FAQ
          </a>
          <a
            href={COMPANY_INFO.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors"
          >
            네이버 블로그
            <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent('[월앤홈케어 문의] 서비스 상담 희망합니다.')}`}
            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            문자 문의
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 shadow-sm transition-all hover:shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            010-8051-6582
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            서비스 안내 (냉매충전·청소·벽걸이TV·가전)
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCalculator();
            }}
            className="w-full text-left py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            실시간 간편 견적 계산기
          </button>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            시공 절차 및 품질 보증
          </a>
          <a
            href="#company-info"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            회사 정보 & 토스뱅크 계좌안내
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 border-b border-slate-100"
          >
            자주 묻는 질문 (FAQ)
          </a>
          <a
            href={COMPANY_INFO.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-2 text-sm font-semibold text-emerald-700"
          >
            <span>네이버 블로그 공식 시공사례</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent('[월앤홈케어 문의] 상담 희망합니다.')}`}
              className="py-2.5 px-3 text-center text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              문자 문의
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="py-2.5 px-3 text-center text-xs font-bold text-white bg-blue-600 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              전화 걸기
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
