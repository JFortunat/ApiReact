import React from 'react'
const RefrigerantesForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setRefri({ ...props.refri, [name]: value })
    }

    return (
        <form id="formulario">
            <body id="corpoForm">


                <div class="form-group" id='id'>
                    <label>ID</label>
                    <input class="form-control" type="text" name="_id" readOnly
                        value={props.refri._id} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <label>Marca</label>
                    <input class="form-control" type="text" name="marca"
                        value={props.refri.marca} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <label>Quantidade</label>
                    <input class="form-control" type="text" name="quantidade"
                        value={props.refri.quantidade} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <label>Preço</label>
                    <input class="form-control" type="text" name="precoLata"
                        value={props.refri.precoLata} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <button type="button" onClick={props.salvar}
                        className="btn btn-success btn-sm">Salvar</button>
                    <button type="button" onClick={props.cancelar}
                        className="btn btn-danger btn-sm">Cancelar</button>
                </div>
            </body>
        </form>
    )
}

export default RefrigerantesForm