import { Handlers } from '$fresh/server.ts';

const sleep = (time = '0'): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, Number(time) * 1000);
  })
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url)
    const params = url.searchParams
    const time = params.get('time')
    const type = params.get('type')
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
    const json2 = {
      couponList: [],
      desc: "未找到交易信息，请重新扫码收款",
      mchNo: null,
      merchantId: null,
      orderInfo: null,
      orderNo: null,
      resultCode: -1,
      storeId: null
    }
    await sleep(time || '')
    return new Response(JSON.stringify({
      code: 1,
      data: type === '1' || !type ? json2 : json,
      http_code: 200,
      msg: ""
    }), {
      headers: { "Content-Type": "application/json" }
    })
  },
  async POST(req, ctx) {
    // if (req.body) {
    //   const body = await req.text();
    //   // console.log("Body:", JSON.parse(body));
    // }
    const url = new URL(req.url)
    const params = url.searchParams
    const time = params.get('time')
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
    await sleep(time || '')
    return new Response(JSON.stringify({
      code: 1,
      data: json,
      http_code: 200,
      msg: ""
    }), {
      headers: { "Content-Type": "application/json" }
    })
  }
}