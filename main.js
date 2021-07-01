const app = Vue.createApp({
    data() {
        return {
            product:'Shoes'
            ,image:'./assets/images/socks_green.jpg'
            ,inStock:true
            ,inventory: 100
            ,details:['50% cotton','30% wool','20% polyester']
            ,variants:[
                {id: 2234, color: 'green',image:'./assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue',image:'./assets/images/socks_blue.jpg'}
            ]
            ,cart: 0
            
            ,allsizes:[
                {id: 1234, size: 'S'},
                {id: 1234, size: 'M'},
                {id: 1234, size: 'L'}
            ]
            ,onSale: 9
        }
    }
    ,methods:{
        addToCart() {
            this.cart+=1
        }
        ,updateImage(variantImage){
            this.image = variantImage
        }

    }
})
