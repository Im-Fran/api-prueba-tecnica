import { Hono } from 'hono'
import {getCharacter} from "./lib/rick-and-morty-api";
import { cors } from 'hono/cors'


const app = new Hono()
app.use('/*', cors({
  origin: ['https://prueba-tecnica.pages.dev', 'http://localhost:5173'],
  allowMethods: ['POST', 'GET', 'OPTIONS'],
}))

app.get('/:id', async (c) => {
  const id = c.req.param('id') // Obtiene el id de la solicitud.

  if(!id) {
    return c.json({
      error: 'missing.id',
      data: null,
    }, 400)
  }

  const character = await getCharacter(id);

  return c.json({ data: character })
})

export default app
