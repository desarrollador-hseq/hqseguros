

"use server";

import { IInsuranceProduct } from "@/interfaces/insurance-product.interface";
import { db } from "@/lib/db";

export async function getInsuranceProducts(): Promise<IInsuranceProduct[]> {
  const products = await db.insuranceProduct.findMany({
    where: {
      isActive: true,
    },
    include: {
      features: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products as unknown as IInsuranceProduct[];
}