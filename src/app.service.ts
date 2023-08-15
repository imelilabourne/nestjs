import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  product = [
      {
        "code": 3175005768,
        "desc": "5pcs Round/Square Thick Mini Cake Board - Silver 6\"/5.5\"/4.5\"/4\" (RM Boxes)",
        "variationId": 57120624759,
        "variant": "Square 5s (Silver),4 inch",
        "unitPrice": "40",
        "category": "CAKE BOARD"
      },
      {
        "code": 3262294211,
        "desc": "Pastry Box 4½” x 9″ x 2″ Pre-Formed RM Boxes 20pcs/pack",
        "variationId": 84238688906,
        "variant": "Natural",
        "unitPrice": "295",
        "category": "PASTRY BOX"
      },
      {
        "code": 3246466043,
        "desc": "120pcs ¾oz & 1oz Foil Cupcake Liner [RM Boxes]",
        "variationId": 180716150689,
        "variant": "Premium Orange,1oz",
        "unitPrice": "135",
        "category": "CUPCAKE LINER"
      },
      {
        "code": 3001404307,
        "desc": "50pcs High Quality U Cups 12oz/16oz/22oz 95mm Plastic Cups Milktea Cups Coffee Cups",
        "variationId": 73642928698,
        "variant": "22oz (700ml),Cups Only",
        "unitPrice": "205",
        "category": "PLASTIC CUP"
      },
      {
        "code": 3001404307,
        "desc": "50pcs High Quality U Cups 12oz/16oz/22oz 95mm Plastic Cups Milktea Cups Coffee Cups",
        "variationId": 192481786594,
        "variant": "22oz (700ml),Cup + Strawless Lid",
        "unitPrice": "295",
        "category": "PLASTIC CUP"
      }
    ]

  getProducts(): any[] {
    return this.product
  }

  addProduct(product): any[] {
    return [...this.product, product]
  }

  deleteProduct(id): any {
    return {
      message: "Successfully Deleted",
      list: this.product.filter(prod => prod.variationId != id)
    }
  }
}
