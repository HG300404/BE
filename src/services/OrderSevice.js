const Order = require("../models/OrderGame");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const { orderItems, paymentMethod, totalPrice, user, isPaid, paidAt, orderDate } =
      newOrder;
    console.log("newOrder", newOrder);
    try {
      const createOrder = await Order.create({
        orderItems,
        paymentMethod,
        totalPrice,
        user,
        isPaid,
        paidAt,
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

module.exports = {
  createOrder,
};