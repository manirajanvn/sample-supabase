import express from "express";
import {
  addOrganization,
  fetchOrganizationByid,
  updateOrganization
} from "../controllers/organizationController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Organization's name
 *         description:
 *           type: string
 *           description: Organization's description
 *         website:
 *           type: password
 *           description: Organization's website
 *         street_name:
 *           type: password
 *           description: Organization's street name
 *         company_size:
 *           type: string
 *           description: Organization's company size
 *         industry:
 *           type: string
 *           description: Organization's industry
 *         contact_name:
 *           type: string
 *           description: Organization's contact name
 *         contact_no:
 *           type: string
 *           description: Organization's contact_no
 *         email_id:
 *           type: string
 *           description: Organization's email id
 *         timezone:
 *           type: string
 *           description: Organization's email id
 *         domain_url:
 *           type: boolean
 *           description: Organization's domain url
 *         house_no:
 *           type: string
 *           description: Organization
 *         postal_code:
 *           type: boolean
 *           description: Organization's postal code
 *         city:
 *           type: string
 *           description: Organization city
 *         country:
 *           type: string
 *           description: Organization country
 *         gst_no:
 *           type: boolean
 *           description: Organization's gst_no
 *         logo_url:
 *           type: string
 *           description: Organization logo url
 *         color_code:
 *           type: string
 *           description: Organization color code
 *         status:
 *           type: string
 *           description: Organization's status
 *         sub_domain_url:
 *           type: string
 *           format: date-time
 *           description: Organization sub_domain_url
 *       example:
 *         name: ABC Technologies
 *         description: We are the experts in  processing technologies, systems and components for the global automotive industry, providing faster development.
 *         website: https://abc.com/
 *         street_name: Street name
 *         company_size: 100 - 500
 *         industry: automotive
 *         contact_name: WIlliam
 *         contact_no: +98 76238723827433
 *         email_id: sample_email@test.com
 *         domain_url: abc.domain.com
 *         house_no: 3123
 *         timezone: 
 *         postal_code: 855665
 *         city: France
 *         country: Paries
 *         gst_no: XX123456789
 *         logo_url: https://www.avalara.com/content/dam/assets/logos/corporate_home_2_u15612.svg
 *         color_code: Blue
 *         status: active
 *         sub_domain_url: abc.domain.com
 * 
 */

/**
 * @swagger
 * /api/organization/add:
 *   post:
 *     summary: Register new organization
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: Custom header description
 *     tags: [Organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organization'
 *     responses:
 *       201:
 *         description: organization created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/add", addOrganization);

/**
 * @swagger
 * components:
 *   schemas:
 *     OrganizationFetch:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: uuid
 *           description: Organization's id
 *       example:
 *         id: 0cf0efa9-2aee-49ff-b33d-6092ed4e87a5
 *         
 * 
 */

/**
 * @swagger
 * /api/organization/get_by_id:
 *   post:
 *     summary: Register new organization
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: access_token
 *     tags: [Organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrganizationFetch'
 *     responses:
 *       200:
 *         description: organization fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganizationFetch'
 *       400:
 *         description: Invalid input
 */
router.post("/get_by_id", fetchOrganizationByid);

/**
 * @swagger
 * /api/organization/update:
 *   post:
 *     summary: Update organization details
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: Custom header description
 *     tags: [Organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organization'
 *     responses:
 *       201:
 *         description: organization created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       400:
 *         description: Invalid input
 *   
 */
router.post("/update", updateOrganization);

export default router;