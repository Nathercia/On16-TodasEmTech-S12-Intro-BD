const Serie = require('../src/models/series.js')

describe("Teste do modelo Series", () => {
  const serie = new Serie({
    id: 1,
    name: "Stranger Things",
    genre: "Ficção",
    synopsis: "Série de ficção científica sobre 5 crianças",
    liked: true,
    seasons: []
  });
  it("Deve chamar o schema e retornar uma nova serie", () => {
    expect(serie.name).toBe("Stranger Things")
  });
  it("Deve salvar no banco de dados a nova serie", () => {
    serie.save().then((dados) => {
      expect(dados.titulo).toBe("Stranguer Things")
    })
  })
})