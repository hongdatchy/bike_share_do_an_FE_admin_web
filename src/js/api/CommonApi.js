import { URL_Common } from "../ultils/Constant";
import { fetchGet, fetchPost } from "./Fetch";
import { URL_Admin } from './../ultils/Constant';
import { getDataLocalStorage } from './../ultils/Common';

export async function apiLogin(loginForm) {
    return await fetchPost(URL_Common + "/loginAd", loginForm)
}

export async function apiCheckToken(token) {
    return await fetchGet(URL_Common + "/token/" + token)
}

export async function apiGetAllStation() {
    return await fetchGet(URL_Common + "/station")
}

export async function apiGetAllUser() {
    return await fetchGet(URL_Admin + "/user", getDataLocalStorage("token"))
}

export async function apiGetAllContract() {
    return await fetchGet(URL_Admin + "/contract", getDataLocalStorage("token"))
}