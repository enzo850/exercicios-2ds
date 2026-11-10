const request = require("supertest")

let app

beforeEach(() => {
    jest.resetModules()
    app = require("../index")
})

test("GET /colheitas deve retornar os 3 registros", async () => {
    const res = await request(app).get("/colheitas")

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(3)
})

test("GET /colheitas deve filtrar por situacao", async () => {
    const res = await request(app).get("/colheitas?situacao=colhida")

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
})

test("GET /colheitas deve filtrar por quilosMin", async () => {
    const res = await request(app).get("/colheitas?quilosMin=12")

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
})

test("GET /colheitas/2 deve encontrar Bruno", async () => {
    const res = await request(app).get("/colheitas/2")

    expect(res.status).toBe(200)
    expect(res.body.voluntario).toBe("Bruno")
})

test("GET /colheitas/99 deve retornar 404", async () => {
    const res = await request(app).get("/colheitas/99")

    expect(res.status).toBe(404)
    expect(res.body.erro).toBe("Colheita nao encontrado")
})

test("POST /colheitas deve cadastrar uma colheita", async () => {
    const res = await request(app)
        .post("/colheitas")
        .send({
            voluntario: "Diego",
            cultivo: "Alface",
            quilos: 5
        })

    expect(res.status).toBe(201)
    expect(res.body.mensagem).toBe("Registro de colheita criado")
})

test("POST /colheitas deve recusar voluntario vazio", async () => {
    const res = await request(app)
        .post("/colheitas")
        .send({
            cultivo: "Alface",
            quilos: 5
        })

    expect(res.status).toBe(400)
    expect(res.body.erro).toBe("O campo voluntario e obrigatorio")
})

test("POST /colheitas deve recusar cultivo vazio", async () => {
    const res = await request(app)
        .post("/colheitas")
        .send({
            voluntario: "Diego",
            quilos: 5
        })

    expect(res.status).toBe(400)
    expect(res.body.erro).toBe("O campo cultivo e obrigatorio")
})

test("POST /colheitas deve recusar quilos que nao seja numero", async () => {
    const res = await request(app)
        .post("/colheitas")
        .send({
            voluntario: "Diego",
            cultivo: "Alface",
            quilos: "cinco"
        })

    expect(res.status).toBe(400)
    expect(res.body.erro).toBe("O campo quilos deve ser um numero")
})

test("POST /colheitas deve recusar quilos menor ou igual a zero", async () => {
    const res = await request(app)
        .post("/colheitas")
        .send({
            voluntario: "Diego",
            cultivo: "Alface",
            quilos: 0
        })

    expect(res.status).toBe(400)
    expect(res.body.erro).toBe("O campo quilos deve ser maior que zero")
})

test("GET /qualquer-coisa deve retornar 404", async () => {
    const res = await request(app).get("/qualquer-coisa")

    expect(res.status).toBe(404)
    expect(res.body.erro).toBe("Rota nao encontrada")
})