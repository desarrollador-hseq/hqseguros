export interface IProductFeature {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  productId: string;
  createdAt: Date;
}

export interface IInsuranceProduct {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  longDescription?: string | null;
  slug: string;
  icon?: string | null;
  imageUrl?: string | null;
  features: IProductFeature[];
  isFeatured: boolean;
  isActive: boolean;
  createdAt: Date;
}
