import React, { useState } from 'react';
import { 
  Building2, 
  CreditCard, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  ShieldCheck,
  UserCheck,
  Download,
  Image as ImageIcon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CompanyAndBank: React.FC = () => {
  const [accountCopied, setAccountCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [thumbnailCopied, setThumbnailCopied] = useState(false);

  const copyToClipboard = (text: string, type: 'account' | 'phone' | 'thumbnail') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setAccountCopied(true);
      setTimeout(() => setAccountCopied(false), 2500);
    } else if (type === 'phone') {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    } else {
      setThumbnailCopied(true);
      setTimeout(() => setThumbnailCopied(false), 2500);
    }
  };

  return (
    <section id="company-info" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Company & Payment
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            사업자 정보 및 결제 계좌 안내
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            월앤홈케어는 투명한 정찰제와 공식 결제 시스템을 통해 고객님께 신뢰를 드립니다.
          </p>
        </div>

        {/* 2-Column Grid: Bank Details & Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Toss Bank Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-300" />
                  <span className="text-xs font-bold text-blue-200 tracking-wider uppercase">
                    공식 결제 계좌 (토스뱅크)
                  </span>
                </div>
                <span className="text-[11px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full">
                  간편이체 지원
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-2 font-medium">예금주: {COMPANY_INFO.bankHolder} (월앤홈케어 대표)</p>
              
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 mb-5">
                <div className="text-xs text-blue-400 font-semibold mb-1">
                  {COMPANY_INFO.bankName}
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-wider text-amber-300 font-mono">
                  {COMPANY_INFO.bankAccount}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                시공 완료 후 현장 검수를 마치신 후 편안하게 이체해 주시면 됩니다.
                <br />
                세금계산서 및 현금영수증 발행을 원하시면 상담 시 말씀해 주세요.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => copyToClipboard(COMPANY_INFO.bankAccount, 'account')}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                {accountCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>계좌번호가 복사되었습니다!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>토스뱅크 계좌번호 복사하기</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>정직한 시공 후 안전 결제 프로세스</span>
              </div>
            </div>
          </div>

          {/* Company Details Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-blue-600 shadow-xs flex items-center justify-center shrink-0 border border-slate-200">
                  <img 
                    src="/thumbnail.jpg" 
                    alt="월앤홈케어 공식 브랜드 로고" 
                    className="w-full h-full object-cover scale-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    생활 가전 및 홈 인테리어 케어 전문 기업
                  </p>
                </div>
              </div>

              {/* Specs Table List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-slate-400" />
                    대표자
                  </span>
                  <span className="sm:col-span-2 font-bold text-slate-900">
                    {COMPANY_INFO.ceo}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    사업 및 출장 범위
                  </span>
                  <span className="sm:col-span-2 font-bold text-blue-700">
                    {COMPANY_INFO.coverage}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    주요 사업 내용
                  </span>
                  <span className="sm:col-span-2 text-slate-800 font-medium leading-relaxed">
                    {COMPANY_INFO.servicesSummary}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-slate-400" />
                    대표 전화번호
                  </span>
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="font-bold text-blue-600 hover:underline"
                    >
                      {COMPANY_INFO.formattedPhone}
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(COMPANY_INFO.phone, 'phone')}
                      className="px-2 py-0.5 text-[11px] font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 rounded cursor-pointer transition-colors"
                    >
                      {phoneCopied ? '복사완료!' : '번호 복사'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-slate-400" />
                    대표 이메일
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="sm:col-span-2 text-slate-800 hover:text-blue-600 underline font-medium"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-slate-400" />
                    공식 채널
                  </span>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-2">
                    <a
                      href={COMPANY_INFO.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3 py-1 rounded-lg transition-colors"
                    >
                      <span>네이버 블로그 바로가기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs text-slate-400 font-mono">
                      {COMPANY_INFO.homepage}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Footer in Card */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                연중무휴 상담 가능 (08:00 ~ 22:00)
              </span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                대표 전화 통화 연결
              </a>
            </div>
          </div>
        </div>

        {/* Official Brand Thumbnail Showcase */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Thumbnail Image Preview (16:9) */}
            <div className="w-full lg:w-7/12">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group aspect-[16/9] bg-slate-950">
                <img 
                  src="/thumbnail.jpg" 
                  alt="월앤홈케어 공식 브랜드 로고 썸네일" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20 flex items-center gap-1.5">
                  <ImageIcon className="w-3 h-3 text-blue-400" />
                  <span>공식 썸네일 · 16:9 규격</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Details & Actions */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  공식 브랜드 썸네일 (OG Image)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  월앤홈케어 대표 썸네일
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  카카오톡 링크 공유, 네이버 블로그 포스팅 대표 이미지, 인스타그램 및 SNS 홍보에 최적화된 16:9 고해상도 브랜드 로고 썸네일입니다.
                </p>
              </div>

              {/* Specs Chips */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                  해상도: 16:9 와이드 규격
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 font-medium">
                  OG 메타태그 연동 완료
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 font-medium">
                  모바일 & PC 최적화
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/thumbnail.jpg"
                  download="월앤홈케어_공식썸네일.jpg"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>썸네일 이미지 다운로드</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(typeof window !== 'undefined' ? `${window.location.origin}/thumbnail.jpg` : '/thumbnail.jpg', 'thumbnail')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  {thumbnailCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">주소 복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>URL 복사</span>
                    </>
                  )}
                </button>

                <a
                  href="/thumbnail.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                  title="새 창에서 원본 보기"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
