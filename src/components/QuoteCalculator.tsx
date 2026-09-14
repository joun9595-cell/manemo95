import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  Phone, 
  Sparkles, 
  Send, 
  Copy, 
  AlertCircle,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { QUOTE_CONFIGS, REGIONS, COMPANY_INFO } from '../data/companyData';

interface QuoteCalculatorProps {
  initialServiceId?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || 'refrigerant');
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');
  const [selectedSubOptionIds, setSelectedSubOptionIds] = useState<string[]>([]);
  const [selectedRegionId, setSelectedRegionId] = useState<string>('seoul');
  const [customDetail, setCustomDetail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<boolean>(false);

  // Sync initial service if changed externally
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Current config
  const currentConfig = useMemo(() => {
    return QUOTE_CONFIGS.find((c) => c.serviceId === selectedServiceId) || QUOTE_CONFIGS[0];
  }, [selectedServiceId]);

  // Set default type whenever service config changes
  useEffect(() => {
    if (currentConfig && currentConfig.types.length > 0) {
      setSelectedTypeId(currentConfig.types[0].id);
      setSelectedSubOptionIds([]);
    }
  }, [currentConfig]);

  // Calculate prices
  const { minPrice, maxPrice, selectedTypeLabel, selectedOptionLabels, selectedRegionLabel } = useMemo(() => {
    const base = currentConfig.basePrice;
    const selectedType = currentConfig.types.find((t) => t.id === selectedTypeId);
    const typePrice = selectedType ? selectedType.priceDelta : 0;

    const subPrice = selectedSubOptionIds.reduce((acc, subId) => {
      const opt = currentConfig.subOptions.find((o) => o.id === subId);
      return acc + (opt ? opt.priceDelta : 0);
    }, 0);

    const calculatedBase = base + typePrice + subPrice;
    // Estimated range (accounting for site variables)
    const min = Math.round(calculatedBase / 10000) * 10000;
    const max = Math.round((calculatedBase * 1.25) / 10000) * 10000;

    const optLabels = selectedSubOptionIds
      .map((id) => currentConfig.subOptions.find((o) => o.id === id)?.label)
      .filter(Boolean) as string[];

    const regionObj = REGIONS.find((r) => r.id === selectedRegionId);

    return {
      minPrice: min,
      maxPrice: max,
      selectedTypeLabel: selectedType?.label || '',
      selectedOptionLabels: optLabels,
      selectedRegionLabel: regionObj?.name || '서울',
    };
  }, [currentConfig, selectedTypeId, selectedSubOptionIds, selectedRegionId]);

  const toggleSubOption = (id: string) => {
    setSelectedSubOptionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Generate SMS content
  const smsBody = useMemo(() => {
    const text = `[월앤홈케어 견적문의]
서비스: ${currentConfig.name}
세부항목: ${selectedTypeLabel}
추가옵션: ${selectedOptionLabels.length > 0 ? selectedOptionLabels.join(', ') : '없음'}
지역: ${selectedRegionLabel}
희망일: ${preferredDate || '빠른 시일 내'}
예상견적가이드: ${minPrice.toLocaleString()}원 ~ ${maxPrice.toLocaleString()}원
기타사항: ${customDetail || '상담 요청드립니다.'}`;
    return text;
  }, [
    currentConfig.name,
    selectedTypeLabel,
    selectedOptionLabels,
    selectedRegionLabel,
    preferredDate,
    minPrice,
    maxPrice,
    customDetail,
  ]);

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(smsBody);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim()) {
      alert('연락받으실 전화번호를 입력해 주세요.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="quote-calculator" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            투명한 실시간 견적 가이드
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            맞춤형 간편 견적 계산기
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            원하시는 서비스와 조건을 선택하시면 예상 비용 가이드를 바로 확인하고 문자로 상담 접수할 수 있습니다.
          </p>
        </div>

        {/* Main Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                STEP 1. 서비스 카테고리 선택
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {QUOTE_CONFIGS.map((config) => {
                  const isSelected = config.serviceId === selectedServiceId;
                  return (
                    <button
                      key={config.serviceId}
                      type="button"
                      onClick={() => setSelectedServiceId(config.serviceId)}
                      className={`py-3 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {config.name.split('/')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                STEP 2. 세부 품목 및 사양 선택
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentConfig.types.map((type) => {
                  const isSelected = type.id === selectedTypeId;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedTypeId(type.id)}
                      className={`p-3 text-left rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{type.label}</span>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-blue-600" />
                      ) : (
                        <span className="text-[11px] text-slate-400">선택</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            {currentConfig.subOptions.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  STEP 3. 추가 부가 옵션 선택 (중복 선택 가능)
                </label>
                <div className="space-y-2">
                  {currentConfig.subOptions.map((opt) => {
                    const isChecked = selectedSubOptionIds.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => toggleSubOption(opt.id)}
                        className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-emerald-50/70 border-emerald-500 text-emerald-950 font-medium'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{opt.label}</span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">
                          +{opt.priceDelta.toLocaleString()}원
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Region & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  방문 출장 지역
                </label>
                <select
                  value={selectedRegionId}
                  onChange={(e) => setSelectedRegionId(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:outline-blue-600 focus:border-blue-600"
                >
                  {REGIONS.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  희망 시공 일시
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="예: 이번주 토요일 오전, 가능한 가장 빠른 날 등"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-blue-600 focus:border-blue-600"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                특이사항 및 추가 문의 내용 (선택)
              </label>
              <textarea
                rows={2}
                placeholder="예: 실외기가 앵글에 달려있어요 / 벽면이 타일 대리석 아트월입니다 / 층수 및 엘리베이터 유무 등"
                value={customDetail}
                onChange={(e) => setCustomDetail(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-blue-600 focus:border-blue-600"
              />
            </div>
          </div>

          {/* Right Column: Calculated Quote Result & Dispatch (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  실시간 견적 산출 결과
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  부가세 별도/포함 상담시 확정
                </span>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-1">예상 시공 비용 가이드</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                    {minPrice.toLocaleString()} ~ {maxPrice.toLocaleString()}
                  </span>
                  <span className="text-lg font-bold text-slate-200">원</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  * 실제 현장 오염도, 층수, 특수 부자재에 따라 세부 금액이 조율될 수 있습니다.
                </p>
              </div>

              {/* Selected Summary Breakdown */}
              <div className="bg-slate-800/80 rounded-xl p-4 space-y-2 text-xs border border-slate-700/60 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">선택 서비스:</span>
                  <span className="font-semibold text-white">{currentConfig.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">품목/사양:</span>
                  <span className="font-semibold text-white">{selectedTypeLabel}</span>
                </div>
                {selectedOptionLabels.length > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">추가 옵션:</span>
                    <span className="font-semibold text-white text-right">
                      {selectedOptionLabels.join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">출장 지역:</span>
                  <span className="font-semibold text-blue-300">{selectedRegionLabel}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {/* 1. Direct SMS */}
                <a
                  href={`sms:${COMPANY_INFO.phone}?body=${encodeURIComponent(smsBody)}`}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>위 견적으로 바로 문자 문의하기</span>
                </a>

                {/* 2. Direct Call */}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>전화로 견적 직접 문의 (010-8051-6582)</span>
                </a>

                {/* 3. Copy Details */}
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedText ? '견적 내용이 복사되었습니다!' : '견적 내용 텍스트 복사'}</span>
                </button>
              </div>
            </div>

            {/* Quick Online Booking Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-800">
              <h3 className="font-bold text-xs text-slate-900 mb-1 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-blue-600" />
                온라인 간편 상담 예약 접수
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                전화번호를 남겨주시면 대표 엔지니어가 작업 확인 후 빠르게 연락드립니다.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-800 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">상담 예약이 접수되었습니다!</strong>
                    <span>입력하신 연락처({customerPhone})로 순차적으로 친절히 연락드리겠습니다.</span>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="block mt-2 text-[11px] text-emerald-700 underline font-medium cursor-pointer"
                    >
                      새로운 견적 접수하기
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleOnlineSubmit} className="space-y-2">
                  <input
                    type="tel"
                    required
                    placeholder="고객님 연락처 (예: 010-1234-5678)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-blue-600"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    1초 만에 무료 방문 상담 신청
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
