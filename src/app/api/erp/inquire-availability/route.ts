import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const response = NextResponse.json(

        [
            {
                "itemId": "cde9661f-ecbd-437e-a5e5-66c08cf84de4",
                "article": {
                    "wholesalerArticleId": "BO_0986479187",
                    "manufacturerArticleId": "0 986 479 187",
                    "description": "Brake Disk",
                    "brand": {
                        "wholesalerBrandId": "WS_BO",
                        "name": "Bosch",
                        "genericBrandId": {
                            "value": "30",
                            "source": "TecDoc/DVSE"
                        }
                    }
                },
                "status": "ok",
                "alternatives": [
                    {
                        "wholesalerArticleId": "NK_203035",
                        "manufacturerArticleId": "203035",
                        "description": "Brake Disk",
                        "brand": {
                            "wholesalerBrandId": "WS_NK",
                            "name": "NK",
                            "genericBrandId": {
                                "value": "127",
                                "source": "TecDoc/DVSE"
                            }
                        }
                    }
                ],
                "availability": [
                    {
                        "deliveryMethod": {
                            "id": "10_10_2020_1",
                            "name": "Morning Delivery before 10 am.",
                            "netPrice": {
                                "value": 0.0,
                                "currency": "EUR",
                                "vat": 0.16
                            },
                            "date": "2020-10-10T10:00:00+02:00",
                            "calculationHint": "flatrate",
                            "stockLocation": {
                                "id": "0815",
                                "name": "Stuttgart"
                            }
                        },
                        "procurementMethod": {
                            "id": "NX_BO",
                            "name": "Night Express",
                            "netPrice": {
                                "value": 30.0,
                                "currency": "EUR",
                                "vat": 0.16
                            },
                            "calculationHint": "article"
                        },
                        "confirmedQuantity": {
                            "unitCount": 2,
                            "uom": {
                                "source": "Generic",
                                "description": "Pieces"
                            },
                            "quantityPerUoM": 2.0
                        }
                    }
                ]
            }
        ]

    );

    return response;
}