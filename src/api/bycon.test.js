const { buildQueryParameters } = require("./bycon")

test("build a query", () => {
  expect(
    buildQueryParameters({
      datasetIds: ["arraymap", "dipg"],
      assemblyId: "GRCh38",
      includeDatasetResonses: "ALL",
      requestType: "variantCNVrequest",
      referenceName: "9",
      variantType: "DEL",
      start: "20000001",
      end: "21967753-23000000",
      referenceBases: "N",
      alternateBases: "G",
      bioontology: ["NCIT:C102872", "NCIT:C102873"],
      materialtype: "EFO:0009656",
      freeFilters: "geolat:49,geolong:8.69,geodist:2000000"
    })
  ).toBe(
    "datasetIds=arraymap&datasetIds=dipg&assemblyId=GRCh38&includeDatasetResonses=ALL&requestType=variantCNVrequest&referenceName=9&variantType=DEL&referenceBases=N&alternateBases=G&start=20000000&end=21967752&end=23000000&filters=NCIT%3AC102872&filters=NCIT%3AC102873&filters=EFO%3A0009656&filters=geolat%3A49&filters=geolong%3A8.69&filters=geodist%3A2000000"
  )
})
