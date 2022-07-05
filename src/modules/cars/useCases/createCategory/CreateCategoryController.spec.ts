import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe("Create Category Controller", async () => {

    it("teste", async() => {
        await request(app)
        .get("/cars/available")
        .expect(200)
    })
});

