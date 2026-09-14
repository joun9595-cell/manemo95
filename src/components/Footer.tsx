import React from 'react';
import { Phone, Mail, ExternalLink, ShieldCheck, MapPin, Building2, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-900 text-xs">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-blue-600 flex items-center justify-center shrink-0 border border-slate-700">
                <img 
                  src="/thumbnail.jpg" 
                  alt="월앤홈케어 로고" 
                  className="w-full h-full object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <p className="text-[11px] text-slate-400">
                  토탈 홈 & 가전 케어 전문 브랜드
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              월앤홈케어는 에어컨·냉장고 냉매충전, 입주/이사청소, 무타공 벽걸이TV 설치, 가전제품 분해살균 세척을
              전문으로 수도권 전역 및 전국 고객님께 최상의 시공 만족을 약속드립니다.
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>철저한 사후 보증 관리 및 정찰제 견적</span>
            </div>
          </div>

          {/* Quick Contact & Banking (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-100 text-sm mb-2">상담 문의 & 결제</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-400">대표전화:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-slate-400">이메일:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-200 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <CreditCard className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400">토스뱅크:</span>{' '}
                  <span className="font-bold text-white font-mono">
                    {COMPANY_INFO.bankAccount}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    (예금주: {COMPANY_INFO.bankHolder})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area & Blog (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-100 text-sm mb-2">시공 지역 & 채널</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.coverage}</span>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-semibold text-xs hover:bg-emerald-900 transition-colors"
                >
                  <span>공식 네이버 블로그</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Info Footer Bar */}
        <div className="pt-8 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span><strong>상호명:</strong> {COMPANY_INFO.name}</span>
            <span><strong>대표자:</strong> {COMPANY_INFO.ceo}</span>
            <span><strong>대표번호:</strong> {COMPANY_INFO.formattedPhone}</span>
            <span><strong>이메일:</strong> {COMPANY_INFO.email}</span>
            <span><strong>공식도메인:</strong> {COMPANY_INFO.homepage}</span>
          </div>
          <div>
            <strong>사업내용:</strong> {COMPANY_INFO.servicesSummary}
          </div>
          <div className="pt-2 text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-900 mt-4">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-[10px]">정직한 시공과 투명한 견적을 원칙으로 합니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
