import { expect, test } from "vitest"
import { fetchHatenaBlogData } from "./data"

test("fetchHatenaBlogData", async () => {
    const data = await fetchHatenaBlogData()
    expect(data).toBeDefined()
})