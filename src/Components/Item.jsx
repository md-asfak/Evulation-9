import React from "react";

export default function Item() {
  const data = {
    coins: [
      {
        item: {
          id: "dexcheck",
          coin_id: 26412,
          name: "DexCheck",
          symbol: "DCK",
          market_cap_rank: 882,
          thumb:
            "https://assets.coingecko.com/coins/images/26412/standard/DexCheck_logo_%282%29.png?1696525488",
          small:
            "https://assets.coingecko.com/coins/images/26412/small/DexCheck_logo_%282%29.png?1696525488",
          large:
            "https://assets.coingecko.com/coins/images/26412/large/DexCheck_logo_%282%29.png?1696525488",
          slug: "dexcheck",
          price_btc: 0.0000016001475524631517,
          score: 0,
          data: {
            price: "$0.09881",
            price_btc: "0.00000160014755246315",
            price_change_percentage_24h: {
              aed: -5.421417830782304,
              ars: -5.421417830781979,
              aud: -5.421417830782152,
              bch: -20.688467570751246,
              bdt: -5.692838649788958,
              bhd: -5.719043880385411,
              bmd: -5.4214178307822225,
              bnb: -5.327747493774549,
              brl: -5.4214178307820875,
              btc: -5.060411512794648,
              cad: -5.40052187419581,
              chf: -5.421417830781959,
              clp: -5.707946225429867,
              cny: -5.421417830781953,
              czk: -5.4214178307819605,
              dkk: -5.421417830782028,
              dot: -6.541008748543203,
              eos: -11.098571307131898,
              eth: -4.958085781216575,
              eur: -5.490142574617327,
              gbp: -5.421417830782104,
              gel: -5.421417830781924,
              hkd: -5.421417830782133,
              huf: -5.658855017791647,
              idr: -5.421417830782161,
              ils: -5.91554126097029,
              inr: -5.421417830782016,
              jpy: -5.421417830782073,
              krw: -5.42141783078201,
              kwd: -5.733299770034143,
              lkr: -5.692843075090003,
              ltc: -5.069490746578005,
              mmk: -5.691781741497179,
              mxn: -5.421417830781962,
              myr: -5.42141783078198,
              ngn: -5.4214178307821275,
              nok: -4.988654616318913,
              nzd: -5.421417830782306,
              php: -5.421417830781953,
              pkr: -5.421417830782028,
              pln: -5.4181649922933035,
              rub: -5.4214178307822,
              sar: -5.421417830781971,
              sek: -5.421417830782154,
              sgd: -5.4214178307822,
              thb: -5.337042337490074,
              try: -5.421417830782216,
              twd: -5.421417830782468,
              uah: -5.421417830781875,
              usd: -5.4214178307822225,
              vef: -5.421417830782066,
              vnd: -5.421417830782028,
              xag: -5.421417830782327,
              xau: -5.42141783078222,
              xdr: -5.6910245287439345,
              xlm: -5.209348184155498,
              xrp: -3.1392786211897725,
              yfi: -2.4534277009367202,
              zar: -5.421417830782539,
              bits: -5.060411512794652,
              link: -1.5971471972099769,
              sats: -5.060411512794654,
            },
            market_cap: "$31,317,173",
            market_cap_btc: "508.088792918429",
            total_volume: "$3,471,895",
            total_volume_btc: "56.2235917530834",
            sparkline: "https://www.coingecko.com/coins/26412/sparkline.svg",
            content: null,
          },
        },
      },
    ],
    nfts: [
      {
        id: "supercreators-by-iac",
        name: "SuperCreators by IAC",
        symbol: "SCIAC",
        thumb:
          "https://assets.coingecko.com/nft_contracts/images/994/standard/supercreators-by-iac.gif?1707287598",
        nft_contract_id: 994,
        native_currency_symbol: "eth",
        floor_price_in_native_currency: 0.85,
        floor_price_24h_percentage_change: 396.527617822621,
        data: {
          floor_price: "0.85 ETH",
          floor_price_in_usd_24h_percentage_change: "396.527617822621",
          h24_volume: "3.97 ETH",
          h24_average_sale_price: "0.44 ETH",
          sparkline: "https://www.coingecko.com/nft/994/sparkline.svg",
          content: null,
        },
      },
    ],
  };
  return (
    <div>
      {data.map((el) => {
        return (
          <>
            <span>{el.coins.item.data}</span>
          </>
        );
      })}
    </div>
  );
}
