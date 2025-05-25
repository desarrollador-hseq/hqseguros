"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getInsuranceProducts } from "@/actions/services.action";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { IInsuranceProduct } from "@/interfaces/insurance-product.interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const getServices = async () => {
  const clients = await getInsuranceProducts();
  return clients;
};

export const Services = () => {
  const [services, setServices] = useState<IInsuranceProduct[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const serv = await getServices();
      setServices(serv);
    };
    fetchServices();
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
          Nuestros Servicios
        </h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="services-slider"
          >
            {services.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-secondary" >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={product.imageUrl || "/images/default-service.jpg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="uppercase tracking-wide text-xs font-semibold text-gray-500 mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-4 mt-6">
                      {product.features.length > 0 && (
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-5">
                            <ul>
                              {product.features.map((feature) => (
                                <li key={feature.id}>{feature.title}</li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            href={`/contacto?servicio=${product.slug}`}
                            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group"
                          >
                            <span className="text-sm font-medium">Cotizar</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
