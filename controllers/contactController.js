
//@desc Get all contacts
//@route GET /api/contacts
//access Public
const getContacts = async (req, res) => {
  res.status(200).json({message: "Get all contacts"});
};


//@desc Create new contacts
//@route POST /api/contacts
//access Public
const createContacts = async (req, res, next) => {
  try {
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body || {};
    if (!name || !email || !phone) {
      const error = new Error("All fields are mandatory!");
      error.status = 400;
      return next(error);
    }
    res.status(201).json({ message: "Create a new contact" });
  } catch (error) {
    next(error);
  }
};

//@desc Create new contacts
//@route POST /api/contacts/:id
//access Public
const getContact = async (req, res) => {
  res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//access Public
const updateContact = async (req, res) =>{
  res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//access Public
const deleteContact = async (req, res) => {
  res.status(200).json({message: `Delete contact for ${req.params.id}`});
};


module.exports = {getContacts, createContacts, getContact, updateContact, deleteContact};