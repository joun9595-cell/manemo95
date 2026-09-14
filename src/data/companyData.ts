import { CompanyInfo, ServiceDetail, ServiceQuoteConfig } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: '월앤홈케어',
  ceo: '이영서',
  phone: '010-8051-6582',
  formattedPhone: '010-8051-6582',
  email: 'coco3808@hanmail.net',
  coverage: '수도권 / 서울 / 경기 / 인천 외 전국 출장',
  servicesSummary: '에어컨 및 냉장고 냉매충전 · 입주청소 · 벽걸이형 TV설치 · 가전제품 홈케어',
  homepage: 'wnhcare.ai.studio',
  blogUrl: 'https://blog.naver.com/dlalstj2637',
  bankName: '토스뱅크',
  bankAccount: '1002-5671-65824',
  bankHolder: '이영서',
};

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'refrigerant',
    title: '에어컨 & 냉장고 냉매(가스) 충전',
    shortTitle: '냉매충전',
    badge: '긴급 당일출장 가능',
    description: '여름철 덜 시원한 에어컨, 차가움이 약해진 냉장고의 냉매 누설 점검 및 정품 냉매(R-22, R-410A, R-32 등)를 정량 주입하여 새 제품 같은 냉각력을 복원합니다.',
    highlights: [
      '디지털 압력 매니폴드 게이지를 통한 정밀 압력 및 과열도 측정',
      '배관 연결부, 밸브 미세 누설(리크) 탐지 및 조치',
      '벽걸이 / 스탠드 / 2in1 / 시스템(천장형) 에어컨 전 기종 대응',
      '가정용 양문형 냉장고 및 업소용 냉장고 냉매 점검 및 보충',
    ],
    recommendedFor: [
      '바람은 나오는데 찬바람이 전혀 안 나오는 에어컨',
      '실외기는 계속 도는데 실내 온도가 내려가지 않을 때',
      '냉장실 온도가 미지근하고 음식 신선도가 떨어질 때',
      '이사 후 에어컨 재설치 후 냉매 부족이 의심될 때',
    ],
    processSteps: [
      '현장 도착 후 냉매 잔량 및 실외기 작동 압력 측정',
      '배관 체결 부위 및 실외기 밸브 누설 정밀 검사',
      '기종별 규격 정품 냉매 전자저울 정량 완충',
      '가동 테스트 후 토출 온도 10℃ 이하 정상 확인 및 완료',
    ],
    priceRangeHint: '에어컨 4만~12만원 선 (기종 및 용량별 차등, 누설 수리 별도)',
    iconName: 'Snowflake',
  },
  {
    id: 'movein-cleaning',
    title: '입주 & 이사 청소',
    shortTitle: '입주청소',
    badge: '친환경 살균 케어',
    description: '신축 아파트의 공사 분진·유해물질(새집증후군 유발물질) 제거부터 구축 아파트/빌라/오피스텔의 찌든때, 기름때, 곰팡이까지 꼼꼼히 살균 청소합니다.',
    highlights: [
      '창틀, 전등갓, 수납장 서랍장, 배수구, 환풍기 완전 탈거 분리 세척',
      '주방 후드 필터 기름때 및 싱크대 걸레받이 하부 먼지 제거',
      '욕실 타일 줄눈 곰팡이 제거 및 고온 스팀 멸균 작업',
      '인체 무해 프리미엄 친환경 약품 사용 및 피톤치드 살균 마무리',
    ],
    recommendedFor: [
      '신축 아파트/오피스텔 입주 전 공사 미세먼지와 시멘트 가루 청소가 필요할 때',
      '이전 거주자의 찌든 오염과 묵은때를 완벽히 제거하고 싶을 때',
      '영유아, 어린이나 반려동물과 함께 안심하고 거주할 공간을 원할 때',
      '원룸부터 대형 평수 아파트까지 확실한 검수 청소를 원할 때',
    ],
    processSteps: [
      '현장 오염도 정밀 체크 및 탈거 가능한 모든 파츠 분리',
      '구역별(주방, 욕실, 방, 베란다) 전용 세정제 및 고압 스팀 작업',
      '외창을 제외한 내부 유리창, 창틀, 바닥 기계 세정',
      '고객님 직접 현장 동행 검수 및 미흡 부분 즉시 리터치',
    ],
    priceRangeHint: '원룸·투룸 10만~25만 / 아파트 평당 1.1만~1.5만원 선 (현장 조건별 맞춤 견적)',
    iconName: 'Sparkles',
  },
  {
    id: 'wall-tv',
    title: '벽걸이형 TV 설치 (타공 / 무타공)',
    shortTitle: '벽걸이TV설치',
    badge: '선 정리·셋톱박스 숨김',
    description: '콘크리트, 타일, 대리석, 석고보드 등 모든 벽면에 안전하게 대형 TV를 거치합니다. 전세/월세도 안심인 특허 무타공 공법과 전선/셋톱박스 완벽 매립 시공을 제공합니다.',
    highlights: [
      '타일/대리석 파손 없는 정밀 전용 드릴 타공 또는 무타공 콘센트 브라켓 시공',
      '지저분한 전원선, 인터넷 랜선 벽면 내부 완전 매립',
      '셋톱박스, 와이파이 공유기, 사운드바, 닌텐도/플레이스테이션 깔끔 숨김',
      '수평계 정밀 측정 및 진동·하중 안전 테스트 완료',
    ],
    recommendedFor: [
      '새로 TV를 구매했거나 이사 후 벽걸이 거치가 필요할 때',
      '벽에 구멍을 뚫을 수 없는 전세·월세 임대 아파트 거주자',
      '거실장 없이 거실을 넓고 미니멀한 인테리어로 꾸미고 싶을 때',
      '어린 아이나 반려동물이 선을 건드릴 위험을 없애고 싶을 때',
    ],
    processSteps: [
      '벽면 재질(콘크리트/아트월 타일/석고) 및 콘센트 위치 확인',
      '고객 시야각에 맞춘 최적 높이 및 센터 수평 측정',
      '전용 브라켓 장착 및 TV 안전 결착 (하중 테스트)',
      '셋톱박스·선 정리 및 리모컨 수신 반응 확인 후 마무리',
    ],
    priceRangeHint: '기본 타공 6만~12만 / 무타공 특수시공 15만~25만원 선 (인치 및 부자재별 상이)',
    iconName: 'Tv',
  },
  {
    id: 'home-appliance',
    title: '가전제품 종합 홈케어',
    shortTitle: '가전 홈케어',
    badge: '완전 분해 살균 세척',
    description: '보이지 않는 가전 내부 곰팡이와 세균, 악취를 근본적으로 제거합니다. 에어컨, 세탁기, 냉장고의 부품을 분해하여 고압 세척 및 고온 스팀 살균합니다.',
    highlights: [
      '에어컨(벽걸이/스탠드/시스템) 송풍팬 및 열교환기 핀 고압 살균 세척',
      '통돌이·드럼 세탁기 세탁조 완전 분해 및 찌꺼기·곰팡이 멸균',
      '냉장고 선반 탈거 세척 및 내부 UV/고온 스팀 살균 케어',
      '가전 수명 연장 및 전기료 절감, 쾌적한 실내 공기질 확보',
    ],
    recommendedFor: [
      '에어컨 가동 시 쉰내, 곰팡이 냄새나 퀴퀴한 바람이 날 때',
      '빨래를 돌려도 옷에서 꿉꿉한 냄새가 나거나 검은 이물질이 묻어나올 때',
      '냉장고 내부 음식물 냄새가 배어 청소가 곤란할 때',
      '면역력이 약한 아기나 호흡기 질환자가 있는 가정',
    ],
    processSteps: [
      '사전 작동 상태 및 소음 점검',
      '가전제품 완전 분해 및 오염 부위 노출',
      '전용 안심 세정제 도포 및 초고압 세척 & 고온 스팀 멸균',
      '부품 건조, 재조립 및 정상 작동 확인',
    ],
    priceRangeHint: '벽걸이에어컨 7만~9만 / 스탠드 12만~16만 / 세탁기 9만~15만원 선',
    iconName: 'ShieldCheck',
  },
];

