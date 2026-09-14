import React from 'react';
import { 
  ClipboardCheck, 
  Wrench, 
  ShieldCheck, 
  Smile, 
  Star, 
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { REVIEWS } from '../data/companyData';

export const TrustSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '상담 및 사전 진단',
      desc: '유선/문자/현장 사진을 토대로 가전 상태와 시공 환경을 사전에 정확히 파악하고 투명한 견적을 안내드립니다.',
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: '전문 장비 지참 방문',
      desc: '약속된 시간에 맞춰 최신 디지털 측정기, 전용 공구, 정품 냉매 및 친환경 안심 세제를 챙겨 정시 방문합니다.',
      icon: Clock,
    },
    {
      step: '03',
      title: '정밀 맞춤 책임 시공',
      desc: '바닥/벽면 보양 작업 후 완전 분해 세척, 정량 냉매 충전, 무타공 특수 거치 등 꼼꼼하고 안전하게 작업합니다.',
      icon: Wrench,
    },
    {
      step: '04',
      title: '고객 동행 검수 & 사후 A/S',
      desc: '시운전 및 고객님과 꼼꼼한 현장 검수를 진행하며, 시공 후에도 철저한 사후 보증 관리 서비스를 제공합니다.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Work Process & Quality
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            월앤홈케어가 신뢰받는 4단계 시공 약속
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            한 번의 인연도 소중하게, 시작부터 사후 관리까지 내 집처럼 정성을 다합니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Customer Reviews Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
            <Smile className="w-5 h-5 text-amber-500" />
            고객님들의 솔직한 이용 후기
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            수도권 및 각지에서 직접 경험하신 고객님들의 실제 만족 후기입니다.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">{rev.author}</span>
                <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
