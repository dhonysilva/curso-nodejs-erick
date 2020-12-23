const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('Leia')
        const names = []

        for (pessoa of result.results) {
            names.push(pessoa)
        }

        console.log(`Names:`, names)
    } catch (error) {
        console.error(`error interno`, error)
    }
}

main()