export const QUOTE_CONFIGS: ServiceQuoteConfig[] = [
  {
    serviceId: 'refrigerant',
    name: '에어컨 / 냉장고 냉매 충전',
    basePrice: 50000,
    types: [
      { id: 'ac-wall', label: '벽걸이 에어컨', priceDelta: 0 },
      { id: 'ac-stand', label: '스탠드형 에어컨', priceDelta: 20000 },
      { id: 'ac-2in1', label: '2in1 에어컨 (스탠드+벽걸이)', priceDelta: 35000 },
      { id: 'ac-ceiling', label: '천장형 시스템 에어컨', priceDelta: 40000 },
      { id: 'fridge-home', label: '가정용 양문형 냉장고', priceDelta: 25000 },
      { id: 'fridge-biz', label: '업소용/대형 냉장고', priceDelta: 45000 },
    ],
    subOptions: [
      { id: 'leak-check', label: '미세 누설 부위 탐지 및 밸브 체결 점검', priceDelta: 15000 },
      { id: 'gas-empty', label: '완전 방전 상태 (진공 작업 포함)', priceDelta: 30000 },
      { id: 'emergency', label: '당일 야간/주말 긴급 출동', priceDelta: 20000 },
    ],
  },
  {
    serviceId: 'movein-cleaning',
    name: '입주 / 이사 청소',
    basePrice: 120000,
    types: [
      { id: 'clean-oneroom', label: '원룸 / 1.5룸 (10평 이하)', priceDelta: 0 },
      { id: 'clean-tworoom', label: '투룸 / 오피스텔 (11~19평)', priceDelta: 60000 },
      { id: 'clean-apt20', label: '소형 아파트 (20~25평)', priceDelta: 130000 },
      { id: 'clean-apt30', label: '중형 아파트 (26~34평)', priceDelta: 220000 },
      { id: 'clean-apt40', label: '대형 아파트 (35평 이상)', priceDelta: 340000 },
    ],
    subOptions: [
      { id: 'phytoncide', label: '피톤치드 새집증후군 연무 소독', priceDelta: 30000 },
      { id: 'mold-deep', label: '베란다/욕실 집중 곰팡이 박멸 처리', priceDelta: 40000 },
      { id: 'exterior-window', label: '외창(외부 유리창) 추가 케어', priceDelta: 50000 },
    ],
  },
  {
    serviceId: 'wall-tv',
    name: '벽걸이형 TV 설치',
    basePrice: 70000,
    types: [
      { id: 'tv-under55', label: '55인치 이하 TV', priceDelta: 0 },
      { id: 'tv-65', label: '65인치 TV', priceDelta: 20000 },
      { id: 'tv-75', label: '75인치 TV', priceDelta: 40000 },
      { id: 'tv-85plus', label: '85인치 이상 대형 TV', priceDelta: 70000 },
    ],
    subOptions: [
      { id: 'no-hole', label: '무타공 공법 시공 (구멍 없이 거치)', priceDelta: 80000 },
      { id: 'hide-box', label: '셋톱박스/공유기/선 완벽 숨김 매립', priceDelta: 30000 },
      { id: 'soundbar', label: '사운드바 추가 거치 및 선 정리', priceDelta: 25000 },
    ],
  },
  {
    serviceId: 'home-appliance',
    name: '가전제품 분해 살균 홈케어',
    basePrice: 80000,
    types: [
      { id: 'app-ac-wall', label: '벽걸이 에어컨 분해세척', priceDelta: 0 },
      { id: 'app-ac-stand', label: '스탠드 에어컨 분해세척', priceDelta: 50000 },
      { id: 'app-ac-2in1', label: '2in1 에어컨 종합 세척', priceDelta: 90000 },
      { id: 'app-wash-top', label: '통돌이 세탁기 분해살균', priceDelta: 20000 },
      { id: 'app-wash-front', label: '드럼 세탁기 분해살균', priceDelta: 50000 },
    ],
    subOptions: [
      { id: 'steam-uv', label: '자외선 UV + 고온 스팀 이중 살균', priceDelta: 20000 },
      { id: 'anti-mold', label: '친환경 곰팡이 방지 코팅 시공', priceDelta: 25000 },
    ],
  },
];

