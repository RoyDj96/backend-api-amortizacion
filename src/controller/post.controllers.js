// Api para plan de amortizacion
/*
Vcta = valor cuota
Mto = monto
rate = valor interes
Npla = numero de plazo
Vcap = valor capital
Sfinal = saldo final
Sini = saldo inicial
*/

export const Formula = async (req, res) => {
  const { Mto, Vint, Npla } = req.body;
  const MtoNumber = Number(Mto);
  const VintNumber = parseFloat(Vint);
  const NplaNumber = parseInt(Npla);
  let Vcta = Math.round((MtoNumber * VintNumber * (1 + VintNumber) ** NplaNumber) / ((1 + VintNumber) ** NplaNumber - 1));
  let Sini = Mto;
  let Amortizacion = [];
  for (let i = 1; i <= Npla; i++) {
    const rate = Math.round(Sini * Vint);
    const Vcap = Vcta - rate;
    let final = Math.round(Sini -= Vcap);
    Amortizacion = [...Amortizacion, {
      Mes: i,
      capital: Vcap,
      interes: rate,
      saldo_final: final
    }];
  }
  res.send({
    Vcta,
    amortizacion: Amortizacion
  })
}

// esto es un comentario de prueba 1
// esto es un comentario de prueba 2
// esto es un comentario de prueba 3