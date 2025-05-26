"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "sonner";
import { getContactForms } from "@/actions/contact.action";
import { ContactForm } from "@prisma/client";
import { ButtonLogout } from "@/components/button-logout";

const getContactFormsAction = async () => {
  const contactForms = await getContactForms();
  return contactForms;
};

export const Dashboard = () => {
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await getContactFormsAction();
      setForms(response);
    } catch (error) {
      toast.error("Error al cargar los formularios de contacto");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   const getStatusBadge = (status: ContactForm['status']) => {
  //     const statusConfig = {
  //       pending: { label: 'Pendiente', variant: 'destructive' as const },
  //       read: { label: 'Leído', variant: 'warning' as const },
  //       replied: { label: 'Respondido', variant: 'success' as const },
  //     };

  //     const config = statusConfig[status];
  //     return (
  //       <Badge variant={config.variant}>
  //         {config.label}
  //       </Badge>
  //     );
  //   };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 space-y-6 p-7">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <ButtonLogout />
      <Card>
        <CardHeader>
          <CardTitle>Formularios de Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Mensaje</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forms.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No hay formularios de contacto
                  </TableCell>
                </TableRow>
              ) : (
                forms.map((form) => (
                  <TableRow key={form.id}>
                    <TableCell>
                      {format(new Date(form.createdAt), "dd/MM/yyyy HH:mm", {
                        locale: es,
                      })}
                    </TableCell>
                    <TableCell>{form.fullName}</TableCell>
                    <TableCell>{form.email}</TableCell>
                    <TableCell>{form.mobilePhone}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {form.message}
                    </TableCell>
                    <TableCell>{/* {getStatusBadge(form.status)} */}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
