
//@desc Get all contacts
//@route GET /api/contacts
//access Public
const getContacts = (req, res) => {
  res.status(200).json({message: "Get all contacts"});
};


//@desc Create new contacts
//@route POST /api/contacts
//access Public
const createContacts =(req, res) => {
  res.status(201).json({message: "Create a new contact"});
};


//@desc Create new contacts
//@route POST /api/contacts/:id
//access Public
const getContact =(req, res) => {
  res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//access Public
const updateContact =(req, res) =>{
  res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//access Public
const deleteContact =(req, res) => {
  res.status(200).json({message: `Delete contact for ${req.params.id}`});
};


module.exports = {getContacts, createContacts, getContact, updateContact, deleteContact};