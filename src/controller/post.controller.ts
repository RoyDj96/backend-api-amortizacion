// Api para plan de amortización
/*
Vcta = valor cuota
Mto = monto
rate = valor interés
Npla = número de plazo
Vcap = valor capital
Sfinal = saldo final
Sini = saldo inicial
*/

import { Request, Response } from "express";

interface AmortizacionItem {
  Mes: number;
  capital: number;
  interes: number;
  saldo_final: number;
}

interface ReqAmortizacion {
    Mto: string;
    Vint: string;
    Npla: string;
}


export const Formula = async (req: Request, res: Response): Promise<void> => {

  const { Mto, Vint, Npla }: ReqAmortizacion = req.body;

  console.log(req.body, "aqui esta lo que llega");

  const MtoNumber: number = Number(Mto);
  const VintNumber: number = parseFloat(Vint);
  const NplaNumber: number = parseInt(Npla);

  const Vcta: number = Math.round(
    (MtoNumber * VintNumber * (1 + VintNumber) ** NplaNumber) /
      ((1 + VintNumber) ** NplaNumber - 1)
  );

  let Sini: number = MtoNumber; 
  let Amortizacion: AmortizacionItem[] = [];

  for (let i = 1; i <= NplaNumber; i++) {
    const rate: number = Math.round(Sini * VintNumber);
    const Vcap: number = Vcta - rate;
    const final: number = Math.round((Sini -= Vcap));

    Amortizacion.push({
      Mes: i,
      capital: Vcap,
      interes: rate,
      saldo_final: final,
    });
  }

  res.send({
    Vcta,
    amortizacion: Amortizacion,
  });
};

export const Saludo = async (req: Request, res: Response): Promise<void> => {
  res.send("Hola mundo");
}