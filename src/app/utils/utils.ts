import { HttpHeaders } from "@angular/common/http";

export const headers: any = () => {
    let token = localStorage.getItem("accessToken");
    let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return headers;
}