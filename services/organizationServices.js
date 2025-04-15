import supabase from "../config/supabaseClient.js";


export const addOrganizationService = async (orgData, token) => {
  const { data: { user } } = await supabase.auth.getUser(token);
  if (user == null || user == undefined){
    return null;
  }
  orgData.creator_id = user.id;
  const { data, error } = await supabase
    .from("organization")
    .insert([orgData])
    .select("id,name,description,website,street_name,created_at,updated_at,company_size,industry,creator_id,contact_name,contact_no,email_id,timezone,domain_url,house_no,postal_code,city,country,gst_no,logo_url,color_code,status,sub_domain_url");

  if (error) throw new Error(error.message);
  return data;
}; 

export const fetchOrganizationByidService = async (orgData, token) => {
  const { data: { user } } = await supabase.auth.getUser(token);
  if (user == null || user == undefined){
    return null;
  }
  const id =user.id;
 var { data, error } = await supabase
    .from("user")
    .select("organization_id, role, is_org_edit_allowed")
    .eq("id", id)
    .single();
  if (error) return null;
  if ( data.organization_id != orgData.id) return null;
  var { data, error } = await supabase
    .from("organization")
    .select("id,name,description,website,street_name,created_at,updated_at,company_size,industry,creator_id,contact_name,contact_no,email_id,timezone,domain_url,house_no,postal_code,city,country,gst_no,logo_url,color_code,status,sub_domain_url")
    .eq("id", orgData.id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}; 


export const updateOrganizationService = async (orgData, token) => {
  const { data: { user } } = await supabase.auth.getUser(token);
  if (user == null || user == undefined){
    return null;
  }
  console.log(user);
  console.log(token);
  const id =user.id;
 var { data, error } = await supabase
    .from("user")
    .select("organization_id, role, is_org_edit_allowed")
    .eq("id", id)
    .single();
  console.log(data);
  if (error) return null;
  if ( data.organization_id != orgData.id) return null;
  if ( data.is_org_edit_allowed == false) return null;
  const org_id = orgData.id;
  Reflect.deleteProperty(orgData, 'id');
  console.log(orgData);
  var { data, error } = await supabase
    .from("organization")
    .update(orgData)
    .eq("id", org_id)
  if (error) throw new Error(error.message);
  return true;
}; 
