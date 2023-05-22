import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const response = NextResponse.json(

        {
            "wholesalerOrderId" : "XYZ_330101",
            "orderLine" : [ {
              "itemId" : "211ef85a-346f-4ee4-a44f-09e0dc7801e9",
              "wholesalerArticleId" : "BO_0986479187",
              "status" : "accepted"
            }, {
              "itemId" : "bdc2c046-34d1-4102-b602-78791d0ce38e",
              "wholesalerArticleId" : "NK_203035",
              "comment" : "Order rejected. Article not on stock.",
              "status" : "rejected"
            } ],
            "_links" : {
              "self" : {
                "href" : "https://os3-catalog-api.bosch.com/XYZ_330101"
              }
            }
          }

    );

    return response;
}