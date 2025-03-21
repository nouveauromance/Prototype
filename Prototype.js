//classe izza representa um tipo de pizza padrão
class Pizza{
    constructor(sabor, preco) {
        this.sabor = sabor;
        this.Pizza = preco;
    }

    //metod clone para Copiar a pizza padrão

    clone(){
        return new Pizza(this.sabor, this.preco);
    }
}
//classe pedidoPizza representa um pedido de Pizza:
class  pedidoPizza{
    constructor(cliente, pizzas){
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calculaTotal(){
        let total = 0;
        this.pizzas.forEach(this.pizzas -> {
            total += pizza.preco       
        });
        return total;
    }

    fazerPedido(pedido, sabores){
        const pizzas= [];
        sabores.forEach(sabor => {
            pizzas.push(this.cardapio[sabor].clone());
        }else{
            console.log('Desculpe, ${this.nome} não tem a Pizza de ${sabor}.');
        });

        if(pizzas.length > 0 ){
            const pedido = new pedidoPizza(this.cliente, pizzas);
            console.log('Pedido recebido do Cliente: ${cliente}:');
            pedido.pizzas.forEach(pizzas =>{
                console.log('${pizza.sabor} \t ${pizza.preco.toFixed(2)}');
            });
            console.log('Total do pedido: R${pedido.calculaTotal().toFixed(2)}');
        }
    }
}

//exemplo de uso na Pizzaria:
const minhaPizzaria = new Pizzaria("Minha Pizzaria")

//Criando o cardapio:
minhaPizzaria.addPizza("Calabresa", 35.00);
minhaPizzaria.addPizza("4 Queijos", 45.00);
minhaPizzaria.addPizza("Portuguesa", 38.00);
minhaPizzaria.addPizza("Pepperoni", 52.00);


//Fazendo os pedidos:
minhaPizzaria.fazerPedido("João", ["Calabresa", 4])