import { 
  addOrganizationService,
  fetchOrganizationByidService,
  updateOrganizationService
} from "../services/organizationServices.js";

export const addOrganization = async (req, res) => {
  try {
    const access_token = req.headers.access_token;
    if (access_token == null || access_token.length < 1){
      res.status(400).json("Please provide valid authendication data");
    }
    const orgData = req.body;
    const newOrg = await addOrganizationService(orgData, access_token);
    if (newOrg == null){
      res.status(400).json("Error occured while add new Organization");
    }else{
      res.status(201).json(newOrg);
    }
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const fetchOrganizationByid = async (req, res) => {
  try {
    const access_token = req.headers.access_token;
    if (access_token == null || access_token.length < 1){
      res.status(400).json("Please provide valid authendication data");
    }
    const orgData = req.body;
    const newOrg = await fetchOrganizationByidService(orgData, access_token);
    if (newOrg == null){
      res.status(400).json("Please provide valid input");
    }else{
      res.status(201).json(newOrg);
    }
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


export const updateOrganization = async (req, res) => {
  try {
    const access_token = req.headers.access_token;
    if (access_token == null || access_token.length < 1){
      res.status(400).json("Please provide valid authendication data");
    }
    const orgData = req.body;
    const newOrg = await updateOrganizationService(orgData, access_token);
    if (newOrg == null){
      res.status(400).json("Please provide valid input");
    }else{
      res.status(200).json("Organization data update successfully");
    }
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};