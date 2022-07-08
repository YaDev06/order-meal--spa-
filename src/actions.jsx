import Api_Url from "./config";

const getById = async (id) => {
  const result = await fetch(Api_Url + "lookup.php?i=" + id);
    return result.json()
};

const getAllMeal = async () => {
  const result = await fetch(Api_Url + "categories.php");
  return result.json();    
};

const getByCategory = async(name) =>{
    const result = await fetch(Api_Url+'filter.php?c='+name);
    return result.json();
};

export {getById,getAllMeal,getByCategory}