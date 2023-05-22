import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const response = NextResponse.json(

        [{
            "itemId": "1ee34b41-1830-49eb-a71e-e22ec1cdc4af",
            "additionalCosts": [{
                "value": 1.5,
                "currency": "EUR",
                "vat": 0.0,
                "description": "Additional Environmental Tax."
            }, {
                "value": 1.5,
                "currency": "EUR",
                "vat": 0.0,
                "description": "Additional Environmental Tax."
            }, {
                "value": 1.5,
                "currency": "EUR",
                "vat": 0.0,
                "description": "Additional Environmental Tax."
            }, {
                "value": 1.5,
                "currency": "EUR",
                "vat": 0.0,
                "description": "Additional Environmental Tax."
            }],
            "listPricePerPriceUnit": {
                "value": 81.99,
                "currency": "EUR",
                "vat": 0.16
            },
            "purchasePricePerPriceUnit": {
                "value": 109.99,
                "currency": "EUR",
                "vat": 0.16
            },
            "exchangePart": false
        }]

    );

    return response;
}