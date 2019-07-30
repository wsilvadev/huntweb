import React, {Component} from 'react';
import api from "../../../services/api"
import "./style.css"

export default class Main extends Component{
   state = {
       products:[],
       productInfo : {},
       page : 1,
   }
    
   prevPage = () =>{
  
    const {page, productInfo} = this.state;
  
    if(page == 1) return;

    const pageNumber = page -1;

    this.loadProducts(pageNumber);
   }

   nextPage = () =>{
    const {page, productInfo } = this.state;

    if(page == productInfo.pages) return;
    
    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
   }

    componentDidMount(){   
        this.loadProducts();
    }

    loadProducts = async ( page = 1)=>{

        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({products: docs, productInfo, page});
    }

    render(){
        const { products } = this.state;
        
        return (
            <div className="product-list">
                 {products.map(product => (
              <article key={product._id}>
                    
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="">Acessar</a>
              </article>
              
                ))}

                <div className="actions">
                    <button onClick={this.prevPage}>Prev</button>
                    <button  onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    }
}