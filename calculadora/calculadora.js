exports.calculaParcela = (valorParcela, diasEmAtraso) => {

    let percentualJuros = 1;
    if (diasEmAtraso > 00 && diasEmAtraso <= 30)
        percentualJuros = 1.05;
    else if (diasEmAtraso >= 31 && diasEmAtraso <= 60)
        percentualJuros = 1.1;
    else if (diasEmAtraso > 60)
        percentualJuros = 1.15;

    return Number((valorParcela * percentualJuros).toFixed(0));
}
