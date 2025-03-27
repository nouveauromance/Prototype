// classe pizza base
class PizzaBase {
    constructor(nome, preco, ingredientes) {
        this.nome = nome;
        this.preco = preco;
        this.ingredientes = ingredientes;
    }

// método clone
    clone() {
        return new PizzaBase(this.nome, this.preco, [...this.ingredientes]);
    }
}

// classe pizza 
class Pizza {
    constructor(pizzaBase) {
        this.nome = PizzaBase.nome;
        this.preco = PizzaBase.preco;
        this.ingredientes = [...pizzaBase.ingredientes];
        this.tamanho = 'Tradicional';
        this.borda = 'Tradicional'; 
        this.molho = 'Tomate'; 
    }

// método para mudar o tamanho
    setTamanho(tamanho) {
        this.tamanho = tamanho;
        if (tamanho === 'Brotinho') this.preco += 5.00;
        if (tamanho === 'Grande') this.preco += 10.00;
    }

// método para mudar a borda
    setBorda(borda) {
        this.borda = borda;
        if (borda === 'Sem borda') this.preco += 2.00;
        if (borda === 'Recheada com Queijo') this.preco += 7.00;
    }

// método para mudar o molho
    setMolho(molho) {
        this.molho = molho;
        if (molho === 'Temperado1' || molho === 'Temperado2') this.preco += 2.00;
    }

// método para exibir detalhes da pizza
    mostrarDetalhes() {
        console.log(`Pizza: ${this.nome} - ${this.tamanho} - ${this.borda} - ${this.molho}`);
        console.log(`Ingredientes: ${this.ingredientes.join(', ')}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// cardápio de pizzas
const cardapio = [
    new PizzaBase('Mussarela', 29.90, ['mussarela', 'presunto', 'tomate', 'orégano']),
    new PizzaBase('Marguerita', 31.49, ['mussarela', 'tomate', 'manjericão', 'azeite']),
    new PizzaBase('Calabresa', 32.49, ['calabresa', 'cebola', 'azeitonas', 'orégano']),
    new PizzaBase('Frango com Catupiry', 36.70, ['frango', 'catupiry', 'milho', 'azeitonas']),
    new PizzaBase('Quatro queijos', 40.00, ['mussarela', 'provolone', 'gorgonzola', 'parmesão'])
];

// função para exibir cardápio
function exibirCardapio() {
    console.log('Cardápio de Pizzas:');
    cardapio.forEach((pizzaBase, index) => {
        console.log(`${index + 1}. ${pizzaBase.nome} - R$ ${pizzaBase.preco.toFixed(2)}`);
    });
}

// função para escolher uma pizza e persornalizar ela
function fazerPedido() {
    exibirCardapio();

    const opcao = parseInt(prompt('Escolha o número que deseja:'));
    if (opcao < 0 || opcao > cardapio.length) {
        console.log('Opção inválida!');
        return;
    }

// clonando a pizza
    const pizzaEscolhida = cardapio[opcao].clone();
    const pizzaPersonalizada = new Pizza(pizzaEscolhida);

// pizza personalizada
    const tamanho = prompt('Qual tamanho deseja? (Tradicional, Brotinho, Grande)');
    pizzaPersonalizada.setTamanho(tamanho);

    const borda = prompt('Qual borda deseja? (Tradicional, Sem borda, Recheada com Queijo)');
    pizzaPersonalizada.setBorda(borda);

    const molho = prompt('Qual molho deseja? (Tomate, Temperado1, Temperado2)');
    pizzaPersonalizada.setMolho(molho);

// removendo ingredientes
    let continuarRemovendo = true;
    while (continuarRemovendo) {
        const ingrediente = prompt('Digite um ingrediente para remover, ou "não" para continuar:');
        if (ingrediente.toLowerCase() === 'não') {
            continuarRemovendo = false;
        } else {
            pizzaPersonalizada.removerIngrediente(removerIngrediente);
    }
}

// mostrando detalhes da pizza personalizada
    pizzaPersonalizada.mostrarDetalhes();
}

// fazer pedido
fazerPedido();

// classe pizza personalizada
class Pizza {
    constructor(pizzaBase) {
        this.nome = PizzaBase.nome;
        this.preco = PizzaBase.preco;
        this.precoBase = pizzaBase.preco
        this.ingredientes = [...pizzaBase.ingredientes];
        this.tamanho = 'Tradicional'; // valor padrão
        this.borda = 'Tradicional'; // valor padrão
        this.molho = 'Tomate'; // valor padrão
    }

// personalizando a pizza
    setTamanho(tamanho) {
        if (tamanho === 'Brotinho') {
            this.tamanho = tamanho;
            this.preco += 2.00;
        } else if (tamanho === 'Grande') {
            this.tamanho = tamanho;
            this.preco += 5.00;
        } else {
            this.tamanho = 'Tradicional';
        }
    }

    setBorda(borda) {
        if (borda === 'Sem borda') {
            this.borda = borda;
            this.preco += 2.00;
        } else if (borda === 'Recheada com Queijo') {
            this.borda = borda;
            this.preco += 4.00;
        } else {
            this.borda = 'Tradicional';
        }
    }

    setMolho(molho) {
        if (molho === 'Temperado1') {
            this.molho = molho;
            this.preco += 1.00;
        } else if (molho === 'Temperado2') {
            this.molho = molho;
            this.preco += 2.00;
        } else {
            this.molho = 'Tomate';
        }
    }

    removerIngredientes(ingredientes) {
        const index = this.ingredientes.indexOf(ingredientes);
        if (index > -1) {
            this.ingredientes.splice(index, 1);
        }
    }

// mostrar detalhes e valor total
    mostrarDetalhes() {
        console.log(`Pizza: ${this.nome}`);
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Borda: ${this.borda}`);
        console.log(`Molho: ${this.molho}`);
        console.log(`Ingredientes: ${this.ingredientes.join(', ')}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// classe PizzaBase para clonagem
class PizzaBase {
    constructor(nome, preco, ingredientes) {
        this.nome = nome;
        this.preco = preco;
        this.ingredientes = ingredientes;
    }

// clonagem
    clone() {
        return new PizzaBase(this.nome, this.preco, [...this.ingredientes]);
    }
}

// função para finalizar
function finalizarPedido(pizza) {
    console.log("\nPedido Finalizado:");
    pizza.mostrarDetalhes();
  }
  
  // criar novo pedido e finalizar
  const novoPedido = new Pizza(cardapio[1].clone());  
  novoPedido.setTamanho('Grande');
  novoPedido.setBorda('Recheada com Queijo');
  novoPedido.setMolho('Temperado2');
  novoPedido.removerIngrediente('manjericão');  
  
  // finalizando
  finalizarPedido(novoPedido);