import { render, screen, cleanup } from "@testing-library/react"
import { test, expect, afterEach } from "vitest"
import App from "../App"

afterEach(() => {
  cleanup()
})

test("renderiza o componente Titulo", () => {
  render(<App />)

  const titulo = screen.getByText(/meu primeiro componente/i)
  expect(titulo).toBeTruthy()
})

test("renderiza o componente Paragrafo", () => {
  render(<App />)

  const texto = screen.getByText(/aprendendo react/i)
  expect(texto).toBeTruthy()
})