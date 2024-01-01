const Order = require("../models/OrderGame");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const { orderItems, paymentMethod, totalPrice, user, isPaid, orderDate } =
      newOrder;
    console.log("newOrder", newOrder);
    try {
      const createOrder = await Order.create({
        orderItems,
        paymentMethod,
        totalPrice,
        user,
        isPaid,
        orderDate,
      });
      if (createOrder) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createOrder,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findOne({ user: id });
      if (order === null) {
        resolve({
          status: "OK",
          message: "The order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: order,
      });
    } catch (e) {
      console.log("e", e);
      reject(e);
    }
  });
};
const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find();
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: allOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createOrder,
  getDetailsOrder,
  getAllOrder,
};
