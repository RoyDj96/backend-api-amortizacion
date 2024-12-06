import { Request, Response } from 'express';

interface Amortizacion {
  Mes: number;
  capital: number;
  interes: number;
  saldo_final: number;
}

export const Formula = async (req: Request, res: Response):Promise<Response> => {
  const { Mto, Vint, Npla } = req.body;

  // Validación de entrada (opcional, pero recomendado)
  if (!Mto || !Vint || !Npla) {
    return res.status(400).json({message: 'Faltan datos requeridos'});
  }

  // Cálculo de la cuota
  const Vcta = Math.round((Mto * Vint * (1 + Vint) ** Npla) / ((1 + Vint) ** Npla - 1));

  // Inicialización de variables
  let Sini = Mto;
  const Amortizacion: Amortizacion[] = [];

  // Cálculo de la amortización para cada periodo
  for (let i = 1; i <= Npla; i++) {
    const interes = Sini * Vint;
    const capital = Vcta - interes;
    Sini -= capital;

    Amortizacion.push({
      Mes: i,
      capital,
      interes,
      saldo_final: Sini,
    });
  }

  return res.json({
    Vcta,
    amortizacion: Amortizacion,
  });
};