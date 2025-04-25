import { Chart } from 'primereact/chart'

const Dashboard = ({ ceps, contador }) => {

    const contaUFs = (listaDeCeps) => {
        const contagem = {}
        listaDeCeps.map(cep => {
            const uf = cep.uf
            contagem[uf] = contagem[uf] === undefined ? 1 : contagem[uf] + 1 })
        return contagem
    }

    const ufsPresentes = contaUFs(ceps)
    const percentuais = Object.values(ufsPresentes).map(valor => (parseFloat((valor / contador * 100).toFixed(2))))

    const opcoes = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (valor) => `${valor.parsed}%`
                }
            }
        }
    }

    return (
        <div>
            <Chart type="pie" data={{
                labels: Object.keys(ufsPresentes),
                datasets: [
                    {
                        data: percentuais,
                        
                        backgroundColor:
                            [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#FF5733',
                                '#DAF7A6',
                                '#900C3F',
                                '#581845',
                                '#1F77B4',
                                '#FF00FF',
                                '#00FF00',
                                '#800080',
                                '#FF1493',
                                '#FFD700',
                                '#7CFC00',
                                '#FF6347',
                                '#8A2BE2',
                                '#A52A2A',
                                '#5F9EA0',
                                '#FF4500',
                                '#2E8B57',
                                '#D2691E',
                                '#CD5C5C',
                                '#20B2AA',
                                '#FF8C00',
                                '#9932CC',
                                '#8B0000',
                                '#FFD700'
                            ],
                        hoverBackgroundColor:
                            [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#FF5733',
                                '#DAF7A6',
                                '#900C3F',
                                '#581845',
                                '#1F77B4',
                                '#FF00FF',
                                '#00FF00',
                                '#800080',
                                '#FF1493',
                                '#FFD700',
                                '#7CFC00',
                                '#FF6347',
                                '#8A2BE2',
                                '#A52A2A',
                                '#5F9EA0',
                                '#FF4500',
                                '#2E8B57',
                                '#D2691E',
                                '#CD5C5C',
                                '#20B2AA',
                                '#FF8C00',
                                '#9932CC',
                                '#8B0000',
                                '#FFD700'
                            ]
                    }
                ]
            }}
            options={opcoes}/>
        </div>
    )
}

export default Dashboard