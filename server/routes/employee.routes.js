const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { getCardRequests, getEmployeeData, getLoanRequests, getUserInfoForEmployee } = require("../controllers/EmployeeController");
const { AcceptRequestEmployee, DeclineRequestEmployee, ContactSuccessEmail } = require("../helpers/Functions");

// Route -> /api/employee/

// Solicitar los datos del empleado
router.route("/get-data").get([AuthMiddleware], getEmployeeData);
router.route("/get-user-data").post(getUserInfoForEmployee);

router.route("/get-cards-requests").get(getCardRequests);
router.route("/get-loans-requests").get(getLoanRequests);

router.route('/test-emails-ernesto').get(async (req, res, next) => {
  try {
    AcceptRequestEmployee('EL DATO QUE LE TENGAS QUE PASAR', 'EMAIL@EMAIL.com', next)
    DeclineRequestEmployee('EL DATO QUE LE TENGAS QUE PASAR', 'EMAIL@EMAIL.com', next)
    ContactSuccessEmail('EL DATO QUE LE TENGAS QUE PASAR', 'EMAIL@EMAIL.com', next)
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
})

module.exports = router;
