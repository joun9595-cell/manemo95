import React from 'react';
import { Phone, MessageSquare, Calculator, ExternalLink, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white pt-10 pb-16 sm:py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            정직한 정찰제 & 책임 A/S 보증
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            수도권 당일·예약 방문 & 전국 출장 가능
          </span>
        </div>

        {/* Headline & Subhead */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight sm:leading-tight mb-4 text-white">
            공간의 가치를 더하고 <br className="hidden sm:inline" />
            가전을 새것처럼, <span className="text-blue-400">월앤홈케어</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            베테랑 전문 엔지니어가 직접 방문하여 정밀 점검부터 꼼꼼한 시공까지 책임집니다.
            <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">
              에어컨·냉장고 냉매충전 · 입주청소 · 벽걸이TV 설치 · 가전제품 홈케어
            </strong>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>전화 바로 상담 ({COMPANY_INFO.formattedPhone})</span>
          </a>

          <a
            href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent('[월앤홈케어] 견적 및 시공 문의드립니다.')}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>문자 문의</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 cursor-pointer shadow-md"
          >
            <Calculator className="w-4 h-4 text-slate-950" />
            <span>실시간 예상 견적</span>
          </button>

          <a
            href={COMPANY_INFO.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>공식 블로그 시공후기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 transition-colors hover:border-blue-500/50">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 font-bold text-sm">
              01
            </div>
            <h2 className="font-bold text-sm text-white mb-1">에어컨/냉장고 냉매충전</h2>
            <p className="text-xs text-slate-400 leading-snug">
              누설 탐지 및 정품 냉매(R-22, R-410A, R-32) 정량 주입
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 transition-colors hover:border-emerald-500/50">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 font-bold text-sm">
              02
            </div>
            <h2 className="font-bold text-sm text-white mb-1">입주 & 이사 청소</h2>
            <p className="text-xs text-slate-400 leading-snug">
              창틀·서랍·배수구 전면 탈거 살균 및 피톤치드 소독 케어
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 transition-colors hover:border-amber-500/50">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 font-bold text-sm">
              03
            </div>
            <h2 className="font-bold text-sm text-white mb-1">벽걸이형 TV 설치</h2>
            <p className="text-xs text-slate-400 leading-snug">
              전세 안심 무타공 공법 지원, 전선 및 셋톱박스 완벽 매립
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 transition-colors hover:border-purple-500/50">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2 font-bold text-sm">
              04
            </div>
            <h2 className="font-bold text-sm text-white mb-1">가전제품 종합 홈케어</h2>
            <p className="text-xs text-slate-400 leading-snug">
              에어컨·세탁기 완전 분해 고압 세척 및 곰팡이 멸균 처리
            </p>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>사업자등록 및 책임 시공</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>최신 디지털 정밀 게이지 & 전문 공구 사용</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>서울·경기·인천 및 전국 출장 지원</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>토스뱅크 간편결제 및 세금계산서 발행</span>
          </div>
        </div>
      </div>
    </section>
  );
};
