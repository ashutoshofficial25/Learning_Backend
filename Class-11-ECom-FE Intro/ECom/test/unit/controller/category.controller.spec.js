const db = require("../../../model");
const { mockRequest, mockResponse } = require("../interceptor");
const categoryController = require("../../../controller/category.controller");
const { INET } = require("sequelize");

describe("Category controller api testing", () => {
  let req;
  let res;

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let allCategory = [
    {
      id: 1,
      name: "mobile",
    },
    {
      id: 2,
      name: "electronics",
    },
  ];

  let spy = jest.spyOn(db.category, "findAll").mockImplementation(
    () =>
      new Promise((resolve, reject) => {
        resolve(allCategory);
      })
  );

  it("should test AllCategories method", async () => {
    await categoryController.getAllCategory(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allCategory);
  });
});
