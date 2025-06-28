import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";

type Cliente = {
    nome: string;
    nomeSocial: string;
    email: string;
};

type State = {
    tela: string;
    clientes: Cliente[];
};

export default class Roteador extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tela: "Clientes",
            clientes: []
        };
        this.selecionarView = this.selecionarView.bind(this);
        this.adicionarCliente = this.adicionarCliente.bind(this);
    }

    selecionarView(novaTela: string, evento: React.MouseEvent) {
        evento.preventDefault();
        this.setState({ tela: novaTela });
    }

    adicionarCliente(cliente: Cliente) {
        this.setState((prevState) => ({
            clientes: [...prevState.clientes, cliente],
            tela: "Clientes"
        }));
    }

    render() {
        const barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="#e3f2fd"
                botoes={["Clientes", "Cadastros"]}
            />
        );
        if (this.state.tela === "Clientes") {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" clientes={this.state.clientes} />
                </>
            );
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" aoCadastrar={this.adicionarCliente} />
                </>
            );
        }
    }
}