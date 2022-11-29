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

  let singleCategory = {
    id: 1,
    name: "mobiles",
  };

  let mockCategory = {
    name: "electronics",
  };

  it("should test AllCategories method", async () => {
    let spy = jest.spyOn(db.category, "findAll").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve(allCategory);
        })
    );

    await categoryController.getAllCategory(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allCategory);
  });

  it("should test AllCategories error for method", async () => {
    let spy = jest.spyOn(db.category, "findAll").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject({ message: "Sonething went wrong" });
        })
    );

    await categoryController.getAllCategory(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Sonething went wrong" });
  });

  // it("should test getCategoryByID error for method", async () => {
  //   let spy = jest.spyOn(db.category, "findOne").mockImplementation(
  //     () =>
  //       new Promise((resolve, reject) => {
  //         resolve(singleCategory);
  //       })
  //   );
  //   await categoryController.getAllCategory(req, res);

  //   expect(spy).toHaveBeenCalled();
  //   expect(res.status).toHaveBeenCalledWith(200);
  //   expect(res.json).toHaveBeenCalledWith(singleCategory);
  // });

  it("should test add new category", async () => {
    let spy = jest.spyOn(db.category, "create").mockImplementation(
      (mockCategory) =>
        new Promise((resolve, reject) => {
          resolve(mockCategory);
        })
    );

    req.body(mockCategory);
    await categoryController.addNewCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    // expect(res.json).toHaveBeenCalledWith(mockCategory);
  });

  let id = 1;
  let mockUpdateData = {
    name: "updated name",
  };

  // it("should test update category", async () => {
  //   let spy = jest.spyOn(db.category, "update").mockImplementation(
  //     (mockUpdateData, id) =>
  //       new Promise((resolve, reject) => {
  //         resolve(mockCategory);
  //       })
  //   );

  //   req.params(id);
  //   req.body(mockUpdateData);
  //   await categoryController.updateCategoryById(req, res);
  //   expect(spy).toHaveBeenCalled();
  //   expect(res.status).toHaveBeenCalledWith(200);
  //   // expect(res.json).toHaveBeenCalledWith(mockUpdateData);
  // });
});
