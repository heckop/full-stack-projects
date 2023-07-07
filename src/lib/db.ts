import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: "https://apn1-advanced-skink-34139.upstash.io",
  token: "AYVbASQgYTE0MWRmYjAtZWEzZC00MWM2LTlmYWQtOGUyMTdhYTFmNjJiODExYTYzMzA2M2JkNGYzZWFmOWE1Zjc3M2FkMDJlZjY="
})