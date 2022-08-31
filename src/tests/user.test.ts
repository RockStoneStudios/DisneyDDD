import router from  '../User/infrastructure/Routes/userRouter';
import request from 'supertest';

describe('Routes',()=>{
    test('should response with a 200 status code',async ()=>{
     const response = await request(router).get('/').send();
     expect(response.statusCode).toBe(200);
    
    },30000)
})