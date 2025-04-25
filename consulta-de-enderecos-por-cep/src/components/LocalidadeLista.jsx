import { Card } from 'primereact/card'

const LocalidadeLista = ({ ceps }) => {
    return (
        ceps.map((ceps) => (
            <Card className='mt-3 text-center'>
                {ceps.cep}<br />
                {ceps.logradouro} <br />
                {ceps.bairro} <br />
                {ceps.localidade} - {ceps.uf} <br />
            </Card>
        ))
    )
}
export default LocalidadeLista