export const REGIONS = [
  { id: 'seoul', name: '서울 전지역 (강남, 강동, 강서, 강북 등)' },
  { id: 'gyeonggi-south', name: '경기 남부 (수원, 성남, 용인, 화성, 부천, 안양 등)' },
  { id: 'gyeonggi-north', name: '경기 북부 (고양, 일산, 파주, 의정부, 남양주 등)' },
  { id: 'incheon', name: '인천 전지역 (송도, 청라, 부평 등)' },
  { id: 'national', name: '기타 전국 지역 (상담 후 출장)' },
];

export const REVIEWS = [
  {
    id: 1,
    author: '김*현 고객님 (서울 마포구)',
    service: '에어컨 냉매 충전 & 세척',
    rating: 5,
    date: '2026.08',
    comment: '폭염 때 에어컨에서 찬바람이 안 나와서 급하게 연락드렸는데 당일 빠르게 오셔서 가스 압력 체크해주시고 충전해주셨습니다. 바로 얼음장처럼 찬바람 나와서 살았습니다!',
  },
  {
    id: 2,
    author: '박*서 고객님 (경기 성남 분당)',
    service: '75인치 무타공 벽걸이TV 설치',
    rating: 5,
    date: '2026.07',
    comment: '전세집이라 벽에 못을 못 박아 고민이었는데 무타공 시공으로 깔끔하게 설치해주셨어요. 지저분한 선이랑 셋톱박스까지 싹 숨겨주셔서 거실이 호텔처럼 넓어졌습니다.',
  },
  {
    id: 3,
    author: '정*우 고객님 (인천 송도동)',
    service: '신축 아파트 입주 청소',
    rating: 5,
    date: '2026.08',
    comment: '창틀 시멘트 가루랑 서랍장 안쪽 분진까지 하나하나 서랍 다 빼서 닦아주셨네요. 마지막 피톤치드 소독까지 해주고 가셔서 안심하고 짐 들였습니다. 대표님 정말 친절하십니다.',
  },
  {
    id: 4,
    author: '이*정 고객님 (경기 수원 영통)',
    service: '세탁기 & 에어컨 분해 홈케어',
    rating: 5,
    date: '2026.06',
    comment: '세탁기에서 검은 찌꺼기가 자꾸 묻어 나와 신청했는데 분해해서 보여주신 통 안쪽 보고 경악했습니다. 세척 후 새것처럼 반짝반짝해졌어요. 믿고 맡길 수 있는 곳입니다.',
  },
];

