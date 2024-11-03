import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, "Success", "Health Check Successful"));
})  

export { healthCheck }  