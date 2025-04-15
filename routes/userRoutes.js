import express from "express";
import {
  addUser,
  update_user,
  resetPassword,
  signupUser,
  loginUser,
  fetchUserByToken,
  deleteUserByToken
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Signup:
 *       type: object
 *       required:
 *         - name
 *         - password 
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           description: User's email address
 *         password:
 *           type: password
 *           description: User's password
 *         contact_no:
 *           type: string
 *           description: User's contact no
 *         manager_id:
 *           type: string
 *           description: User's manager uuid
 *         organization_id:
 *           type: string
 *           description: User's organization uuid
 *         role:
 *           type: string
 *           description: User's role
 *         status:
 *           type: string
 *           description: User's status
 *         is_org_edit_allowed:
 *           type: boolean
 *           description: User's privillage
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the user was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the user was updated
 *       example:
 *         name: John Doe
 *         email: manirajan.social@gmail.com
 *         password: Test123$
 *         contact_no: 8978675645
 *         created_at: 2025-04-03T00:00:00.000Z
 * 
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Register new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Signup'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/signup", signupUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - password 
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: User's email address
 *         password:
 *           type: password
 *           description: User's password
 *       example:
 *         email: manirajan.social@gmail.com
 *         password: Test123$
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/login", loginUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     Fetch_user_by_token:
 *       type: object
 *       
 */

/**
 * @swagger
 * /api/users/user:
 *   post:
 *     summary: Fetch user details with access token
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: Custom header description
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fetch_user_by_token'
 *     responses:
 *       200:
 *         description: User fetch successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fetch_user_by_token'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/user", fetchUserByToken);


/**
 * @swagger
 * components:
 *   schemas:
 *     ResetPassword:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: User's email address
 *       
 */

/**
 * @swagger
 * /api/users/reset_password:
 *   post:
 *     summary: Reset Password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPassword'
 *     responses:
 *       200:
 *         description: Send link to reset password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResetPassword'
 *       400:
 *         description: Invalid email id
 *   
 */

router.post("/reset_password", resetPassword);

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           description: User's email address
 *         password:
 *           type: password
 *           description: User's password
 *         contact_no:
 *           type: string
 *           description: User's contact no
 *         manager_id:
 *           type: string
 *           description: User's manager uuid
 *         organization_id:
 *           type: string
 *           description: User's organization uuid
 *         role:
 *           type: string
 *           description: User's role
 *         status:
 *           type: string
 *           description: User's status
 *         is_org_edit_allowed:
 *           type: boolean
 *           description: User's privillage
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the user was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the user was updated
 *       example:
 *         name: John Doe
 *         email: manirajan.social@gmail.com
 *         password: Test123$
 *         contact_no: 8978675645
 *         created_at: 2025-04-03T00:00:00.000Z
 * 
 */

/**
 * @swagger
 * /api/users/update:
 *   post:
 *     summary: Update user
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: access_token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateUser'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/update", update_user);

/**
 * @swagger
 * components:
 *   schemas:
 *     userdelete:
 *       type: object
 *       
 */

/**
 * @swagger
 * /api/users/delete:
 *   post:
 *     summary: Fetch user details with access token
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: Custom header description
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userdelete'
 *     responses:
 *       200:
 *         description: User Deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/userdelete'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/delete", deleteUserByToken);
export default router;