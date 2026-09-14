export interface CompanyInfo {
  name: string;
  ceo: string;
  phone: string;
  formattedPhone: string;
  email: string;
  coverage: string;
  servicesSummary: string;
  homepage: string;
  blogUrl: string;
  bankName: string;
  bankAccount: string;
  bankHolder: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  highlights: string[];
  recommendedFor: string[];
  processSteps: string[];
  priceRangeHint: string;
  iconName: string;
}

export interface QuoteItemOption {
  id: string;
  label: string;
  priceDelta: number;
}

export interface ServiceQuoteConfig {
  serviceId: string;
  name: string;
  basePrice: number;
  subOptions: QuoteItemOption[];
  types: QuoteItemOption[];
}
