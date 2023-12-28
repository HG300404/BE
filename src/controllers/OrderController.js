const OrderService = require("../services/OrderSevice");
const createOrder = async (req, res) => {
  try {
    const { paymentMethod, itemsPrice, totalPrice, user, isPaid, orderDate } =
      req.body;

    if (
      !paymentMethod ||
      !itemsPrice ||
      !totalPrice ||
      !user ||
      !isPaid ||
      !orderDate
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required1",
      });
    }

    const response = await OrderService.createOrder(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};

module.exports = {
  createOrder,
};
