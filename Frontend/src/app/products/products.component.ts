import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if(data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "PHIN SỮA ĐÁ",
        description: "CÀ PHÊ PHIN",
        img: "assets/4.png",
        price: 29
      },
      {
        id:2,
        title: "PHIN ĐEN ĐÁ",
        description: "CÀ PHÊ PHIN",
        img:"assets/5.png",
        price: 29
      },
      {
        id:3,
        title: "PHIN SỮA NÓNG",
        description: "CÀ PHÊ PHIN",
        img:"assets/6.png",
        price:29
      },
      {
        id:4,
        title: "PHIN ĐEN NÓNG",
        description: "CÀ PHÊ PHIN",
        img:"assets/7.png",
        price:29
      },
      {
        id:5,
        title: "AMERICANO",
        description: "CÀ PHÊ EXPRESSO",
        img: "assets/8.png",
        price:44
      },
      {
          id:6,
          title: "EXPRESSO",
          description: "CÀ PHÊ EXPRESSO",
          img: "assets/9.png",
          price:44 
      },
      {
        id:7,
        title: "CARAMEL MACCHIATO",
        description: "CÀ PHÊ EXPRESSO",
        img: "assets/10.png",
        price:59
      },
      {
        id:8,
        title: "MOCHA MACCHIATO",
        description: "CÀ PHÊ EXPRESSO",
        img: "assets/11.png",
        price:59
      },
      {
        id:9,
        title: "LATTE",
        description: "CÀ PHÊ EXPRESSO",
        img: "assets/12.png",
        price:54
      },
      {
        id:10,
        title: "CAPPUCINO",
        description: "CÀ PHÊ EXPRESSO",
        img: "assets/13.png",
        price:54
      },
      {
        id:11,
        title: "FREEZE TRÀ XANH",
        description: "FREEZE KHÔNG CÀ PHÊ",
        img: "assets/14.png",
        price:49
      },
      {
        id:12,
        title: "COOKIES & CREAM",
        description: "FREEZE KHÔNG CÀ PHÊ",
        img: "assets/15.png",
        price:49
      },
      {
        id:13,
        title: "FREEZE SÔ-CÔ-LA",
        description: "FREEZE KHÔNG CÀ PHÊ",
        img: "assets/16.png",
        price:49
      },
      {
        id:14,
        title: "CARAMEL PHIN FREEZE",
        description: "FREEZE CÀ PHÊ PHIN",
        img: "assets/17.png",
        price:49
      },
      {
        id:15,
        title: "CLASSIC PHIN FREEZE",
        description: "FREEZE CÀ PHÊ PHIN",
        img: "assets/18.png",
        price:49
      },
      {
        id:16,
        title: "CHẢ LỤA XÁ XÍU",
        description: "BÁNH MÌ",
        img: "assets/19.png",
        price:19
      },
      {
        id:17,
        title: "GÀ XÉ NƯỚC TƯƠNG",
        description: "BÁNH MÌ",
        img: "assets/20.png",
        price:19
      },
      {
        id:18,
        title: "THỊT NƯỚNG",
        description: "BÁNH MÌ",
        img: "assets/21.png",
        price:19
      },
    ]
  };

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

}