export const FAQS = [
  {
    question: '에어컨 가스(냉매)는 매년 충전해야 하나요?',
    answer: '아닙니다. 정상적인 에어컨 배관 시스템은 밀폐되어 있어 냉매가 자연 소모되지 않습니다. 찬바람이 안 나온다면 미세 누설이나 밸브 체결 부위 이상일 확률이 높습니다. 월앤홈케어는 단순 가스 충전뿐 아니라 누설 점검까지 함께 진행하여 재발을 방지합니다.',
  },
  {
    question: '무타공 벽걸이 TV 설치는 안전한가요? 원상복구는 가능한가요?',
    answer: '네, 특허받은 콘센트 단자함 브라켓 고정 방식을 사용하여 벽면에 드릴 구멍을 단 하나도 뚫지 않고 최대 85인치 이상의 대형 TV도 안전하게 거치합니다. 이사 갈 때 완벽 원상복구가 가능하여 전세나 월세 임대차 가구에 특히 인기입니다.',
  },
  {
    question: '입주청소 시간은 얼마나 걸리나요?',
    answer: '평수와 오염도에 따라 다르지만 보통 20~30평형 기준 숙련된 전문 인력이 3.5시간~5시간 정도 소요됩니다. 모든 수납 서랍장과 배수구, 환풍기를 탈거 분해하여 보이지 않는 분진까지 철저히 세척합니다.',
  },
  {
    question: '수도권 외 지방 지역도 출장이 가능한가요?',
    answer: '네, 서울/경기/인천 수도권은 당일 및 희망일 방문이 원활하며, 충청, 강원, 영남, 호남 등 전국 타 지역도 일정 조율 후 전문 기사가 방문 시공해 드립니다. 전화나 문자로 편하게 문의주시면 친절히 안내드립니다.',
  },
  {
    question: '결제 및 세금계산서/현금영수증 발행이 가능한가요?',
    answer: '네, 계좌이체(토스뱅크), 간편결제 및 세금계산서·현금영수증 발급이 모두 가능합니다. 정직하고 투명한 정찰제 견적을 원칙으로 합니다.',
  },
];
