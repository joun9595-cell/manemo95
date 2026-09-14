import React, { useState } from 'react';
import { 
  Snowflake, 
  Sparkles, 
  Tv, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  HelpCircle,
  X
} from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/companyData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Snowflake':
        return <Snowflake className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Core Specialties
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            월앤홈케어 전문 서비스 안내
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            생활 속 가전과 주거 공간의 불편함을 정밀 장비와 숙련된 노하우로 완벽하게 해결해 드립니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-400/80 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header inside Card */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    주요 시공 내용
                  </div>
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Price Range Hint */}
                <div className="text-xs text-slate-500 mb-6 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="font-semibold text-slate-700">예상 비용 가이드</span>
                  <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {service.priceRangeHint}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>상세 시공 과정</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
                <button
                  onClick={() => onSelectServiceForQuote(service.id)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>견적 산출하기</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 bg-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              어떤 서비스가 필요한지 고민되시나요?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              현장 사진을 문자로 전송해주시면 10분 내로 정확한 시공 가능 여부 및 견적을 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent('[월앤홈케어 사진 견적문의] 현장 사진 첨부 후 상담 요청드립니다.')}`}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              사진 문자로 보내기
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 border border-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              010-8051-6582
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                전문 시공 특징 및 기술력
              </h4>
              <ul className="space-y-2 bg-slate-50 p-4 rounded-xl text-xs text-slate-700">
                {selectedService.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Situations */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                이런 고객님께 강력 추천합니다
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedService.recommendedFor.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Steps */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                표준 작업 4단계 프로세스
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.processSteps.map((step, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                    <span className="font-bold text-blue-600 block mb-1">
                      STEP {idx + 1}
                    </span>
                    <span className="text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Note */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl mb-6 text-xs text-amber-900">
              <strong>비용 안내:</strong> {selectedService.priceRangeHint}
              <p className="text-[11px] text-amber-700 mt-0.5">
                * 상세 현장 상황(기종, 층수, 추가 자재 등)에 따라 최종 견적에 차이가 있을 수 있습니다.
              </p>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onSelectServiceForQuote(sId);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer"
              >
                이 서비스 실시간 견적 산출
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>전화 상담</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
