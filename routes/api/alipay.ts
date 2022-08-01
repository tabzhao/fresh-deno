import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
  GET(req, ctx) {
    const json = {
      couponList: [],
      desc: "支付成功",
      mchNo: "1539651391",
      merchantId: 658,
      orderInfo: {
        buyId: null,
          cashFee: 0.01,
          couponFee: 0,
          openid: null,
          orderFee: 0.01,
          orderSource: 1,
          outTradNo: "face-a-1471-1659342820595",
          payTime: "2022-08-01 16:33:52",
          payTimestamp: 1659342832,
          settlementTotalFee: 0.01,
          subOpenId: null,
          totalFee: 0.01,
      },
      orderNo: "face-a-1471-1659342820595",
      resultCode: 1,
      storeId: 6285
    }
    return new Response(JSON.stringify(json), {
      headers: { "Content-Type": "application/json" }
    })
  },
  POST(req, ctx) {
    // if (req.body) {
    //   const body = await req.text();
    //   // console.log("Body:", JSON.parse(body));
    // }
    const json = {
      couponList: [],
      desc: "OK",
      mchNo: "1539651391",
      merchantId: 658,
      orderInfo: {
        buyId: "oEyNG0nzLN-4FetVWPu2KmM0qBYo",
        cashFee: 0.01,
        couponFee: 0,
        openid: "oEyNG0nzLN-4FetVWPu2KmM0qBYo",
        orderFee: 0.01,
        orderSource: 1,
        outTradNo: "face-a-1471-1659342820595",
        payTime: "2022-08-01 16:33:52",
        payTimestamp: null,
        settlementTotalFee: 0.01,
        subOpenId: "oXA8550VwEcDgwrYeF1xkNlq8FR8",
        totalFee: 0.01,
      },
      orderNo: "face-a-1471-1659342820595",
      resultCode: 1,
      storeId: 6285
    }
    return new Response(JSON.stringify(json), {
      headers: { "Content-Type": "application/json" }
    })
  }
}