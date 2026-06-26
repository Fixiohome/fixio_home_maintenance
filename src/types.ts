export interface Booking {
  id: string;
  name: string;
  mobile: string;
  service: string;
  area: string;
  date: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  planType?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  benefits: string[];
}

export interface AmcPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  popular: boolean;
  color: string;
  benefits: string[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ac' | 'plumbing' | 'electrical' | 'painting' | 'handyman' | 'renovation';
  imageUrl: string;
  location: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}
