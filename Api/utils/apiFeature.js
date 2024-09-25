class ApiFeatures{
    constructor(query,queryStr){
        this.query = query; // query As User.find()
        this.queryStr = queryStr; // queryStr As keyWord = value
    }
    search(){
        const keyword = this.queryStr.keyword
        ? {
              $or: [
                  { name: { $regex: this.queryStr.keyword, $options: "i" } },
                  { brand: { $regex: this.queryStr.keyword, $options: "i" } },
                  { seller: { $regex: this.queryStr.keyword, $options: "i" } },
                  { performance: { $regex: this.queryStr.keyword, $options: "i" } },
                  { owner: { $regex: this.queryStr.keyword, $options: "i" } },
                  {model :  { $regex: this.queryStr.keyword, $options: "i" }},
              ]
          }
        : {};

    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this; // Return this class for chaining
}  

filter() {
    const queryCopy = { ...this.queryStr };

    // Removing unnecessary fields
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // Prepare filters for price range and exact matches
    const filters = {};

    // Handle price range
    if (queryCopy.price) {
        const priceRange = queryCopy.price.split(":");
        filters.price = {
            $gte: Number(priceRange[0]),
            $lte: Number(priceRange[1]),
        };
        delete queryCopy.price; // Remove price from the query copy
    }

     // Handle exact matches for other fields
     const stringFields = ["name","brand", "seller", "performance", "owner","model"];
     stringFields.forEach((field) => {
         if (queryCopy[field]) {
             filters[field] = queryCopy[field]; // Exact match
             delete queryCopy[field];
         }
     });

     const numericFields = ["serviving", "miLeg"];
     numericFields.forEach((field) => {
         if (queryCopy[field]) {
             filters[field] = Number(queryCopy[field]); // Convert to number
             delete queryCopy[field];
         }
     });

    // Handle exact matches for other fields
    // if (queryCopy.serviving) {
    //     filters.serviving = queryCopy.serviving; // Exact match
    //     delete queryCopy.serviving;
    // }

    // if (queryCopy.miLeg) {
    //     filters.miLeg = queryCopy.miLeg; // Exact match
    //     delete queryCopy.miLeg;
    // }

    // // if (queryCopy.age) {
    // //     filters.age = queryCopy.age; // Exact match
    // //     delete queryCopy.age;
    // // }

    // Apply filters to the query
    this.query = this.query.find({ ...filters });

    return this;
}

pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1; // Current page from query, defaults to 1
    const skip = resultPerPage * (currentPage - 1); // Skip for pagination

    this.query = this.query.limit(resultPerPage).skip(skip); // Apply limit and skip to the query
    return this; // Return this class for chaining
}


}
module.exports = ApiFeatures

// {
//     "_id": "66ef14ffa2ffe76d7085d0f0",
//     "Name": "maruti",
//     "Price": 200000,
//     "Brand": "rajBrand",
//     "Seller": "owner",
//     "Year": 2024,
//     "Performance": "very good",
//     "Owner": "FirstOwner",
//     "MiLeg": 12000,
//     "Serviving": 12,
//     "Photo": "uploads\\df28852877c150bb1deac6c7568bd45e",
//     "__v": 0
// }