import File from "../model/file.js";

export const uploadImage = async (req, res) => {
  console.log("hi");
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const result = await File.create(fileObj);
    console.log(result);
    res.status(200).json({ path: `http://localhost:5000/file/${result._id}`,name:"hi" });
    return;
  } catch (error) {
    console.log(error);
    res.json({ message: "during upload" });
    return;
  }
};
export const downloadImage = async (req, res) => {
    try{ 
      console.log("download request has been made!");
       const temp= await File.findById(req.params.fileId);
        res.download(temp.path,temp.name);
    }
    catch(error)
    {
        console.log(error);
        return res.json({error:"all"});
    }
};
