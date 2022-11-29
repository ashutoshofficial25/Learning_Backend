const db = require("../../../model");
const { mockRequest, mockResponse } = require("../interceptor");
const productController = require("../../../controller/products.controller");
describe("Product controller", () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let testPayload = {
    name: "HRX",
    categoryId: 1,
    price: 18000,
  };

  test("It should test the create method with payload", async () => {
    const spy = jest.spyOn(db.product, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );

    req.body = testPayload;
    await productController.create(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(testPayload);
  });
});

test("basic", () => {
  let data = { name: "ashu" };
  data.gender = "male";

  expect(data.gender).toBe("male");
});

test("hello", () => {
  let a = 5;
  expect(a).toBe(5);
});
