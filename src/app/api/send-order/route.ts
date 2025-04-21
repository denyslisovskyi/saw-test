import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import qs from "qs";
import { serialize } from "php-serialize";
import { formatProductsForCRM } from "./utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email = "",
      comment = "",
      delivery = "",
      delivery_adress = "",
      payment = "",
      userAgent = "",
      utm_source = "",
      utm_medium = "",
      utm_term = "",
      utm_content = "",
      utm_campaign = "",
      gclid = "",
      wbraid = "",
      gbraid = "",
      fbp = "",
      fbc = "",
    } = body;

    const products_list = [
      {
        product_id: "1023",
        price: "2980",
        count: "1",
      },
    ];

    const order_id = Date.now().toString();

    const data = {
      key: process.env.CRM_API_KEY,
      order_id,
      country: "UA",
      office: "27",
      products: encodeURIComponent(
        serialize(formatProductsForCRM(products_list)),
      ),
      bayer_name: name,
      phone,
      email,
      comment,
      delivery,
      delivery_adress,
      payment,
      sender: encodeURIComponent(JSON.stringify({ userAgent })),
      utm_source,
      utm_medium,
      utm_term,
      utm_content,
      utm_campaign,
      gclid,
      wbraid,
      gbraid,
      fbp,
      fbc,
      additional_1: "",
      additional_2: "",
      additional_3: "",
      additional_4: "",
    };

    const response = await axios.post(
      process.env.CRM_API_URL!,
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error("CRM error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
