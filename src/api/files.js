/* eslint-disable prettier/prettier */
import requester from "./requester";

export default {
 uploadImages: (params) => requester.post("files/url-upload", params),
};
