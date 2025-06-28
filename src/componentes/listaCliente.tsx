import React, { Component } from "react";

type Cliente = {
    nome: string;
    nomeSocial: string;
    email: string;
};

type Props = {
    tema: string;
    clientes: Cliente[];
};

export default class ListaCliente extends Component<Props> {
    render() {
        return (
            <div className="container mt-4">
                <h2>Lista de Clientes</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clientes.map((cliente, idx) => (
                            <tr key={idx}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.nomeSocial}</td>
                                <td>{cliente.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.props.clientes.length === 0 && <p>Nenhum cliente cadastrado.</p>}
            </div>
        );
    }
}