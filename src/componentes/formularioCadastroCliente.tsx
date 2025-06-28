import React, { Component, ChangeEvent, FormEvent } from "react";

type Props = {
    tema: string;
    aoCadastrar: (cliente: { nome: string; nomeSocial: string; email: string }) => void;
};

type State = {
    nome: string;
    nomeSocial: string;
    email: string;
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: "",
            nomeSocial: "",
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    }

    handleSubmit(event: FormEvent) {
        event.preventDefault();
        this.props.aoCadastrar({
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            email: this.state.email
        });
        this.setState({ nome: "", nomeSocial: "", email: "" });
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>Cadastro de Cliente</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nome Social</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nomeSocial"
                            value={this.state.nomeSocial}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Cadastrar
                    </button>
                </form>
            </div>
        );
    }
}