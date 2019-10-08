import numbro from 'numbro';

function Numbro(locale = 'id') {
  numbro.registerLanguage({
    languageTag: 'id-ID',
    delimiters: {
      thousands: '.',
      decimal: ',',
    },
    abbreviations: {
      thousand: 'rb',
      million: 'jt',
      billion: 'm',
      trillion: 't',
    },
    ordinal: number => (number === 1 ? 'pertama' : `ke${number}`),
    currency: {
      symbol: 'Rp',
      position: 'prefix',
      code: 'IDR',
    },
    currencyFormat: {
      thousandSeparated: true,
    },
    formats: {
      fourDigits: {
        totalLength: 4,
        spaceSeparated: false,
        average: false,
      },
      fullWithTwoDecimals: {
        output: 'currency',
        mantissa: 2,
        thousandSeparated: true,
        spaceSeparated: false,
      },
      fullWithTwoDecimalsNoCurrency: {
        optionalMantissa: true,
        mantissa: 2,
        thousandSeparated: true,
      },
      fullWithNoDecimals: {
        optionalMantissa: true,
        output: 'currency',
        spaceSeparated: false,
        thousandSeparated: true,
        mantissa: 2,
      },
    },
  });

  const defaultTag = locale === 'id' || locale === 'IDR' ? 'id-ID' : 'en-US';
  const fallbackTag = defaultTag === 'id-ID' ? 'en-US' : 'id-ID';

  numbro.setLanguage(defaultTag, fallbackTag);

  return numbro;
}

export default Numbro;
