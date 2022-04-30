const RefrigerantesList = (props) => (

    <div>
        <h4>Listagem de Refrigerantes</h4>

        <button type="button" className="btn btn-success btn-sm" id="inserir" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th><th>Marca</th><th>Quantidade</th><th>Preço</th><th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {props.refrigerantes.length > 0 ? (props.refrigerantes.map((o, index) => (
                    <tr key={index}>
                        <td>{index}</td><td>{o.marca}</td><td>{o.quantidade}</td><td>{o.precoLata}</td>
                        <td>
                            <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm" id="editar">Editar</button>
                            <button onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm" id="excluir">Excluir</button>
                        </td>
                    </tr>
                ))) : (
                    <tr><td colSpan={3}>Nenhum Refrigerante.</td></tr>
                )}
            </tbody>
        </table>
    </div>
)

export default RefrigerantesList